'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Account() {
  const [email, setEmail] = useState('')
  const [plan, setPlan] = useState('')
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setEmail(user.email || '')
      const { data: profile } = await supabase
        .from('profiles')
        .select('plan')
        .eq('id', user.id)
        .single()
      if (profile) setPlan(profile.plan)
    }
    init()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#F6FAF7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', border: '1px solid #E0EFE4', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '1.5rem', color: '#0A1A10' }}>Mon compte</h1>
        <p style={{ fontSize: '14px', color: '#4A7A58', marginBottom: '0.5rem' }}>Email</p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#0A1A10', marginBottom: '1.5rem' }}>{email}</p>
        <p style={{ fontSize: '14px', color: '#4A7A58', marginBottom: '0.5rem' }}>Plan</p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#00B874', marginBottom: '2rem', textTransform: 'capitalize' }}>{plan}</p>
        <button onClick={handleLogout} style={{ width: '100%', padding: '12px', background: '#0A1A10', color: 'white', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          Se déconnecter
        </button>
      </div>
    </main>
  )
}