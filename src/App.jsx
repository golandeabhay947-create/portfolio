import { useState, useEffect } from 'react';
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
  Sun,
  Moon,
} from 'lucide-react';
import {
  achievements,
  certifications,
  education,
  profile,
  projects,
  skillGroups,
} from './portfolioData';
import './styles.css';

/* ─── Inline SVG brand icons (not in this lucide version) ─────────────────── */
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

/* ─── Theme hook ──────────────────────────────────────────────────────────── */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Initial value from localStorage, or OS preference
    try {
      const stored = localStorage.getItem('ag-theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    try {
      localStorage.setItem('ag-theme', theme);
    } catch { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}

/* ─── Fixed Left Sidebar ─────────────────────────────────────────────────── */
function SideBar() {
  return (
    <aside className="side-bar" aria-label="Social links">
      <a href={`mailto:${profile.email}`} className="side-icon" title="Email">
        <Mail size={17} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="side-icon" title="LinkedIn">
        <LinkedInIcon size={17} />
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" className="side-icon" title="GitHub">
        <GitHubIcon size={17} />
      </a>
      <div className="side-bar-spacer" />
      <div className="side-bar-line" />
      <div className="side-bar-label">Connect</div>
    </aside>
  );
}

/* ─── Nav items ──────────────────────────────────────────────────────────── */
const navItems = [
  { label: 'About',      href: '#about' },
  { label: 'Stack',      href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
function Navbar({ open, setOpen, theme, toggleTheme }) {
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <a href="#top" className="nav-logo" onClick={close}>
          <span className="nav-logo-arrow">&gt;</span>
          Abhay Golande
        </a>

        {/* Desktop nav links */}
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Let's Connect CTA */}
          <a href="#contact" className="nav-cta" onClick={close}>
            Let&apos;s Connect
          </a>

          {/* Theme toggle */}
          <button
            className="theme-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume download */}
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="nav-resume-icon"
            aria-label="Download Resume"
          >
            <Download size={15} />
            <span className="tooltip">Download Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-link" onClick={close}>
              {item.label} <ChevronRight size={13} />
            </a>
          ))}
          {/* Theme toggle inside mobile menu */}
          <button
            className="mobile-link"
            onClick={() => { toggleTheme(); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid var(--border)', padding: '13px 0', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--on-muted)' }}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="btn btn-primary mobile-resume"
            onClick={close}
          >
            Download Resume <Download size={12} />
          </a>
        </nav>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="hero shell">
      {/* Left column */}
      <div className="hero-left">
        {/* Badge row */}
        <div className="hero-badge-row">
          <span className="hero-badge">AI Engineer · Full Stack Developer</span>
          <span className="hero-badge-sep" />
          <span className="hero-badge-status">SYSTEM_READY: TRUE</span>
        </div>

        {/* Name — primary visual anchor */}
        <h1 className="hero-name">
          ABHAY{' '}
          <span className="accent">GOLANDE</span>
        </h1>

        {/* Summary */}
        <p className="hero-summary">{profile.summary}</p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Selected Work <ExternalLink size={13} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Right column — engineering workspace image */}
      <div className="hero-right">
        <div className="hero-glow" />
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
            alt="Software engineering workspace with code on screen"
            loading="eager"
            decoding="async"
          />
          <div className="hero-image-caption">
            <p>LOC: Pune, MH</p>
            <p>UTC +5:30</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */
function StatsBar() {
  return (
    <div className="stats-bar shell">
      <div className="stat-item">
        <div className="stat-value">5+</div>
        <div className="stat-label">Projects Shipped</div>
        <p className="stat-desc">AI/ML, full-stack, and frontend projects delivered.</p>
      </div>
      <div className="stat-item">
        <div className="stat-value">9.33</div>
        <div className="stat-label">CGPA / 10</div>
        <p className="stat-desc">IIIT Pune — B.E. Information Technology, expected 2027.</p>
      </div>
      <div className="stat-item">
        <div className="stat-value">AI + FS</div>
        <div className="stat-label">Specialization</div>
        <p className="stat-desc">Building AI-powered automation and full-stack applications.</p>
      </div>
    </div>
  );
}

/* ─── About ──────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="section shell">
      <div className="section-divider">
        <div>
          <div className="section-label">About Me</div>
          <h2>Who I Am</h2>
        </div>
        <div className="section-divider-line" />
        <div className="section-divider-code">PROFILE_DATA</div>
      </div>

      <div className="about-grid">
        <div className="about-body">
          <p>
            I&apos;m a B.E. Information Technology student at the International Institute of
            Information Technology, Pune — focused on building AI-powered and full-stack
            applications.
          </p>
          <p>
            My work spans computer vision, model training and evaluation, RESTful API design,
            JWT authentication, and MVC architecture. I&apos;m seeking an AI Engineer, ML, GenAI,
            or full-stack internship role where I can contribute to production-grade applications
            and keep growing as an engineer.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
            <a href="/Abhay_Golande_Resume_AI_Engineer.docx" download className="btn btn-primary">
              Download Resume <Download size={12} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
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
            <span className="highlight-value accent-text">Open to Internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills / Stack ─────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="shell">
        <div className="skills-header">
          <div>
            <div className="section-label">TECHNICAL_STACK</div>
            <h2 className="section-title">
              Technical<br />Ecosystem
            </h2>
          </div>
          <p className="skills-desc">
            A production-focused ecosystem spanning AI/ML systems, full-stack web delivery,
            and cloud operations — built through hands-on projects and academic rigor.
          </p>
        </div>

        <div className="skill-cards">
          {skillGroups.map((group, i) => (
            <div className="skill-card" key={group.label}>
              <div className="skill-card-header">
                <span className="skill-card-title">{group.label}</span>
                <span className="skill-card-num">0{i + 1}</span>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ───────────────────────────────────────────────────────────── */
