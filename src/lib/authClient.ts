import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";
import { toast } from "sonner";

export const authClient = createAuthClient({
  plugins: [organizationClient()],
});

export const { useSession, signOut, useListOrganizations, useActiveOrganization} = authClient;