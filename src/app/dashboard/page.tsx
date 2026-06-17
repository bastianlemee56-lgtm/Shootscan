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
  const [mode, setMode] = useState<'armoire' | 'revente'>('armoire')
  const [lotImages, setLotImages] = useState<{file: File, preview: string, base64: string}[]>([])
  const [lotResults, setLotResults] = useState<any[]>([])
  const [lotLoading, setLotLoading] = useState(false)
  const [lotError, setLotError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const lotInputRef = useRef<HTMLInputElement>(null)
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
      if (data) setHistorique(data)
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

  const handleLotFiles = (files: FileList) => {
    const maxFiles = plan === 'business' ? 10 : 3
    const selected = Array.from(files).slice(0, maxFiles)
    const readers = selected.map(file => new Promise<{file: File, preview: string, base64: string}>(resolve => {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        resolve({ file, preview: result, base64: result.split(',')[1] })
      }
      reader.readAsDataURL(file)
    }))
    Promise.all(readers).then(newImages => setLotImages(prev => [...prev, ...newImages].slice(0, maxFiles)))
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
        body: JSON.stringify({ image, plan, mode }),
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

  const handleLotScan = async () => {
    if (lotImages.length === 0) return
    setLotLoading(true)
    setLotError('')
    setLotResults([])
    const results: any[] = []
    for (const item of lotImages) {
      try {
        const res = await fetch('/api/scan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: item.base64, plan, mode }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Erreur')
        results.push({ ...data, preview: item.preview })
      } catch (e: any) {
        results.push({ error: e.message, preview: item.preview })
      }
    }
    setLotResults(results)
    setLotLoading(false)
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const isPro = plan === 'pro' || plan === 'business'

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh' }}>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
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
        .tab-btn:disabled { opacity: 0.5; cursor: not-allowed; }
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
        .lot-previews { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem; }
        .lot-preview { position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1; background: #E0EFE4; }
        .lot-preview img { width: 100%; height: 100%; object-fit: cover; }
        .lot-result { background: white; border: 1px solid #E0EFE4; border-radius: 12px; padding: 1rem; margin-bottom: 0.75rem; display: grid; grid-template-columns: 80px 1fr; gap: 1rem; align-items: start; }
        .lot-result img { width: 80px; height: 80px; object-fit: cover; border-radius: 8px; }
        .result-card { background: white; border: 1px solid #E0EFE4; border-radius: 16px; padding: 1.5rem; margin-top: 1.25rem; }
        .result-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .result-score { width: 52px; height: 52px; border-radius: 50%; background: transparent; color: #00B874; border: 2px solid #00B874; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; flex-shrink: 0; }
        .result-name { font-size: 17px; font-weight: 700; color: #0A1A10; margin-bottom: 4px; }
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
        .nav-logo { font-size: 20px; font-weight: 300; color: #0A1A10; text-decoration: none; letter-spacing: -0.5px; }
        .nav-logo strong { font-weight: 600; color: #00B874; }
        .upgrade-box { background: #E8F5EE; border: 1px solid #00B874; border-radius: 12px; padding: 1.25rem; text-align: center; margin-bottom: 1.25rem; }
        .upgrade-box p { font-size: 14px; color: #0A1A10; margin-bottom: 0.75rem; }
        @media (max-width: 600px) { .mode-cards { grid-template-columns: 1fr; } .price-grid { grid-template-columns: 1fr; } .lot-previews { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <nav className="nav">
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
  <svg viewBox="0 0 520 80" height="36" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="iconClip">
        <rect x="0" y="0" width="80" height="80" rx="14"/>
      </clipPath>
    </defs>
    <rect x="0" y="0" width="80" height="80" rx="14" fill="#0A1A10"/>
    <g clipPath="url(#iconClip)">
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
    <text x="96" y="50" fontFamily="Arial Black, sans-serif" fontSize="30" fontWeight="900">
      <tspan fill="#0A1A10">Shoot</tspan><tspan fill="#00B874">scan</tspan>
    </text>
    <text x="97" y="66" fontFamily="Arial, sans-serif" fontSize="9" fill="#4A7A58" letterSpacing="3">AI VALUATION</text>
  </svg>
</a>
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
          <button
            className={`tab-btn ${activeTab === 'lot' ? 'active' : ''}`}
            onClick={() => isPro ? setActiveTab('lot') : null}
            style={{ opacity: isPro ? 1 : 0.5, cursor: isPro ? 'pointer' : 'not-allowed' }}>
            Scan en lot <span className="pro-badge">Pro</span>
          </button>
        </div>

        {activeTab === 'simple' && (
          <>
            <div className="mode-cards">
  <div
    className={`mode-card ${mode === 'armoire' ? 'active' : ''}`}
    onClick={() => setMode('armoire')}
    style={{ borderColor: mode === 'armoire' ? '#00B874' : undefined, background: mode === 'armoire' ? '#F0FBF6' : undefined }}
  >
    <div className="mode-card-title">👘 Vider mon armoire</div>
    <div className="mode-card-sub">Estimation rapide + meilleure plateforme</div>
  </div>
  <div
    className={`mode-card ${mode === 'revente' ? 'active' : ''}`}
    onClick={() => isPro ? setMode('revente') : null}
    style={{
      borderColor: mode === 'revente' ? '#00B874' : undefined,
      background: mode === 'revente' ? '#F0FBF6' : undefined,
      opacity: isPro ? 1 : 0.5,
      cursor: isPro ? 'pointer' : 'not-allowed'
    }}
  >
    <div className="mode-card-title">🎯 Achat / revente pro {!isPro && <span className="pro-badge">Pro</span>}</div>
    <div className="mode-card-sub">{isPro ? 'ROI, marge, calculateur intégré' : 'Disponible en plan Pro'}</div>
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
                    <div style={{ fontSize: '13px', color: '#4A7A58' }}>{result.categorie}{result.etat ? ` · ${result.etat}` : ''}{result.couleur ? ` · ${result.couleur}` : ''}</div>
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
                  <div className="price-box"><div className="price-label">Minimum</div><div className="price-val">{result.prix_min}€</div></div>
                  <div className="price-box recommended"><div className="price-label">Recommandé</div><div className="price-val">{result.prix_conseille}€</div></div>
                  <div className="price-box"><div className="price-label">Maximum</div><div className="price-val">{result.prix_max}€</div></div>
                </div>
                {isPro && <div className="result-advice">{result.conseil}</div>}
                {result.titre && <div style={{marginTop:'0.75rem', fontWeight:600, color:'#0A1A10'}}>{result.titre}</div>}
                {result.description && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#4A7A58'}}>{result.description}</div>}
                {result.roi && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#00B874', fontWeight:600}}>ROI : {result.roi}</div>}
                {result.etat_conseille && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#4A7A58'}}>État conseillé : {result.etat_conseille}</div>}
                {result.marge_estimee && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#00B874', fontWeight:600}}>Marge estimée : {result.marge_estimee}</div>}
                {result.prix_achat_max && <div style={{marginTop:'0.5rem', fontSize:'13px', color:'#4A7A58'}}>Prix d'achat max conseillé : {result.prix_achat_max}</div>}
              </div>
            )}
          </>
        )}

        {activeTab === 'lot' && isPro && (
          <>
            <div className="drop-zone" onClick={() => lotInputRef.current?.click()}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); if (e.dataTransfer.files.length) handleLotFiles(e.dataTransfer.files) }}>
              <div className="drop-icon">📁</div>
              <div className="drop-text">Glisse plusieurs photos ou clique pour uploader</div>
              <div className="drop-cats">{plan === 'business' ? 'Max 10 articles (illimité/mois)' : 'Max 3 articles'} · JPG PNG WEBP</div>
            </div>

            <input ref={lotInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }}
              onChange={e => { if (e.target.files) handleLotFiles(e.target.files) }} />

            {lotImages.length > 0 && (
              <div className="lot-previews">
                {lotImages.map((img, i) => (
                  <div key={i} className="lot-preview">
                    <img src={img.preview} alt={`article ${i+1}`} />
                  </div>
                ))}
              </div>
            )}

            {lotError && <p style={{ color: 'red', fontSize: '13px', marginBottom: '1rem' }}>{lotError}</p>}

            <button className="btn-scan" onClick={handleLotScan} disabled={lotImages.length === 0 || lotLoading}>
              {lotLoading ? `Analyse en cours... (${lotResults.length}/${lotImages.length})` : `⚡ Scanner ${lotImages.length > 0 ? lotImages.length : ''} article${lotImages.length > 1 ? 's' : ''}`}
            </button>

            {lotResults.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                {lotResults.map((r, i) => (
  <div key={i} className="lot-result">
    <img src={lotImages[i]?.preview} alt="" />
    {r.error ? (
      <p style={{ color: 'red', fontSize: '13px' }}>{r.error}</p>
    ) : (
      <div>
        <div style={{ fontWeight: 700, color: '#0A1A10', marginBottom: '4px' }}>{r.nom}</div>
        <div style={{ fontSize: '12px', color: '#4A7A58', marginBottom: '6px' }}>{r.categorie}{r.etat ? ` · ${r.etat}` : ''}</div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '13px', color: '#4A7A58' }}>Min: {r.prix_min}€</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#00B874' }}>{r.prix_conseille}€</span>
          <span style={{ fontSize: '13px', color: '#4A7A58' }}>Max: {r.prix_max}€</span>
        </div>
        {r.plateformes && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
            {r.plateformes.slice(0, 3).map((p: string) => (
              <span key={p} style={{ background: '#E8F5EE', color: '#00B874', fontSize: '11px', padding: '2px 8px', borderRadius: '20px', border: '1px solid #00B874' }}>{p}</span>
            ))}
          </div>
        )}
        {r.conseil && <div style={{ fontSize: '12px', color: '#4A7A58', marginTop: '4px' }}>{r.conseil}</div>}
        {r.titre && <div style={{marginTop:'0.5rem', fontWeight:600, color:'#0A1A10'}}>{r.titre}</div>}
{r.description && <div style={{marginTop:'0.5rem', fontSize:'12px', color:'#4A7A58'}}>{r.description}</div>}
{r.roi && <div style={{marginTop:'0.5rem', fontSize:'12px', color:'#00B874', fontWeight:600}}>ROI : {r.roi}</div>}
{r.etat_conseille && <div style={{marginTop:'0.5rem', fontSize:'12px', color:'#4A7A58'}}>État conseillé : {r.etat_conseille}</div>}
{r.marge_estimee && <div style={{marginTop:'0.5rem', fontSize:'12px', color:'#00B874', fontWeight:600}}>Marge estimée : {r.marge_estimee}</div>}
{r.prix_achat_max && <div style={{marginTop:'0.5rem', fontSize:'12px', color:'#4A7A58'}}>Prix d'achat max conseillé : {r.prix_achat_max}</div>}
      </div>
    )}
  </div>
))}
              </div>
            )}
          </>
        )}

        {historique.length > 0 && (
  <div style={{ marginTop: '2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0A1A10', margin: 0 }}>Historique des scans</h2>
      {isPro && (
<button
        onClick={() => {
          const headers = ['Date', 'Nom', 'Catégorie', 'État', 'Couleur', 'Tags', 'Prix conseillé', 'Plateformes', 'Conseil']
          const rows = historique.map(s => [
            new Date(s.created_at).toLocaleDateString('fr-FR'),
            s.nom ?? '',
            s.categorie ?? '',
            s.etat ?? '',
            s.couleur ?? '',
            (s.tags ?? []).join(' | '),
            s.prix_conseille ?? '',
            (s.plateformes ?? []).join(' | '),
            s.conseil ?? '',
          ])
          const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')
          const blob = new Blob([csv], { type: 'text/csv' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'shootscan_historique.csv'
          a.click()
          URL.revokeObjectURL(url)
        }}
        style={{ background: '#E8F5EE', border: '1px solid #00B874', color: '#00B874', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
      >
        ⬇ Export CSV
      </button>)}
    </div>
    {historique.map((scan, i) => (
      <div key={i} style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '12px', padding: '1rem', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <p style={{ fontWeight: 700, fontSize: '14px', color: '#0A1A10', margin: 0 }}>{scan.name}</p>
          <p style={{ fontWeight: 700, color: '#00B874', margin: 0, flexShrink: 0, marginLeft: '1rem' }}>{scan.price_mid}€</p>
        </div>
        <p style={{ fontSize: '12px', color: '#4A7A58', margin: '0 0 6px 0' }}>
          {[scan.categorie, scan.etat, scan.couleur].filter(Boolean).join(' · ')}
        </p>
        {scan.tags?.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
            {scan.tags.map((t: string) => (
              <span key={t} style={{ background: '#E8F5EE', color: '#00B874', fontSize: '11px', padding: '2px 8px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
        )}
        {scan.plateformes?.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
            {scan.plateformes.map((p: string) => (
              <span key={p} style={{ background: '#F6FAF7', color: '#4A7A58', fontSize: '11px', padding: '2px 8px', borderRadius: '20px', border: '1px solid #E0EFE4' }}>{p}</span>
            ))}
          </div>
        )}
        {scan.conseil && <p style={{ fontSize: '12px', color: '#4A7A58', margin: 0, fontStyle: 'italic' }}>{scan.conseil}</p>}
        <p style={{ fontSize: '11px', color: '#8AB098', margin: '6px 0 0 0' }}>{new Date(scan.created_at).toLocaleDateString('fr-FR')}</p>
      </div>
    ))}
  </div>
)}
      </div>
    </main>
  )
}