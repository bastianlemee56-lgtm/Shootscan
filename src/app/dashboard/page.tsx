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
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setEmail(user.email || '')
        const { data } = await supabase
          .from('scans')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10)
        if (data) setHistorique(data)
      }
    }
    init()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1]
      setImage(base64)
      setPreview(reader.result as string)
      setResult(null)
    }
    reader.readAsDataURL(file)
  }

  const handleScan = async () => {
    if (!image) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, plan: 'free' }),
      })
      const data = await res.json()
      if (data.error) setError(data.error)
      else {
        setResult(data)
        setHistorique(prev => [data, ...prev])
      }
    } catch {
      setError('Erreur lors du scan')
    }
    setLoading(false)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0A0A0A' }}>Dashboard</h1>
          <button onClick={handleLogout}
            style={{ background: '#FF4444', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
            Se déconnecter
          </button>
        </div>

        <p style={{ color: '#4A7A58', marginBottom: '2rem' }}>Connecté : <strong>{email}</strong></p>

        <div style={{ border: '2px dashed #00B874', borderRadius: '12px', padding: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
          {preview ? (
            <img src={preview} style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
          ) : (
            <p style={{ color: '#888', marginBottom: '1rem' }}>Glisse une photo ou clique pour uploader</p>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" capture="environment" onChange={handleImage} style={{ display: 'none' }} />
          <button onClick={() => fileInputRef.current?.click()}
            style={{ background: '#f5f5f5', color: '#0A0A0A', padding: '10px 20px', borderRadius: '6px', border: '1px solid #ddd', cursor: 'pointer' }}>
            📁 Uploader
          </button>
        </div>

        {image && (
          <button onClick={handleScan} disabled={loading}
            style={{ width: '100%', background: loading ? '#ccc' : '#00B874', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '16px', cursor: 'pointer', marginBottom: '1rem' }}>
            {loading ? '⏳ Analyse en cours...' : '🔍 Scanner cet article →'}
          </button>
        )}

        {error && <p style={{ color: '#FF4444', textAlign: 'center' }}>{error}</p>}

        {result && (
          <div style={{ border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '20px', marginBottom: '1rem' }}>{result.nom}</h2>
            <p>⭐ Score : <strong>{result.score}/100</strong></p>
            <p>💰 Prix conseillé : <strong>{result.prix_conseille}</strong></p>
            <p>🛒 Plateformes : <strong>{result.plateformes?.join(', ')}</strong></p>
          </div>
        )}

        {historique.length > 0 && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '1rem', color: '#0A0A0A' }}>📋 Historique</h2>
            {historique.map((scan, i) => (
              <div key={i} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', marginBottom: '0.5rem' }}>
                <p style={{ fontWeight: 600 }}>{scan.nom}</p>
                <p style={{ fontSize: '12px', color: '#888' }}>⭐ {scan.score}/100 · 💰 {scan.prix_conseille}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}