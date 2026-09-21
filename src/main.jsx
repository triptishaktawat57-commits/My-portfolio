import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

const skillGroups = [
  { label: 'Currently learning', title: 'Analytics, AI, GST & CBM', detail: 'Strengthening the practical knowledge that supports data-informed financial decisions.' },
  { label: 'Comfortable with', title: 'Accounts, economics & marketing', detail: 'Building on a strong BBA foundation in balance sheets, business thinking, and commercial awareness.' },
  { label: 'Working fluently in', title: 'Hindi & English', detail: 'Clear communication across academic, professional, and collaborative settings.' },
];
const coursework = ['Accounting & taxation', 'Finance, banking & insurance', 'Investment & portfolio management', 'Financial decision analysis', 'Business economics', 'Marketing management'];

function App() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    const updateProgress = () => document.documentElement.style.setProperty('--progress', `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100)}%`);
    addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
    return () => removeEventListener('scroll', updateProgress);
  }, []);
  const sendEmail = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setIsSending(true); setMessage('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/triptishaktawat57@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `New portfolio message from ${data.name}`, _template: 'table', _captcha: 'false' }),
      });
      if (!response.ok) throw new Error('Message could not be sent.');
      form.reset();
      setMessage('Message sent successfully — thank you for reaching out.');
    } catch {
      setMessage('We could not send the message. Please email Tripti directly at triptishaktawat57@gmail.com.');
    } finally { setIsSending(false); }
  };
  return <>
    <div className="noise"/><div className="progress" style={{ width: 'var(--progress, 0%)' }} aria-hidden="true"/>
    <header className={`nav ${menuOpen ? 'open' : ''}`}><a className="brand" href="#home" aria-label="Tripti Shaktawat home">TS<span>°</span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/></button><nav>{[['About', '#about'], ['Journey', '#journey'], ['Capabilities', '#skills'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav></header>
    <main>
      <section className="hero" id="home"><div className="hero-grid"/><div className="orb orb-one"/><div className="orb orb-two"/><div className="hero-badge">Available for<br/><strong>analyst opportunities</strong></div><p className="eyebrow">01 — INTRODUCTION</p><h1><span className="reveal-line">Hi, I’m <em>Tripti</em></span><span className="reveal-line">Shaktawat<span className="dot">.</span></span></h1><div className="hero-bottom"><p className="hero-copy">BBA student. Future <strong>financial analyst.</strong> I’m blending commercial understanding with analytics and AI to make thoughtful decisions from data.</p><div className="hero-actions"><a className="button" href="#journey">Explore my journey <b>↘</b></a><a className="text-link" href="#contact">Let’s connect <span>→</span></a></div></div><p className="hero-tag">BBA STUDENT <i>•</i> ANALYTICS LEARNER <i>•</i> BHILWARA, INDIA</p><div className="scroll-cue">SCROLL <span/></div></section>
      <section className="intro section" id="about"><p className="eyebrow">02 — ABOUT ME</p><div className="intro-layout"><h2>I’m building my<br/><em>own independence.</em></h2><div className="intro-copy"><p>I’m Tripti, a BBA student at MDSU with a clear goal: become financially independent through meaningful, analytical work.</p><p>I’m curious by nature and committed to learning. As I explore analytics, AI, finance, and modern business tools, I’m developing the confidence to turn numbers into useful insight—and insight into action.</p><a href="#skills" className="under-link">Explore my capabilities <span>↘</span></a></div></div><div className="values"><div><span>01</span><h3>Ambitious</h3><p>Focused on a career built through continuous learning and real independence.</p></div><div><span>02</span><h3>Analytical</h3><p>Drawn to finance, structure, and the stories that data can reveal.</p></div><div><span>03</span><h3>Curious</h3><p>Always exploring the next tool, idea, or skill worth understanding.</p></div></div></section>
      <section className="education section" id="journey"><p className="eyebrow">03 — EDUCATION</p><div className="edu-head"><h2>Building a<br/><em>business foundation.</em></h2><p>Bachelor of Business Administration at Maharshi Dayanand Saraswati University, 2024–2027.</p></div><article className="timeline-card visible"><div className="timeline-line"/><p className="mono">SEMESTER 05</p><div><p className="date">2026 — PRESENT</p><h3>Bachelor of Business<br/>Administration</h3><p className="institution">MDSU, AJMER</p></div><ul><li>Expected graduation: 2027</li><li>1st semester: 8.1 CGPA</li><li>2nd semester: 7.6 CGPA</li><li>3rd semester: 8.2 CGPA</li></ul><span className="card-arrow">↗</span></article><div className="coursework"><p className="mono">RELEVANT COURSE AREAS</p><div>{coursework.map(item => <span key={item}>{item}</span>)}</div><small>Course options vary by semester and elective selection.</small></div><div className="school-row"><span>ACADEMIC FOUNDATION</span><p>Class 10 — <strong>91.2%</strong></p><p>Class 11 — <strong>91.2%</strong></p><p>Class 12 — <strong>88%</strong></p></div></section>
      <section className="skills section" id="skills"><p className="eyebrow">04 — CAPABILITY MAP</p><h2>Learning with<br/><em>focus.</em></h2><p className="skills-lede">I’m growing the financial and technical fluency required to become a confident analyst.</p><div className="skill-list">{skillGroups.map((skill, index) => <button className={`skill ${activeSkill === index ? 'active' : ''}`} key={skill.label} onClick={() => setActiveSkill(index)}><span className="skill-no">0{index + 1}</span><span>{skill.label}</span><b>{skill.title}</b><i>{activeSkill === index ? '×' : '+'}</i></button>)}</div><div className="skill-detail"><span>✦</span><p>{skillGroups[activeSkill].detail}</p></div></section>
      <section className="building section" id="projects"><p className="eyebrow">05 — WORK IN PROGRESS</p><div className="building-box"><div className="star">✦</div><p className="mono">CURRENTLY BUILDING</p><h2>Practice into<br/><em>proof.</em></h2><p>I’m preparing projects that bring together finance, business, analytics, and AI. This is where the work will live as it takes shape.</p><a href="mailto:triptishaktawat57@gmail.com" className="button light">Start a conversation <b>↗</b></a><div className="building-shape"/></div></section>
      <section className="roadmap section"><p className="eyebrow">06 — LEARNING JOURNEY</p><div className="roadmap-head"><h2>On the path to<br/><em>financial analysis.</em></h2><p>A deliberate path from BBA fundamentals to data-driven financial thinking.</p></div><div className="roadmap-list"><article><span>NOW</span><h3>Strengthen</h3><p>Deepening my understanding of analytics, AI, GST, CBM, and financial foundations.</p></article><article><span>NEXT</span><h3>Apply</h3><p>Turning classroom knowledge into practical analysis and portfolio-ready work.</p></article><article><span>FUTURE</span><h3>Analyse</h3><p>Beginning a career as a financial analyst, where business context meets better decisions.</p></article></div></section>
      <section className="contact" id="contact"><p className="eyebrow">07 — GET IN TOUCH</p><h2>Let’s make<br/><em>numbers matter.</em></h2><p className="contact-copy">For analyst opportunities, collaborations, or a thoughtful conversation, I’d be happy to connect.</p><div className="contact-links"><a href="mailto:triptishaktawat57@gmail.com">triptishaktawat57@gmail.com <span>↗</span></a><a href="https://www.linkedin.com/in/tripti-shaktawat-236728425/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><p>Bhilwara, Rajasthan, India</p></div><form onSubmit={sendEmail}><label>Name<input required name="name" type="text" placeholder="Your name"/></label><label>Email<input required name="email" type="email" placeholder="you@example.com"/></label><label>Message<textarea required name="message" placeholder="Tell me what’s on your mind"/></label><button className="button" type="submit" disabled={isSending}>{isSending ? 'Sending…' : 'Send message'} <b>↗</b></button>{message && <p className="form-note" aria-live="polite">{message}</p>}</form></section>
    </main>
    <footer><a className="brand" href="#home">TS<span>°</span></a><p>Business-minded. Analytical. Always learning.</p><button className="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button><small>© {new Date().getFullYear()} Tripti Shaktawat</small></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
