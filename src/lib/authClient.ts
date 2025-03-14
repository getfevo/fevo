import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";
import { toast } from "sonner";

export const authClient = createAuthClient({
  plugins: [],
});

export const { useSession, signOut } = authClient;