import { useState, useEffect, useRef, useCallback } from 'react';
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
  Star,
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

/* ─── Inline SVG brand icons ─────────────────────────────────────────────── */
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
    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
    try { localStorage.setItem('ag-theme', theme); } catch { /* ignore */ }
  }, [theme]);
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}

/* ─── Intersection-observer scroll-reveal hook ───────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Animated Code Terminal ─────────────────────────────────────────────── */
const CODE_SNIPPETS = [
  { lang: 'python', lines: [
    { t: 'cm', v: '# AI Engineer — Abhay Golande' },
    { t: 'kw', v: 'import' },     { t: 'plain', v: ' tensorflow as tf' },
    { t: 'kw', v: 'from' },       { t: 'plain', v: ' sklearn.model_selection ' }, { t: 'kw', v: 'import' }, { t: 'plain', v: ' train_test_split' },
    { t: 'plain', v: '' },
    { t: 'kw', v: 'def ' },       { t: 'fn', v: 'build_model' }, { t: 'plain', v: '(input_shape):' },
    { t: 'plain', v: '  model = tf.keras.' }, { t: 'fn', v: 'Sequential' }, { t: 'plain', v: '([' },
    { t: 'plain', v: '    tf.keras.layers.' }, { t: 'fn', v: 'Conv2D' }, { t: 'plain', v: '(' }, { t: 'nu', v: '32' }, { t: 'plain', v: ', (' }, { t: 'nu', v: '3' }, { t: 'plain', v: ',' }, { t: 'nu', v: '3' }, { t: 'plain', v: '), activation=' }, { t: 'str', v: "'relu'" }, { t: 'plain', v: '),' },
    { t: 'plain', v: '    tf.keras.layers.' }, { t: 'fn', v: 'Dense' }, { t: 'plain', v: '(' }, { t: 'nu', v: '2' }, { t: 'plain', v: ', activation=' }, { t: 'str', v: "'softmax'" }, { t: 'plain', v: ')' },
    { t: 'plain', v: '  ])' },
    { t: 'kw', v: '  return' }, { t: 'plain', v: ' model' },
    { t: 'plain', v: '' },
    { t: 'cm', v: '# Training Alzheimer detection pipeline' },
    { t: 'plain', v: 'model = ' }, { t: 'fn', v: 'build_model' }, { t: 'plain', v: '((' }, { t: 'nu', v: '224' }, { t: 'plain', v: ',' }, { t: 'nu', v: '224' }, { t: 'plain', v: ',' }, { t: 'nu', v: '3' }, { t: 'plain', v: '))' },
    { t: 'plain', v: 'model.' }, { t: 'fn', v: 'fit' }, { t: 'plain', v: '(X_train, y_train, epochs=' }, { t: 'nu', v: '20' }, { t: 'plain', v: ')' },
  ]},
  { lang: 'javascript', lines: [
    { t: 'cm', v: '// WanderLust — Full Stack Travel Platform' },
    { t: 'kw', v: 'const' }, { t: 'plain', v: ' express = ' }, { t: 'fn', v: 'require' }, { t: 'plain', v: '(' }, { t: 'str', v: "'express'" }, { t: 'plain', v: ')' },
    { t: 'kw', v: 'const' }, { t: 'plain', v: ' mongoose = ' }, { t: 'fn', v: 'require' }, { t: 'plain', v: '(' }, { t: 'str', v: "'mongoose'" }, { t: 'plain', v: ')' },
    { t: 'plain', v: '' },
    { t: 'kw', v: 'const' }, { t: 'plain', v: ' app = ' }, { t: 'fn', v: 'express' }, { t: 'plain', v: '()' },
    { t: 'plain', v: '' },
    { t: 'cm', v: '// Route: Get all listings' },
    { t: 'plain', v: 'app.' }, { t: 'fn', v: 'get' }, { t: 'plain', v: '(' }, { t: 'str', v: "'/listings'" }, { t: 'plain', v: ', async (req, res) => {' },
    { t: 'kw', v: '  const' }, { t: 'plain', v: ' listings = ' }, { t: 'kw', v: 'await' }, { t: 'plain', v: ' Listing.' }, { t: 'fn', v: 'find' }, { t: 'plain', v: '({})' },
    { t: 'plain', v: '  res.' }, { t: 'fn', v: 'json' }, { t: 'plain', v: '({ success: ' }, { t: 'kw', v: 'true' }, { t: 'plain', v: ', data: listings })' },
    { t: 'plain', v: '})' },
    { t: 'plain', v: '' },
    { t: 'cm', v: '// JWT Auth middleware' },
    { t: 'kw', v: 'const' }, { t: 'plain', v: ' authenticate = (req, res, next) => {' },
    { t: 'kw', v: '  const' }, { t: 'plain', v: ' token = req.session.' }, { t: 'fn', v: 'token' },
    { t: 'kw', v: '  if ' }, { t: 'plain', v: '(!token) ' }, { t: 'kw', v: 'return' }, { t: 'plain', v: ' res.' }, { t: 'fn', v: 'redirect' }, { t: 'plain', v: '(' }, { t: 'str', v: "'/login'" }, { t: 'plain', v: ')' },
    { t: 'fn', v: '  next' }, { t: 'plain', v: '()' },
    { t: 'plain', v: '}' },
  ]},
  { lang: 'jsx', lines: [
    { t: 'cm', v: '// TRIO HIMS — Healthcare SaaS UI' },
    { t: 'kw', v: 'import' }, { t: 'plain', v: ' React, { useState } ' }, { t: 'kw', v: 'from' }, { t: 'plain', v: ' ' }, { t: 'str', v: "'react'" },
    { t: 'plain', v: '' },
    { t: 'kw', v: 'function' }, { t: 'plain', v: ' ' }, { t: 'fn', v: 'ModuleCard' }, { t: 'plain', v: '({ title, icon, desc }) {' },
    { t: 'kw', v: '  const' }, { t: 'plain', v: ' [hovered, setHovered] = ' }, { t: 'fn', v: 'useState' }, { t: 'plain', v: '(' }, { t: 'kw', v: 'false' }, { t: 'plain', v: ')' },
    { t: 'kw', v: '  return' }, { t: 'plain', v: ' (' },
    { t: 'plain', v: '    <div' },
    { t: 'plain', v: '      className=' }, { t: 'str', v: '`module-card ${hovered && "active"}`' },
    { t: 'plain', v: '      onMouseEnter={() => ' }, { t: 'fn', v: 'setHovered' }, { t: 'plain', v: '(' }, { t: 'kw', v: 'true' }, { t: 'plain', v: ')}' },
    { t: 'plain', v: '      onMouseLeave={() => ' }, { t: 'fn', v: 'setHovered' }, { t: 'plain', v: '(' }, { t: 'kw', v: 'false' }, { t: 'plain', v: ')}' },
    { t: 'plain', v: '    >' },
    { t: 'plain', v: '      <span>{icon}</span>' },
    { t: 'plain', v: '      <h3>{title}</h3>' },
    { t: 'plain', v: '      <p>{desc}</p>' },
    { t: 'plain', v: '    </div>' },
    { t: 'plain', v: '  )' },
    { t: 'plain', v: '}' },
  ]},
];

