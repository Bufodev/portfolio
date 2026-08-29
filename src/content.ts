export type Locale = "eng" | "ua" | "rus";

export type SiteContent = {
  documentTitle: string;
  description: string;
  nav: string[];
  badge: string;
  greeting: string;
  build: string;
  heroDescription: string;
  heroButtons: [string, string];
  sectionTitles: [string, string, string, string, string];
  aboutSubtitle: string;
  about: string;
  country: string;
  skillHeaders: [string, string, string, string];
  skillNames: string[];
  projectTags: string[];
  projectDescriptions: string[];
  timelineDates: [string, string, string];
  timelineTitles: [string, string, string];
  timelineSubtitles: [string, string, string];
  timelineItems: string[];
  serviceBadges: string[];
  serviceTitles: string[];
  serviceDescriptions: string[];
  serviceItems: string[];
  contactTitle: string;
  contactIntro: string;
  formTitle: string;
  formIntro: string;
  formLabels: [string, string, string, string];
  formPlaceholders: [string, string, string];
  send: string;
  footer: string;
  roles: string[];
  messages: [string, string, string, string];
  ui: {
    language: string;
    openMenu: string;
    closeMenu: string;
    unsupportedVideo: string;
  };
};

const english: SiteContent = {
  documentTitle: "Ivan - Digital Solutions Architect",
  description:
    "Portfolio of Ivan — Full-stack developer crafting high-performance digital solutions and premium web experiences.",
  nav: ["HOME", "ABOUT", "WORK", "OFFER", "GET IN TOUCH"],
  badge: "Fullstack developer",
  greeting: "Hello, World! I'm",
  build: "I build ",
  heroDescription:
    "Full Stack Developer helping businesses grow through strategic <strong>Branding</strong>, high-conversion <strong>Landing Pages</strong>, and scalable <strong>Web Systems</strong>.",
  heroButtons: ["View Projects →", "Contact"],
  sectionTitles: [
    "About Me",
    "Technical Skills & Capabilities",
    "Featured Work",
    "Professional Journey",
    "What I Offer",
  ],
  aboutSubtitle: "A glimpse into who I am and what I do.",
  about:
    "I’m Ivan — a web developer focused on turning messy ideas into polished, high-performance digital products. My specialty is building clean, conversion-driven interfaces and landing pages that actually bring in leads, not just pretty pictures.",
  country: "Ukraine",
  skillHeaders: ["CORE SKILLS", "FRONTEND", "BACKEND", "TOOLS & PLATFORMS"],
  skillNames: [
    "Full-Stack Web Development",
    "Landing Page Development",
    "Workflow Automation",
    "System Design & Architecture",
    "API Integration",
    "Responsive Web Design",
    "Web Animations and Interactive UI",
    "Authentication & Authorization",
    "Database Design",
    "REST API Development",
  ],
  projectTags: [
    "E-commerce",
    "Brand Experience",
    "Legal Services",
    "Business Support",
    "Landing Page",
    "Education",
    "Lead Gen",
    "Trust Design",
    "Event Page",
    "Gaming",
  ],
  projectDescriptions: [
    "An e-commerce storefront for curated home, care, and gifting products, built around a calm, premium shopping experience.",
    "A legal-services website for business and private clients in Kyiv, covering consultations, contracts, litigation, and ongoing support.",
    "A sleek, high-conversion landing page for a 6-month full-stack development course, featuring a clean design and interactive roadmap visualization.",
    "A dark-themed, trust-driven landing page for mathematics tutoring. Designed to highlight teacher credibility and convert visitors into students seamlessly.",
    "A vibrant, immersive landing page for a 72-hour game jam. Built with dynamic gradients, striking typography, and clear event CTAs to maximize participation.",
  ],
  timelineDates: ["PRESENT", "COMPETITIONS", "~4 YEARS AGO"],
  timelineTitles: [
    "Freelance Web Developer",
    "Hackathons & Technical Challenges",
    "Self-Taught Foundations",
  ],
  timelineSubtitles: [
    "Active Practice",
    "Practical Mastery",
    "The Starting Point",
  ],
  timelineItems: [
    "Delivering production-ready web applications and high-converting landing pages for client projects.",
    "Building full-stack solutions with a strong focus on clean architecture, performance, and user experience.",
    "Developing a deep specialization in modern JavaScript frameworks, API integrations, and scalable deployment workflows.",
    "Secured top placements in multiple regional and online hackathons by delivering innovative, functional prototypes under tight deadlines.",
    "Proven ability to architect rapid solutions and adapt to unfamiliar tech stacks in high-pressure competitive environments.",
    "Developed strong problem-solving skills by tackling real-world product challenges beyond basic coding exercises.",
    "Built a solid grip on core programming languages, algorithms, and the fundamentals of software architecture through independent study.",
    "Developed a rigorous mindset for debugging, optimization, and writing maintainable, clean code from the very first projects.",
    "Transitioned from basic scripts to complex full-stack applications, laying a deep technical foundation for long-term growth.",
  ],
  serviceBadges: [
    "CUSTOM & FAST",
    "HIGH CONVERSION",
    "UNIQUE",
    "SMART",
    "BEAUTIFUL",
  ],
  serviceTitles: [
    "Web Development",
    "Landing Pages",
    "Brand Strategy",
    "AI Automation",
    "Premium UI/UX",
  ],
  serviceDescriptions: [
    "I build fast, custom websites from scratch. No templates, just clean code that works perfectly and helps your business grow.",
    "Eye-catching, one-page websites designed to turn your visitors into customers quickly and effectively.",
    "I help your brand stand out. Together, we’ll create a unique digital identity that connects with your audience.",
    "I use AI to automate your daily tasks. This saves you time, reduces costs, and makes your work much easier.",
    "I design beautiful, easy-to-use interfaces. My focus is on creating smooth experiences that your users will love.",
  ],
  serviceItems: [
    "Custom Web Apps",
    "SaaS Platforms",
    "API Engineering",
    "Sales Pages",
    "Lead Generation",
    "Product Launch",
    "Logo & Identity",
    "Brand Guidelines",
    "Market Positioning",
    "AI Agents",
    "Task Automation",
    "Data Processing",
    "3D Web Interfaces",
    "Clean Layouts",
    "User Experience",
  ],
  contactTitle: 'Let’s <span class="gradient-text">Connect</span>',
  contactIntro:
    "Have a project in mind, a question, or just want to say hi? I’d love to hear from you.",
  formTitle: "Let’s Connect",
  formIntro: "Thank you for reaching out. I’ll get back to you soon.",
  formLabels: ["Name", "Telegram username", "Message", "Company"],
  formPlaceholders: ["Your Name", "@yourname", "What’s on your mind?"],
  send: "Send Message",
  footer: "© 2026 Ivan. All Rights Reserved.",
  roles: [
    "Strategic Branding",
    "Premium Landing Pages",
    "Complex Web Systems",
    "Full Stack Web Apps",
    "Scalable APIs",
    "AI-Powered Products",
  ],
  messages: [
    "Please complete all fields before sending.",
    "Sending…",
    "Thank you — your message has been sent.",
    "Unable to send your message right now. Please try again later.",
  ],
  ui: {
    language: "Choose site language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    unsupportedVideo: "Your browser does not support the video tag.",
  },
};

