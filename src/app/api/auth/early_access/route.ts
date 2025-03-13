import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { earlyAccess } from "@/db/schema"; // Ensure this matches your schema

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await db.insert(earlyAccess).values({ 
      email, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    });

    return NextResponse.json({ message: "Email added to waitlist" }, { status: 201 });
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}