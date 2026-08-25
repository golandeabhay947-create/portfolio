import { useState } from 'react';
import {
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  MapPin,
  Phone,
  Send,
  ChevronRight,
  Link,
  GitFork,
} from 'lucide-react';
import { achievements, certifications, education, profile, projects, skillGroups } from './portfolioData';
import './styles.css';

/* ── Inline SVG brand icons (not in this lucide version) ── */
function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];


function Navbar({ open, setOpen }) {
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="nav-inner shell">
        <a href="#top" className="nav-logo" onClick={close}>
          AG<span className="accent">.</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="btn btn-outline btn-sm"
            onClick={close}
          >
            Resume <Download size={13} />
          </a>
        </nav>
        <button
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu shell">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-link" onClick={close}>
              {item.label} <ChevronRight size={15} />
            </a>
          ))}
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="btn btn-primary mobile-resume"
            onClick={close}
          >
            Download Resume <Download size={14} />
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="hero-badge">
        <span className="status-dot" />
        Open to internship opportunities
      </div>
      <h1 className="hero-name">Abhay Golande</h1>
      <p className="hero-title">Software Engineer &amp; Full Stack Developer</p>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
      <div className="hero-links">
        <a href={profile.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
          <GitHubIcon size={20} />
          <span>GitHub</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
          <LinkedInIcon size={20} />
          <span>LinkedIn</span>
        </a>
        <span className="icon-link">
          <MapPin size={16} />
          <span>{profile.location}</span>
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section shell">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div>
          <h2 className="section-title">Who I am</h2>
          <p className="body-text">
            I'm a B.E. Information Technology student at IIIT Pune, building AI-powered and
            full-stack applications. My work spans computer vision, model training and evaluation,
            RESTful API design, JWT authentication, and MVC architecture.
          </p>
          <p className="body-text">
            I'm seeking an AI Engineer, ML, GenAI, or full-stack internship role where I can
            contribute to production-grade applications and keep growing as an engineer.
          </p>
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="inline-link"
          >
            Download Resume <Download size={15} />
          </a>
        </div>
        <div className="about-highlights">
          <div className="highlight-card">
            <span className="highlight-label">Degree</span>
            <span className="highlight-value">B.E. Information Technology</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-label">CGPA</span>
            <span className="highlight-value">9.33 / 10</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-label">Focus</span>
            <span className="highlight-value">AI / ML · Full Stack</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-label">Status</span>
            <span className="highlight-value accent-text">Open to internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="shell">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Technologies I work with</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <span className="skill-group-label">{group.label}</span>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const stackItems = project.stack.split('·').map((s) => s.trim());
  return (
    <article className="project-card">
      <div className="project-card-body">
        <span className="project-type-tag">{project.type}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {stackItems.map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-footer">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-sm"
          aria-label="GitHub"
        >
          <GitHubIcon size={14} /> GitHub
        </a>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
            aria-label={`Live demo of ${project.title}`}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        ) : (
          <span className="btn btn-ghost btn-sm disabled" title="No live demo available">
            No demo
          </span>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section shell">
      <div className="section-label">Projects</div>
      <h2 className="section-title">Selected work</h2>
      <p className="section-subtitle">A mix of AI/ML, full-stack, and frontend projects.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="shell exp-grid">
        <div>
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic background</h2>
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.degree + item.detail}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-school">{item.school}</p>
                  <p className="timeline-degree">{item.degree}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-label">Recognition</div>
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert} className="cert-item">
                <span className="cert-dot" />
                {cert}
              </li>
            ))}
          </ul>
          <h2 className="section-title" style={{ marginTop: '2rem' }}>
            Achievements
          </h2>
          <ul className="cert-list">
            {achievements.map((item) => (
              <li key={item} className="cert-item">
                <span className="cert-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section shell">
      <div className="section-label">Contact</div>
      <div className="contact-grid">
        <div>
          <h2 className="section-title">Let's connect</h2>
          <p className="body-text">
            I'm actively looking for AI, ML, GenAI, and full-stack internship roles. Feel free to
            reach out — I respond promptly.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={16} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-link">
              <Phone size={16} />
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="What's on your mind?"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message <Send size={15} />
          </button>
          <p className="form-note">Opens a pre-filled email in your mail app.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer shell">
      <span className="nav-logo">
        AG<span className="accent">.</span>
      </span>
      <p className="footer-copy">© {new Date().getFullYear()} Abhay Golande</p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon size={17} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon size={17} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
