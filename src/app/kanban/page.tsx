"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/authClient";

export default function KanbanRedirectPage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    const redirectToFirstProject = async () => {
      if (session?.user) {
        try {
          const response = await fetch(`/api/projects/${session.user.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch projects");
          }
          const data = await response.json();
          if (data.projects && data.projects.length > 0) {
            router.push(`/kanban/${data.projects[0].id}`);
          } else {
            router.push("/dashboard/new-project");
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
          router.push("/dashboard");
        }
      }
    };

    redirectToFirstProject();
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
