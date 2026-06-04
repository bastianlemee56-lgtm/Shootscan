'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Stats() {
  const [email, setEmail] = useState('')
  const [scans, setScans] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setEmail(user.email || '')
      const { data } = await supabase
        .from('scans')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (data) setScans(data)
      setLoading(false)
    }
    init()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const total = scans.length
  const totalValeur = scans.reduce((acc, s) => acc + (parseFloat(s.price_mid) || 0), 0)
  const prixMoyen = total > 0 ? Math.round(totalValeur / total) : 0
  const scoreMoyen = total > 0 ? Math.round(scans.reduce((acc, s) => acc + (s.resell_score || 0), 0) / total) : 0

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <style>{`
        .nav { background: white; border-bottom: 1px solid #E0EFE4; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-size: 20px; font-weight: 300; color: #0A1A10; text-decoration: none; }
        .nav-logo strong { font-weight: 600; color: #00B874; }
        .nav-right { display: flex; align-items: center; gap: 0.75rem; }
        .nav-email { font-size: 12px; color: #4A7A58; }
        .nav-logout { font-size: 12px; color: #4A7A58; background: none; border: 1px solid #E0EFE4; border-radius: 8px; padding: 6px 12px; cursor: pointer; }
        .wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1rem; }
        .page-title { font-size: 28px; font-weight: 700; color: #0A1A10; margin-bottom: 0.25rem; }
        .page-title em { font-style: italic; color: #00B874; font-family: 'Instrument Serif', Georgia, serif; }
        .page-sub { font-size: 14px; color: #4A7A58; margin-bottom: 1.5rem; }
        .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
        .kpi { background: white; border: 1px solid #E0EFE4; border-radius: 12px; padding: 1rem; }
        .kpi-lbl { font-size: 11px; color: #4A7A58; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
        .kpi-val { font-size: 26px; font-weight: 700; color: #0A1A10; }
        .kpi-val.mint { color: #00B874; }
        .kpi-sub { font-size: 11px; color: #8AB098; margin-top: 4px; }
        .section { background: white; border: 1px solid #E0EFE4; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
        .section-title { font-size: 14px; font-weight: 600; color: #0A1A10; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
        .scan-row { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid #F0F7F3; }
        .scan-row:last-child { border-bottom: none; }
        .scan-name { font-size: 14px; font-weight: 600; color: #0A1A10; }
        .scan-meta { font-size: 12px; color: #4A7A58; }
        .scan-price { font-size: 15px; font-weight: 700; color: #00B874; }
        .btn-new { background: #00B874; color: white; border: none; border-radius: 8px; padding: 6px 14px; font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: none; }
        .empty { text-align: center; padding: 2rem; color: #4A7A58; font-size: 14px; }
        @media (max-width: 600px) { .kpi-row { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">shoot<strong>scan</strong></a>
        <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none', fontWeight: 600 }}>← Accueil</a>
      </nav>

      <div className="wrap">
        <div className="page-title">Mon <em>dashboard</em></div>
        <div className="page-sub">Suivi de ton activité de revente et de ton portefeuille d'articles.</div>

        <div className="kpi-row">
          <div className="kpi">
            <div className="kpi-lbl">Articles scannés</div>
            <div className="kpi-val">{total}</div>
            <div className="kpi-sub">Aucun scan encore</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Valeur totale estimée</div>
            <div className="kpi-val mint">{totalValeur}€</div>
            <div className="kpi-sub">Prix recommandés cumulés</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Prix moyen</div>
            <div className="kpi-val">{total > 0 ? `${prixMoyen}€` : '—'}</div>
            <div className="kpi-sub">Par article</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Score moyen</div>
            <div className="kpi-val">{total > 0 ? scoreMoyen : '—'}</div>
            <div className="kpi-sub">Sur 100</div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">
            Historique des scans
            <a href="/dashboard" className="btn-new">+ Nouveau scan</a>
          </div>
          {loading ? (
            <div className="empty">Chargement...</div>
          ) : scans.length === 0 ? (
            <div className="empty">Aucun article scanné — <a href="/dashboard" style={{ color: '#00B874' }}>commencer maintenant</a></div>
          ) : (
            scans.map((scan, i) => (
              <div key={i} className="scan-row">
                <div>
                  <div className="scan-name">{scan.name}</div>
<div className="scan-meta">{scan.category} · {scan.condition}</div>
                </div>
                <div className="scan-price">{scan.price_mid}€</div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}