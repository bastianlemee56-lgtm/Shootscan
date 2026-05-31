import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { image, plan } = await request.json()
    // Vérifier les limites selon le plan
const cookieStoreCheck = await cookies()
const supabaseCheck = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { cookies: { getAll() { return cookieStoreCheck.getAll() }, setAll() {} } }
)

const { data: { user: currentUser } } = await supabaseCheck.auth.getUser()

if (currentUser) {
  const { data: profile } = await supabaseCheck
    .from("profiles")
    .select("plan")
    .eq("id", currentUser.id)
    .single()

  const userPlan = profile?.plan ?? "free"

  if (userPlan === "free") {
  const { data: profileCheck } = await supabaseCheck
    .from("profiles")
    .select("scans_used_this_month")
    .eq("id", currentUser.id)
    .single()

  if ((profileCheck?.scans_used_this_month ?? 0) >= 3) {
    return NextResponse.json(
      { error: "Limite de 3 scans/mois atteinte. Passez au plan Pro !" },
      { status: 403 }
    )
  }
}
}

    const prompt = plan === "free"
      ? `Analyse cet article a vendre. Reponds UNIQUEMENT en JSON sans markdown :
{"nom": "nom", "score": 85, "categorie": "Electronique", "etat": "Bon etat", "couleur": "Noir", "tags": ["Forte demande", "Populaire"], "prix_min": "12", "prix_conseille": "15", "prix_max": "20", "plateformes": ["Vinted", "Leboncoin"], "conseil": "conseil de vente court"}`
      : `Analyse cet article a vendre en detail. Reponds UNIQUEMENT en JSON sans markdown :
{"nom": "nom", "score": 85, "categorie": "Electronique", "etat": "Bon etat", "couleur": "Noir", "tags": ["Forte demande", "Populaire"], "prix_min": "12", "prix_conseille": "15", "prix_max": "20", "plateformes": ["Vinted", "Leboncoin", "eBay", "Facebook Marketplace"], "conseil": "conseil de vente court", "titre": "titre optimise", "description": "description complete", "etat_conseille": "Tres bon etat", "roi": "benefice potentiel"}`

    const response = await anthropic.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: image,
              },
            },
            {
              type: 'text',
              text: prompt,
            },
          ],
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const clean = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)

    // Sauvegarder dans Supabase
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll() },
          setAll() {},
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('scans').insert({
        user_id: user.id,
        nom: result.nom,
        score: result.score,
        prix_conseille: result.prix_conseille,
        plateformes: result.plateformes,
      })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erreur lors du scan' }, { status: 500 })
  }
}


