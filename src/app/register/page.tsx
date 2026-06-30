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
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#080C09', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        :root { --g: #00B874; --card: rgba(255,255,255,.04); --border: rgba(255,255,255,.08); --text: rgba(255,255,255,.55); }
        .nav { background: rgba(8,12,9,.9); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 0 1.5rem; display: flex; align-items: center; height: 56px; }
        .center { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; }
        .card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.25rem; width: 100%; max-width: 400px; }
        .card-title { font-family:'Inter',sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 0.25rem; letter-spacing:-0.3px; }
        .card-title em { font-style: normal; color: var(--g); }
        .card-sub { font-size: 14px; color: var(--text); margin-bottom: 1.5rem; }
        .field { margin-bottom: 1rem; }
        .field label { display: block; font-size: 13px; font-weight: 500; color: rgba(255,255,255,.8); margin-bottom: 6px; }
        .field input { width: 100%; padding: 11px 12px; background: rgba(255,255,255,.03); border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; outline: none; box-sizing: border-box; transition: border 0.2s; color: #fff; }
        .field input::placeholder { color: rgba(255,255,255,.3); }
        .field input:focus { border-color: var(--g); }
        .badge { background: rgba(0,184,116,.1); color: var(--g); border: 1px solid rgba(0,184,116,.25); font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; margin-bottom: 1.25rem; display: inline-block; }
        .btn { width: 100%; padding: 13px; background: var(--g); color: white; border: none; border-radius: 100px; font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 0.5rem; font-family:'Inter',sans-serif; transition: box-shadow .2s; }
        .btn:hover { box-shadow: 0 8px 30px rgba(0,184,116,.4); }
        .btn:disabled { background: rgba(255,255,255,.08); color: rgba(255,255,255,.3); cursor: not-allowed; box-shadow: none; }
        .error { color: #ff6b6b; font-size: 13px; margin-top: 0.75rem; }
        .link { text-align: center; font-size: 13px; color: var(--text); margin-top: 1.25rem; }
        .link a { color: #00B874; text-decoration: none; font-weight: 600; }
      `}</style>

      <nav className="nav">
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <svg viewBox="0 0 520 80" height="32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="iconClip5">
                <rect x="0" y="0" width="80" height="80" rx="14"/>
              </clipPath>
            </defs>
            <rect x="0" y="0" width="80" height="80" rx="14" fill="#0d160f"/>
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
            <text x="96" y="50" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800">
              <tspan fill="#ffffff">Shoot</tspan><tspan fill="#00B874">scan</tspan>
            </text>
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