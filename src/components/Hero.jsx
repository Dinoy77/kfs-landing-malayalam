import { motion } from 'framer-motion'
import { Phone, ChevronDown, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
      background: '#0a0f2e',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '10px 6% 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glows */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,57,43,0.2) 0%, transparent 65%)',
        top: -250, right: -200, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 65%)',
        bottom: -150, left: -100, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, width: '100%' }}>

        {/* Pill badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,166,35,0.12)',
            border: '1px solid rgba(245,166,35,0.4)',
            color: '#f5a623', padding: '8px 20px',
            borderRadius: 999, fontSize: 12,
            fontWeight: 700, letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#f5a623',
              animation: 'livepulse 2s infinite',
              flexShrink: 0
            }} />
            Kerala Finishing School
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 className="hero-headline" variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: "'Noto Sans Malayalam', sans-serif",
            fontSize: 'clamp(28px, 5vw, 62px)',
            fontWeight: 900,
            lineHeight: 1.35,
            marginBottom: 16,
            color: 'white',
          }}>
          എന്തുകൊണ്ട് സയൻസ് ബിരുദം
          <br />എടുത്തവർക്ക്{' '}
          <span style={{
            background: 'linear-gradient(90deg, #f5a623, #e74c3c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ജോലി ലഭിക്കുന്നില്ല?
          </span>
        </motion.h1>

        {/* Accent line */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div style={{
            width: 64, height: 3, borderRadius: 2,
            background: 'linear-gradient(90deg, #c0392b, #f5a623)',
            margin: '0 auto 24px'
          }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p className="hero-subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.85,
            maxWidth: 560,
            margin: '0 auto 40px',
          }}>
          A professional bridge course that transforms your BSc degree
          into a lifelong career — designed specifically for science graduates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-btns" variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}>
          <a href="tel:7736025600" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
            color: 'white', padding: '15px 32px', borderRadius: 10,
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(192,57,43,0.5)',
            whiteSpace: 'nowrap'
          }}>
            <Phone size={17} /> Call Us — 7736025600
          </a>
          <a href="#about" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.07)',
            color: 'white', padding: '15px 28px', borderRadius: 10,
            fontWeight: 600, fontSize: 16, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            Learn More <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="visible" custom={5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 32,
            maxWidth: 480,
            margin: '0 auto',
          }}>
          {[
            { number: '5+',    label: 'Science Streams', icon: '🔬' },
            { number: '1000+', label: 'Students Helped',  icon: '🎓' },
            { number: '100%',  label: 'Career Focused',   icon: '💼' },
          ].map(({ number, label, icon }, i) => (
            <div key={label} style={{
              flex: 1, textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              padding: '0 16px',
            }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#f5a623', lineHeight: 1 }}>{number}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 5, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 6,
        color: 'rgba(255,255,255,0.25)', fontSize: 10,
        letterSpacing: 2, textTransform: 'uppercase', zIndex: 2
      }}>
        <span>Scroll</span>
        <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
      </div>
    </section>
  )
}