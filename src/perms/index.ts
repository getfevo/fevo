import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'
import { z } from 'zod'


import { permissions } from './perms'
import type { Role } from './roles'
import { orgSubject } from './subjects/org'
import { userSubject } from './subjects/user'
import { featureRequestSubject } from './subjects/feature-request'
import { feedbackSubject } from './subjects/feedbacks'

const appAbilitiesSchema = z.union([
  userSubject,
  orgSubject,
  featureRequestSubject,
  feedbackSubject,
  z.tuple([z.literal('manage'), z.literal('all')]),
])

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: { id: string; role: Role }) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function')
    throw new Error(`Permissions for role ${user.role} not found`)

  permissions[user.role](user, builder)

  const ability = builder.build({
    detectSubjectType(subject) {
      return subject.__typename
    },
  })

  ability.can = ability.can.bind(ability)
  ability.cannot = ability.cannot.bind(ability)

  return ability
}
