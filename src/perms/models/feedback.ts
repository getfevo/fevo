import { z } from 'zod'

export const feedbackSchema = z.object({
  __typename: z.literal('feedback'),
  id: z.string(),
  topic: z.union([
    z.literal('developer'),
    z.literal('product'),
    z.literal('support'),
    z.literal('marketing'),
    z.literal('sales'),
  ]),
  orgId: z.string(),
})
