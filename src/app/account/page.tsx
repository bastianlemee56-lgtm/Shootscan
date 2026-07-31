'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Account() {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setEmail(user.email || '')
    }
    init()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const handlePasswordChange = async () => {
    if (!newPassword || newPassword.length < 6) {
      setMessage('Le mot de passe doit faire au moins 6 caractères.')
      return
    }
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) {
      setMessage('Erreur : ' + error.message)
    } else {
      setMessage('Mot de passe mis à jour !')
      setNewPassword('')
    }
  }

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#080C09', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', padding: '2.25rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.3px' }}>Mon compte</h1>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginBottom: '0.5rem' }}>Email</p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '2rem' }}>{email}</p>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginBottom: '0.5rem' }}>Nouveau mot de passe</p>
        <input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="••••••••"
          style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', color: '#fff', fontSize: '14px', marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif' }}
        />
        <button
          onClick={handlePasswordChange}
          style={{ width: '100%', padding: '12px', background: '#00B874', color: 'white', border: 'none', borderRadius: '100px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif', marginBottom: '1rem' }}
        >
          Changer le mot de passe
        </button>

        {message && <p style={{ fontSize: '13px', color: message.startsWith('Erreur') ? '#ff6b6b' : '#00B874', marginBottom: '1rem' }}>{message}</p>}

        <button onClick={handleLogout} style={{ width: '100%', padding: '13px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.15)', borderRadius: '100px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          Se déconnecter
        </button>
      </div>
    </main>
  )
}