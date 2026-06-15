import { motion } from 'framer-motion'
import { Phone, ChevronDown, ArrowRight } from 'lucide-react'
import studentPhoto from '../assets/student.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #996600 0%, #cc8800 25%, #f5a800 55%, #ffc200 80%, #ffe066 100%)',
      display: 'grid',
      gridTemplateColumns: '55% 45%',
      alignItems: 'center',
      padding: '0 6%',
      gap: 40,
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-grid">

      {/* Top right shine */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      {/* Bottom left shadow */}
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px'
      }} />

      {/* ── LEFT — Text ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', height: '100vh',
      }}>

        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,0,0,0.18)',
            border: '1px solid rgba(255,255,255,0.6)',
            color: 'white', padding: '8px 20px',
            borderRadius: 999, fontSize: 11,
            fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)'
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'white',
              boxShadow: '0 0 8px white',
              animation: 'livepulse 2s infinite',
              flexShrink: 0
            }} />
            Kerala Finishing School
          </span>
        </motion.div>

        {/* Malayalam headline */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: "'Noto Sans Malayalam', sans-serif",
            fontSize: 'clamp(20px, 2.8vw, 44px)',
            fontWeight: 900,
            lineHeight: 1.4,
            marginBottom: 6,
            color: 'white',
            textShadow: '0 2px 16px rgba(0,0,0,0.25)',
            letterSpacing: '-0.3px'
          }}>
          എന്തുകൊണ്ട് സയൻസ് ബിരുദം
          <br />എടുത്തവർക്ക്{' '}
          <span style={{
            color: '#800000',
            textShadow: '0 1px 4px rgba(0,0,0,0.2)',
          }}>
            ജോലി ലഭിക്കുന്നില്ല?
          </span>
        </motion.h1>

        {/* Accent line */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ marginBottom: 20 }}>
          <div style={{
            width: 56, height: 3, borderRadius: 99,
            background: 'rgba(255,255,255,0.8)',
            boxShadow: '0 0 12px rgba(255,255,255,0.5)'
          }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.85,
            marginBottom: 28,
            maxWidth: 420,
            textShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }}>
          A professional bridge course that transforms your BSc degree
          into a lifelong career — designed specifically for science graduates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}
          className="hero-btns">
          <a href="tel:7736025600" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#800000',
            color: 'white', padding: '14px 28px', borderRadius: 12,
            fontWeight: 800, fontSize: 15, textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
            whiteSpace: 'nowrap',
            letterSpacing: 0.3
          }}>
            <Phone size={16} /> Call — 7736025600
          </a>
          <a href="#about" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.25)',
            color: 'white', padding: '14px 24px', borderRadius: 12,
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.6)',
            backdropFilter: 'blur(8px)',
          }}>
            Learn More <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
          style={{
            display: 'flex',
            borderTop: '1px solid rgba(255,255,255,0.35)',
            paddingTop: 24, maxWidth: 380,
          }}>
          {[
            { number: '6+', label: 'Science Streams', icon: '🔬' },
            { number: '1000+', label: 'Students Helped', icon: '🎓' },
            { number: '100%', label: 'Career Focused', icon: '💼' },
          ].map(({ number, label, icon }, i) => (
            <div key={label} style={{
              flex: 1, textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.3)' : 'none',
              padding: '0 14px',
            }}>
              <div style={{ fontSize: 18, marginBottom: 5 }}>{icon}</div>
              <div style={{
                fontSize: 20, fontWeight: 900,
                color: 'white', lineHeight: 1,
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>{number}</div>
              <div style={{
                fontSize: 10, color: 'rgba(255,255,255,0.8)',
                marginTop: 4, fontWeight: 600, letterSpacing: 0.3
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — Photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative', zIndex: 2,
          height: '100vh', display: 'flex',
          alignItems: 'center',
        }}
        className="hero-photo-col">

        <div style={{
          width: '100%',
          height: '86vh',
          borderRadius: 0,
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={studentPhoto}
            alt="Science Graduate"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%',
              display: 'block',
              WebkitMaskImage: `
  linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%),
  linear-gradient(to bottom, transparent 0%, black 5%, black 85%, transparent 100%)
`,
              maskImage: `
  linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%),
  linear-gradient(to bottom, transparent 0%, black 5%, black 85%, transparent 100%)
`,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 5,
        color: 'rgba(255,255,255,0.6)', fontSize: 9,
        letterSpacing: 2, textTransform: 'uppercase', zIndex: 4
      }}>
        <span>Scroll</span>
        <ChevronDown size={14} style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes livepulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 6% 60px !important;
          }
          .hero-photo-col {
            display: none !important;
          }
          .hero-btns {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}