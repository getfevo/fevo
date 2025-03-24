import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getTenant() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const orgId = session?.session.activeOrganizationId
    const userId = session?.user?.id;
    if (orgId) return orgId;
    if (userId) return userId;

    return redirect("/auth/login");
}
