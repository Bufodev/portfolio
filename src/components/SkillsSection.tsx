import { useMemo } from "react";
import type { SiteContent } from "../content";
import { VercelIcon } from "./Icons";
import { SectionTitle } from "./SectionTitle";

type SkillEntry = { name: string; icon?: string; invert?: boolean };

const technologies: SkillEntry[][] = [
  [],
  [
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      invert: true,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
  ],
  [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
  ],
  [
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Prisma ORM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      invert: true,
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    { name: "Vercel" },
  ],
];
const progress = [
  [95, 87, 74, 78, 89],
  [90, 85, 92, 86, 87],
  [86, 80, 71, 88, 94],
  [92, 79, 97, 90, 72],
];

export function SkillsSection({ content }: { content: SiteContent }) {
  const translatedSkills = useMemo(
    () => [
      content.skillNames.slice(0, 5),
      content.skillNames.slice(5, 7),
      content.skillNames.slice(7, 10),
      [],
    ],
    [content.skillNames],
  );
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionTitle text={content.sectionTitles[1]} />
        <div className="skills-grid">
          {content.skillHeaders.map((header, groupIndex) => (
            <SkillGroup
              key={header}
              header={header}
              skills={[
                ...translatedSkills[groupIndex].map((name) => ({ name })),
                ...technologies[groupIndex],
              ]}
              progress={progress[groupIndex]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  header,
  skills,
  progress,
}: {
  header: string;
  skills: SkillEntry[];
  progress: number[];
}) {
  return (
    <div className="skill-category glass-card reveal">
      <div className="skill-header">
        <h3>{header}</h3>
      </div>
      <div className="skill-items">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill.name}>
            <span className="skill-name">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  width="16"
                  alt=""
                  className={skill.invert ? "skill-icon invert" : "skill-icon"}
                />
              ) : skill.name === "Vercel" ? (
                <VercelIcon />
              ) : null}
              {skill.name}
            </span>
            <div className="skill-bar-wrapper">
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${progress[index]}%` }}
                />
              </div>
              <span className="skill-percentage">{progress[index]}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
