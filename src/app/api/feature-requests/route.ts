import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { feature_request } from "@/db/schema"; // Import the feature request table from your schema

export async function POST(req: Request) {
  try {
    const { projectId, title, description, category } = await req.json();

    // Validate required fields
    if (!projectId || typeof projectId !== "string" || !title || typeof title !== "string") {
      return NextResponse.json({ error: "Invalid request body. 'projectId' and 'title' are required." }, { status: 400 });
    }

    // Insert new feature request record
    const result = await db.insert(feature_request).values({
      projectId,
      title,
      description,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json({ featureRequest: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating feature request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}