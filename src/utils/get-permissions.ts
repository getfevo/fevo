import { defineAbilityFor } from '@/perms'
import type { User } from '@/perms/models/user'

export function getUserPermissions(user: User) {
  const ability = defineAbilityFor(user)

  return ability
}
