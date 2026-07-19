'use client';

import { useEffect, useState } from 'react';
import { Star, Terminal, Database, Presentation, Briefcase, Award, ArrowRight, MapPin, Globe, DollarSign, Phone, Clock, CheckCircle } from 'lucide-react';
import { timezones, countryCodes } from './data';

const HeroMetrics = ({ className }: { className?: string }) => (
  <div className={className}>
    <div className="metric">
      <span className="metric-val">
        <Star size={18} fill="currentColor" /> 5.0
      </span>
      <span className="metric-label">Avg. Rating</span>
    </div>
    <div className="metric">
      <span className="metric-val">11+</span>
      <span className="metric-label">5-Star Reviews</span>
    </div>
    <div className="metric">
      <span className="metric-val">$15</span>
      <span className="metric-label">per 50 min</span>
    </div>
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      author: "Shilpa",
      date: "Jul 2026",
      text: "Akshat is an incredible mentor. As someone from a healthcare background with no coding experience, I was surprised by how easy he made learning to code. He explains complex concepts with clarity, ensures you truly understand them, and pushes you to do your best."
    },
    {
      author: "Adarsh",
      date: "Jun 2026",
      text: "Earlier, python felt like a nightmare for me, but Akshat made it incredibly easy to understand and learn. He turned what used to be a frustrating experience into an enjoyable one. I only wish I had found him as a tutor much earlier!"
    },
    {
      author: "Mohsin",
      date: "Jun 2026",
      text: "Excellent knowledge."
    },
    {
      author: "Anup",
      date: "Jun 2026",
      text: "Akshat as an educator is brilliant. I like his pace and he takes time to make you understand the concept. He pushes you to reflect and practice on the learnings. I highly recommend Akshat to all the newcomers."
    },
    {
      author: "Tushar",
      date: "May 2026",
      text: "I'm really impressed by Akshat. Despite being only 22, he teaches like a seasoned pro. Clear explanations, fun projects, and tons of encouragement. He helped me overcome imposter syndrome and complete my first portfolio project."
    },
    {
      author: "Mariam",
      date: "Dec 2025",
      text: "Akshat is an incredibly skilled and dedicated teacher. He explains everything clearly and makes even difficult concepts easy to understand. He has helped me tremendously with my assignments."
    },
    {
      author: "satya",
      date: "Jun 2026",
      text: "Very clear explination."
    },
    {
      author: "PK",
      date: "Aug 2025",
      text: "My daughter has been learning from Akshat for the past 4 months and she really likes the way Akshat goes through all the basics of Python and clearly explains them. Akshat is a great tutor."
    },
    {
      author: "Firdaus",
      date: "Sep 2025",
      text: "He was precise and ensured that I understand the things that were being taught."
    },
    {
      author: "Saurabh",
      date: "May 2025",
      text: "It's been great learning from Akshat. He comes with passion to understand the areas of improvement required, goes to basics to address the root cause, progresses to joint problem solving and finally to a working program. Got my son ready for IGCSE A level practicals in under 15 days."
    },
    {
      author: "Mitesh",
      date: "May 2025",
      text: "He is incredibly patient, highly intelligent, and explains all the concepts in a clear and simple manner. Each session he gives questions to resolve ourselves, which is very helpful to revise concepts and build programming logic."
    }
  ];

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'background', label: 'Background' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-brand">Akshat.</span>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta">Book a Lesson</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="wrap hero-layout">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for new students
              </div>

              <h1>Learn Python<br />the right way.</h1>

              <p className="hero-desc">
                I&apos;m Akshat Singh, an IIT Delhi graduate and AI/ML engineer. I offer premium, highly personalized lectures in Python, Data Science, and AI. These are intensive sessions designed for serious learners, priced accordingly at $15 per class.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  Book a Trial Lesson <ArrowRight size={18} />
                </a>
                <a href="#reviews" className="btn-secondary">
                  Read Reviews
                </a>
              </div>

              <HeroMetrics className="hero-metrics desktop-metrics" />
            </div>

            <div className="hero-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/akshat.png"
                alt="Akshat Singh"
              />
            </div>

            <HeroMetrics className="hero-metrics mobile-metrics" />
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="section">
          <div className="wrap">
            <p className="section-label">About</p>
            <h2 className="section-heading">Coding since grade 11.</h2>
            <p className="section-desc">
              My programming journey started in school, and my drive for problem-solving led me to IIT Delhi, one of the most competitive institutes in the world. Today, I channel that experience into teaching Python in a way that&apos;s structured, practical, and results-driven.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <p className="about-card-label">Location</p>
                <p className="about-card-value"><MapPin size={16} style={{display:'inline', verticalAlign:'text-bottom', marginRight:'6px'}} />India</p>
              </div>
              <div className="about-card">
                <p className="about-card-label">Languages</p>
                <p className="about-card-value"><Globe size={16} style={{display:'inline', verticalAlign:'text-bottom', marginRight:'6px'}} />English (C2), Hindi (Native)</p>
              </div>
              <div className="about-card">
                <p className="about-card-label">Lesson Rate</p>
                <p className="about-card-value"><DollarSign size={16} style={{display:'inline', verticalAlign:'text-bottom', marginRight:'6px'}} />$15 / 50-min lesson</p>
              </div>
              <div className="about-card">
                <p className="about-card-label">Approach</p>
                <p className="about-card-value">100% adaptable to your goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SPECIALTIES ─── */}
        <section id="specialties" className="section">
          <div className="wrap">
            <p className="section-label">What I Teach</p>
            <h2 className="section-heading">Targeted learning paths.</h2>
            <p className="section-desc">
              Whether you&apos;re writing your first line of code or preparing for a technical interview, I meet you where you are.
            </p>

            <div className="spec-grid">
              <div className="spec-card">
                <div className="spec-icon"><Terminal size={22} /></div>
                <h3>Python for Beginners</h3>
                <p>Teaching Python from the very basics. I&apos;ve helped kids, college students, job seekers, and working professionals switch to Python or level up their skills.</p>
              </div>
              <div className="spec-card">
                <div className="spec-icon"><Database size={22} /></div>
                <h3>Data Science & AI</h3>
                <p>Data Analytics, Machine Learning, and AI. From deriving insights and building models to understanding the theory behind them.</p>
              </div>
              <div className="spec-card">
                <div className="spec-icon"><Presentation size={22} /></div>
                <h3>Interview Prep</h3>
                <p>Structured preparation for Python technical interviews. I&apos;ve supported career transitions and guided students through the entire interview pipeline.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BACKGROUND ─── */}
        <section id="background" className="section">
          <div className="wrap">
            <p className="section-label">Background</p>
            <h2 className="section-heading">Experience & Education</h2>
            <p className="section-desc">
              A track record of academic excellence and professional experience.
            </p>

            <div className="timeline">
              <div className="tl-item">
                <span className="tl-date">2026</span>
                <div className="tl-content">
                  <p className="tl-title">Data Science Essentials with Python</p>
                  <p className="tl-org">Certification</p>
                  <p className="tl-desc">Demonstrated ability to use Python and industry-standard libraries to explore, visualize, and model data.</p>
                  <a href="https://www.credly.com/badges/6050c2c7-b34d-45b6-9e98-cc31004f3fce/public_url" target="_blank" rel="noopener noreferrer" className="tl-badge">✓ Verified</a>
                </div>
              </div>

              <div className="tl-item">
                <span className="tl-date">2023 – 26</span>
                <div className="tl-content">
                  <p className="tl-title">AI / ML Engineer</p>
                  <p className="tl-org">TraBii Entertainment Pvt. Ltd.</p>
                </div>
              </div>

              <div className="tl-item">
                <span className="tl-date">2022 – 26</span>
                <div className="tl-content">
                  <p className="tl-title">Bachelor of Technology (B.Tech)</p>
                  <p className="tl-org">Indian Institute of Technology (IIT), Delhi</p>
                  <p className="tl-desc">India&apos;s premier engineering institute. Rigorous analytical problem-solving combined with advanced computational methods.</p>
                </div>
              </div>

              <div className="tl-item">
                <span className="tl-date">2021</span>
                <div className="tl-content">
                  <p className="tl-title">Class 12, PCM with Computer Science</p>
                  <p className="tl-org">St. Mary&apos;s Inter College · CBSE</p>
                  <p className="tl-desc">Scored <strong>98.2%</strong> in board examinations.</p>
                </div>
              </div>

              <div className="tl-item">
                <span className="tl-date">2019</span>
                <div className="tl-content">
                  <p className="tl-title">Class 10</p>
                  <p className="tl-org">St. Mary&apos;s Inter College · CBSE</p>
                  <p className="tl-desc">Scored <strong>98.2%</strong> in board examinations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── REVIEWS ─── */}
        <section id="reviews" className="section">
          <div className="wrap">
            <p className="section-label">Social Proof</p>
            <h2 className="section-heading">Loved by students.</h2>
            <p className="section-desc">
              Every single one of these is a real, 5-star review from a real student.
            </p>

            <div className="reviews-cols">
              {reviews.map((r, i) => (
                <div key={i} className="review">
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="review-body">&ldquo;{r.text}&rdquo;</p>
                  <div className="review-footer">
                    <span className="review-name">{r.author}</span>
                    <span className="review-date">{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="section" style={{ background: 'var(--bg-elevated)' }}>
          <div className="wrap">
            <p className="section-label">Get Started</p>
            <h2 className="section-heading">Book a trial lesson.</h2>
            <p className="section-desc">
              Tell me about your goals and I&apos;ll create a plan tailored to you.
            </p>

            <div className="contact-layout">
              <div className="contact-info">
                <h3>Why start now?</h3>
                <p>
                  The first lesson is where we figure out exactly where you are and where you want to go. No prep needed, just come with your questions.
                </p>
                <div className="contact-detail">
                  <DollarSign size={18} />
                  <span>$15 per 50-minute lesson</span>
                </div>
                <div className="contact-detail">
                  <Globe size={18} />
                  <span>English & Hindi</span>
                </div>
                <div className="contact-detail">
                  <MapPin size={18} />
                  <span>Online, anywhere in the world</span>
                </div>
              </div>

              <div className="contact-form">
                {isSubmitted ? (
                  <div className="success-message" style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <CheckCircle size={48} style={{ color: '#4ade80', margin: '0 auto 1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>Thank You!</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Your query has been submitted. I will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value="9a18b350-b656-4350-a78a-f097bdcf8da1" />
                    <input type="hidden" name="subject" value="New Tutoring Inquiry" />

                    <div className="form-row">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="Jane Doe" required />
                    </div>
                    <div className="form-row">
                      <label>Email</label>
                      <input type="email" name="email" placeholder="jane@example.com" required />
                    </div>
                    <div className="form-row phone-row">
                      <div className="phone-col-1">
                        <label>Country Code</label>
                        <select name="country_code" required className="form-input">
                          <option value="">Select...</option>
                          {countryCodes.map((c, i) => (
                            <option key={i} value={c.code}>{c.name} ({c.code})</option>
                          ))}
                        </select>
                      </div>
                      <div className="phone-col-2">
                        <label>WhatsApp Number</label>
                        <input type="tel" name="whatsapp" placeholder="e.g. 234 567 8900" required className="form-input" />
                      </div>
                    </div>
                    <div className="form-row">
                      <label>What do you want to learn?</label>
                      <textarea name="message" placeholder="I want to learn Python for data analysis..." required />
                    </div>

                    <button type="submit" className="btn-primary form-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer">
          <span>© {new Date().getFullYear()} Akshat Singh</span>
          <span>Python & Data Science Tutor</span>
        </div>
      </footer>
    </>
  );
}
