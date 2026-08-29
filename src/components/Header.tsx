import type { MouseEvent } from "react";
import type { Locale, SiteContent } from "../content";
import { labels, routes } from "../content";

const navTargets = [
  "home",
  "about",
  "projects",
  "services",
  "contact",
];
const localeOrder: Record<Locale, Locale[]> = {
  eng: ["eng", "ua", "rus"],
  ua: ["ua", "eng", "rus"],
  rus: ["rus", "eng", "ua"],
};

type HeaderProps = {
  activeSection: string;
  content: SiteContent;
  languageOpen: boolean;
  locale: Locale;
  menuOpen: boolean;
  onAnchorClick: () => void;
  onLanguageChange: (
    event: MouseEvent<HTMLAnchorElement>,
    locale: Locale,
  ) => void;
  onToggleLanguage: () => void;
  onToggleMenu: () => void;
  languageRef: React.RefObject<HTMLDivElement | null>;
};

export function Header({
  activeSection,
  content,
  languageOpen,
  locale,
  menuOpen,
  onAnchorClick,
  onLanguageChange,
  onToggleLanguage,
  onToggleMenu,
  languageRef,
}: HeaderProps) {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home" className="logo-text" onClick={onAnchorClick}>
            Iv<span className="gradient-text">an</span>
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
          {content.nav.map((name, index) => {
            const target = navTargets[index];
            return (
              <li key={target}>
                <a
                  href={`#${target}`}
                  className={`nav-link ${activeSection === target ? "active" : ""} ${index === 4 ? "nav-contact-btn" : ""}`}
                  onClick={onAnchorClick}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav-actions">
          <div
            className={`language-switcher ${languageOpen ? "open" : ""}`}
            ref={languageRef}
          >
            <button
              className="language-trigger"
              type="button"
              aria-label={content.ui.language}
              aria-haspopup="true"
              aria-expanded={languageOpen}
              onClick={onToggleLanguage}
            >
              <span>{labels[locale]}</span>
              <svg aria-hidden="true" viewBox="0 0 12 8" width="12" height="8">
                <path
                  d="m1 1 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="language-menu"
              role="menu"
              aria-label={content.ui.language}
            >
              {localeOrder[locale].map((item) => (
                <a
                  key={item}
                  className="language-option"
                  href={routes[item]}
                  role="menuitem"
                  aria-current={item === locale || undefined}
                  onClick={(event) => onLanguageChange(event, item)}
                >
                  {labels[item]}
                </a>
              ))}
            </div>
          </div>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? content.ui.closeMenu : content.ui.openMenu}
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
