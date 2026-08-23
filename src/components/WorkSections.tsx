import type { FormEvent } from "react";
import type { SiteContent } from "../content";
import digitalSprintImage from "../../digitalsprint.png";
import mathCalmImage from "../../mathcalm.png";
import pixelHuntImage from "../../pixelhunt.png";
import { SectionTitle } from "./SectionTitle";

const projects = [
  {
    title: "Digital Sprint",
    image: digitalSprintImage,
    url: "https://digitalsprint.netlify.app",
  },
  {
    title: "Math Tutor",
    image: mathCalmImage,
    url: "https://mathcalm.netlify.app",
  },
  {
    title: "Pixel Hunt",
    image: pixelHuntImage,
    url: "https://pixelhunting.netlify.app/",
  },
];
const serviceIcons = ["🌐", "🚀", "✨", "🤖", "🎨"];

export function ProjectsSection({ content }: { content: SiteContent }) {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle text={content.sectionTitles[2]} />
        <div className="projects-grid-v2">
          {projects.map((project, index) => (
            <article
              className="project-card-v2 glass-card reveal"
              key={project.title}
              onClick={() => window.open(project.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <div className="p-shine" />
              <div className="p-card-top">
                <div className="p-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="p-image"
                  />
                </div>
              </div>
              <div className="p-card-bottom">
                <h3 className="p-title">{project.title}</h3>
                <div className="p-tags">
                  <span className="p-tag-pill">
                    {content.projectTags[index * 2]}
                  </span>
                  <span className="p-tag-pill">
                    {content.projectTags[index * 2 + 1]}
                  </span>
                </div>
                <p className="p-description">
                  {content.projectDescriptions[index]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection({ content }: { content: SiteContent }) {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionTitle text={content.sectionTitles[3]} />
        <div className="timeline">
          <div className="timeline-line" />
          {content.timelineTitles.map((title, index) => (
            <div className="timeline-item reveal" key={title}>
              <div className="timeline-dot" />
              <div className="timeline-date">
                {content.timelineDates[index]}
              </div>
              <div className="glass-card timeline-card">
                <h3>{title}</h3>
                <p className="timeline-subtitle">
                  {content.timelineSubtitles[index]}
                </p>
                <ul>
                  {content.timelineItems
                    .slice(index * 3, index * 3 + 3)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ content }: { content: SiteContent }) {
  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionTitle text={content.sectionTitles[4]} />
        <div className="services-grid">
          {content.serviceTitles.map((title, index) => (
            <div className="service-card glass-card reveal" key={title}>
              <div className="service-icon">{serviceIcons[index]}</div>
              <div className="service-badge">
                {content.serviceBadges[index]}
              </div>
              <h3>{title}</h3>
              <p>{content.serviceDescriptions[index]}</p>
              <ul className="service-list">
                {content.serviceItems
                  .slice(index * 3, index * 3 + 3)
                  .map((item) => (
                    <li key={item}>{item}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ContactProps = {
  content: SiteContent;
  sending: boolean;
  status: { text: string; type: "success" | "error" | "" };
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactSection({
  content,
  sending,
  status,
  onSubmit,
}: ContactProps) {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-v2-layout">
          <div className="contact-v2-left">
            <h2
              className="contact-v2-title section-title-premium"
              dangerouslySetInnerHTML={{ __html: content.contactTitle }}
            />
            <p className="contact-v2-sub">{content.contactIntro}</p>
            <div className="contact-info-list">
              <ContactInfo icon="📧" text="bufodevweb@gmail.com" />
              <ContactInfo icon="📍" text={content.country} />
            </div>
            <div className="contact-socials">
              <a
                href="https://github.com/Bufodev"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="github-icon"
                />
              </a>
            </div>
          </div>
          <div className="contact-v2-right glass-card animated-contact-card">
            <h3>{content.formTitle}</h3>
            <p>{content.formIntro}</p>
            <form className="cv2-form" onSubmit={onSubmit} noValidate>
              <Field
                id="contact-name"
                label={content.formLabels[0]}
                placeholder={content.formPlaceholders[0]}
                name="name"
              />
              <Field
                id="contact-telegram"
                label={content.formLabels[1]}
                placeholder={content.formPlaceholders[1]}
                name="telegram"
              />
              <div className="cv2-form-group">
                <label htmlFor="contact-message">{content.formLabels[2]}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={content.formPlaceholders[2]}
                  maxLength={3000}
                  required
                />
              </div>
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-company">{content.formLabels[3]}</label>
                <input
                  id="contact-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="cv2-submit-btn"
                disabled={sending}
              >
                <span className="contact-submit-label">
                  {sending ? content.messages[1] : content.send}
                </span>
              </button>
              <p className="contact-form-status" data-status={status.type}>
                {status.text}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="contact-info-item">
      <div className="c-icon">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
function Field({
  id,
  label,
  placeholder,
  name,
}: {
  id: string;
  label: string;
  placeholder: string;
  name: string;
}) {
  return (
    <div className="cv2-form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={100}
        required
      />
    </div>
  );
}