function CodeTerminal() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [charPos, setCharPos] = useState(0);  // char position in current line text
  const [lineIdx, setLineIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'clearing'
  const reduceMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const snippet = CODE_SNIPPETS[snippetIdx];

  // Blink cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // If reduced-motion, show all lines statically
  useEffect(() => {
    if (reduceMotion.current) {
      setDisplayedLines(snippet.lines.map((l) => ({ ...l, full: true })));
      setPhase('pausing');
    }
  }, [snippet]);

  // Type lines one by one
  useEffect(() => {
    if (reduceMotion.current) return;

    if (phase === 'typing') {
      const lines = snippet.lines;
      if (lineIdx >= lines.length) {
        setPhase('pausing');
        return;
      }
      const currentLine = lines[lineIdx];
      const fullText = currentLine.v;

      if (charPos <= fullText.length) {
        const delay = fullText.length === 0 ? 60 : Math.random() * 30 + 18;
        const id = setTimeout(() => {
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[lineIdx] = { ...currentLine, v: fullText.slice(0, charPos) };
            return next;
          });
          setCharPos((p) => p + 1);
        }, delay);
        return () => clearTimeout(id);
      } else {
        // Line complete, move to next
        const id = setTimeout(() => {
          setLineIdx((l) => l + 1);
          setCharPos(0);
        }, 40);
        return () => clearTimeout(id);
      }
    }

    if (phase === 'pausing') {
      const id = setTimeout(() => setPhase('clearing'), 2800);
      return () => clearTimeout(id);
    }

    if (phase === 'clearing') {
      const id = setTimeout(() => {
        setDisplayedLines([]);
        setLineIdx(0);
        setCharPos(0);
        setSnippetIdx((i) => (i + 1) % CODE_SNIPPETS.length);
        setPhase('typing');
      }, 400);
      return () => clearTimeout(id);
    }
  }, [phase, lineIdx, charPos, snippet]);

  return (
    <div className="code-terminal" aria-label="Animated code editor" aria-hidden="true">
      {/* Terminal chrome */}
      <div className="terminal-chrome">
        <span className="t-dot t-red" />
        <span className="t-dot t-yellow" />
        <span className="t-dot t-green" />
        <span className="t-filename">{snippet.lang === 'python' ? 'model.py' : snippet.lang === 'jsx' ? 'ModuleCard.jsx' : 'server.js'}</span>
      </div>
      {/* Line numbers + code */}
      <div className="terminal-body">
        {displayedLines.map((line, i) => (
          <div className="t-line" key={i}>
            <span className="t-linenum">{i + 1}</span>
            <span className={`t-token t-${line.t}`}>{line.v}</span>
            {i === displayedLines.length - 1 && phase === 'typing' && (
              <span className={`t-cursor ${showCursor ? 'visible' : ''}`}>▌</span>
            )}
          </div>
        ))}
        {/* Cursor on empty state */}
        {displayedLines.length === 0 && (
          <div className="t-line">
            <span className="t-linenum">1</span>
            <span className={`t-cursor ${showCursor ? 'visible' : ''}`}>▌</span>
          </div>
        )}
      </div>
      {/* Status bar */}
      <div className="terminal-status">
        <span>{snippet.lang === 'python' ? 'Python' : snippet.lang === 'jsx' ? 'JSX' : 'JavaScript'}</span>
        <span>UTF-8</span>
        <span>Ln {Math.max(1, displayedLines.length)}</span>
      </div>
    </div>
  );
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
        <a href="#top" className="nav-logo" onClick={close}>
          <span className="nav-logo-arrow">&gt;</span>
          Abhay Golande
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="#contact" className="nav-cta" onClick={close}>
            Let&apos;s Connect
          </a>
          <button
            className="theme-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/Abhay_Golande_Resume_AI_Engineer.docx"
            download
            className="nav-resume-icon"
            aria-label="Download Resume"
          >
            <Download size={15} />
            <span className="tooltip">Download Resume</span>
          </a>
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
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-link" onClick={close}>
              {item.label} <ChevronRight size={13} />
            </a>
          ))}
          <button
            className="mobile-link"
            onClick={toggleTheme}
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
      <div className="hero-left animate-hero-left">
        <div className="hero-badge-row">
          <span className="hero-badge">AI Engineer · Full Stack Developer</span>
          <span className="hero-badge-sep" />
          <span className="hero-badge-status">SYSTEM_READY: TRUE</span>
        </div>
        <h1 className="hero-name">
          ABHAY <span className="accent">GOLANDE</span>
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Selected Work <ExternalLink size={13} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="hero-right animate-hero-right">
        <div className="hero-glow" />
        <div className="hero-image-frame">
          <CodeTerminal />
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
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} className={`stats-bar shell reveal ${visible ? 'revealed' : ''}`}>
      <div className="stat-item">
        <div className="stat-value">7+</div>
        <div className="stat-label">Projects Shipped</div>
        <p className="stat-desc">AI/ML, full-stack, UI/UX, and frontend projects delivered.</p>
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
  const [ref, visible] = useReveal();
  return (
    <section id="about" className={`section shell reveal ${visible ? 'revealed' : ''}`} ref={ref}>
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
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="about-highlights">
          {[
            { label: 'Degree', value: 'B.E. Information Technology' },
            { label: 'CGPA', value: '9.33 / 10' },
            { label: 'Focus', value: 'AI / ML · Full Stack' },
            { label: 'Status', value: 'Open to Internships', accent: true },
          ].map(({ label, value, accent }, i) => (
            <div className="highlight-card" key={label} style={{ animationDelay: `${i * 80}ms` }}>
              <span className="highlight-label">{label}</span>
              <span className={`highlight-value${accent ? ' accent-text' : ''}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills / Stack ─────────────────────────────────────────────────────── */
function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section id="skills" className="section section-alt">
      <div ref={ref} className={`shell reveal ${visible ? 'revealed' : ''}`}>
        <div className="skills-header">
          <div>
            <div className="section-label">TECHNICAL_STACK</div>
            <h2 className="section-title">Technical<br />Ecosystem</h2>
          </div>
          <p className="skills-desc">
            A production-focused ecosystem spanning AI/ML systems, full-stack web delivery,
            and cloud operations — built through hands-on projects and academic rigor.
          </p>
        </div>
        <div className="skill-cards">
          {skillGroups.map((group, i) => (
            <div className="skill-card" key={group.label} style={{ animationDelay: `${i * 70}ms` }}>
              <div className="skill-card-header">
                <span className="skill-card-title">{group.label}</span>
                <span className="skill-card-num">0{i + 1}</span>
              </div>
              <div className="skill-tags">
                {group.items.map((item, j) => (
                  <span className="skill-tag" key={item} style={{ animationDelay: `${i * 70 + j * 30}ms` }}>
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

/* ─── Projects ───────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal(0.08);
  const stackItems = project.stack.split('·').map((s) => s.trim());

  return (
    <article
      ref={ref}
      className={`project-card${project.featured ? ' project-card--featured' : ''} reveal ${visible ? 'revealed' : ''}`}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="project-featured-badge">
          <Star size={10} /> Major Project
        </div>
      )}

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
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-secondary">
              <GitHubIcon size={11} /> GitHub
            </a>
          ) : (
            <a href={profile.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-secondary">
              <GitHubIcon size={11} /> GitHub
            </a>
          )}
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
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
  const [headerRef, headerVisible] = useReveal(0.1);
  return (
    <section id="projects" className="section shell">
      <div ref={headerRef} className={`projects-header reveal ${headerVisible ? 'revealed' : ''}`}>
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
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── Experience / Education ─────────────────────────────────────────────── */
function Experience() {
  const [ref, visible] = useReveal();
  return (
    <section id="experience" className="section section-alt">
      <div ref={ref} className={`shell reveal ${visible ? 'revealed' : ''}`}>
        <div className="section-divider" style={{ marginBottom: '40px' }}>
          <div>
            <div className="section-label">HISTORY_LOG</div>
            <h2>Education</h2>
          </div>
          <div className="section-divider-line" />
          <div className="section-divider-code">ACADEMIC_RECORD</div>
        </div>
        <div className="exp-timeline">
          {education.map((item, i) => (
            <div className="exp-item" key={item.degree + item.detail} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="exp-header">
                <div className="exp-org">
                  {item.school}
                  <span className="exp-role-badge">{item.degree}</span>
                </div>
                <div className="exp-date">{item.detail}</div>
              </div>
            </div>
          ))}
          <div className="exp-item" style={{ animationDelay: '300ms' }}>
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
  const [ref, visible] = useReveal();
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
      <div ref={ref} className={`contact-inner reveal ${visible ? 'revealed' : ''}`}>
        <div className="section-label" style={{ letterSpacing: '0.28em' }}>Available for opportunities</div>
        <h2>Ready to build the next system?</h2>
        <p>I&apos;m actively looking for AI, ML, GenAI, and full-stack internship roles. Feel free to reach out — I respond promptly.</p>
        <a href={`mailto:${profile.email}`} className="contact-email-btn">{profile.email}</a>
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
          <span className="contact-link"><MapPin size={13} /> {profile.location}</span>
        </div>
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
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
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

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  return (
    <>
      <SideBar />
      <Navbar open={menuOpen} setOpen={setMenuOpen} theme={theme} toggleTheme={toggle} />
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
