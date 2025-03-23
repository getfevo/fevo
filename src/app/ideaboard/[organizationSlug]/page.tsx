"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Search } from "lucide-react"

interface FeatureRequest {
  id: string
  title: string
  description: string
  createdAt: string
  status: string
  category: string;
  votes: number
}

function FeatureRequestCard({ item }: { item: FeatureRequest, onVote: (id: string) => void }) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{item.title}</h3>
          <Badge variant={item.category === 'feature' ? 'default' : 'destructive'}>
            {item.category}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
          <div className="flex items-center gap-2">
          
            <span className="text-sm text-gray-600">{item.votes} votes</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              item.status === 'new' ? 'bg-blue-100 text-blue-800' :
              item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {item.status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function NewPostDialog() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState<'feature' | 'bug'>('feature')
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { organizationSlug } = useParams<{ organizationSlug: string }>()

  const handleSubmit = async () => {
    if (!title || !description || !category) {
      alert("Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/feature-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationSlug,
          title,
          description,
          type,
          category,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create feature request')
      }

      // Reset form
      setTitle("")
      setDescription("")
      setType('feature')
      setCategory("")
      
      // Close dialog and refresh data
      window.location.reload()
    } catch (error) {
      console.error("Error creating feature request:", error)
      alert("Failed to create feature request")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Request</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Request</DialogTitle>
          <DialogDescription>
            Submit a new feature request or report a bug.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={type === 'feature'}
                  onChange={() => setType('feature')}
                />
                Feature Request
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={type === 'bug'}
                  onChange={() => setType('bug')}
                />
                Bug Report
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Input
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full min-h-[100px] p-2 border rounded-md"
              placeholder="Describe your request..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function IdeaBoardPage() {
  const { organizationSlug } = useParams<{ organizationSlug: string }>()
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [items, setItems] = useState<FeatureRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/api/organization?slug=${organizationSlug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProjectName(data.name);
        setProjectDescription(data.description);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    const fetchFeatureRequests = async () => {
      try {
        const response = await fetch(`/api/feature-requests?organizationSlug=${organizationSlug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch feature requests");
        }
        const data = await response.json();
        setItems(data.featureRequests || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (organizationSlug) {
      fetchProjectDetails();
      fetchFeatureRequests();
    }
  }, [organizationSlug]);

  const mainContent = (
    <div className="flex-1 space-y-6 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-left flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{projectName}</h1>
            <p className="text-muted-foreground">{projectDescription}</p>
          </div>
          <NewPostDialog />
        </div>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="bugs">Bugs</TabsTrigger>
            <TabsTrigger value="ideas">Ideas</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="flex flex-col">
              {items.length > 0 ? (
                items
                  .slice()
                  .sort((a, b) => b.votes - a.votes)
                  .map(item => <FeatureRequestCard key={item.id} item={item} onVote={(id) => console.log(`Voted for ${id}`)} />)
              ) : (
                <p className="text-center text-gray-500">No feature requests found.</p>
              )}
            </div>
          </TabsContent>
          <TabsContent value="features">
            <div className="flex flex-col">
              {items.filter(item => item.category === 'feature').length > 0 ? (
                items
                  .filter(item => item.category === 'feature')
                  .sort((a, b) => b.votes - a.votes)
                  .map(item => <FeatureRequestCard key={item.id} item={item} onVote={(id) => console.log(`Voted for ${id}`)} />)
              ) : (
                <p className="text-center text-gray-500">No feature requests found.</p>
              )}
            </div>
          </TabsContent>
          <TabsContent value="bugs">
            <div className="flex flex-col">
              {items.filter(item => item.category === 'bug').length > 0 ? (
                items
                  .filter(item => item.category === 'bug')
                  .sort((a, b) => b.votes - a.votes)
                  .map(item => <FeatureRequestCard key={item.id} item={item} onVote={(id) => console.log(`Voted for ${id}`)} />)
              ) : (
                <p className="text-center text-gray-500">No bug reports found.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                      placeholder="Search ideas..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                    />
                  </div>
                </form>
              </div>
            </header>
            {mainContent}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
