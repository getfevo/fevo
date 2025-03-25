import { z } from "zod";
import { TRPCauth, t } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { feature_request } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const inputSchema = z.object({
  status: z.string(),
  draggableId: z.string(),
});

export const updateStatus = t.procedure
    .use(TRPCauth)
    .input(inputSchema)
    .mutation(async ({ ctx, input }) => {
      const { status, draggableId: id } = input

      const updatedFeatureRequest = await db
        .update(feature_request)
        .set({
          status,
          updatedAt: new Date(),
        })
        .where(eq(feature_request.id, id))
        .returning()
        .catch(() => {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "We were not able to update the status."
            })
        })

      if (!updatedFeatureRequest.length) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "We are not able to find the feature request"
        })
      }

      return { featureRequest: updatedFeatureRequest[0] };

})
