import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Project Aurora",
    description:
      "A modern web application focused on delivering a smooth and intuitive digital experience.",
    tech: ["React", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "AI Insight",
    description:
      "An AI-powered project that transforms complex information into simple, actionable insights.",
    tech: ["Python", "AI", "API"],
    link: "#",
  },
  {
    title: "DevTrack",
    description:
      "A productivity platform designed to help developers organize projects, goals and progress.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "AI / ML",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* Background atmosphere */}
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="ambient ambient-three"></div>

      {/* NAVBAR */}
      <nav className="navbar glass">
        <a href="#home" className="logo" onClick={closeMenu}>
          X<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Xkaimr
              <span className="gradient-text">.</span>
            </h1>

            <h2>
              Developer <span>•</span> Builder <span>•</span> Problem Solver
            </h2>

            <p className="hero-description">
              I build thoughtful digital experiences, explore emerging
              technologies, and turn ideas into products that actually work.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-card glass reveal delay-one">
            <div className="status-dot"></div>
            <span>Currently building</span>
            <strong>Something awesome.</strong>

            <div className="hero-card-line"></div>

            <div className="mini-stats">
              <div>
                <strong>10+</strong>
                <span>Skills</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Ideas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>Building with <span>curiosity.</span></h2>
          </div>

          <div className="about-grid">
            <div className="glass about-card reveal">
              <p>
                I'm a Computer Science student and developer who enjoys
                understanding how things work and then building them from
                scratch.
              </p>

              <p>
                My interests span frontend development, backend systems,
                artificial intelligence, and creative technology.
              </p>

              <p>
                I believe good software should not only function well — it
                should feel good to use.
              </p>
            </div>

            <div className="glass quote-card reveal delay-one">
              <span className="quote-mark">“</span>
              <p>
                Turning ideas into interfaces, problems into systems, and
                curiosity into things people can actually use.
              </p>
              <span className="quote-line">— My approach to building</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>Tools I <span>build with.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card glass reveal"
                style={{ animationDelay: `${index * 0.05}s` }}
                key={skill}
              >
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">03 / PROJECTS</p>
            <h2>Things I've <span>built.</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card glass reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-index">
                    0{index + 1}
                  </span>

                  <a
                    href={project.link}
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>The road so <span>far.</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item glass reveal">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-year">2025 — PRESENT</span>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p>
                  Developing a strong foundation in software engineering,
                  algorithms, web development and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">05 / CERTIFICATIONS</p>
            <h2>Learning never <span>stops.</span></h2>
          </div>

          <div className="cert-grid">
            <div className="glass cert-card reveal">
              <span>01</span>
              <h3>Web Development</h3>
              <p>Frontend & Full Stack Development</p>
            </div>

            <div className="glass cert-card reveal delay-one">
              <span>02</span>
              <h3>Git & GitHub</h3>
              <p>Version Control & Collaboration</p>
            </div>

            <div className="glass cert-card reveal delay-two">
              <span>03</span>
              <h3>Artificial Intelligence</h3>
              <p>Machine Learning & AI Fundamentals</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-card glass reveal">
            <p className="eyebrow">06 / CONTACT</p>

            <h2>
              Let's build something
              <span> memorable.</span>
            </h2>

            <p>
              Have an idea, opportunity, or simply want to talk technology?
              My inbox is always open.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="btn btn-primary contact-button"
            >
              Get In Touch ↗
            </a>

            <div className="contact-links">
              <a href="mailto:your.email@example.com">
                your.email@example.com
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Xkaimr</span>
        <span>Designed & Built with curiosity.</span>
      </footer>
    </div>
  );
}

export default App;