import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import {
  BarChart3,
  ChevronDown,
  Filter,
  Home,
  LayoutDashboard,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Star,
  ThumbsUp,
  TrendingUpIcon as Trending,
  Users,
} from "lucide-react"


const stats = [
  {
    title: "Total Feedback",
    value: "1,284",
    change: "+12.3%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    title: "Active Users",
    value: "3,427",
    change: "+8.6%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Feature Requests",
    value: "842",
    change: "+5.2%",
    trend: "up",
    icon: Star,
  },
  {
    title: "Implemented",
    value: "128",
    change: "+24.5%",
    trend: "up",
    icon: ThumbsUp,
  },
]

const topFeatures = [
  {
    id: "feat-1",
    title: "Dark mode support",
    votes: 342,
    status: "planned",
    category: "UI/UX",
    comments: 28,
    progress: 0,
  },
  {
    id: "feat-2",
    title: "API documentation improvements",
    votes: 287,
    status: "in-progress",
    category: "Developer",
    comments: 42,
    progress: 65,
  },
  {
    id: "feat-3",
    title: "Mobile app for Android",
    votes: 264,
    status: "in-progress",
    category: "Mobile",
    comments: 36,
    progress: 30,
  },
  {
    id: "feat-4",
    title: "CSV export functionality",
    votes: 198,
    status: "completed",
    category: "Data",
    comments: 14,
    progress: 100,
  },
  {
    id: "feat-5",
    title: "Team collaboration features",
    votes: 176,
    status: "planned",
    category: "Collaboration",
    comments: 22,
    progress: 0,
  },
]

const recentActivity = [
  {
    id: "act-1",
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "commented on",
    feature: "Dark mode support",
    time: "2 hours ago",
  },
  {
    id: "act-2",
    user: {
      name: "Michael Torres",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "upvoted",
    feature: "API documentation improvements",
    time: "4 hours ago",
  },
  {
    id: "act-3",
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "created request",
    feature: "Calendar integration",
    time: "6 hours ago",
  },
  {
    id: "act-4",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "commented on",
    feature: "Mobile app for Android",
    time: "8 hours ago",
  },
]

const statusColors = {
  planned: "bg-amber-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
}

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-screen w-full bg-muted/10">
          <div className="flex-1">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search feedback..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center gap-2 md:ml-auto md:gap-4">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Plus className="mr-2 h-4 w-4" />
                  New Request
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
            <main className="flex-1 space-y-6 p-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Overview of your product feedback and feature requests</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Filter className="h-3.5 w-3.5" />
                          <span>Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>All Feedback</DropdownMenuItem>
                        <DropdownMenuItem>Feature Requests</DropdownMenuItem>
                        <DropdownMenuItem>Bug Reports</DropdownMenuItem>
                        <DropdownMenuItem>Improvements</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Select defaultValue="7days">
                      <SelectTrigger className="h-8 w-[130px]">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="90days">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                          {stat.change} from last month
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="grid gap-6 md:grid-cols-6 mt-6">
                  <Card className="md:col-span-4">
                    <CardHeader className="flex flex-row items-center">
                      <div className="grid gap-1">
                        <CardTitle>Top Feature Requests</CardTitle>
                        <CardDescription>Most requested features by your users</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        <span>Filter</span>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topFeatures.map((feature) => (
                          <div key={feature.id} className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                  <ThumbsUp className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <div className="font-medium">{feature.title}</div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>{feature.votes} votes</span>
                                    <span>•</span>
                                    <span>{feature.comments} comments</span>
                                    <span>•</span>
                                    <Badge variant="outline" className="rounded-sm px-1 text-[10px]">
                                      {feature.category}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="capitalize">
                                  <div
                                    className={`mr-1.5 h-2 w-2 rounded-full ${statusColors[feature.status as keyof typeof statusColors]}`}
                                  />
                                  {feature.status.replace("-", " ")}
                                </Badge>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                
                                </Button>
                              </div>
                            </div>
                            {feature.status === "in-progress" && <Progress value={feature.progress} className="h-1.5" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Feature Requests
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest actions from your users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-start gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                              <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-0.5">
                              <p className="text-sm">
                                <span className="font-medium">{activity.user.name}</span>{" "}
                                <span className="text-muted-foreground">{activity.action}</span>{" "}
                                <span className="font-medium">{activity.feature}</span>
                              </p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Feedback Categories</CardTitle>
                      <CardDescription>Distribution of feedback by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-[4/3] w-full rounded-lg bg-muted/20 p-4">
       
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Feedback Status</CardTitle>
                      <CardDescription>Current status of all feedback</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-[4/3] w-full rounded-lg bg-muted/20 p-4">
                     
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
