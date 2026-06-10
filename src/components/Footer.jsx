import { Phone, MapPin } from 'lucide-react'
import logo from '../assets/kfs_logo.jpeg'

const courses = [
  'BSc Chemistry', 'BSc Microbiology',
  'BSc Botany', 'BSc Zoology',
  'BSc Biochemistry', 'BSc Genetics'
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#1a1a2e', color: 'white' }}>

      <div className="footer-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        gap: 40, padding: '60px 6% 40px'
      }}>

        {/* Brand */}
        <div>
          <img src={logo} alt="KFS"
            style={{ height: 60, marginBottom: 14, borderRadius: 8 }} />
          <p style={{
            fontFamily: "'Noto Sans Malayalam', sans-serif",
            fontSize: 15, fontWeight: 700,
            color: '#f5a623', marginBottom: 8
          }}>
            കേരള ഫിനിഷിംഗ് സ്കൂൾ
          </p>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7, maxWidth: 260
          }}>
            Empowering science graduates with professional bridge courses
            that open doors to lifelong career opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: 'white', marginBottom: 18
          }}>
            Quick Links
          </p>
          {['Home', 'About', 'Courses', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{
                display: 'block', color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', fontSize: 14, marginBottom: 10
              }}
              onMouseEnter={e => e.target.style.color = '#f5a623'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
              {item}
            </a>
          ))}
        </div>

        {/* Courses */}
        <div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: 'white', marginBottom: 18
          }}>
            Courses
          </p>
          {courses.map(c => (
            <p key={c} style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 14, marginBottom: 10
            }}>
              {c}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: 'white', marginBottom: 18
          }}>
            Contact Us
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Phone size={15} color="#f5a623" />
            <a href="tel:7736025600" style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 16, fontWeight: 600, textDecoration: 'none'
            }}>
              7736025600
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <MapPin size={15} color="#f5a623" />
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
              Thiruvananthapuram, Kerala
            </span>
          </div>
          <a href="tel:7736025600" style={{
            display: 'block', textAlign: 'center',
            background: '#c0392b', color: 'white',
            padding: '12px', borderRadius: 8,
            fontWeight: 700, fontSize: 14, textDecoration: 'none'
          }}>
            Get Free Counselling
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 6%',
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 8,
        fontSize: 12, color: 'rgba(255,255,255,0.35)'
      }}>
        <p>© {new Date().getFullYear()} Kerala Finishing School. All rights reserved.</p>
        <p style={{ fontFamily: "'Noto Sans Malayalam', sans-serif" }}>
          കേരള ഫിനിഷിംഗ് സ്കൂൾ · തിരുവനന്തപുരം
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  )
}