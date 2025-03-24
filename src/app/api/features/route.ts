import { NextResponse } from "next/server";
import { db } from "@/db"; // Ensure this is the correct import for your Drizzle setup
import { feature_request, member } from "@/db/schema"; // Import the feature table from your schema
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!userId) 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const user = await db.select().from(member).where(eq(member.userId, userId));

    if (user.length === 0)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { organization_id, title, description } = await req.json();

    // Validate required fields
    if (!organization_id || typeof organization_id !== "string" || !title || typeof title !== "string") {
      return NextResponse.json({ error: "Invalid request body. 'projectId' and 'title' are required." }, { status: 400 });
    }

    // Insert new feature record
    const result = await db.insert(feature_request).values({
      organizationId: organization_id,
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
    const { userId } = await req.json();

    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await db.select().from(member).where(eq(member.userId, userId));
    

    const { searchParams } = new URL(req.url);
    const organizationId = searchParams.get("organizationId");

    // Validate projectId
    if (!organizationId || typeof organizationId !== "string") {
      return NextResponse.json({ error: "Invalid or missing 'organizationId' parameter." }, { status: 400 });
    }

    // Fetch feature requests for the given projectId
    const features = await db
      .select()
      .from(feature_request)
      .where(eq(feature_request.organizationId, organizationId));

    return NextResponse.json({ features }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feature requests:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}