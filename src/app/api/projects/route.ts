import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { project } from "@/db/schema"; // Import the project table from your schema

export async function POST(req: Request) {
  try {
    const { userId, name, description } = await req.json();

    // Validate required fields
    if (!userId || typeof userId !== "string" || !name || typeof name !== "string") {
      return NextResponse.json({ error: "Invalid request body. 'userId' and 'name' are required." }, { status: 400 });
    }

    // Insert new project record
    const result = await db.insert(project).values({
      userId,
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json({ project: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}