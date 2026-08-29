import type { FormEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  ContactSection,
  ProjectsSection,
  ServicesSection,
} from "./components/WorkSections";
import { content, type Locale, routes } from "./content";
import premiumVibesUrl from "../premium-vibes.js?url";

const sectionIds = [
  "home",
  "about",
  "projects",
  "services",
  "contact",
];

function localeFromPath(): Locale {
  if (window.location.pathname.startsWith("/ua")) return "ua";
  if (window.location.pathname.startsWith("/rus")) return "rus";
  return "eng";
}

function useTypedRole(roles: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(roles[0]);
      return;
    }
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;
    const tick = () => {
      const role = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      setText(role.slice(0, charIndex));
      let delay = deleting ? 50 : 90;
      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = 1800;
      }
      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      }
      timer = window.setTimeout(tick, delay);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [roles]);
  return text;
}

function useBackground() {
  useEffect(() => {
    if (
      document.getElementById("three-script") ||
      document.getElementById("premium-vibes-script")
    )
      return;
    const three = document.createElement("script");
    three.id = "three-script";
    three.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    three.onload = () => {
      const background = document.createElement("script");
      background.id = "premium-vibes-script";
      background.src = premiumVibesUrl;
      document.body.appendChild(background);
    };
    document.head.appendChild(three);
  }, []);
}

function useCustomCursor() {
  useEffect(() => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const outer = document.querySelector<HTMLElement>(".cursor-outer");
    const inner = document.querySelector<HTMLElement>(".cursor-inner");
    if (!outer || !inner) return;
    const move = (event: globalThis.MouseEvent) => {
      inner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      outer.animate(
        { transform: `translate(${event.clientX}px, ${event.clientY}px)` },
        { duration: 500, fill: "forwards" },
      );
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
}

export function App() {
  const [locale, setLocale] = useState<Locale>(localeFromPath);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });
  const [sending, setSending] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const page = content[locale];
  const typedRole = useTypedRole(page.roles);

  useBackground();
  useCustomCursor();

  const navigate = (nextLocale: Locale, replace = false) => {
    localStorage.setItem("ivan-language", nextLocale);
    window.history[replace ? "replaceState" : "pushState"](
      {},
      "",
      routes[nextLocale],
    );
    setLocale(nextLocale);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("ivan-language") as Locale | null;
    const browser = (navigator.languages?.[0] || navigator.language || "en")
      .slice(0, 2)
      .toLowerCase();
    const preferred = saved || browser;
    if (
      window.location.pathname === "/" &&
      ["ua", "uk", "rus", "ru"].includes(preferred)
    )
      navigate(preferred === "ua" || preferred === "uk" ? "ua" : "rus", true);
    const onPopState = () => setLocale(localeFromPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "eng" ? "en" : locale === "ua" ? "uk" : "ru";
    document.title = page.documentTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", page.description);
  }, [locale, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    const elements = document.querySelectorAll(
      ".section-title, .reveal, .glass-card, .timeline-item, .service-card, .project-card-v2, .about-layout-new, .skills",
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          window.scrollY >= section.offsetTop - 150 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 150
        )
          setActiveSection(id);
      });
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    const closeOutside = (event: globalThis.MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node))
        setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const handleLocaleLink = (
    event: MouseEvent<HTMLAnchorElement>,
    nextLocale: Locale,
  ) => {
    event.preventDefault();
    navigate(nextLocale);
  };
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    );
    if (
      !String(data.name || "").trim() ||
      !String(data.telegram || "").trim() ||
      !String(data.message || "").trim()
    ) {
      setFormStatus({ text: page.messages[0], type: "error" });
      return;
    }
    setSending(true);
    setFormStatus({ text: "", type: "" });
    try {
      const response = await fetch("/.netlify/functions/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed request");
      form.reset();
      setFormStatus({ text: page.messages[2], type: "success" });
    } catch {
      setFormStatus({ text: page.messages[3], type: "error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="noise-overlay" />
      <div id="nebula-container" />
      <div className="cursor-outer" />
      <div className="cursor-inner" />
      <Header
        activeSection={activeSection}
        content={page}
        languageOpen={languageOpen}
        locale={locale}
        menuOpen={menuOpen}
        onAnchorClick={() => setMenuOpen(false)}
        onLanguageChange={handleLocaleLink}
        onToggleLanguage={() => setLanguageOpen((value) => !value)}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        languageRef={languageRef}
      />
      <Hero content={page} typedRole={typedRole} />
      <AboutSection content={page} />
      <ProjectsSection content={page} />
      <ServicesSection content={page} />
      <ContactSection
        content={page}
        sending={sending}
        status={formStatus}
        onSubmit={submitForm}
      />
      <footer className="footer">
        <div className="container">
          <p>{page.footer}</p>
        </div>
      </footer>
    </>
  );
}
