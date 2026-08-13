import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Speech",
    description:
      "An AI-powered productivity tool that processes recorded or uploaded audio and transforms important information into structured outputs such as presentations, flowcharts, summaries, and documentation — all available for download.",
    tech: ["React", "AI", "Audio Processing", "APIs"],
    link: "#",
  },
  {
    title: "Pokédex",
    description:
      "An interactive Pokédex that lets users explore Pokémon along with their stats, strengths, weaknesses, and other information through a clean and responsive interface.",
    tech: ["React", "JavaScript", "API", "CSS"],
    link: "#",
  },
];

const skills = [
  "Java",
  "JavaScript",
  "C",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Machine Learning",
  "AI APIs",
  "Git",
  "GitHub",
  "Vite",
  "VS Code",
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
          K<span>.</span>
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

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              K. Akshith
              <span className="gradient-text">.</span>
            </h1>

            <h2>
              Student Developer <span>•</span> Builder <span>•</span> AI/ML Explorer
            </h2>

            <p className="hero-description">
              I'm a student developer who enjoys turning ideas into working
              products — from full-stack applications to AI-powered tools.
              I learn by building, experimenting, and shipping.
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
                href="https://github.com/xkaimr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-card glass reveal delay-one">
            <div className="status-dot"></div>

            <span>CURRENTLY BUILDING</span>

            <strong>AI-powered developer projects.</strong>

            <div className="hero-card-line"></div>

            <div className="mini-stats">
              <div>
                <strong>02+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>02nd</strong>
                <span>Year</span>
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
            <h2>
              Building with <span>curiosity.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="glass about-card reveal">
              <p>
                I'm K. Akshith, a second-year student developer at KL
                University who enjoys learning by building. My interests sit
                at the intersection of software development, artificial
                intelligence, and creative technology.
              </p>

              <p>
                I've worked across frontend development, programming,
                Git/GitHub, machine learning projects, and AI-powered
                applications. I enjoy taking an idea from a rough concept to
                something people can actually interact with.
              </p>

              <p>
                For me, development isn't just about writing code. It's about
                understanding the problem, figuring out how the pieces fit
                together, and actually shipping the result.
              </p>
            </div>

            <div className="glass quote-card reveal delay-one">
              <span className="quote-mark">“</span>

              <p>
                Turning ideas into interfaces, problems into systems, and
                curiosity into things people can actually use.
              </p>

              <span className="quote-line">
                — My approach to building
              </span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>
              Tools I <span>build with.</span>
            </h2>
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
            <h2>
              Things I've <span>built.</span>
            </h2>
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
            <h2>
              The road so <span>far.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item glass reveal">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-year">
                  2025 — PRESENT
                </span>

                <h3>KL University</h3>

                <p>
                  Second-year undergraduate student exploring computer
                  science, software development, artificial intelligence,
                  and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">05 / CERTIFICATIONS</p>
            <h2>
              Learning never <span>stops.</span>
            </h2>
          </div>

          <div className="cert-grid">
            <div className="glass cert-card reveal">
              <span>01</span>

              <h3>Cambridge Certification</h3>

              <p>
                English language certification and academic achievement.
              </p>
            </div>

            <div className="glass cert-card reveal delay-one">
              <span>02</span>

              <h3>MOOC Certifications</h3>

              <p>
                Online learning and technical courses across different
                areas of technology.
              </p>
            </div>

            <div className="glass cert-card reveal delay-two">
              <span>03</span>

              <h3>Hackathon Certificates</h3>

              <p>
                Participation and achievements through competitive
                development events.
              </p>
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
              href="mailto:k.akshithkumar@klh.edu.in"
              className="btn btn-primary contact-button"
            >
              Get In Touch ↗
            </a>

            <div className="contact-links">
              <a href="mailto:k.akshithkumar@klh.edu.in">
                k.akshithkumar@klh.edu.in
              </a>

              <a
                href="https://github.com/xkaimr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>© 2026 K. Akshith</span>
        <span>Designed & Built with curiosity.</span>
      </footer>
    </div>
  );
}

export default App;