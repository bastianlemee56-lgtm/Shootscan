'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
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
        .field input { width: 100%; padding: 10px 12px; border: 1.5px solid #E0EFE4; border-radius: 10px; font-size: 14px; outline: none; box-sizing: border-box; transition: border 0.2s; color: #0A1A10; }
        .field input::placeholder { color: #4A7A58; }
        .field input:focus { border-color: #00B874; }
        .btn { width: 100%; padding: 12px; background: #00B874; color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 0.5rem; }
        .btn:hover { background: #008850; }
        .btn:disabled { background: #C0DDD0; cursor: not-allowed; }
        .error { color: #E24B4A; font-size: 13px; margin-top: 0.75rem; }
        .link { text-align: center; font-size: 13px; color: #4A7A58; margin-top: 1.25rem; }
        .link a { color: #00B874; text-decoration: none; font-weight: 600; }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">shoot<strong>scan</strong></a>
      </nav>

      <div className="center">
        <div className="card">
          <div className="card-title">Bon retour <em>👋</em></div>
          <div className="card-sub">Connecte-toi pour accéder à ton scanner.</div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="ton@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          {error && <div className="error">{error}</div>}

          <button className="btn" onClick={handleLogin} disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          <div className="link">
            Pas encore de compte ? <a href="/register">Créer un compte</a>
          </div>
        </div>
      </div>
    </main>
  )
}