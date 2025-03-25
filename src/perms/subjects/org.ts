import { z } from 'zod'

import { orgSchema } from '../models/org'

export const orgSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('view'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('org'), orgSchema]),
])

export type OrgSubject = z.infer<typeof orgSubject>
