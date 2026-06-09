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
      background: `
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,200,0,0.45) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at -5% 80%, rgba(245,166,35,0.35) 0%, transparent 55%),
        radial-gradient(ellipse 50% 50% at 105% 90%, rgba(245,166,35,0.2) 0%, transparent 55%),
        linear-gradient(160deg, #150f00 0%, #231600 40%, #1a1000 100%)
      `,
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '55% 45%',
      alignItems: 'center',
      padding: '0 5%',
      gap: 32,
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-grid">

      {/* Mesh grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,200,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,200,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Glows */}
      <div style={{
        position: 'absolute', width: 600, height: 400,
        borderRadius: '50%', top: -150, left: '30%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(255,200,0,0.3) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        borderRadius: '50%', bottom: -100, left: -80,
        background: 'radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />

      {/* ── LEFT — Text ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '0',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', height: '100vh'
      }}>

        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ marginBottom: 20 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,166,35,0.12)',
            border: '1px solid rgba(245,166,35,0.4)',
            color: '#f5a623', padding: '7px 18px',
            borderRadius: 999, fontSize: 11,
            fontWeight: 700, letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#f5a623',
              boxShadow: '0 0 8px #f5a623',
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
            fontSize: 'clamp(18px, 2.4vw, 36px)',
            fontWeight: 900,
            lineHeight: 1.4,
            marginBottom: 8,
            color: 'white',
          }}>
          എന്തുകൊണ്ട് സയൻസ് ബിരുദം
          <br />എടുത്തവർക്ക്{' '}
          <span style={{
            background: 'linear-gradient(90deg, #f5a623, #ff6b35, #e74c3c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ജോലി ലഭിക്കുന്നില്ല?
          </span>
        </motion.h1>

        {/* Accent line */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ marginBottom: 16 }}>
          <div style={{
            width: 60, height: 3, borderRadius: 99,
            background: 'linear-gradient(90deg, #f5a623, #e74c3c)',
            boxShadow: '0 0 10px rgba(245,166,35,0.4)'
          }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: 16,
            maxWidth: 400
          }}>
          A professional bridge course that transforms your BSc degree
          into a lifelong career — designed specifically for science graduates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}
          className="hero-btns">
          <a href="tel:7736025600" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
            color: 'white', padding: '13px 24px', borderRadius: 10,
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(192,57,43,0.5)',
            whiteSpace: 'nowrap'
          }}>
            <Phone size={15} /> Call — 7736025600
          </a>
          <a href="#about" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.07)',
            color: 'white', padding: '13px 22px', borderRadius: 10,
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            Learn More <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
          style={{
            display: 'flex',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 20, maxWidth: 360,
          }}>
          {[
            { number: '5+', label: 'Science Streams', icon: '🔬' },
            { number: '1000+', label: 'Students Helped', icon: '🎓' },
            { number: '100%', label: 'Career Focused', icon: '💼' },
          ].map(({ number, label, icon }, i) => (
            <div key={label} style={{
              flex: 1, textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              padding: '0 12px',
            }}>
              <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#f5a623', lineHeight: 1 }}>{number}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — Photo ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative', zIndex: 2,
          height: '100vh', display: 'flex',
          alignItems: 'flex-start'
        }}
        className="hero-photo-col">

        {/* Gold glow behind photo */}
        <div style={{
          position: 'absolute', inset: '10% -10%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)',
          filter: 'blur(30px)', pointerEvents: 'none', zIndex: -1
        }} />

        {/* Photo */}
        <div style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img
            src={studentPhoto}
            alt="Science Graduate"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%',
              display: 'block',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.95) 40%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%)',
              WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 75%)',
              maskImage: 'linear-gradient(to left, black 30%, transparent 75%)',
            }}
          />

          {/* Blend left edge */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #1a1000 0%, rgba(26,16,0,0.85) 15%, rgba(26,16,0,0.2) 40%, transparent 60%)',
            pointerEvents: 'none'
          }} />

          {/* Blend bottom edge */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #1a1000, transparent)',
            pointerEvents: 'none'
          }} />

          {/* Blend top edge */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '15%',
            background: 'linear-gradient(to bottom, #150f00, transparent)',
            pointerEvents: 'none'
          }} />
        </div>

      </motion.div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 16, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 4,
        color: 'rgba(255,255,255,0.2)', fontSize: 9,
        letterSpacing: 2, textTransform: 'uppercase', zIndex: 2
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