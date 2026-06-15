'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async () => {
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
  }

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#F6FAF7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .nav { background: white; border-bottom: 1px solid #E0EFE4; padding: 0 1.5rem; display: flex; align-items: center; height: 56px; }
        .nav-logo { font-size: 20px; font-weight: 300; color: #0A1A10; text-decoration: none; }
        .nav-logo strong { font-weight: 600; color: #00B874; }
        .center { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; }
        .card { background: white; border: 1px solid #E0EFE4; border-radius: 16px; padding: 2rem; width: 100%; max-width: 400px; }
        .card-title { font-size: 22px; font-weight: 700; color: #0A1A10; margin-bottom: 0.25rem; }
        .card-title em { font-style: italic; color: #00B874; font-family: 'Instrument Serif', Georgia, serif; }
        .card-sub { font-size: 14px; color: #4A7A58; margin-bottom: 1.75rem; }
        .field { margin-bottom: 1rem; }
        .field label { display: block; font-size: 13px; font-weight: 500; color: #0A1A10; margin-bottom: 6px; }
        .field input { width: 100%; padding: 10px 12px; border: 1.5px solid #E0EFE4; border-radius: 10px; font-size: 14px; outline: none; box-sizing: border-box; transition: border 0.2s; }
        .field input::placeholder { color: #4A7A58; }
        .badge { background: #E8F5EE; color: #00B874; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; margin-bottom: 1.25rem; display: inline-block; }
        .btn { width: 100%; padding: 12px; background: #00B874; color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 0.5rem; }
        .btn:hover { background: #008850; }
        .btn:disabled { background: #C0DDD0; cursor: not-allowed; }
        .error { color: #E24B4A; font-size: 13px; margin-top: 0.75rem; }
        .link { text-align: center; font-size: 13px; color: #4A7A58; margin-top: 1.25rem; }
        .link a { color: #00B874; text-decoration: none; font-weight: 600; }
      `}</style>

      <nav className="nav">
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
  <svg viewBox="0 0 520 80" height="36" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="iconClip5">
        <rect x="0" y="0" width="80" height="80" rx="14"/>
      </clipPath>
    </defs>
    <rect x="0" y="0" width="80" height="80" rx="14" fill="#0A1A10"/>
    <g clipPath="url(#iconClip5)">
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
      </nav>

      <div className="center">
        <div className="card">
          <div className="card-title">Créer un <em>compte</em></div>
          <div className="card-sub">3 scans gratuits, sans carte bancaire.</div>

          <div className="badge">✓ 3 scans gratuits offerts</div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="ton@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          {error && <div className="error">{error}</div>}

          <button className="btn" onClick={handleRegister} disabled={loading}>
            {loading ? 'Création...' : 'Créer mon compte →'}
          </button>

          <div className="link">
            Déjà un compte ? <a href="/login">Se connecter</a>
          </div>
        </div>
      </div>
    </main>
  )
}