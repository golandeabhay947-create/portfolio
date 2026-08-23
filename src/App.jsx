import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Award, Code2, Download, ExternalLink, GraduationCap, Link, Mail, MapPin, Menu, Phone, Send, X } from 'lucide-react';
import { achievements, certifications, education, profile, projects, skillGroups } from './portfolioData';

const nav = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

function SectionHeading({ eyebrow, title, children }) {
  return <header className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</header>;
}

function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <>
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={close}>AG<span>.</span></a>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-links ${open ? 'open' : ''}`}>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}<a className="nav-resume" href="/Abhay_Golande_Resume_AI_Engineer.docx" download onClick={close}>Resume <Download size={14} /></a></div>
      </nav>
    </header>
    <main id="top">
      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow">Hello, I’m Abhay.</p><h1>Building thoughtful software <em>with intelligence</em> at its core.</h1><p className="hero-text">{profile.summary}</p><div className="hero-actions"><a className="button primary" href="#projects">View selected work <ArrowDownRight size={18} /></a><a className="button text-button" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={18} /></a></div></div>
        <aside className="hero-side"><div className="availability"><span className="status-dot" /> Open to internship opportunities</div><div className="identity-card"><p>Based in</p><strong>{profile.location}</strong><div className="identity-links"><a href={profile.linkedin} aria-label="LinkedIn profile"><Link size={18} /></a><a href={profile.github} aria-label="GitHub profile"><Code2 size={18} /></a></div></div></aside>
      </section>

      <section id="about" className="about shell section-grid"><SectionHeading eyebrow="01 / About" title="Learning deeply. Building deliberately." /><div className="about-copy"><p>I’m an Information Technology student at the International Institute of Information Technology, Pune, focused on AI-powered and full-stack applications.</p><p>My work spans computer vision, model training and evaluation, RESTful API design, authentication systems, and MVC architecture. I’m seeking an AI Engineer, AI/ML Engineer, GenAI, or full-stack internship role where I can contribute to production-grade applications.</p><a href="/Abhay_Golande_Resume_AI_Engineer.docx" download className="inline-link">Download resume <Download size={16} /></a></div></section>

      <section id="skills" className="skills shell"><SectionHeading eyebrow="02 / Skills" title="A practical technical foundation.">Tools and concepts I’ve used across AI, web, and software projects.</SectionHeading><div className="skill-grid">{skillGroups.map(group => <article className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section id="projects" className="projects shell"><SectionHeading eyebrow="03 / Projects" title="Selected work.">A mix of AI/ML, full-stack, and frontend projects.</SectionHeading><div className="project-list">{projects.map((project, i) => <article className="project" key={project.title}><div className="project-index">0{i + 1}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="stack">{project.stack}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div>{project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><ExternalLink size={20} /></a> : <span className="project-link unavailable" title="No verified project link provided">—</span>}</article>)}</div></section>

      <section id="education" className="background-section"><div className="shell two-column"><div><SectionHeading eyebrow="04 / Education" title="Academic journey." /><div className="education-list">{education.map(item => <article key={item.degree + item.detail}><GraduationCap size={20}/><div><h3>{item.school}</h3><p>{item.degree}</p><span>{item.detail}</span></div></article>)}</div></div><div className="recognition"><SectionHeading eyebrow="05 / Recognition" title="Certifications & achievements." /><div className="recognition-block"><h3><Award size={18}/> Certifications</h3>{certifications.map(item => <p key={item}>{item}</p>)}</div><div className="recognition-block"><h3><Code2 size={18}/> Achievements</h3>{achievements.map(item => <p key={item}>{item}</p>)}</div></div></div></section>

      <section id="contact" className="contact shell"><div><p className="eyebrow">06 / Contact</p><h2>Have a role or idea in mind?</h2><p className="contact-intro">I’d be glad to connect about AI, software, and internship opportunities.</p><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={17}/>{profile.phone}</a><span><MapPin size={17}/>{profile.location}</span></div></div><form className="contact-form" onSubmit={submit}><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Message<textarea name="message" required rows="4" /></label><button className="button primary" type="submit">Compose email <Send size={17}/></button><p className="form-note">Submitting opens a pre-filled email draft in your mail app.</p></form></section>
    </main>
    <footer className="footer shell"><a className="wordmark" href="#top">AG<span>.</span></a><p>© {new Date().getFullYear()} Abhay Golande</p><div><a href={profile.linkedin} aria-label="LinkedIn"><Link size={18}/></a><a href={profile.github} aria-label="GitHub"><Code2 size={18}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a></div></footer>
  </>;
}
export default App;
