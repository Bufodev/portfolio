export function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function VercelIcon() {
  return (
    <svg
      className="skill-icon"
      viewBox="0 0 512 512"
      width="16"
      aria-hidden="true"
    >
      <path d="M256,48,496,464H16Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="instagram-gradient" x1="0" y1="24" x2="24" y2="0">
          <stop stopColor="#FEDA75" />
          <stop offset=".25" stopColor="#FA7E1E" />
          <stop offset=".5" stopColor="#D62976" />
          <stop offset=".75" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.25" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1" fill="#fff" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#229ED9"
      aria-hidden="true"
    >
      <path d="M21.4 3.1 2.7 10.3c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.8 5.5c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-15c.4-1.2-.5-1.8-1.7-1.6Zm-12.5 9.7 10.8-6.8c.5-.3 1-.1.6.3l-8.8 8-.3 3.2-1.5-4.7Z" />
    </svg>
  );
}
