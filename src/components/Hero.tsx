import type { SiteContent } from "../content";

export function Hero({
  content,
  typedRole,
}: {
  content: SiteContent;
  typedRole: string;
}) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>{content.badge}</span>
        </div>
        <div className="hero-text">
          <p className="hero-greeting">{content.greeting}</p>
          <h1 className="hero-name">Ivan</h1>
          <h2 className="hero-title">
            {content.build}
            <span className="typed-role">{typedRole}</span>
            <span className="typed-cursor">|</span>
          </h2>
          <p
            className="hero-description"
            dangerouslySetInnerHTML={{ __html: content.heroDescription }}
          />
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <span className="btn-text">{content.heroButtons[0]}</span>
          </a>
          <a href="#contact" className="btn btn-contact">
            <span className="btn-text">{content.heroButtons[1]}</span>
          </a>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
