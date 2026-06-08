import { useState } from 'react'
import { Phone } from 'lucide-react'
import logo from '../assets/kfs_logo.jpeg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'white', borderBottom: '3px solid #c0392b',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 6%',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)'
      }}>
        <img src={logo} alt="KFS Logo" style={{ height: 56, objectFit: 'contain' }} />

        <div style={{ display: 'flex', gap: 32, fontWeight: 600, fontSize: 15 }} className="nav-links">
          {['Home', 'About', 'Courses', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: '#1a2357', textDecoration: 'none', letterSpacing: 0.3 }}
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

        <button onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5 }}
          aria-label="Menu">
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1a2357', borderRadius: 2 }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          background: 'white', padding: '16px 6%',
          borderBottom: '1px solid #eee',
          display: 'flex', flexDirection: 'column', gap: 16
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
    </>
  )
}