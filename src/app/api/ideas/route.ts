import { NextResponse } from "next/server";
import { db } from "@/db";
import { ideas } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    const projectIdeas = await db.query.ideas.findMany({
      where: eq(ideas.projectId, projectId),
      orderBy: (ideas, { desc }) => [desc(ideas.createdAt)],
    });

    return NextResponse.json({ ideas: projectIdeas });
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return NextResponse.json({ error: "Failed to fetch ideas" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { projectId, title, description } = await request.json();

    if (!projectId || !title || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newIdea = await db
      .insert(ideas)
      .values({
        projectId,
        title,
        description,
        status: "new",
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    return NextResponse.json({ idea: newIdea[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating idea:", error);
    return NextResponse.json(
      { error: "Failed to create idea" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const updatedIdea = await db
      .update(ideas)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(ideas.id, id))
      .returning();

    return NextResponse.json({ idea: updatedIdea[0] });
  } catch (error) {
    console.error("Error updating idea:", error);
    return NextResponse.json(
      { error: "Failed to update idea" },
      { status: 500 }
    );
  }
} 