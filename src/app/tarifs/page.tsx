'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PLANS = [
  {
    nom: 'Gratuit',
    prix: '0€',
    periode: '',
    description: '3 scans par mois',
    features: ['3 scans/mois', 'Score du produit', 'Prix conseillé', '2 plateformes suggérées'],
    priceId: null,
    color: '#0A0A0A',
    cta: 'Commencer gratuitement',
  },
  {
    nom: 'Pro',
    prix: '11,99€',
    periode: '/mois',
    prixAnnuel: '99€',
    description: 'Pour les vendeurs réguliers',
    features: ['Scans illimités', 'Toutes les plateformes', 'Titre + description générés', 'Calculateur ROI', 'Export CSV', 'Scan en lot'],
    priceId: 'price_1Tb711KAwbn5ymOfc6uE3QMC',
    priceIdAnnuel: 'price_1Tb73YKAwbn5ymOfJ2yTOvGO',
    color: '#00B874',
    popular: true,
    cta: 'Commencer le Pro',
  },
  {
    nom: 'Business',
    prix: '29,99€',
    periode: '/mois',
    description: 'Pour les revendeurs pros',
    features: ['Tout le plan Pro', 'Scans en lot illimités', '5 utilisateurs', 'API access', 'Support prioritaire', 'Rapports avancés'],
    priceId: 'price_1Tb76LKAwbn5ymOfEj6044PF',
    color: '#1a1a2e',
    cta: 'Commencer Business',
  },
]

export default function Tarifs() {
  const [loading, setLoading] = useState<string | null>(null)
  const [annuel, setAnnuel] = useState(false)
  const router = useRouter()

  const handleCheckout = async (priceId: string, nom: string) => {
    setLoading(nom)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else setLoading(null)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 800, marginBottom: '0.5rem' }}>
          Choisissez votre plan
        </h1>
        <p style={{ textAlign: 'center', color: '#0A0A0A', marginBottom: '2rem' }}>
          Commencez gratuitement, évoluez quand vous êtes prêt
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ color: annuel ? '#888' : '#0A0A0A', fontWeight: 600 }}>Mensuel</span>
          <div onClick={() => setAnnuel(!annuel)}
            style={{ width: '50px', height: '26px', background: annuel ? '#00B874' : '#ddd', borderRadius: '13px', cursor: 'pointer', position: 'relative' }}>
            <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '3px', left: annuel ? '27px' : '3px', transition: '0.3s' }} />
          </div>
          <span style={{ color: annuel ? '#0A0A0A' : '#888', fontWeight: 600 }}>Annuel <span style={{ color: '#00B874', fontSize: '12px' }}>-31%</span></span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {PLANS.map((plan) => (
            <div key={plan.nom} style={{ border: plan.popular ? '2px solid #00B874' : '1px solid #eee', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00B874', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                  Populaire
                </div>
              )}
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.nom}</h2>

              {plan.nom === 'Pro' && (
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: !annuel ? '#00B874' : '#eee', color: !annuel ? '#fff' : '#888', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }} onClick={() => setAnnuel(false)}>Mensuel</span>
                  <span style={{ background: annuel ? '#00B874' : '#eee', color: annuel ? '#fff' : '#888', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }} onClick={() => setAnnuel(true)}>Annuel</span>
                </div>
              )}

              <p style={{ fontSize: '24px', fontWeight: 800, color: plan.color, marginBottom: '0.25rem' }}>
                {plan.nom === 'Pro' && annuel ? '99€' : plan.prix}
                <span style={{ fontSize: '14px', fontWeight: 400, color: '#0A0A0A' }}>
                  {plan.nom === 'Pro' && annuel ? '/an' : plan.periode}
                </span>
              </p>

              {plan.nom === 'Pro' && annuel && (
                <p style={{ fontSize: '12px', color: '#00B874', marginBottom: '0.5rem' }}>Économisez 44€/an !</p>
              )}

              <p style={{ color: '#888', fontSize: '14px', marginBottom: '1.5rem' }}>{plan.description}</p>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ fontSize: '14px', marginBottom: '0.5rem', color: '#444' }}>✅ {f}</li>
                ))}
              </ul>

              {plan.priceId ? (
                <button
                  onClick={() => handleCheckout(
                    plan.nom === 'Pro' && annuel ? plan.priceIdAnnuel! : plan.priceId!,
                    plan.nom
                  )}
                  disabled={loading === plan.nom}
                  style={{ width: '100%', background: plan.color, color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>
                  {loading === plan.nom ? 'Chargement...' : plan.cta}
                </button>
              ) : (
                <button onClick={() => router.push('/register')}
                  style={{ width: '100%', background: 'transparent', color: '#0A0A0A', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}