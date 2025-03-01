import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unorthorized", { status: 401 });
    }
    const user = await currentUser();
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "10,000 AI Credit",
            description: "All $10 Worth of AI Credit",
          },
          unit_amount: 1000,
        },
      },
    ];
    const purchase = await db.purchase.create({
      data: {
        userId: userId,
        credit: 10000,
      },
    });
    const stripeCustomer = await db.stripeCustomer.findUnique({
      where: {
        userId: userId,
      },
      select: {
        stripeCustomerId: true,
      },
    });
    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user?.emailAddresses[0].emailAddress,
      });
      const stripeCustomer = await db.stripeCustomer.create({
        data: {
          userId: userId,
          stripeCustomerId: customer.id,
        },
      });
    }
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer?.stripeCustomerId,
      line_items,
      mode: "payment",
      success_url: `http://localhost:3000/dashboard`,
      cancel_url: `http://localhost:3000/`,
      metadata: {
        userId: userId,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
