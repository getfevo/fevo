import { NextResponse } from "next/server";
import { db } from "@/db";
import { project } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "UserId is required" }, { status: 400 });
    }

    const projects = await db.select().from(project).where(eq(project.userId, id));
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}