import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, ChevronDown, BookOpen, Award } from 'lucide-react'
import logo from './assets/kfs_logo.jpeg'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

const courses = [
  { icon: '⚗️', name: 'BSc Chemistry' },
  { icon: '🦠', name: 'BSc Microbiology' },
  { icon: '🌿', name: 'BSc Botany' },
  { icon: '🐾', name: 'BSc Zoology' },
  { icon: '🧬', name: 'BSc Biochemistry' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'white',
        borderBottom: '3px solid #c0392b',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 6%',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)'
      }}>
        <img src={logo} alt="KFS Logo" style={{ height: 56, objectFit: 'contain' }} />

        <div style={{ display: 'flex', gap: 32, fontWeight: 600, fontSize: 15 }} className="nav-links">
          {['Home', 'About', 'Courses', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#1a2357', textDecoration: 'none', letterSpacing: 0.3,
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = '#c0392b'}
              onMouseLeave={e => e.target.style.color = '#1a2357'}>
              {item}
            </a>
          ))}
        </div>

        <a href="tel:7736025600" style={{
          background: '#c0392b', color: 'white',
          padding: '10px 22px', borderRadius: 6,
          fontWeight: 700, textDecoration: 'none', fontSize: 14,
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 4px 14px rgba(192,57,43,0.35)'
        }}>
          <Phone size={15} /> Call Now
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: 5
        }} className="hamburger" aria-label="Menu">
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'white', padding: '16px 6%',
          borderBottom: '1px solid #eee', display: 'flex',
          flexDirection: 'column', gap: 16
        }}>
          {['Home', 'About', 'Courses', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#1a2357', fontWeight: 600, textDecoration: 'none', fontSize: 16 }}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{
        background: 'linear-gradient(140deg, #111840 0%, #1a2357 50%, #2c3e7a 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '100px 6% 80px',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)',
          top: -150, right: -120, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%)',
          bottom: -100, left: -80, pointerEvents: 'none'
        }} />

        {/* Eyebrow — English */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{
            fontSize: 13, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: '#f5a623', marginBottom: 20
          }}>
          Kerala Finishing School Presents
        </motion.p>

        {/* Main headline — Malayalam ONLY */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: "'Noto Sans Malayalam', sans-serif",
            fontSize: 'clamp(30px, 5.5vw, 58px)',
            fontWeight: 900, lineHeight: 1.4,
            maxWidth: 820, margin: '0 auto 24px', color: 'white'
          }}>
          എന്തുകൊണ്ട് സയൻസ് ബിരുദം എടുത്തവർക്ക്{' '}
          <span style={{ color: '#f5a623' }}>ജോലി ലഭിക്കുന്നില്ല?</span>
        </motion.h1>

        {/* Sub — English */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            fontSize: 'clamp(15px, 2vw, 19px)',
            maxWidth: 620, margin: '0 auto 40px',
            opacity: 0.82, lineHeight: 1.85
          }}>
          A professional bridge course that opens the door to lifetime career
          opportunities for science graduates.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <a href="tel:7736025600" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#c0392b', color: 'white',
            padding: '15px 32px', borderRadius: 7,
            fontWeight: 700, fontSize: 17, textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(192,57,43,0.4)'
          }}>
            <Phone size={18} /> Call Us — 7736025600
          </a>
          <a href="#about" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: 'white',
            padding: '14px 28px', borderRadius: 7,
            fontWeight: 600, fontSize: 16, textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.35)'
          }}>
            Learn More
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['🎓 BSc Graduates', '🔬 Science Streams', '💼 Career Bridge'].map(badge => (
            <span key={badge} style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.85)',
              padding: '8px 16px', borderRadius: 999,
              fontSize: 13, fontWeight: 500
            }}>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8,
          color: 'rgba(255,255,255,0.35)', fontSize: 11,
          letterSpacing: 2, textTransform: 'uppercase'
        }}>
          <span>Scroll to explore</span>
          <ChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section id="about" style={{ padding: '80px 6%', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: '#c0392b', marginBottom: 12
          }}>
            The Problem
          </p>

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(24px, 4vw, 40px)', color: '#1a2357',
              fontWeight: 800, marginBottom: 44, lineHeight: 1.25
            }}>
            Why Science Graduates Struggle to Find Jobs
          </motion.h2>

          {/* Malayalam problem cards */}
          {[
            { icon: '📋', text: 'ബിഎസ്സി കെമിസ്ട്രി, ബിഎസ്സി മൈക്രോബയോളജി, ബിഎസ്സി ബോട്ടണി, ബിഎസ്സി സുവോളജി, ബിഎസ്സി ബയോകെമിസ്ട്രി എന്നീ കോഴ്‌സുകൾ കഴിഞ്ഞ ബിരുദധാരികൾ ജോലി ലഭിക്കാൻ ബുദ്ധിമുട്ടുകയാണ്.' },
            { icon: '🎯', text: 'പ്രധാനമായും ഇവരിൽ പലരും ശരിയായ കരിയർ പ്ലാൻ ചെയ്യാതെയാണ് ഈ കോഴ്സുകൾക്ക് അഡ്മിഷൻ എടുക്കുന്നത്. കോഴ്സ് കഴിയുമ്പോൾ ഈ ഡിഗ്രികൾ കൊണ്ട് ഉദ്ദേശിച്ചത് പോലെ ജോലിയോ ഉപയോഗമോ ലഭിക്കുന്നില്ല.' },
            { icon: '📊', text: 'മറ്റ് പ്രൊഫഷണൽ കോഴ്സുകളുമായി താരതമ്യം ചെയ്യുമ്പോൾ, മേൽ പറഞ്ഞ കോഴ്സുകൾ ചെയ്ത വിദ്യാർത്ഥികളുടെ എണ്ണം താരതമ്യേന ഒരുപാട് കൂടുതലാണ്.' },
          ].map((card, i) => (
            <motion.div key={i}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={i}
              style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: '#fdfaf6',
                border: '1px solid #e8e2da',
                borderLeft: '4px solid #c0392b',
                borderRadius: 12, padding: '22px 26px',
                marginBottom: 18, transition: 'all 0.3s'
              }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{card.icon}</span>
              <p style={{
                fontFamily: "'Noto Sans Malayalam', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                lineHeight: 1.95, color: '#2a2a3e', margin: 0
              }}>
                {card.text}
              </p>
            </motion.div>
          ))}

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }}>
            {[
              { number: '5+', label: 'Science Streams Affected' },
              { number: '1000s', label: 'Graduates Without Jobs' },
              { number: '1', label: 'Solution — KFS Bridge' },
            ].map((stat, i) => (
              <motion.div key={stat.label}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                style={{
                  textAlign: 'center', background: '#1a2357',
                  color: 'white', borderRadius: 12,
                  padding: '28px 16px', display: 'flex',
                  flexDirection: 'column', gap: 8
                }}>
                <span style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  fontWeight: 900, color: '#f5a623', lineHeight: 1
                }}>
                  {stat.number}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.85 }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" style={{ padding: '80px 6%', background: '#f4f0eb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: '#c0392b', marginBottom: 12
          }}>
            Who We Help
          </p>

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(24px, 4vw, 40px)', color: '#1a2357',
              fontWeight: 800, marginBottom: 12
            }}>
            Eligible Science Graduates
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ color: '#5a5a72', fontSize: 16, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
            If you hold any of these degrees and are struggling to find employment,
            KFS has a dedicated bridge programme designed for you.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {courses.map((course, i) => (
              <motion.div key={course.name}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(26,35,87,0.14)' }}
                style={{
                  background: 'white', borderRadius: 12,
                  padding: '26px 22px',
                  border: '1px solid #e8e2da',
                  display: 'flex', alignItems: 'center', gap: 16,
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s'
                }}>
                <span style={{ fontSize: 34, lineHeight: 1 }}>{course.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#1a2357', fontSize: 16, margin: 0 }}>{course.name}</p>
                  <span style={{
                    display: 'inline-block', marginTop: 6,
                    background: 'rgba(46,125,50,0.1)', color: '#2e7d32',
                    border: '1px solid rgba(46,125,50,0.25)',
                    fontSize: 11, fontWeight: 700, letterSpacing: 1,
                    textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999
                  }}>
                    Eligible
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION / CTA ── */}
      <section style={{ background: '#111840', color: 'white', padding: '80px 6%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 64, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: 3,
              textTransform: 'uppercase', color: '#f5a623', marginBottom: 12
            }}>
              Our Solution
            </p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(22px, 3.5vw, 36px)',
                fontWeight: 800, marginBottom: 20, lineHeight: 1.3
              }}>
              We Are Changing the Future of Science Graduates
            </motion.h2>

            {/* Malayalam quote */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{
                fontFamily: "'Noto Sans Malayalam', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                color: 'rgba(255,255,255,0.75)', lineHeight: 1.9,
                marginBottom: 36, padding: '16px 20px',
                borderLeft: '3px solid #f5a623',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '0 8px 8px 0'
              }}>
              ഈ അവസ്ഥയ്ക്ക് മാറ്റം ഉണ്ടാക്കുന്നതിനുവേണ്ടി കേരള ഫിനിഷിംഗ് സ്കൂൾ
              നിരന്തരം ശ്രമിച്ചുകൊണ്ടിരിക്കുകയാണ്.
            </motion.p>

            {/* Features */}
            {[
              { icon: '🌉', title: 'Professional Bridge Course', desc: 'A structured programme connecting your BSc degree to industry-relevant skills.' },
              { icon: '💼', title: 'Lifetime Career Support', desc: 'Placement support ensures opportunities throughout your professional career.' },
              { icon: '🎯', title: 'Industry-Focused Training', desc: 'Curriculum designed with employers covering what the job market demands.' },
            ].map((f, i) => (
              <motion.div key={f.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#f5a623', fontSize: 15, marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — CTA Card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{
              background: 'white', color: '#1a1a2e',
              borderRadius: 20, padding: '38px 34px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              position: 'relative', overflow: 'hidden'
            }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(46,125,50,0.12)', color: '#2e7d32',
                border: '1px solid rgba(46,125,50,0.3)',
                fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                textTransform: 'uppercase', padding: '5px 14px',
                borderRadius: 999, marginBottom: 20
              }}>
                Free Consultation
              </span>

              <h3 style={{
                fontFamily: "'Noto Sans Malayalam', sans-serif",
                fontSize: 'clamp(17px, 2vw, 21px)',
                fontWeight: 800, color: '#1a2357',
                marginBottom: 10, lineHeight: 1.4
              }}>
                കൂടുതൽ വിവരങ്ങൾക്ക് വിളിക്കൂ
              </h3>

              <p style={{ fontSize: 14, color: '#5a5a72', lineHeight: 1.65, marginBottom: 26 }}>
                Talk to our counsellors today and find the right path for your career.
              </p>

              <a href="tel:7736025600" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                width: '100%', background: '#c0392b', color: 'white',
                padding: 16, borderRadius: 7,
                fontSize: 20, fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(192,57,43,0.35)'
              }}>
                <Phone size={20} /> 7736025600
              </a>

              <p style={{ textAlign: 'center', color: '#aaa', fontSize: 13, margin: '14px 0' }}>or</p>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center',
                color: '#1a2357', fontWeight: 600, fontSize: 14, textDecoration: 'none'
              }}>
                View Contact Details →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ── */}
      <section id="contact" style={{ background: '#1a1a2e', color: 'white', padding: '60px 6% 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48 }}>

          {/* Brand */}
          <div>
            <img src={logo} alt="KFS" style={{ height: 60, marginBottom: 14, filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <p style={{
              fontFamily: "'Noto Sans Malayalam', sans-serif",
              fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 4
            }}>
              കേരള ഫിനിഷിംഗ് സ്കൂൾ
            </p>
           
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 260 }}>
              Empowering science graduates with professional bridge courses that open doors to lifelong career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>Quick Links</p>
            {['Home', 'About', 'Courses', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                display: 'block', color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', fontSize: 14, marginBottom: 10,
                transition: 'color 0.2s'
              }}
                onMouseEnter={e => e.target.style.color = '#f5a623'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                {item}
              </a>
            ))}
          </div>

          {/* Courses */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>Courses</p>
            {courses.map(c => (
              <p key={c.name} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 10 }}>{c.name}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>Contact Us</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Phone size={15} color="#f5a623" />
              <a href="tel:7736025600" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
                7736025600
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <MapPin size={15} color="#f5a623" />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Thiruvananthapuram, Kerala</span>
            </div>
            <a href="tel:7736025600" style={{
              display: 'block', textAlign: 'center',
              background: '#c0392b', color: 'white',
              padding: '12px 16px', borderRadius: 6,
              fontWeight: 700, fontSize: 13, textDecoration: 'none'
            }}>
              Get Free Counselling
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: 48, paddingTop: 20,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 8,
          fontSize: 12, color: 'rgba(255,255,255,0.35)',
          maxWidth: 1200, margin: '48px auto 0'
        }}>
          <p>© {new Date().getFullYear()} Karnataka Finishing School. All rights reserved.</p>
          <p style={{ fontFamily: "'Noto Sans Malayalam', sans-serif" }}>
            കേരള ഫിനിഷിംഗ് സ്കൂൾ · തിരുവനന്തപുരം
          </p>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (max-width: 900px) {
          .solution-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}