const ukrainian: SiteContent = {
  documentTitle: "Іван — Архітектор цифрових рішень",
  description:
    "Портфоліо Івана — фулстек-розробника, який створює швидкі цифрові рішення та вебдосвід преміум-рівня.",
  nav: [
    "ГОЛОВНА",
    "ПРО МЕНЕ",
    "РОБОТИ",
    "ПОСЛУГИ",
    "НАПИСАТИ",
  ],
  badge: "Фулстек-розробник",
  greeting: "Привіт, світ! Я",
  build: "Створюю ",
  heroDescription:
    "Фулстек-розробник, який допомагає бізнесам зростати завдяки стратегічному <strong>брендингу</strong>, конверсійним <strong>лендінгам</strong> і масштабованим <strong>вебсистемам</strong>.",
  heroButtons: ["Переглянути роботи →", "Зв’язатися"],
  sectionTitles: [
    "Про мене",
    "Технічні навички та компетенції",
    "Вибрані роботи",
    "Професійний шлях",
    "Що я пропоную",
  ],
  aboutSubtitle: "Коротко про мене та мою роботу.",
  about:
    "Я Іван — веброзробник, який перетворює нечіткі ідеї на вивірені, продуктивні цифрові продукти. Моя спеціалізація — чисті інтерфейси та лендінги, орієнтовані на конверсію й реальні заявки, а не лише на гарну картинку.",
  country: "Україна",
  skillHeaders: [
    "ОСНОВНІ НАВИЧКИ",
    "ФРОНТЕНД",
    "БЕКЕНД",
    "ІНСТРУМЕНТИ ТА ПЛАТФОРМИ",
  ],
  skillNames: [
    "Фулстек веброзробка",
    "Розробка лендінгів",
    "Автоматизація процесів",
    "Проєктування систем та архітектура",
    "Інтеграція API",
    "Адаптивний вебдизайн",
    "Вебанімації та інтерактивні інтерфейси",
    "Автентифікація та авторизація",
    "Проєктування баз даних",
    "Розробка REST API",
  ],
  projectTags: [
    "Інтернет-магазин",
    "Брендовий досвід",
    "Юридичні послуги",
    "Підтримка бізнесу",
    "Лендінг",
    "Освіта",
    "Збір заявок",
    "Дизайн, що викликає довіру",
    "Сторінка події",
    "Геймінг",
  ],
  projectDescriptions: [
    "Інтернет-магазин добірних товарів для дому, догляду та подарунків, побудований навколо спокійного преміального досвіду покупок.",
    "Сайт юридичних послуг для бізнесу та приватних клієнтів у Києві: консультації, договори, судове представництво й комплексний супровід.",
    "Стильний конверсійний лендінг для шестимісячного курсу з фулстек-розробки — з чистим дизайном та інтерактивною візуалізацією дорожньої карти.",
    "Темний лендінг для викладача математики, побудований на довірі. Він підкреслює експертність викладача та м’яко веде відвідувачів до запису на заняття.",
    "Яскравий атмосферний лендінг для 72-годинного геймджему. Динамічні градієнти, виразна типографіка та чіткі заклики до дії допомагають залучити учасників.",
  ],
  timelineDates: ["ЗАРАЗ", "ЗМАГАННЯ", "≈4 РОКИ ТОМУ"],
  timelineTitles: [
    "Фриланс-розробник",
    "Хакатони та технічні виклики",
    "Самостійна підготовка",
  ],
  timelineSubtitles: [
    "Активна практика",
    "Практична майстерність",
    "Відправна точка",
  ],
  timelineItems: [
    "Створюю готові до запуску вебзастосунки та конверсійні лендінги для клієнтських проєктів.",
    "Розробляю фулстек-рішення з фокусом на чистій архітектурі, продуктивності та досвіді користувача.",
    "Поглиблюю спеціалізацію в сучасних JavaScript-фреймворках, API-інтеграціях і масштабованих процесах розгортання.",
    "Здобував призові місця на регіональних і онлайн-хакатонах, створюючи інноваційні робочі прототипи в стислі терміни.",
    "Умію швидко проєктувати рішення та адаптуватися до незнайомих технологічних стеків у конкурентному середовищі.",
    "Розвинув сильні навички розв’язання задач, працюючи над реальними продуктовими викликами поза межами базових навчальних вправ.",
    "Самостійно опанував ключові мови програмування, алгоритми та основи архітектури програмного забезпечення.",
    "Із перших проєктів сформував системний підхід до налагодження, оптимізації та написання чистого підтримуваного коду.",
    "Пройшов шлях від базових скриптів до складних фулстек-застосунків, заклавши міцне технічне підґрунтя для подальшого розвитку.",
  ],
  serviceBadges: [
    "ІНДИВІДУАЛЬНО ТА ШВИДКО",
    "ВИСОКА КОНВЕРСІЯ",
    "УНІКАЛЬНО",
    "РОЗУМНО",
    "ВИШУКАНО",
  ],
  serviceTitles: [
    "Веброзробка",
    "Лендінги",
    "Бренд-стратегія",
    "AI-автоматизація",
    "Преміальний UI/UX",
  ],
  serviceDescriptions: [
    "Створюю швидкі індивідуальні сайти з нуля. Без шаблонів — лише чистий код, який бездоганно працює та допомагає бізнесу зростати.",
    "Помітні односторінкові сайти, спроєктовані так, щоб швидко й ефективно перетворювати відвідувачів на клієнтів.",
    "Допомагаю брендам бути помітними. Разом ми створимо унікальну цифрову айдентику, що резонує з вашою аудиторією.",
    "Використовую AI для автоматизації щоденних задач: це економить час, знижує витрати та спрощує робочі процеси.",
    "Проєктую красиві та зрозумілі інтерфейси. Мій фокус — плавний досвід, яким вашим користувачам захочеться користуватися.",
  ],
  serviceItems: [
    "Індивідуальні вебзастосунки",
    "SaaS-платформи",
    "Розробка API",
    "Сторінки продажу",
    "Генерація заявок",
    "Запуск продукту",
    "Логотип та айдентика",
    "Гайдлайни бренду",
    "Позиціонування на ринку",
    "AI-агенти",
    "Автоматизація задач",
    "Обробка даних",
    "3D вебінтерфейси",
    "Чисті макети",
    "Користувацький досвід",
  ],
  contactTitle: 'Давайте <span class="gradient-text">познайомимось</span>',
  contactIntro:
    "Маєте ідею, запитання або просто хочете привітатися? Буду радий почути від вас.",
  formTitle: "Давайте познайомимось",
  formIntro: "Дякую за звернення. Відповім вам найближчим часом.",
  formLabels: ["Ім’я", "Нік у Telegram", "Повідомлення", "Компанія"],
  formPlaceholders: ["Ваше ім’я", "@yourname", "Що у вас на думці?"],
  send: "Надіслати повідомлення",
  footer: "© 2026 Іван. Усі права захищені.",
  roles: [
    "Стратегічний брендинг",
    "Преміальні лендінги",
    "Складні вебсистеми",
    "Фулстек вебзастосунки",
    "Масштабовані API",
    "Продукти на базі AI",
  ],
  messages: [
    "Будь ласка, заповніть усі поля перед надсиланням.",
    "Надсилаємо…",
    "Дякую — ваше повідомлення надіслано.",
    "Не вдалося надіслати повідомлення. Спробуйте ще раз трохи пізніше.",
  ],
  ui: {
    language: "Обрати мову сайту",
    openMenu: "Відкрити меню навігації",
    closeMenu: "Закрити меню навігації",
    unsupportedVideo: "Ваш браузер не підтримує відтворення відео.",
  },
};

