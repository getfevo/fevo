import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { feature_request } from "@/db/schema"; // Import the feature table from your schema
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { projectId, title, description } = await req.json();

    // Validate required fields
    if (!projectId || typeof projectId !== "string" || !title || typeof title !== "string") {
      return NextResponse.json({ error: "Invalid request body. 'projectId' and 'title' are required." }, { status: 400 });
    }

    // Insert new feature record
    const result = await db.insert(feature_request).values({
      projectId,
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json({ feature: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating feature:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    // Validate projectId
    if (!projectId || typeof projectId !== "string") {
      return NextResponse.json({ error: "Invalid or missing 'projectId' parameter." }, { status: 400 });
    }

    // Fetch feature requests for the given projectId
    const features = await db
      .select()
      .from(feature_request)
      .where(eq(feature_request.projectId, projectId));

    return NextResponse.json({ features }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feature requests:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}