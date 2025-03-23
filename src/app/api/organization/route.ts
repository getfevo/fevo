import { NextResponse } from "next/server";
import { db } from "@/db";
import { organization } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing 'slug' query parameter." }, { status: 400 });
  }

  try {
    const result = await db
      .select()
      .from(organization)
      .where(eq(organization.slug, slug))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json({ error: "Organization not found." }, { status: 404 });
    }

    return NextResponse.json({ organization: result[0] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch organization." }, { status: 500 });
  }
}