import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { feature_request } from "@/db/schema"; // Import the feature request table from your schema
import { eq } from "drizzle-orm";

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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json({ error: "Missing 'projectId' query parameter." }, { status: 400 });
    }

    const featureRequests = await db
      .select()
      .from(feature_request)
      .where(eq(feature_request.projectId, projectId));

    return NextResponse.json({ featureRequests }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feature requests:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { featureRequestId } = await req.json();

    if (!featureRequestId || typeof featureRequestId !== "string") {
      return NextResponse.json({ error: "Invalid request body. 'featureRequestId' is required." }, { status: 400 });
    }

    // Since localStorage is only accessible on the client side, remove cookie handling here
    // Fetch the current vote count
    const currentFeatureRequest = await db
      .select({ votes: feature_request.votes })
      .from(feature_request)
      .where(eq(feature_request.id, featureRequestId))
      .limit(1);

    if (!currentFeatureRequest.length) {
      return NextResponse.json({ error: "Feature request not found." }, { status: 404 });
    }

    const currentVotes = currentFeatureRequest[0].votes;

    if (currentVotes === null) {
      return NextResponse.json({ error: "Current votes count is null." }, { status: 400 });
    }

    // Update the vote count by incrementing it
    const updatedFeatureRequest = await db
      .update(feature_request)
      .set({ votes: currentVotes + 1 })
      .where(eq(feature_request.id, featureRequestId))
      .returning();

    if (!updatedFeatureRequest.length) {
      return NextResponse.json({ error: "Feature request not found." }, { status: 404 });
    }

    return NextResponse.json({ featureRequest: updatedFeatureRequest[0] }, { status: 200 });
  } catch (error) {
    console.error("Error updating vote count:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}