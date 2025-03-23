"use client"

import * as React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  Lamp,
  LifeBuoy,
  Lightbulb,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  ListTodo,
  Plus
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/authClient"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { url } from "inspector";
import { organization } from "@/db/schema";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const { data: session ,error} = authClient.useSession();
  const [projects, setProjects] = React.useState<{ id: string; name: string }[]>([]);
  const [selectedOrganization, setSelectedOrganization] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { data: organizations } = authClient.useListOrganizations()

  useEffect(() => {
    const storedSlug = localStorage.getItem("activeOrganizationSlug");
    if (storedSlug && organizations) {
      const matchedOrg = organizations.find(org => org.slug === storedSlug);
      if (matchedOrg) {
        setSelectedOrganization(matchedOrg.slug);
      }
    }
  }, [organizations]);
  
   
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          <Select
              onValueChange={async (value) => {
                if (value === 'new_project') {
                  router.push("/dashboard/new-project");
                } else {
                  setSelectedOrganization(value);
                  const selectedOrg = organizations?.find(org => org.slug === value);
                  if (selectedOrg?.slug) {
                    localStorage.setItem("activeOrganizationSlug", selectedOrg.slug);
                  }
                }
              }}
              value={selectedOrganization}
            >
              <SelectTrigger className="w-full flex items-center gap-2 p-2 rounded-lg bg-white text-black border border-gray-300 shadow-sm">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4 text-gray-700" />
                </div>
                <div className="flex-1 text-left text-sm leading-tight">
                  <SelectValue placeholder="Select a project">
                    {organizations?.find(p => p.slug === selectedOrganization)?.name || selectedOrganization}
                  </SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-gray-200 shadow-lg">
                {organizations?.map((organization) => (
                  <SelectItem key={organization.id} value={organization.slug} className="hover:bg-gray-100 text-black">
                    {organization.name}
                  </SelectItem>
                ))}
                
                {/* Divider */}
                <div className="border-t border-gray-300 my-1"></div>

                <SelectItem 
                  key="new_project" 
                  value="new_project" 
                  className="hover:bg-gray-100 text-black bg-gray-50 font-semibold flex justify-between items-center"
                  onClick={() => router.push("/dashboard/new-project")}
                >
                  <span>New Project</span>
                  <Plus className="size-4 ml-auto" />
                </SelectItem>
              </SelectContent>
            </Select>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain
          items={[
            {
              title: "Dashboard",
              url: "/dashboard",
              icon: SquareTerminal,
              isActive: false,
            },
            {
              title: "Idea Board",
              url: `/ideaboard/${selectedOrganization}`,
              icon: Lightbulb,
              isActive: false,
            },
            {
              title: "Kanban",
              url: `/kanban/${selectedOrganization}`,
              icon: ListTodo,
              isActive: false,
            },
            {
              title: "Settings",
              url: "#",
              icon: Settings2,
              items: [
                { title: "General", url: "#" },
                { title: "Team", url: "#" },
                { title: "Billing", url: "#" },
                { title: "Limits", url: "#" },
              ],
            },
          ]}
        />

        <NavSecondary
          items={[
            { title: "Support", url: "mailto:manuel@getfevo.io?subject=Support%20Request&body=Hello,%20I%20need%20help%20with...", icon: LifeBuoy },
            { title: "Feedback", url: "https://www.getfevo.io/featureboard/efe1f73c-e50c-4c17-97c8-e7e761040b57", icon: Send },
          ]}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        {session ? (
          <NavUser
            user={{
              name: session.user?.name,
              email: session.user?.email,
              avatar: session.user?.image || "/default-avatar.png",
            }}
          />
        ) : (
          <div className="flex items-center gap-3 p-2">
            <Skeleton className="w-10 h-10 rounded-full" /> {/* Avatar Skeleton */}
            <div className="flex flex-col space-y-1">
              <Skeleton className="w-24 h-4 min-h-[1rem]" /> {/* Adjusted Name Skeleton */}
              <Skeleton className="w-32 h-3 min-h-[0.75rem]" /> {/* Adjusted Email Skeleton */}
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}