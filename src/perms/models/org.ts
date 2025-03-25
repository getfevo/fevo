import { z } from 'zod'

export const orgSchema = z.object({
  __typename: z.literal('org').default('org'),
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
})

export type Org = z.infer<typeof orgSchema>
