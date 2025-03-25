import { z } from "zod";
import { TRPCauth, t } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { organization, feature_request } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const inputSchema = z.object({
    organizationSlug: z.string().min(1, "Organization slug is required"),
});

export const getFeatures = t.procedure
    .use(TRPCauth)
    .input(inputSchema)
    // kept it as a mutation for now. Later we will shift to RSC
    .mutation(async ({ ctx, input }) => {
            const organizationSlug = input.organizationSlug
        
            // Query the organization to get the organizationId from the slug
            const orgResult = await db
              .select({ id: organization.id })
              .from(organization)
              .where(eq(organization.slug, organizationSlug))
              .limit(1)
              .catch(() => {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "We were not able to fetch requests"
                })
              })
        
            if (!orgResult.length) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "We were not able to find correct organization",
                })
            }
        
            const organizationId = orgResult[0].id;
        
            const featureRequests = await db
              .select()
              .from(feature_request)
              .where(eq(feature_request.organizationId, organizationId));

            return  { 
                requests: featureRequests
            }
            
        }
)
