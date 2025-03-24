import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db";
import { member, organization } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const userId = searchParams.get("userId");

  if (!slug) 
    return NextResponse.json({ error: "Missing 'slug' query parameter." }, { status: 400 });
  
  if (!userId)
    return NextResponse.json({ error: "Missing 'userId' query parameter." }, { status: 401 });

  try {
    const result = await db
      .select()
      .from(organization)
      .where(eq(organization.slug, slug))
      .limit(1);
      
      if (result.length === 0) {
        return NextResponse.json({ error: "Organization not found." }, { status: 404 });
      }

    const user = await db.select()
      .from(member)
      .where(
        and(
          eq(member.userId, userId),
          eq(member.organizationId, result[0].id)
        )
      )
      .limit(1);

    if (user.length === 0) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    

    return NextResponse.json({ organization: result[0] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch organization." }, { status: 500 });
  }
}
