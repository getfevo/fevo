import { z } from "zod";
import { TRPCauth, t } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { organization, feature_request } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const inputSchema = z.object({
    organizationSlug: z.string().min(1, "Organization slug is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    category: z.string().optional(),
});

export const createFeature = t.procedure
    .use(TRPCauth)
    .input(inputSchema)
    .mutation(async ({ ctx, input }) => {
        const { organizationSlug, title, description, category } = input;

        // Validate required fields
        if (!organizationSlug || typeof organizationSlug !== "string" || !title || typeof title !== "string") {
        throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid request body. 'organizationSlug' and 'title' are required.",
        });
        }

        // Query the organization to get the organizationId from the slug
        const orgResult = await db
        .select({ id: organization.id })
        .from(organization)
        .where(eq(organization.slug, organizationSlug))
        .limit(1);

        if (!orgResult.length) {
        throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid 'organizationSlug'.",
        });
        }

        const organizationId = orgResult[0].id;

        // Insert new feature request record
        const result = await db
        .insert(feature_request)
        .values({
            organizationId,
            title,
            description,
            category,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()
        .catch(() => {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "We were not able to create a feature."
            })
        })

        return { featureRequest: result };

})
