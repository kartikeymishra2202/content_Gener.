import { db } from "@/lib/db";

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Invalid Signature " }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  if (event.type === "checkout.session.completed") {
    if (!userId) {
      return new NextResponse("Invalid session", { status: 400 });
    }
    try {
      const findUserByUserId = await db.user.findUnique({
        where: {
          userId: userId,
        },
      });
      if (!findUserByUserId) {
        await db.user.create({
          data: {
            userId: userId,
            totalCredit: 10000 + 10000,
          },
        });
      } else {
        await db.user.update({
          where: {
            userId: userId,
          },
          data: {
            totalCredit: findUserByUserId.totalCredit + 10000,
          },
        });
      }
    } catch (e) {
      console.error(e);
      return new NextResponse("Invalid user not authorize");
    }
  } else {
    return new NextResponse("Invalid event ", { status: 200 });
  }

  return new NextResponse("success", { status: 200 });
}
