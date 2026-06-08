import { Phone, MapPin } from 'lucide-react'
import logo from '../assets/kfs_logo.jpeg'

const courses = ['BSc Chemistry', 'BSc Microbiology', 'BSc Botany', 'BSc Zoology', 'BSc Biochemistry']

export default function Footer() {
    return (
        <footer id="contact" style={{ background: '#1a1a2e', color: 'white', padding: '60px 6% 40px' }}>
            <div className="footer-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48 }}
                className="footer-grid">

                <div>
                    <img src={logo} alt="KFS" style={{ height: 60, marginBottom: 14 }} />
                    <p style={{ fontFamily: "'Noto Sans Malayalam', sans-serif", fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 4 }}>
                        കേരള ഫിനിഷിംഗ് സ്കൂൾ
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 260 }}>
                        Empowering science graduates with professional bridge courses that open doors to lifelong career opportunities.
                    </p>
                </div>

                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>Quick Links</p>
                    {['Home', 'About', 'Courses', 'Contact'].map(item => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                            style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 10 }}
                            onMouseEnter={e => e.target.style.color = '#f5a623'}
                            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                            {item}
                        </a>
                    ))}
                </div>

                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>Courses</p>
                    {courses.map(c => (
                        <p key={c} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 10 }}>{c}</p>
                    ))}
                </div>

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
                        display: 'block', textAlign: 'center', background: '#c0392b', color: 'white',
                        padding: '12px 16px', borderRadius: 6, fontWeight: 700, fontSize: 13, textDecoration: 'none'
                    }}>
                        Get Free Counselling
                    </a>
                </div>
            </div>

            <div className="footer-bottom" style={{
                borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 48, paddingTop: 20,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.35)',
                maxWidth: 1200, margin: '48px auto 0'
            }}>
                <p>© {new Date().getFullYear()} Kerala Finishing School. All rights reserved.</p>
                <p style={{ fontFamily: "'Noto Sans Malayalam', sans-serif" }}>കേരള ഫിനിഷിംഗ് സ്കൂൾ · തിരുവനന്തപുരം</p>
            </div>
        </footer>
    )
}