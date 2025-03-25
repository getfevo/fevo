import { z } from "zod";
import { TRPCauth, t } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { feature_request } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const inputSchema = z.object({
  featureRequestId: z.string(),
});

export const updateVotes = t.procedure
    .use(TRPCauth)
    .input(inputSchema)
    .mutation(async ({ ctx, input }) => {

        const { featureRequestId } = input;

        // Fetch the current vote count
        const currentFeatureRequest = await db
        .select({ votes: feature_request.votes })
        .from(feature_request)
        .where(eq(feature_request.id, featureRequestId))
        .limit(1);

        if (!currentFeatureRequest.length) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "We were not able to find the current feature",
        });
        }

        const currentVotes = currentFeatureRequest[0].votes;

        if (currentVotes === null) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "There are no votes yet.",
        });
        }

        // Update the vote count by incrementing it
        const updatedFeatureRequest = await db
        .update(feature_request)
        .set({ votes: currentVotes + 1 })
        .where(eq(feature_request.id, featureRequestId))
        .returning()
        .catch(() => {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "We were not able to update vote."
            })
        })

        if (!updatedFeatureRequest.length) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "We were not able to find the feature request",
        });
        }

        return { featureRequest: updatedFeatureRequest[0] };

})
