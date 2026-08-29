import type { SiteContent } from "../content";
import profileImage from "../../profile.png";
import { EmailIcon, LocationIcon } from "./Icons";
import { SectionTitle } from "./SectionTitle";

export function AboutSection({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle text={content.sectionTitles[0]} />
        <p className="about-subtitle">{content.aboutSubtitle}</p>
        <div className="about-layout-new">
          <div className="about-left">
            <div className="about-photo-wrapper">
              <img src={profileImage} alt="Ivan" className="about-photo" />
            </div>
          </div>
          <div className="about-right">
            <div className="about-info-v2">
              <div className="info-header">
                <h3 className="about-name">Ivan</h3>
              </div>
              <div className="info-body">
                <p>{content.about}</p>
              </div>
              <div className="info-contact">
                <MiniContact icon={<EmailIcon />} text="vandevweb@gmail.com" />
                <MiniContact icon={<LocationIcon />} text={content.country} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniContact({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="contact-mini">
      <span className="mini-icon">{icon}</span>
      <span className="mini-text">{text}</span>
    </div>
  );
}
