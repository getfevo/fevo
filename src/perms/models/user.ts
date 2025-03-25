import { z } from 'zod'

import { roleSchema } from '../roles'

export const userSchema = z.object({
  __type: z.literal('user'),
  id: z.string().uuid(),
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
