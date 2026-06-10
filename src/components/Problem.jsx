import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
}

const cards = [
    { icon: '📋', text: 'ബിഎസ്സി കെമിസ്ട്രി, ബിഎസ്സി മൈക്രോബയോളജി, ബിഎസ്സി ബോട്ടണി, ബിഎസ്സി സുവോളജി, ബിഎസ്സി ബയോകെമിസ്ട്രി,ബിഎസ്സി ജനറ്റിക്സ് എന്നീ കോഴ്‌സുകൾ കഴിഞ്ഞ ബിരുദധാരികൾ ജോലി ലഭിക്കാൻ ബുദ്ധിമുട്ടുകയാണ്.' },
    { icon: '🎯', text: 'പ്രധാനമായും ഇവരിൽ പലരും ശരിയായ കരിയർ പ്ലാൻ ചെയ്യാതെയാണ് ഈ കോഴ്സുകൾക്ക് അഡ്മിഷൻ എടുക്കുന്നത്. കോഴ്സ് കഴിയുമ്പോൾ ഈ ഡിഗ്രികൾ കൊണ്ട് ഉദ്ദേശിച്ചത് പോലെ ജോലിയോ ഉപയോഗമോ ലഭിക്കുന്നില്ല.' },
    { icon: '📊', text: 'മറ്റ് പ്രൊഫഷണൽ കോഴ്സുകളുമായി താരതമ്യം ചെയ്യുമ്പോൾ, മേൽ പറഞ്ഞ കോഴ്സുകൾ ചെയ്ത വിദ്യാർത്ഥികളുടെ എണ്ണം താരതമ്യേന ഒരുപാട് കൂടുതലാണ്.' },
]

const stats = [
    { number: '5+', label: 'Science Streams Affected' },
    { number: '1000s', label: 'Graduates Without Jobs' },
    { number: '1', label: 'Solution — KFS Bridge' },
]

export default function Problem() {
    return (
        <section id="about" style={{ padding: '80px 6%', background: '#fff' }}>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>

                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#c0392b', marginBottom: 12 }}>
                    The Problem
                </p>

                <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 40px)', color: '#1a2357', fontWeight: 800, marginBottom: 44, lineHeight: 1.25 }}>
                    Why Science Graduates Struggle to Find Jobs
                </motion.h2>

                {cards.map((card, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                        className="problem-card"
                        style={{
                            display: 'flex', gap: 18, alignItems: 'flex-start',
                            background: '#1a2357', border: '1px solid #243070',
                            borderLeft: '4px solid #c0392b', borderRadius: 12,
                            padding: '22px 26px', marginBottom: 18
                        }}>
                        <span style={{ fontSize: 26, flexShrink: 0 }}>{card.icon}</span>
                        <p style={{ fontFamily: "'Noto Sans Malayalam', sans-serif", fontSize: 'clamp(14px, 1.8vw, 17px)', lineHeight: 1.95, color: 'rgba(255,255,255,0.85)', margin: 0}}>
                            {card.text}
                        </p>
                    </motion.div>
                ))}

                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }}>
                    {stats.map((stat, i) => (
                        <motion.div key={stat.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                            style={{ textAlign: 'center', background: '#1a2357', color: 'white', borderRadius: 12, padding: '28px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: '#f5a623', lineHeight: 1 }}>
                                {stat.number}
                            </span>
                            <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.85 }}>{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}