import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('DEVELOPER'),
  z.literal('PRODUCT'),
  z.literal('SUPPORT'),
  z.literal('MARKETING'),
  z.literal('SALES'),
])
export type Role = z.infer<typeof roleSchema>
