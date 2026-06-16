import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { image, plan, mode } = await request.json()

    const cookieStoreCheck = await cookies()
    const supabaseCheck = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll() { return cookieStoreCheck.getAll() }, setAll() {} } }
    )

    const { data: { user: currentUser } } = await supabaseCheck.auth.getUser()

    let scansUsed = 0
    let userPlan = 'free'

    if (currentUser) {
      const { data: profile } = await supabaseCheck
        .from('profiles')
        .select('plan, scans_used_this_month')
        .eq('id', currentUser.id)
        .single()

      userPlan = profile?.plan ?? 'free'
      scansUsed = profile?.scans_used_this_month ?? 0

      if (userPlan === 'free' && scansUsed >= 3) {
        return NextResponse.json(
          { error: 'Limite de 3 scans/mois atteinte. Passez au plan Pro !' },
          { status: 403 }
        )
      }
    }

    const reventeExtra = mode === 'revente'
  ? `, "marge_estimee": "<estimation en euros de la marge si achat puis revente>", "prix_achat_max": "<prix d'achat maximum recommande pour rester profitable>", "roi_pourcentage": "<retour sur investissement estime en %>"`
  : ''

const noEuroRule = `IMPORTANT : tous les champs de prix (prix_min, prix_conseille, prix_max, prix_achat_max) doivent etre des nombres uniquement, SANS le symbole euro. Exemple correct : "12". Exemple incorrect : "12€".`
  const reventeNote = mode === 'revente'
  ? ` Tu agis comme un acheteur-revendeur professionnel. C'EST OBLIGATOIRE : tu DOIS absolument inclure dans le JSON les champs "marge_estimee", "prix_achat_max" et "roi_pourcentage", sans exception.`
  : ''

const scoreRule = `IMPORTANT pour le score (variable cle) : Le score reflete la VENDABILITE GLOBALE = (etat physique x 40%) + (demande/popularite de la marque ou du type d'objet x 40%) + (rapport offre/concurrence sur le marche x 20%).
Utilise toute l'echelle de 0 a 100 et sois tres precis :
- Etat Neuf avec etiquette : +20 points par rapport a la moyenne de la categorie
- Etat Tres bon etat : +10 points
- Etat Bon etat : 0 point (neutre)
- Etat correct : -15 points
- Mauvais etat : -30 points
Un objet sans marque reconnaissable mais en tres bon etat ne doit jamais scorer sous 45.
Un objet avec marque reconnue mais en mauvais etat ne doit jamais scorer au-dessus de 55.
Sois coherent : un meilleur etat physique doit TOUJOURS donner un score egal ou superieur a un etat moins bon pour un objet similaire.`
  const prompt = userPlan === 'free'
  ? `Tu es un expert en revente d'articles d'occasion. Analyse attentivement cette photo.${reventeNote}${noEuroRule}${scoreRule}
Evalue avec precision : l'etat reel visible, la demande du marche, et le prix juste.
Reponds UNIQUEMENT en JSON valide sans markdown ni commentaire :
{"nom": "nom precis de l'article", "score": <nombre entre 0 et 100 selon vendabilite reelle>, "categorie": "categorie precise", "etat": "etat reel parmi : Neuf avec etiquette / Neuf sans etiquette / Tres bon etat / Bon etat / Etat correct / Mauvais etat", "couleur": "couleur principale", "tags": ["tag pertinent 1", "tag pertinent 2"], "prix_min": "<prix bas realiste>", "prix_conseille": "<prix optimal>", "prix_max": "<prix haut>", "plateformes": ["plateforme1", "plateforme2"], "conseil": "conseil de vente concret et utile"${reventeExtra}}`
  : userPlan === 'business'
  ? `Tu es un expert en revente d'articles d'occasion. Analyse attentivement cette photo de facon tres complete.${reventeNote}${noEuroRule}${scoreRule}
Evalue avec precision : l'etat reel visible, la demande du marche, la saisonnalite, et le prix juste.
Reponds UNIQUEMENT en JSON valide sans markdown ni commentaire :
{"nom": "nom complet et precis", "score": <nombre entre 0 et 100 selon vendabilite reelle>, "categorie": "categorie precise", "etat": "etat reel parmi : Neuf avec etiquette / Neuf sans etiquette / Tres bon etat / Bon etat / Etat correct / Mauvais etat", "couleur": "couleur principale", "tags": ["tag1", "tag2", "tag3"], "prix_min": "<prix bas realiste>", "prix_conseille": "<prix optimal>", "prix_max": "<prix haut>"${mode === 'revente' ? `, "marge_estimee": "<calcule la marge en euros entre prix d'achat conseille et prix de revente conseille, exemple: 12€>", "prix_achat_max": "<prix maximum en euros a payer a l'achat pour rester profitable, exemple: 8€>", "roi_pourcentage": "<pourcentage de retour sur investissement, exemple: 150%>"` : ''}, "plateformes": ["Vinted", "Leboncoin", "eBay", "Facebook Marketplace", "Vestiaire Collective", "Back Market", "Depop", "Rakuten"], "conseil": "conseil expert detaille", "titre": "titre annonce optimise SEO", "description": "description complete et persuasive", "etat_conseille": "etat a mentionner dans l'annonce", "roi": "benefice potentiel estime", "meilleure_plateforme": "plateforme ideale avec raison", "prix_rapide": "<prix si vente rapide>", "saisonnalite": "meilleure periode pour vendre"}`
  : `Tu es un expert en revente d'articles d'occasion. Analyse attentivement cette photo.${reventeNote}${noEuroRule}${scoreRule}
Evalue avec precision : l'etat reel visible, la demande du marche, et le prix juste.
Reponds UNIQUEMENT en JSON valide sans markdown ni commentaire :
{"nom": "nom precis de l'article", "score": <nombre entre 0 et 100 selon vendabilite reelle>, "categorie": "categorie precise", "etat": "etat reel parmi : Neuf avec etiquette / Neuf sans etiquette / Tres bon etat / Bon etat / Etat correct / Mauvais etat", "couleur": "couleur principale", "tags": ["tag1", "tag2", "tag3"], "prix_min": "<prix bas realiste>", "prix_conseille": "<prix optimal>", "prix_max": "<prix haut>", "plateformes": ["Vinted", "Leboncoin", "eBay", "Facebook Marketplace"], "conseil": "conseil detaille", "titre": "titre optimise", "description": "description complete", "etat_conseille": "etat a mentionner", "roi": "benefice potentiel"${reventeExtra}}`
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: 'image/jpeg', data: image },
            },
            { type: 'text', text: prompt },
          ],
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const clean = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)

    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll() { return cookieStore.getAll() }, setAll() {} } }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { error: insertError } = await supabase.from('scans').insert({
  user_id: user.id,
  name: result.nom,
  resell_score: result.score,
  price_mid: result.prix_conseille,
  platforms: result.plateformes,
  category: result.categorie ?? null,
  condition: result.etat ?? null,
  couleur: result.couleur ?? null,
  tags: result.tags ?? null,
  conseil: result.conseil ?? null,
})
if (insertError) console.error('INSERT ERROR:', insertError)
      if (userPlan === 'free') {
        await supabase
          .from('profiles')
          .update({ scans_used_this_month: scansUsed + 1 })
          .eq('id', user.id)
      }
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erreur lors du scan' }, { status: 500 })
  }
}