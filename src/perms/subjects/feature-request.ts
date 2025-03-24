import { z } from 'zod'


export const featureRequestSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('view'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('mark_as_done'),
  ]),
  z.literal('feature_request'),
])

export type FeatureRequestSubject = z.infer<typeof featureRequestSubject>
