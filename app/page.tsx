'use client';

import { Star, Terminal, Database, Presentation, Briefcase, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  const reviews = [
    {
      author: "Shilpa",
      date: "July 5, 2026",
      text: "Akshat is an incredible mentor. As someone from a healthcare background with no coding experience, I was surprised by how easy he made learning to code. He explains complex concepts with clarity, ensures you truly understand them, and pushes you to do your best."
    },
    {
      author: "Adarsh",
      date: "June 21, 2026",
      text: "Earlier, python felt like a nightmare for me, but Akshat made it incredibly easy to understand and learn. He turned what used to be a frustrating experience into an enjoyable one. I only wish I had found him as a tutor much earlier!"
    },
    {
      author: "Anup",
      date: "June 16, 2026",
      text: "Akshat as an educator is brilliant. I like his pace and he takes time to make you understand the concept. Even he pushes you to reflect and practice on the learnings. I highly recommend Akshat to all the newcomers."
    },
    {
      author: "Tushar",
      date: "May 17, 2026",
      text: "\"I’m really impressed by Akshat. Despite being only 22, he teaches like a seasoned pro — clear explanations, fun projects, and tons of encouragement. He helped me overcome imposter syndrome and complete my first portfolio project.\""
    },
    {
      author: "Mariam",
      date: "December 4, 2025",
      text: "Akshat is an incredibly skilled and dedicated teacher. He explains everything clearly and makes even difficult concepts easy to understand. He has helped me tremendously with my assignments. He teaches you Python from the very basics."
    },
    {
      author: "Saurabh",
      date: "May 23, 2025",
      text: "It's been great learning from Akshat, comes with passion to understand the areas of improvement required, goes to basics to address the root cause in lack of understanding the concept, progresses to joint problem solving and finally to the outcome of a working program."
    },
    {
      author: "Mitesh",
      date: "May 7, 2025",
      text: "I started working with Akshat on my journey to learning Python. I had an excellent experience learning Python with Akshat! He is incredibly patient, highly intelligent, and explains all the concepts in a clear and simple manner."
    },
    {
      author: "satya",
      date: "June 23, 2026",
      text: "Very clear explination."
    },
    {
      author: "PK",
      date: "August 22, 2025",
      text: "My daughter has been learning from Akshat for the past 4 months and she really likes the way Akshat goes through all the basics of Python and clearly explains them. Akshat is a great tutor."
    }
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">Akshat.</div>
          <a href="#contact" className="nav-cta">Book a Lesson</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Master Python & <br/>Data Science.</h1>
            <p>From absolute beginners to working professionals. I teach Python, Data Analytics, and AI in a way that just makes sense.</p>
            
            <a href="#contact" className="primary-btn">
              Start Learning Today <ArrowRight size={20} />
            </a>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-val"><Star size={24} fill="currentColor"/> 5.0</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat">
                <span className="stat-val">100%</span>
                <span className="stat-label">Adaptable Teaching</span>
              </div>
              <div className="stat">
                <span className="stat-val">11+</span>
                <span className="stat-label">5-Star Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            {/* Highly converting professional coding imagery */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&w=800&q=80" 
              alt="Programming code on screen" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">An IIT Delhi graduate and professional AI/ML Engineer dedicated to helping you achieve your desired results in weeks.</p>
          </div>
          <div className="card">
            <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              I’m Akshat. I teach Python in a simple, structured way so anyone can start coding from day one. Whether you are a kid learning for the first time, a college student, or a working professional aiming to switch careers, I adapt my curriculum to fit your unique situation.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div>
                <strong style={{ color: '#fff' }}>Base Rate</strong>
                <p style={{ color: 'var(--text-secondary)' }}>$13 / 50-min lesson</p>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Languages</strong>
                <p style={{ color: 'var(--text-secondary)' }}>English (C2), Hindi (Native)</p>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Location</strong>
                <p style={{ color: 'var(--text-secondary)' }}>India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Specialties</h2>
            <p className="section-subtitle">Targeted learning paths to reach your goals faster.</p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <Terminal className="card-icon" size={32} />
              <h3>Python for Beginners</h3>
              <p>My main expertise lies in teaching Python from the very beginning. I help job seekers and professionals switch to Python or advance their current skills seamlessly.</p>
            </div>
            
            <div className="card">
              <Database className="card-icon" size={32} />
              <h3>Data Science & AI</h3>
              <p>I excel at Data Analytics, Machine Learning, and AI topics. I have extensive experience deriving insights from data, building models, and teaching these advanced subjects.</p>
            </div>
            
            <div className="card">
              <Presentation className="card-icon" size={32} />
              <h3>Interview Preparation</h3>
              <p>I have prepared individuals for Python interviews, supported career transitions, and guided them through effective interview prep to achieve their professional goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience & Certifications</h2>
          </div>
          
          <div style={{ maxWidth: '800px' }}>
            <div className="exp-timeline">
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-date">2023 — 2026</div>
                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Briefcase size={24} />
                    <h3 style={{ margin: 0 }}>AI ML Engineer</h3>
                  </div>
                  <p>TraBii Entertainment Private Limited</p>
                </div>
              </div>
              
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-date">2026</div>
                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Award size={24} />
                    <h3 style={{ margin: 0 }}>Data Science Essentials With Python</h3>
                  </div>
                  <p style={{ marginBottom: '1rem' }}>
                    Successfully completed the Data Science Essentials with Python course, demonstrating the ability to use Python and industry-standard libraries to explore, visualize, and model data.
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#fff', background: '#262626', padding: '0.25rem 0.75rem', borderRadius: '16px' }}>
                    ✓ Certificate verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Loved by Students</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Join 11+ happy students who transformed their coding skills.</p>
          </div>
          
          <div className="masonry-grid">
            {reviews.map((review, i) => (
              <div key={i} className="masonry-item">
                <div className="review-card">
                  <div className="review-stars">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author-block">
                    <span className="review-author">{review.author}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to start?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Book a trial lesson and let's discuss your goals.</p>
          </div>
          
          <div className="card">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Tutoring Inquiry" />
              
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-input" placeholder="Jane Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" placeholder="jane@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">What are your learning goals?</label>
                <textarea name="message" className="form-input" placeholder="I want to learn Python for data analysis..." required></textarea>
              </div>
              
              <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Akshat S. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
