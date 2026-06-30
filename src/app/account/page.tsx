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
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#080C09', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', padding: '2.25rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.3px' }}>Mon compte</h1>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginBottom: '0.5rem' }}>Email</p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>{email}</p>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginBottom: '0.5rem' }}>Plan</p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#00B874', marginBottom: '2rem', textTransform: 'capitalize' }}>{plan}</p>
        <button onClick={handleLogout} style={{ width: '100%', padding: '13px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.15)', borderRadius: '100px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          Se déconnecter
        </button>
      </div>
    </main>
  )
}