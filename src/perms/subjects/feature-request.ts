import { z } from 'zod'
import { featureRequestSchema } from '../models/feature-request'


export const featureRequestSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('view'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('mark_as_done'),
  ]),
  z.union([z.literal('feature_request'), featureRequestSchema]),
])

export type FeatureRequestSubject = z.infer<typeof featureRequestSubject>
