'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async () => {
    setError('')
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/login?registered=true')
    }
    setLoading(false)
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#FFFFFF' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#0A0A0A', marginBottom: '2rem', fontSize: '24px', fontWeight: 700 }}>
          Créer un compte
        </h1>

        {error && (
          <p style={{ color: '#FF4444', textAlign: 'center', marginBottom: '1rem', fontSize: '12px' }}>{error}</p>
        )}

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '12px', fontWeight: 500, color: '#4A7A58', display: 'block', marginBottom: '6px' }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@email.com"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '12px', fontWeight: 500, color: '#4A7A58', display: 'block', marginBottom: '6px' }}>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '12px', fontWeight: 500, color: '#4A7A58', display: 'block', marginBottom: '6px' }}>Confirmer le mot de passe</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="********"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }} />
        </div>

        <button onClick={handleRegister} disabled={loading}
          style={{ width: '100%', background: loading ? '#ccc' : '#00B874', color: '#fff', padding: '12px', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>
          {loading ? 'Inscription...' : "S'inscrire"}
        </button>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#4A7A58', marginTop: '1rem' }}>
          Déjà un compte ?{' '}
          <a href="/login" style={{ color: '#00B874', fontWeight: 500 }}>Se connecter</a>
        </p>
      </div>
    </main>
  )
}