const russian: SiteContent = {
  ...ukrainian,
  documentTitle: "Иван — архитектор цифровых решений",
  description:
    "Портфолио Ивана — фулстек-разработчика, создающего быстрые цифровые решения и веб-опыт премиального уровня.",
  nav: ["ГЛАВНАЯ", "ОБО МНЕ", "РАБОТЫ", "УСЛУГИ", "НАПИСАТЬ"],
  badge: "Фулстек-разработчик",
  greeting: "Привет, мир! Я",
  build: "Создаю ",
  heroDescription:
    "Фулстек-разработчик, который помогает бизнесу расти благодаря стратегическому <strong>брендингу</strong>, конверсионным <strong>лендингам</strong> и масштабируемым <strong>веб-системам</strong>.",
  heroButtons: ["Смотреть работы →", "Связаться"],
  sectionTitles: [
    "Обо мне",
    "Технические навыки и компетенции",
    "Избранные работы",
    "Профессиональный путь",
    "Что я предлагаю",
  ],
  aboutSubtitle: "Немного обо мне и о том, чем я занимаюсь.",
  about:
    "Я Иван — веб-разработчик, который превращает неясные идеи в продуманные, производительные цифровые продукты. Моя специализация — чистые интерфейсы и лендинги, ориентированные на конверсию и реальные заявки, а не только на красивую картинку.",
  country: "Украина",
  skillHeaders: [
    "КЛЮЧЕВЫЕ НАВЫКИ",
    "ФРОНТЕНД",
    "БЕКЕНД",
    "ИНСТРУМЕНТЫ И ПЛАТФОРМЫ",
  ],
  skillNames: [
    "Фулстек веб-разработка",
    "Разработка лендингов",
    "Автоматизация процессов",
    "Проектирование систем и архитектура",
    "Интеграция API",
    "Адаптивный веб-дизайн",
    "Веб-анимации и интерактивные интерфейсы",
    "Аутентификация и авторизация",
    "Проектирование баз данных",
    "Разработка REST API",
  ],
  projectTags: [
    "Интернет-магазин",
    "Брендовый опыт",
    "Юридические услуги",
    "Поддержка бизнеса",
    "Лендинг",
    "Образование",
    "Сбор заявок",
    "Дизайн, вызывающий доверие",
    "Страница события",
    "Гейминг",
  ],
  projectDescriptions: [
    "Интернет-магазин отобранных товаров для дома, ухода и подарков, построенный вокруг спокойного премиального опыта покупок.",
    "Сайт юридических услуг для бизнеса и частных клиентов в Киеве: консультации, договоры, представительство в суде и комплексное сопровождение.",
    "Стильный конверсионный лендинг для шестимесячного курса по фулстек-разработке — с чистым дизайном и интерактивной визуализацией дорожной карты.",
    "Тёмный лендинг для преподавателя математики, построенный на доверии. Он подчёркивает экспертность преподавателя и мягко ведёт посетителей к записи на занятия.",
    "Яркий атмосферный лендинг для 72-часового геймджема. Динамичные градиенты, выразительная типографика и понятные призывы к действию помогают привлечь участников.",
  ],
  timelineDates: ["СЕЙЧАС", "СОРЕВНОВАНИЯ", "≈4 ГОДА НАЗАД"],
  timelineTitles: [
    "Фриланс веб-разработчик",
    "Хакатоны и технические вызовы",
    "Самостоятельная подготовка",
  ],
  timelineSubtitles: [
    "Активная практика",
    "Практическое мастерство",
    "Точка старта",
  ],
  timelineItems: [
    "Создаю готовые к запуску веб-приложения и конверсионные лендинги для клиентских проектов.",
    "Разрабатываю фулстек-решения с фокусом на чистой архитектуре, производительности и пользовательском опыте.",
    "Углубляю специализацию в современных JavaScript-фреймворках, API-интеграциях и масштабируемых процессах развёртывания.",
    "Занимал призовые места на региональных и онлайн-хакатонах, создавая инновационные рабочие прототипы в сжатые сроки.",
    "Умею быстро проектировать решения и адаптироваться к незнакомым технологическим стекам в конкурентной среде.",
    "Развил сильные навыки решения задач, работая над реальными продуктовыми вызовами за пределами базовых учебных упражнений.",
    "Самостоятельно освоил ключевые языки программирования, алгоритмы и основы архитектуры программного обеспечения.",
    "С первых проектов сформировал системный подход к отладке, оптимизации и написанию чистого поддерживаемого кода.",
    "Прошёл путь от базовых скриптов до сложных фулстек-приложений, заложив прочный технический фундамент для дальнейшего роста.",
  ],
  serviceBadges: [
    "ИНДИВИДУАЛЬНО И БЫСТРО",
    "ВЫСОКАЯ КОНВЕРСИЯ",
    "УНИКАЛЬНО",
    "УМНО",
    "ВЫРАЗИТЕЛЬНО",
  ],
  serviceTitles: [
    "Веб-разработка",
    "Лендинги",
    "Бренд-стратегия",
    "AI-автоматизация",
    "Премиальный UI/UX",
  ],
  serviceDescriptions: [
    "Создаю быстрые индивидуальные сайты с нуля. Без шаблонов — только чистый код, который работает безупречно и помогает бизнесу расти.",
    "Выразительные одностраничные сайты, спроектированные так, чтобы быстро и эффективно превращать посетителей в клиентов.",
    "Помогаю брендам выделяться. Вместе мы создадим уникальную цифровую айдентику, которая найдёт отклик у вашей аудитории.",
    "Использую AI для автоматизации ежедневных задач: это экономит время, снижает расходы и упрощает рабочие процессы.",
    "Проектирую красивые и понятные интерфейсы. Мой фокус — плавный опыт, которым вашим пользователям захочется пользоваться.",
  ],
  serviceItems: [
    "Индивидуальные веб-приложения",
    "SaaS-платформы",
    "Разработка API",
    "Страницы продаж",
    "Генерация заявок",
    "Запуск продукта",
    "Логотип и айдентика",
    "Гайдлайны бренда",
    "Позиционирование на рынке",
    "AI-агенты",
    "Автоматизация задач",
    "Обработка данных",
    "3D веб-интерфейсы",
    "Чистые макеты",
    "Пользовательский опыт",
  ],
  contactTitle: 'Давайте <span class="gradient-text">познакомимся</span>',
  contactIntro:
    "Есть идея, вопрос или просто хотите поздороваться? Буду рад услышать вас.",
  formTitle: "Давайте познакомимся",
  formIntro: "Спасибо за обращение. Я отвечу вам в ближайшее время.",
  formLabels: ["Имя", "Ник в Telegram", "Сообщение", "Компания"],
  formPlaceholders: ["Ваше имя", "@yourname", "Что у вас на уме?"],
  send: "Отправить сообщение",
  footer: "© 2026 Иван. Все права защищены.",
  roles: [
    "Стратегический брендинг",
    "Премиальные лендинги",
    "Сложные веб-системы",
    "Фулстек веб-приложения",
    "Масштабируемые API",
    "Продукты на базе AI",
  ],
  messages: [
    "Пожалуйста, заполните все поля перед отправкой.",
    "Отправляем…",
    "Спасибо — ваше сообщение отправлено.",
    "Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз чуть позже.",
  ],
  ui: {
    language: "Выбрать язык сайта",
    openMenu: "Открыть меню навигации",
    closeMenu: "Закрыть меню навигации",
    unsupportedVideo: "Ваш браузер не поддерживает воспроизведение видео.",
  },
};

export const content: Record<Locale, SiteContent> = {
  eng: english,
  ua: ukrainian,
  rus: russian,
};
export const labels: Record<Locale, string> = {
  eng: "ENG",
  ua: "UA",
  rus: "RUS",
};
export const routes: Record<Locale, string> = {
  eng: "/",
  ua: "/ua",
  rus: "/rus",
};
