'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Tarifs() {
  const [annual, setAnnual] = useState(false)
  const router = useRouter()

  const handleCheckout = async (priceId: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      period: '/mois',
      desc: 'Pour decouvrir Shootscan',
      features: ['3 scans par mois', 'Estimation IA de base', 'Historique 7 jours'],
      cta: 'Commencer gratuitement',
      priceId: null,
      highlight: false,
    },
    {
      name: 'Pro',
      price: annual ? '8,25' : '11,99',
      period: '/mois',
      desc: 'Pour les revendeurs actifs',
      features: ['Scans illimites', 'Scan en lot', 'Historique complet', 'Export CSV', 'Support prioritaire'],
      cta: 'Passer Pro',
      priceId: annual ? 'price_1TjSY6GanXWUCjKgVgZG1xCS' : 'price_1TjSY7GanXWUCjKgu1l9T4op',
      highlight: true,
    },
    {
      name: 'Business',
      price: '29,99',
      period: '/mois',
      desc: 'Pour les pros du volume',
      features: ['Tout Pro inclus', 'Multi-comptes', 'API access', 'Dashboard equipe', 'Onboarding dedie'],
      cta: 'Passer Business',
      priceId: 'price_1TjSY6GanXWUCjKgGhElnnvh',
      highlight: false,
    },
  ]

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#080C09', minHeight: '100vh' }}>
      <style>{`
        :root { --g: #00B874; --card: rgba(255,255,255,.04); --border: rgba(255,255,255,.08); --text: rgba(255,255,255,.55); }
        .nav { background: rgba(8,12,9,.9); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 56px; position: sticky; top: 0; z-index: 10; }
        .wrap { max-width: 900px; margin: 0 auto; padding: 4rem 1rem; }
        .page-title { font-family:'Inter',sans-serif; font-size: 34px; font-weight: 700; color: #fff; text-align: center; margin-bottom: 0.5rem; letter-spacing:-0.5px; }
        .page-title em { font-style: normal; color: var(--g); }
        .page-sub { font-size: 15px; color: var(--text); text-align: center; margin-bottom: 2.5rem; }
        .toggle { display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 3rem; }
        .toggle-label { font-size: 14px; color: var(--text); }
        .toggle-label.active { color: #fff; font-weight: 600; }
        .toggle-switch { width: 44px; height: 24px; background: var(--g); border-radius: 12px; cursor: pointer; position: relative; border: none; }
        .badge-save { background: rgba(0,184,116,.1); color: var(--g); font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 20px; border: 1px solid rgba(0,184,116,.25); }
        .plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .plan { background: var(--card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.75rem 1.5rem; position: relative; }
        .plan.highlight { border-color: var(--g); border-width: 1.5px; background: rgba(0,184,116,.04); }
        .plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--g); color: white; font-size: 11px; font-weight: 600; padding: 4px 14px; border-radius: 20px; white-space: nowrap; }
        .plan-name { font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; }
        .plan-price { font-family:'Inter',sans-serif; font-size: 26px; font-weight: 700; color: #fff; margin-bottom: 0.25rem; }
        .plan-price span { font-size: 13px; font-weight: 400; color: var(--text); }
        .plan-desc { font-size: 13px; color: var(--text); margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border); }
        .plan-features { list-style: none; padding: 0; margin: 0 0 1.5rem; }
        .plan-features li { font-size: 13px; color: rgba(255,255,255,.75); padding: 5px 0; display: flex; align-items: center; gap: 8px; }
        .plan-features li::before { content: '✓'; color: var(--g); font-weight: 700; }
        .btn-plan { width: 100%; padding: 12px; border-radius: 100px; font-size: 14px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; font-family:'Inter',sans-serif; }
        .btn-plan.primary { background: var(--g); color: white; }
        .btn-plan.primary:hover { box-shadow: 0 8px 30px rgba(0,184,116,.4); }
        .btn-plan.secondary { background: transparent; color: #fff; border: 1px solid var(--border); }
        .btn-plan.secondary:hover { border-color: rgba(255,255,255,.3); }
        @media (max-width: 700px) { .plans { grid-template-columns: 1fr; } }
      `}</style>

      <nav className="nav">
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <svg viewBox="0 0 520 80" height="32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="iconClip3">
                <rect x="0" y="0" width="80" height="80" rx="14"/>
              </clipPath>
            </defs>
            <rect x="0" y="0" width="80" height="80" rx="14" fill="#0d160f"/>
            <g clipPath="url(#iconClip3)">
              <rect x="0" y="38" width="80" height="2" fill="#00B874" opacity="0.9">
                <animate attributeName="y" values="10;68;10" dur="2.4s" repeatCount="indefinite" calcMode="ease-in-out"/>
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.4s" repeatCount="indefinite"/>
              </rect>
              <text x="40" y="52" fontFamily="Arial Black, sans-serif" fontSize="32" fontWeight="900" fill="#00B874" textAnchor="middle">S</text>
            </g>
            <path d="M12 22 L12 10 L24 10" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 22 L68 10 L56 10" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 58 L12 70 L24 70" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 58 L68 70 L56 70" fill="none" stroke="#00B874" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="96" y="50" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800">
              <tspan fill="#ffffff">Shoot</tspan><tspan fill="#00B874">scan</tspan>
            </text>
          </svg>
        </a>
        <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none', fontWeight: 600 }}>Accueil</a>
      </nav>

      <div className="wrap">
        <div className="page-title">Choisir un <em>plan</em></div>
        <div className="page-sub">Commence gratuitement, passe Pro quand tu es pret.</div>

        <div className="toggle">
          <span className={`toggle-label ${!annual ? 'active' : ''}`}>Mensuel</span>
          <button className="toggle-switch" onClick={() => setAnnual(!annual)}>
            <span style={{ position: 'absolute', width: '18px', height: '18px', background: 'white', borderRadius: '50%', top: '3px', left: annual ? '23px' : '3px', transition: 'left 0.2s' }}></span>
          </button>
          <span className={`toggle-label ${annual ? 'active' : ''}`}>Annuel</span>
          {annual && <span className="badge-save">-31%</span>}
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan ${plan.highlight ? 'highlight' : ''}`}>
              {plan.highlight && <div className="plan-badge">Le plus populaire</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
              <div className="plan-desc">{plan.desc}</div>
              <ul className="plan-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button
                className={`btn-plan ${plan.highlight ? 'primary' : 'secondary'}`}
                onClick={() => plan.priceId ? handleCheckout(plan.priceId) : router.push('/register')}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}