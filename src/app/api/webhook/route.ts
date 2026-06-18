import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const PRICE_TO_PLAN: Record<string, string> = {
  price_1TjSY7GanXWUCjKgu1l9T4op: "pro",
  price_1TjSY6GanXWUCjKgVgZG1xCS: "pro",
  price_1TjSY6GanXWUCjKgGhElnnvh: "business",
}

export async function POST(req: Request) {
  const body = await req.text()
  const sig = (await headers()).get("stripe-signature")!
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body, sig, process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch {
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.user_id
    const priceId = session.metadata?.price_id

    console.log("userId:", userId, "priceId:", priceId)

    if (userId && priceId) {
      const { error } = await supabase
        .from("profiles")
        .update({
          plan: PRICE_TO_PLAN[priceId] ?? "pro",
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      console.log("Supabase error:", error)
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .eq("stripe_subscription_id", sub.id)
      .single()

    if (profile) {
      await supabase
        .from("profiles")
        .update({ plan: "free", updated_at: new Date().toISOString() })
        .eq("id", profile.id)
    }
  }

  return NextResponse.json({ received: true })
}

export const config = { api: { bodyParser: false } }
