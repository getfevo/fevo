"use client"

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { FeatureRequestCard } from "@/components/featureRequestCard"
import { useParams } from "next/navigation";

const sampleFeatures = [
  {
    id: "1",
    title: "AI feedback prioritization helper",
    description: "It would be great if we could get AI to automatically suggest new features...",
    category: "Feature Request",
    votes: 15,
  },
  {
    id: "2",
    title: "Help Center Statistics",
    description: "I'd love to see a stats page about how many times people interact with our support center.",
    category: "Feedback",
    votes: 8,
  },
  {
    id: "3",
    title: "User profile customization",
    description: "Allow users to customize their profiles with avatars and banners.",
    category: "Feature Request",
    votes: 20,
  },
];

function NewPostDialog({ projectId }: { projectId: string }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !category || !content) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/feature-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId,
          title,
          description: content,
          category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      alert("Feature request submitted successfully!");
      setTitle("");
      setCategory("");
      setContent("");
    } catch (error) {
      console.error("Error submitting feature request:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="whitespace-nowrap">
          Create a New Post
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Post</DialogTitle>
          <DialogDescription>Enter the details for your post below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right">Title</label>
            <Input
              className="col-span-3"
              placeholder="Post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right">Category</label>
            <select
              className="col-span-3 border rounded p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right">Content</label>
            <textarea
              className="col-span-3 border rounded p-2"
              placeholder="Write your post here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Create Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function FeatureRequestsPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="container mx-auto p-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Share your product feedback!</CardTitle>
          <CardDescription>
            We want to make Featurebase the best product for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <Input placeholder="Search for feedback..." className="sm:w-auto flex-1" />
          <NewPostDialog projectId={projectId} />
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row mt-6 gap-6">
        {/* Main Column */}
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="Features">
            <TabsList>
              <TabsTrigger value="Features">Features</TabsTrigger>
              <TabsTrigger value="Bugs">Bugs</TabsTrigger>
              <TabsTrigger value="Ideas">Ides</TabsTrigger>
            </TabsList>

            <TabsContent value="Features" className="mt-4">
              {sampleFeatures.map((feature) => (
                <FeatureRequestCard key={feature.id} feature={feature} />
              ))}
            </TabsContent>

            {/* Popular Tab */}
            <TabsContent value="popular" className="mt-4">
              <Card className="bg-white mb-4">
                <CardContent>
                  <h2 className="text-lg font-semibold">Popular Feature Request</h2>
                  <p className="text-sm text-muted-foreground">
                    This is an example of a popular feature request...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recent Tab */}
            <TabsContent value="recent" className="mt-4">
              <Card className="bg-white mb-4">
                <CardContent>
                  <h2 className="text-lg font-semibold">Recent Feedback</h2>
                  <p className="text-sm text-muted-foreground">
                    This is an example of recent feedback...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Column */}
        <div className="w-full md:w-1/4">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Boards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm"><a href="#">View all posts</a></p>
              <p className="text-sm"><a href="#">Bugs</a></p>
              <p className="text-sm"><a href="#">Feedback</a></p>
              <p className="text-sm"><a href="#">Integrations</a></p>
              <p className="text-sm"><a href="#">Design</a></p>
              <p className="text-sm"><a href="#">Changelog</a></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}