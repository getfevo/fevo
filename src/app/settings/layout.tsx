"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")

  useEffect(() => {
    const path = pathname.split("/").pop() || "general"
    setActiveTab(path)
  }, [pathname])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/settings/${value}`)
  }

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <AppSidebar className="hidden lg:block" />
        <div className="flex flex-col">
          <div className="flex flex-col space-y-8 p-8 mx-auto w-full max-w-6xl">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="limits">Limits</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
} 