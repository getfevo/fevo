import { defineAbilityFor } from '@/perms'
import { type Role } from '@/perms/roles'

export function getUserPermissions(user: { id: string; role: Role }) {
  const ability = defineAbilityFor(user)

  return ability
}
