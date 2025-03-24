import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (user, { can, cannot }) => {
    cannot(['view', 'update'], 'org')
    can(['manage'], 'org', {
      ownerId: {
        $eq: user.id,
      },
    })

    can('manage', 'user')

  },
  DEVELOPER: (_user, { can }) => {
    can('view', 'org')
    can('manage', 'feature_request', {
      topic: 'developer',
    })
    can('manage', 'feedback', {
      topic: 'developer',
    })
  },
  PRODUCT: (_user, { can }) => {
    can('view', 'org')
    can('manage', 'feature_request', {
      topic: 'product',
    })
    can('manage', 'feedback', {
      topic: 'product',
    })
  },
  SUPPORT: (_user, { can }) => {
    can('view', 'org')
    can('manage', 'feature_request', {
      topic: 'support',
    })
    can('manage', 'feedback', {
      topic: 'support',
    })
  },
  MARKETING: (_user, { can }) => {
    can('view', 'org')
    can('manage', 'feature_request', {
      topic: 'marketing',
    })
    can('manage', 'feedback', {
      topic: 'marketing',
    })
  },
  SALES: (_user, { can }) => {
    can('view', 'org')
    can('manage', 'feature_request', {
      topic: 'sales',
    })
    can('manage', 'feedback', {
      topic: 'sales',
    })
  },
}
