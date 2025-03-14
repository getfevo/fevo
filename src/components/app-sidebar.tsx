"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
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
              title: "Playground",
              url: "#",
              icon: SquareTerminal,
              isActive: true,
              items: [
                { title: "History", url: "#" },
                { title: "Starred", url: "#" },
                { title: "Settings", url: "#" },
              ],
            },
            {
              title: "Models",
              url: "#",
              icon: Bot,
              items: [
                { title: "Genesis", url: "#" },
                { title: "Explorer", url: "#" },
                { title: "Quantum", url: "#" },
              ],
            },
            {
              title: "Documentation",
              url: "#",
              icon: BookOpen,
              items: [
                { title: "Introduction", url: "#" },
                { title: "Get Started", url: "#" },
                { title: "Tutorials", url: "#" },
                { title: "Changelog", url: "#" },
              ],
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

        <NavProjects
          projects={[
            { name: "Design Engineering", url: "#", icon: Frame },
            { name: "Sales & Marketing", url: "#", icon: PieChart },
            { name: "Travel", url: "#", icon: Map },
          ]}
        />

        <NavSecondary
          items={[
            { title: "Support", url: "#", icon: LifeBuoy },
            { title: "Feedback", url: "#", icon: Send },
          ]}
          className="mt-auto"
        />
      </SidebarContent>

      <SidebarFooter>

          <NavUser
            user={{
              name: session?.user?.name || "Guest",
              email: session?.user?.email || "guest@example.com",
              avatar: session?.user?.image || "/default-avatar.png",
            }}
          />
        
      </SidebarFooter>
    </Sidebar>
  )
}