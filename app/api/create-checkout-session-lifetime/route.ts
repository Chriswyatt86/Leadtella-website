import { type NextRequest, NextResponse } from "next/server"

// CORS configuration - NO wildcards
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://leadtella.com",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
}

export async function OPTIONS(request: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  })
}

export async function POST(request: NextRequest) {
  try {
    // Check if we have Stripe configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        {
          status: 500,
          headers: corsHeaders,
        },
      )
    }

    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID required" },
        {
          status: 400,
          headers: corsHeaders,
        },
      )
    }

    // Import Stripe dynamically to avoid build issues
    const { default: Stripe } = await import("stripe")
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })

    // Create checkout session for one-time payment (lifetime deal)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment", // one-time payment for lifetime
      line_items: [
        {
          price: priceId, // Use the actual price ID passed from frontend
          quantity: 1,
        },
      ],
      success_url: "https://app.leadtella.com?upgraded=true&plan=lifetime",
      cancel_url: `${request.nextUrl.origin}/pricing?canceled=true`,
    })

    // Return the checkout URL with secure CORS headers
    return NextResponse.json({ url: session.url }, { headers: corsHeaders })
  } catch (error: any) {
    console.error("Stripe error:", error)
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
        headers: corsHeaders,
      },
    )
  }
}
