const JSON_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
};

const MAX_REQUEST_BYTES = 12_000;
const MAX_NAME_LENGTH = 100;
const MAX_TELEGRAM_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 3_000;

function jsonResponse(status, body) {
    return new Response(JSON.stringify(body), {
        status,
        headers: JSON_HEADERS
    });
}

function normalizeText(value, maxLength) {
    if (typeof value !== 'string') return '';
    return value.replace(/\r\n?/g, '\n').trim().slice(0, maxLength);
}

function isWithinLimit(value, maxLength) {
    return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maxLength;
}

export default async function sendContact(request) {
    if (request.method !== 'POST') {
        return jsonResponse(405, { ok: false, error: 'Method not allowed.' });
    }

    const contentType = request.headers.get('content-type') || '';
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (!contentType.includes('application/json') || contentLength > MAX_REQUEST_BYTES) {
        return jsonResponse(400, { ok: false, error: 'Invalid request.' });
    }

    let payload;
    try {
        payload = await request.json();
    } catch {
        return jsonResponse(400, { ok: false, error: 'Invalid request.' });
    }

    const { name, telegram, message, company } = payload || {};

    // A hidden field catches unsophisticated automated form submissions.
    if (typeof company === 'string' && company.trim()) {
        return jsonResponse(200, { ok: true });
    }

    if (
        !isWithinLimit(name, MAX_NAME_LENGTH) ||
        !isWithinLimit(telegram, MAX_TELEGRAM_LENGTH) ||
        !isWithinLimit(message, MAX_MESSAGE_LENGTH)
    ) {
        return jsonResponse(400, { ok: false, error: 'Please complete the form correctly.' });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) {
        console.error('Telegram contact form is missing required environment variables.');
        return jsonResponse(500, { ok: false, error: 'The contact form is temporarily unavailable.' });
    }

    const notification = [
        'New portfolio enquiry',
        '',
        `Name: ${normalizeText(name, MAX_NAME_LENGTH)}`,
        `Telegram: ${normalizeText(telegram, MAX_TELEGRAM_LENGTH)}`,
        '',
        'Message:',
        normalizeText(message, MAX_MESSAGE_LENGTH),
        '',
        `Received: ${new Date().toISOString()}`
    ].join('\n');

    try {
        const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: notification,
                disable_web_page_preview: true
            })
        });

        if (!telegramResponse.ok) {
            console.error(`Telegram sendMessage failed with status ${telegramResponse.status}.`);
            return jsonResponse(502, { ok: false, error: 'Unable to deliver your message.' });
        }
    } catch (error) {
        console.error('Telegram sendMessage request failed:', error instanceof Error ? error.message : 'Unknown error');
        return jsonResponse(502, { ok: false, error: 'Unable to deliver your message.' });
    }

    return jsonResponse(201, { ok: true });
}