function ProjectCard({ project }) {
  const stackItems = project.stack.split('·').map((s) => s.trim());
  return (
    <article className="project-card">
      <div className="project-card-bg" />
      <div className="project-card-overlay" />
      <div className="project-card-content">
        <div className="project-type-tags">
          <span className="project-cat-tag primary-tag">{project.type}</span>
          {stackItems.slice(0, 3).map((tech) => (
            <span className="project-cat-tag stack-tag" key={tech}>{tech}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-card-actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="proj-btn proj-btn-secondary"
            aria-label="GitHub"
          >
            <GitHubIcon size={11} /> GitHub
          </a>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="proj-btn proj-btn-primary"
              aria-label={`Live demo of ${project.title}`}
            >
              Live Demo <ExternalLink size={11} />
            </a>
          ) : (
            <span className="proj-btn proj-btn-secondary disabled">No Demo</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section shell">
      <div className="projects-header">
        <div>
          <div className="section-label">SELECTED_WORKS</div>
          <h2 className="section-title">
            Featured <span className="accent">Works</span>
          </h2>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          Explore full archive →
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ─── Experience / Education ─────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="shell">
        <div className="section-divider" style={{ marginBottom: '40px' }}>
          <div>
            <div className="section-label">HISTORY_LOG</div>
            <h2>Education</h2>
          </div>
          <div className="section-divider-line" />
          <div className="section-divider-code">ACADEMIC_RECORD</div>
        </div>

        <div className="exp-timeline">
          {education.map((item) => (
            <div className="exp-item" key={item.degree + item.detail}>
              <div className="exp-header">
                <div className="exp-org">
                  {item.school}
                  <span className="exp-role-badge">{item.degree}</span>
                </div>
                <div className="exp-date">{item.detail}</div>
              </div>
            </div>
          ))}

          {/* Certifications block */}
          <div className="exp-item">
            <div className="exp-header">
              <div className="exp-org">
                Certifications
                <span className="exp-role-badge">Recognition</span>
              </div>
            </div>
            <div className="exp-highlights">
              {certifications.map((cert) => (
                <div className="exp-highlight-card" key={cert}>
                  <div className="exp-highlight-title">Certificate</div>
                  <p className="exp-highlight-text">{cert}</p>
                </div>
              ))}
            </div>
            <div className="exp-tags" style={{ marginTop: '12px' }}>
              {achievements.map((a) => (
                <span className="exp-tag" key={a}>
                  {a.length > 90 ? a.slice(0, 90) + '…' : a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="contact-inner">
        <div className="section-label" style={{ letterSpacing: '0.28em' }}>
          Available for opportunities
        </div>
        <h2>Ready to build the next system?</h2>
        <p>
          I&apos;m actively looking for AI, ML, GenAI, and full-stack internship roles. Feel
          free to reach out — I respond promptly.
        </p>

        {/* Primary email CTA */}
        <a href={`mailto:${profile.email}`} className="contact-email-btn">
          {profile.email}
        </a>

        {/* Secondary links */}
        <div className="contact-links-row">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-link">
            <Phone size={13} /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <LinkedInIcon size={13} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
            <GitHubIcon size={13} /> GitHub
          </a>
          <span className="contact-link">
            <MapPin size={13} /> {profile.location}
          </span>
        </div>

        {/* Contact form */}
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" required autoComplete="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" name="message" required rows={4} placeholder="What's on your mind?" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Send Message <Send size={12} />
            </button>
            <p className="form-note">Submitting opens a pre-filled email in your mail app.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <h2>Abhay Golande</h2>
          <div className="footer-status">
            <span className="footer-pulse" />
            Available for Internship Opportunities
          </div>
          <p className="footer-desc">
            B.E. IT student at IIIT Pune building AI-powered and full-stack applications.
            Passionate about ML, GenAI, system design, and turning complex ideas into
            production-ready solutions.
          </p>
        </div>

        <div>
          <div className="footer-nav-label">Navigation</div>
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-nav-label">Social</div>
          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="GitHub">
              <GitHubIcon size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <LinkedInIcon size={15} />
            </a>
            <a href={`mailto:${profile.email}`} className="footer-social-icon" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        © {new Date().getFullYear()} Abhay Golande — Built with React + Vite
      </div>
    </footer>
  );
}

/* ─── App root ───────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      <SideBar />
      <Navbar
        open={menuOpen}
        setOpen={setMenuOpen}
        theme={theme}
        toggleTheme={toggle}
      />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
