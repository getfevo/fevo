import { z } from 'zod'

import { feedbackSchema } from '../models/feedback'

export const feedbackSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('view'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('mark_as_read'),
  ]),
  z.union([z.literal('feedback'), feedbackSchema]),
])

export type FeedbackSubject = z.infer<typeof feedbackSubject>
