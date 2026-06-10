import { motion } from 'framer-motion'

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
  { icon: '🔬', name: 'BSc Genetics' },
]

export default function Courses() {
  return (
    <section id="courses" style={{ padding: '80px 6%', background: '#f4f0eb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#c0392b', marginBottom: 12 }}>
          Who We Help
        </p>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 40px)', color: '#1a2357', fontWeight: 800, marginBottom: 12 }}>
          Eligible Science Graduates
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ color: '#5a5a72', fontSize: 16, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
          If you hold any of these degrees and are struggling to find employment,
          KFS has a dedicated bridge programme designed for you.
        </motion.p>

        <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {courses.map((course, i) => (
            <motion.div key={course.name}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(26,35,87,0.14)' }}
              style={{
                background: 'white', borderRadius: 12, padding: '26px 22px',
                border: '1px solid #e8e2da', display: 'flex', alignItems: 'center', gap: 16,
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
  )
}