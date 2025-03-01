import { db } from "@/lib/db";

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("User not Authenticated", { status: 401 });
    }
    const body = await req.json();
    // console.log("Received request body:", body);
    const { title, description, templateUsed } = body;
    //here it needed to convert the description to string to store in the database
    const ConvertDescription = JSON.stringify(description);

    const createdNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: ConvertDescription,
        templateUsed,
      },
    });
    //here revalidate the path to update the cache it is used here to update the cache of the home page
    revalidatePath("/");
    return NextResponse.json(createdNewOutput, { status: 200 });
  } catch (e) {
    return new NextResponse("POST, NEW DOC Error", {
      status: 500,
    });
  }
}
