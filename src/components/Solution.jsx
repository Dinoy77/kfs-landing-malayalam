import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

const features = [
  { icon: '🌉', title: 'Professional Bridge Course', desc: 'A structured programme connecting your BSc degree to industry-relevant skills.' },
  { icon: '💼', title: 'Lifetime Career Support', desc: 'Placement support ensures opportunities throughout your professional career.' },
  { icon: '🎯', title: 'Industry-Focused Training', desc: 'Curriculum designed with employers covering what the job market demands.' },
]

export default function Solution() {
  return (
    <section style={{ background: '#111840', color: 'white', padding: '80px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Top label + heading */}
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
            fontWeight: 800, marginBottom: 20, lineHeight: 1.3,
            maxWidth: 600
          }}>
          We Are Changing the Future of Science Graduates
        </motion.h2>

        {/* Malayalam quote */}
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{
            fontFamily: "'Noto Sans Malayalam', sans-serif",
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(255,255,255,0.75)', lineHeight: 1.9,
            marginBottom: 48, padding: '16px 20px',
            borderLeft: '3px solid #f5a623',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '0 8px 8px 0',
            maxWidth: 600
          }}>
          ഈ അവസ്ഥയ്ക്ക് മാറ്റം ഉണ്ടാക്കുന്നതിനുവേണ്ടി കേരള ഫിനിഷിംഗ് സ്കൂൾ
          നിരന്തരം ശ്രമിച്ചുകൊണ്ടിരിക്കുകയാണ്.
        </motion.p>

        {/* Two column grid */}
        <div className="solution-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 48,
          alignItems: 'start'
        }}>

          {/* Left — features */}
          <div>
            {features.map((f, i) => (
              <motion.div key={f.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                style={{
                  display: 'flex', gap: 16,
                  alignItems: 'flex-start', marginBottom: 28,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12, padding: '20px 20px'
                }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#f5a623', fontSize: 15, marginBottom: 6 }}>{f.title}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — CTA card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{
              background: 'white', color: '#1a1a2e',
              borderRadius: 20, padding: '36px 30px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
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
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10,
                width: '100%', background: '#c0392b', color: 'white',
                padding: '15px', borderRadius: 8,
                fontSize: 18, fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(192,57,43,0.35)'
              }}>
                <Phone size={20} /> 7736025600
              </a>

              <p style={{ textAlign: 'center', color: '#aaa', fontSize: 13, margin: '14px 0' }}>or</p>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center',
                color: '#1a2357', fontWeight: 600,
                fontSize: 14, textDecoration: 'none'
              }}>
                View Contact Details →
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}