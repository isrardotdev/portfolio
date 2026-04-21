import { motion } from "framer-motion";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const experience = [
  {
    title: "Founding Fullstack Engineer",
    company: "TAG Capital",
    period: "Dec 2024 – Present",
    bullets: [
      "Architected and implemented a deal evaluation system for investors — multi-step forms, smart autofill from pitch decks, and real-time collaboration using WebSockets.",
      "Built dynamic, responsive interfaces using React, Redux, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Cappsule",
    period: "Jun 2024 – Jul 2025 · part-time",
    bullets: [],
  },
  {
    title: "Front-end Developer",
    company: "Dream Bridge",
    period: "Feb 2024 – Nov 2024",
    bullets: [],
  },
  {
    title: "WordPress Developer",
    company: "Nexus Marketing Agency",
    period: "Aug 2023 – Nov 2023",
    bullets: [],
  },
  {
    title: "UI Developer",
    company: "The Dreamer Designs",
    period: "Sep 2021 – Jul 2023",
    bullets: [],
  },
];

const skills = [
  {
    label: "Frontend",
    items:
      "React, TypeScript, Next.js, Redux Toolkit, Tailwind CSS, CSS Animations",
  },
  {
    label: "Backend",
    items: "Node.js, Express.js, MongoDB, PostgreSQL, Prisma, REST APIs, WebSockets",
  },
  {
    label: "DevOps",
    items: "Docker, Nginx, CI/CD, Git, DigitalOcean",
  },
  {
    label: "Other",
    items: "WordPress, WooCommerce, Webhooks, Canvas API, SVG Processing",
  },
];

export default function Resume() {
  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Nav */}
      <div className="resume-topbar">
        <span className="nav-logo">ik.</span>
        <a
          href="/ISRAR KHAN_Resume.pdf"
          target="_blank"
          className="resume-pdf-link"
        >
          download resume ↗
        </a>
      </div>

      <div className="resume-content">
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">Israr Khan</h1>
          <div className="resume-contact-row">
            <a href="mailto:isrark005@gmail.com" className="resume-contact-link">
              <SiGmail /> isrark005@gmail.com
            </a>
            <a
              href="https://github.com/isrardotdev/"
              target="_blank"
              className="resume-contact-link"
            >
              <TbBrandGithubFilled /> isrardotdev
            </a>
            <a
              href="https://www.linkedin.com/in/israr-khan-a8824ba4/"
              target="_blank"
              className="resume-contact-link"
            >
              <FaLinkedinIn /> israr-khan
            </a>
            <a
              href="https://twitter.com/isrardotdev"
              target="_blank"
              className="resume-contact-link"
            >
              <FaXTwitter /> isrardotdev
            </a>
          </div>
        </header>

        {/* About */}
        <section className="resume-section">
          <p className="resume-section-label">About</p>
          <p className="resume-body" style={{ marginBottom: "14px" }}>
            Self-taught since 2020. Went from a management degree to writing
            code during the COVID lockdown — picked it up out of curiosity,
            never put it down. What started as tinkering with HTML and CSS
            turned into a career built on actually shipping things.
          </p>
          <p className="resume-body">
            I work across the full stack — from database schema to pixel-level
            UI. Frontend is where I'm most at home; I care deeply about how
            interfaces <em>feel</em> — the transitions, the feedback, the
            details most people skip over. But I'm equally comfortable setting
            up APIs, managing deployments, or debugging something deep in the
            backend. Currently building investor-facing SaaS products at a
            Berlin-based startup, fully remote.
          </p>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <p className="resume-section-label">Skills</p>
          <div className="resume-skills">
            {skills.map(({ label, items }) => (
              <div key={label} className="resume-skill-row">
                <span className="resume-skill-label">{label}</span>
                <span className="resume-body">{items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <p className="resume-section-label">Experience</p>
          <div className="resume-entries">
            {experience.map(({ title, company, period, bullets }) => (
              <div key={`${company}-${period}`} className="resume-entry">
                <div className="resume-entry-header">
                  <span className="resume-entry-title">
                    {title} — {company}
                  </span>
                  <span className="resume-entry-period">{period}</span>
                </div>
                {bullets.length > 0 && (
                  <ul className="resume-bullets">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <p className="resume-section-label">Projects</p>
          <div className="resume-entries">
            <div className="resume-entry">
              <div className="resume-entry-header">
                <a
                  href="https://www.stickerizz.com/"
                  target="_blank"
                  className="resume-entry-title resume-project-link"
                >
                  Stickerizz ↗
                </a>
              </div>
              <p className="resume-body" style={{ marginBottom: "10px" }}>
                Full-stack custom sticker creation platform. Browser-based
                editor, Moore-Neighbor Tracing for vector cut paths, automated
                print layout, background workers, and WordPress webhook
                integration.
              </p>
              <p className="resume-stack">
                React · TypeScript · Node.js · Express · PostgreSQL · Prisma ·
                Canvas API · SVG · Docker · Nginx
              </p>
            </div>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <span className="resume-entry-title">
                  GitHub Profile Comparison
                </span>
              </div>
              <p className="resume-body" style={{ marginBottom: "10px" }}>
                Web app to compare two GitHub profiles — displays a comparison
                chart and a meme based on commit count delta.
              </p>
              <p className="resume-stack">
                React · Chart.js · GitHub API · Canvas · Tailwind CSS
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <p className="resume-section-label">Education</p>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <span className="resume-entry-title">
                Bachelor of Management Studies
              </span>
              <span className="resume-entry-period">Jun 2017 – Nov 2020</span>
            </div>
            <p className="resume-body">
              Oriental College of Commerce & Management, Mumbai University
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
