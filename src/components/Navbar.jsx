import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import logo from '../assets/kfs_logo.jpeg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: 'white',
        borderBottom: '3px solid #c0392b',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 6%',
          maxWidth: 1280, margin: '0 auto'
        }}>
          <img src={logo} alt="KFS Logo" style={{ height: 65, objectFit: 'contain' }} />

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, fontWeight: 700, fontSize: 20 }}
            className="nav-links">
            {['Home', 'About', 'Courses', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ color: '#1a2357', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#c0392b'}
                onMouseLeave={e => e.target.style.color = '#1a2357'}>
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="tel:7736025600"
            className="nav-cta"
            style={{
              background: '#c0392b', color: 'white',
              padding: '10px 22px', borderRadius: 6,
              fontWeight: 700, textDecoration: 'none', fontSize: 14,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
            <Phone size={15} /> Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', background: 'none',
              border: 'none', cursor: 'pointer', padding: 4
            }}>
            {menuOpen ? <X size={26} color="#1a2357" /> : <Menu size={26} color="#1a2357" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 75, left: 0, right: 0,
          background: 'white', zIndex: 999,
          borderBottom: '2px solid #c0392b',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          padding: '16px 6% 20px',
          display: 'flex', flexDirection: 'column', gap: 4
        }}>
          {['Home', 'About', 'Courses', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#1a2357', fontWeight: 600,
                textDecoration: 'none', fontSize: 16,
                padding: '12px 0',
                borderBottom: '1px solid #f0ece6'
              }}>
              {item}
            </a>
          ))}
          <a href="tel:7736025600"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8,
              marginTop: 12, background: '#c0392b',
              color: 'white', padding: '13px',
              borderRadius: 8, fontWeight: 700, fontSize: 15,
              textDecoration: 'none'
            }}>
            <Phone size={16} /> 7736025600
          </a>
        </div>
      )}

      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  .nav-links a {
    font-family: 'Playfair Display', serif !important;
    font-size: 18px !important;
    letter-spacing: 0.5px;
  }
  @media (max-width: 768px) {
    .nav-links { display: none !important; }
    .nav-cta { display: none !important; }
    .hamburger { display: block !important; }
  }
`}</style>
    </>
  )
}