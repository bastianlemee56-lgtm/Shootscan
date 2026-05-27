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
      price: '0€',
      period: '/mois',
      desc: 'Pour découvrir Shootscan',
      features: ['3 scans par mois', 'Estimation IA de base', 'Historique 7 jours'],
      cta: 'Commencer gratuitement',
      priceId: null,
      highlight: false,
    },
    {
      name: 'Pro',
      price: annual ? '8,25€' : '11,99€',
      period: '/mois',
      desc: 'Pour les revendeurs actifs',
      features: ['Scans illimités', 'Scan en lot', 'Historique complet', 'Export CSV', 'Support prioritaire'],
      cta: 'Passer Pro',
      priceId: annual ? 'price_1Tb73YKAwbn5ymOfJ2yTOvGO' : 'price_1Tb711KAwbn5ymOfc6uE3QMC',
      highlight: true,
    },
    {
      name: 'Business',
      price: '29,99€',
      period: '/mois',
      desc: 'Pour les pros du volume',
      features: ['Tout Pro inclus', 'Multi-comptes', 'API access', 'Dashboard équipe', 'Onboarding dédié'],
      cta: 'Contacter',
      priceId: 'price_1Tb76LKAwbn5ymOfEj6044PF',
      highlight: false,
    },
  ]

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <style>{`
        .nav { background: white; border-bottom: 1px solid #E0EFE4; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-size: 18px; font-weight: 300; color: #0A1A10; text-decoration: none; }
        .nav-logo strong { font-weight: 600; color: #00B874; }
        .wrap { max-width: 900px; margin: 0 auto; padding: 3rem 1rem; }
        .page-title { font-size: 32px; font-weight: 700; color: #0A1A10; text-align: center; margin-bottom: 0.5rem; }
        .page-title em { font-style: italic; color: #00B874; font-family: 'Instrument Serif', Georgia, serif; }
        .page-sub { font-size: 15px; color: #4A7A58; text-align: center; margin-bottom: 2rem; }
        .toggle { display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 2.5rem; }
        .toggle-label { font-size: 14px; color: #4A7A58; }
        .toggle-label.active { color: #0A1A10; font-weight: 600; }
        .toggle-switch { width: 44px; height: 24px; background: #00B874; border-radius: 12px; cursor: pointer; position: relative; border: none; }
        .toggle-switch::after { content: ''; position: absolute; width: 18px; height: 18px; background: white; border-radius: 50%; top: 3px; transition: left 0.2s; left: ${annual ? '23px' : '3px'}; }
        .badge-save { background: #E8F5EE; color: #00B874; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
        .plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .plan { background: white; border: 1.5px solid #E0EFE4; border-radius: 16px; padding: 1.75rem 1.5rem; position: relative; }
        .plan.highlight { border-color: #00B874; border-width: 2px; }
        .plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #00B874; color: white; font-size: 11px; font-weight: 600; padding: 4px 14px; border-radius: 20px; white-space: nowrap; }
        .plan-name { font-size: 14px; font-weight: 600; color: #4A7A58; margin-bottom: 0.5rem; }
        .plan-price { font-size: 30px; font-weight: 700; color: #0A1A10; margin-bottom: 0.25rem; }
        .plan-price span { font-size: 14px; font-weight: 400; color: #4A7A58; }
        .plan-desc { font-size: 13px; color: #4A7A58; margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid #E0EFE4; }
        .plan-features { list-style: none; padding: 0; margin: 0 0 1.5rem; }
        .plan-features li { font-size: 13px; color: #0A1A10; padding: 5px 0; display: flex; align-items: center; gap: 8px; }
        .plan-features li::before { content: '✓'; color: #00B874; font-weight: 700; }
        .btn-plan { width: 100%; padding: 12px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; }
        .btn-plan.primary { background: #00B874; color: white; }
        .btn-plan.primary:hover { background: #008850; }
        .btn-plan.secondary { background: #F0FAF5; color: #00B874; border: 1.5px solid #00B874; }
        .btn-plan.secondary:hover { background: #E8F5EE; }
        @media (max-width: 700px) { .plans { grid-template-columns: 1fr; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">shoot<strong>scan</strong></a>
        <a href="/dashboard" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none', fontWeight: 600 }}>← Scanner</a>
      </nav>

      <div className="wrap">
        <div className="page-title">Choisir un <em>plan</em></div>
        <div className="page-sub">Commence gratuitement, passe Pro quand tu es prêt.</div>

        <div className="toggle">
          <span className={`toggle-label ${!annual ? 'active' : ''}`}>Mensuel</span>
          <button className="toggle-switch" onClick={() => setAnnual(!annual)} />
          <span className={`toggle-label ${annual ? 'active' : ''}`}>Annuel</span>
          {annual && <span className="badge-save">-31% 🎉</span>}
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan ${plan.highlight ? 'highlight' : ''}`}>
              {plan.highlight && <div className="plan-badge">⭐ Le plus populaire</div>}
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