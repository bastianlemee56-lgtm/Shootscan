'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Dashboard() {
  const [email, setEmail] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  const [historique, setHistorique] = useState<any[]>([])
  const [scanCount, setScanCount] = useState(0)
  const [plan, setPlan] = useState('free')
  const [activeTab, setActiveTab] = useState<'simple' | 'lot'>('simple')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setEmail(user.email || '')
      const { data: profile } = await supabase
  .from('profiles')
  .select('plan, scans_used_this_month')
  .eq('id', user.id)
  .single()

if (profile) {
  setPlan(profile.plan)
  setScanCount(profile.scans_used_this_month)
}
      const { data } = await supabase
        .from('scans')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (data) {
        setHistorique(data)
        
      }
    }
    init()
  }, [])

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(',')[1]
      setImage(base64)
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleScan = async () => {
    if (!image) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, plan }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur')
      setResult(data)
      setScanCount(c => c + 1)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <style>{`
        .scanner-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1rem; }
        .page-title { font-size: 28px; font-weight: 700; color: #0A1A10; margin-bottom: 0.25rem; }
        .page-title em { font-style: italic; color: #00B874; font-family: 'Instrument Serif', Georgia, serif; }
        .page-sub { font-size: 14px; color: #4A7A58; margin-bottom: 1.5rem; }
        .scan-limit-bar { background: white; border: 1px solid #E0EFE4; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .scan-limit-info { flex: 1; }
        .scan-limit-label { font-size: 12px; color: #4A7A58; margin-bottom: 6px; }
        .scan-limit-track { height: 6px; background: #E0EFE4; border-radius: 3px; overflow: hidden; }
        .scan-limit-fill { height: 100%; background: #00B874; border-radius: 3px; transition: width 0.3s; }
        .scan-limit-count { font-size: 13px; color: #0A1A10; font-weight: 600; white-space: nowrap; }
        .upgrade-link { font-size: 12px; color: #00B874; cursor: pointer; text-decoration: none; white-space: nowrap; }
        .tab-switch { display: flex; background: #E8F5EE; border-radius: 10px; padding: 4px; margin-bottom: 1.25rem; gap: 4px; }
        .tab-btn { flex: 1; padding: 8px; border: none; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; background: transparent; color: #4A7A58; transition: all 0.2s; }
        .tab-btn.active { background: white; color: #0A1A10; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .tab-btn .pro-badge { background: #00B874; color: white; font-size: 10px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
        .mode-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem; }
        .mode-card { background: white; border: 1.5px solid #E0EFE4; border-radius: 12px; padding: 1rem; cursor: pointer; transition: all 0.2s; }
        .mode-card:hover { border-color: #00B874; }
        .mode-card-title { font-size: 13px; font-weight: 600; color: #0A1A10; margin-bottom: 4px; }
        .mode-card-sub { font-size: 12px; color: #4A7A58; }
        .drop-zone { background: white; border: 2px dashed #C0DDD0; border-radius: 16px; padding: 3rem 2rem; text-align: center; cursor: pointer; transition: all 0.2s; margin-bottom: 1.25rem; }
        .drop-zone:hover { border-color: #00B874; background: #F0FAF5; }
        .drop-zone img { max-height: 200px; border-radius: 8px; margin-bottom: 1rem; }
        .drop-icon { font-size: 36px; margin-bottom: 0.75rem; }
        .drop-text { font-size: 14px; color: #4A7A58; margin-bottom: 0.5rem; }
        .drop-cats { font-size: 12px; color: #8AB098; }
        .btn-scan { width: 100%; padding: 14px; background: #00B874; color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
        .btn-scan:hover { background: #008850; }
        .btn-scan:disabled { background: #C0DDD0; cursor: not-allowed; }
        .result-card { background: white; border: 1px solid #E0EFE4; border-radius: 16px; padding: 1.5rem; margin-top: 1.25rem; }
        .result-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .result-score { width: 52px; height: 52px; border-radius: 50%; background: transparent; color: #00B874; border: 2px solid #00B874; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; flex-shrink: 0; }
        .result-name { font-size: 17px; font-weight: 700; color: #0A1A10; margin-bottom: 4px; }
        .result-meta { font-size: 13px; color: #4A7A58; }
        .result-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
        .result-tag { background: #E8F5EE; color: #00B874; font-size: 11px; padding: 3px 10px; border-radius: 20px; }
        .price-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
        .price-box { background: #F6FAF7; border-radius: 10px; padding: 0.75rem; text-align: center; }
        .price-box.recommended { background: #E8F5EE; border: 1.5px solid #00B874; }
        .price-label { font-size: 11px; color: #4A7A58; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .price-val { font-size: 20px; font-weight: 700; color: #0A1A10; }
        .price-box.recommended .price-val { color: #00B874; }
        .result-advice { font-size: 13px; color: #4A7A58; line-height: 1.6; padding: 0.75rem; background: #F6FAF7; border-radius: 8px; }
        .nav { background: white; border-bottom: 1px solid #E0EFE4; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-size: 18px; font-weight: 300; color: #0A1A10; text-decoration: none; }
        .nav-logo strong { font-weight: 600; color: #00B874; }
        .nav-right { display: flex; align-items: center; gap: 0.75rem; }
        .nav-email { font-size: 12px; color: #4A7A58; }
        .nav-logout { font-size: 12px; color: #4A7A58; background: none; border: 1px solid #E0EFE4; border-radius: 8px; padding: 6px 12px; cursor: pointer; }
        @media (max-width: 600px) { .mode-cards { grid-template-columns: 1fr; } .price-grid { grid-template-columns: 1fr; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">shoot<strong>scan</strong></a>
        <a href="/" style={{ fontSize: '13px', color: '#00B874', textDecoration: 'none', fontWeight: 600 }}>← Accueil</a>
      </nav>

      <div className="scanner-wrap">
        <div className="page-title">Scanner un <em>article</em></div>
        <div className="page-sub">Une photo et l'IA fait le reste — estimation complète en quelques secondes.</div>

        <div className="scan-limit-bar">
          <div className="scan-limit-info">
            <div className="scan-limit-label">Scans utilisés ce mois</div>
            <div className="scan-limit-track">
              <div className="scan-limit-fill" style={{ width: `${(scanCount / 3) * 100}%` }}></div>
            </div>
          </div>
          <div className="scan-limit-count">{plan === 'free' ? `${scanCount} / 3` : '∞ Illimité'}</div>
          {plan === 'free' && <a href="/tarifs" className="upgrade-link">Passer Pro →</a>}
        </div>

        <div className="tab-switch">
          <button className={`tab-btn ${activeTab === 'simple' ? 'active' : ''}`} onClick={() => setActiveTab('simple')}>
            ⚡ Scan simple
          </button>
          <button className={`tab-btn ${activeTab === 'lot' ? 'active' : ''}`} onClick={() => setActiveTab('lot')}>
            Scan en lot <span className="pro-badge">Pro</span>
          </button>
        </div>

        <div className="mode-cards">
          <div className="mode-card">
            <div className="mode-card-title">🛍 Vider mon armoire</div>
            <div className="mode-card-sub">Estimation rapide + meilleure plateforme</div>
          </div>
          <div className="mode-card">
            <div className="mode-card-title">📦 Achat / revente pro</div>
            <div className="mode-card-sub">ROI, marge, calculateur intégré</div>
          </div>
        </div>

        <div className="drop-zone" onClick={() => fileInputRef.current?.click()}
          onDragOver={e => e.preventDefault()}
          onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}>
          {preview ? (
            <img src={preview} alt="preview" />
          ) : (
            <>
              <div className="drop-icon">📁</div>
              <div className="drop-text">Glisse ta photo ici ou clique pour uploader</div>
              <div className="drop-cats">Vêtement · Sneakers · Électronique · Meuble · Livre · Jeux · Montre · Sac · JPG PNG WEBP</div>
            </>
          )}
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }}
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />

        {error && <p style={{ color: 'red', fontSize: '13px', marginBottom: '1rem' }}>{error}</p>}

        <button className="btn-scan" onClick={handleScan} disabled={!image || loading}>
          {loading ? 'Analyse en cours...' : '⚡ Scanner cet article'}
        </button>

        {result && (
          <div className="result-card">
            <div className="result-header">
              <div className="result-score">{result.score}</div>
              <div>
                <div className="result-name">{result.nom}</div>
                {result.categorie}{result.etat ? ` · ${result.etat}` : ''}{result.couleur ? ` · ${result.couleur}` : ''}
                <div className="result-tags">
                  {result.tags?.map((t: string) => <span key={t} className="result-tag">{t}</span>)}
                </div>
                {result.plateformes && (
  <div style={{marginTop:'0.5rem', display:'flex', gap:'6px', flexWrap:'wrap'}}>
    {result.plateformes.map((p: string) => (
      <span key={p} style={{background:'#E8F5EE', color:'#00B874', fontSize:'11px', padding:'3px 10px', borderRadius:'20px', border:'1px solid #00B874'}}>{p}</span>
    ))}
  </div>
)}
              </div>
            </div>
            <div className="price-grid">
              <div className="price-box">
                <div className="price-label">Minimum</div>
                <div className="price-val">{result.prix_min}€</div>
              </div>
              <div className="price-box recommended">
                <div className="price-label">Recommandé</div>
                <div className="price-val">{result.prix_conseille}€</div>
              </div>
              <div className="price-box">
                <div className="price-label">Maximum</div>
                <div className="price-val">{result.prix_max}€</div>
              </div>
            </div>
            <div className="result-advice">{result.conseil}</div>
            {result.titre && <div style={{marginTop:'0.75rem', fontWeight:600, color:'#0A1A10'}}>{result.titre}</div>}
{result.description && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#4A7A58'}}>{result.description}</div>}
{result.roi && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#00B874', fontWeight:600}}>ROI : {result.roi}</div>}
{result.etat_conseille && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#4A7A58'}}>État conseillé : {result.etat_conseille}</div>}
          </div>
        )}

        {historique.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '1rem', color: '#0A1A10' }}>Historique des scans</h2>
            {historique.map((scan, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '14px', color: '#0A1A10', margin: 0 }}>{scan.nom}</p>
                  <p style={{ fontSize: '12px', color: '#4A7A58', margin: 0 }}>{scan.categorie}</p>
                </div>
                <p style={{ fontWeight: 700, color: '#00B874', margin: 0 }}>{scan.prix_conseille}€</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}