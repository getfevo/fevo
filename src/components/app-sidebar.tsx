"use client"

import * as React from "react"
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
  ListTodo
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = authClient.useSession();

  console.log("User:", session?.user);

  const [selectedCompany, setSelectedCompany] = React.useState("Acme Inc");

  const companies = [
    { name: "Acme Inc", plan: "Enterprise" },
    { name: "Globex Corp", plan: "Pro" },
    { name: "Soylent Corp", plan: "Business" },
    { name: "Initech", plan: "Startup" },
  ];

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          <Select
              onValueChange={(value) => setSelectedCompany(value)}
              value={selectedCompany}
            >
              <SelectTrigger className="w-full flex items-center gap-2 p-2 rounded-lg bg-white text-black border border-gray-300 shadow-sm">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4 text-gray-700" />
                </div>
                <div className="flex-1 text-left text-sm leading-tight">
                  <SelectValue placeholder="Select a company">
                    {selectedCompany}
                  </SelectValue>
                  <span className="block text-xs text-gray-500">
                    {companies.find((c) => c.name === selectedCompany)?.plan}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-gray-200 shadow-lg">
                {companies.map((company) => (
                  <SelectItem 
                    key={company.name} 
                    value={company.name} 
                    className="hover:bg-gray-100 text-black"
                  >
                    {company.name} - <span className="text-xs text-gray-500">{company.plan}</span>
                  </SelectItem>
                ))}
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
              url: "#",
              icon: SquareTerminal,
              isActive: true,
              
            },
            {
              title: "Idea Bord",
              url: "#",
              icon: Lightbulb,
            },
            {
              title: "Kanban",
              url: "#",
              icon: ListTodo,
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
            { title: "Feedback", url: "#", icon: Send },
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