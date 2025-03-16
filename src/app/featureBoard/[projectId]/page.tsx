"use client"
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useParams } from "next/navigation";

interface Feature {
  id: string;
  votes: number;
  title: string;
  description: string;
  category: string;
}

function FeatureRequestCard({ feature }: { feature: Feature }) {
  const [votes, setVotes] = useState(feature.votes);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const votedRequests = JSON.parse(localStorage.getItem("votedFeatureRequests") || "[]");
    setHasVoted(votedRequests.includes(feature.id));
  }, [feature.id]);

  const handleUpvote = async () => {
    if (hasVoted) return;

    try {
      const response = await fetch("/api/feature-requests", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ featureRequestId: feature.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to upvote feature request");
      }

      const data = await response.json();
      setVotes(data.featureRequest.votes);
      setHasVoted(true);

      const votedRequests = JSON.parse(localStorage.getItem("votedFeatureRequests") || "[]");
      localStorage.setItem("votedFeatureRequests", JSON.stringify([...votedRequests, feature.id]));
    } catch (error) {
      console.error("Error upvoting feature request:", error);
      alert("An error occurred while upvoting.");
    }
  };

  return (
    <Card key={feature.id} className="bg-white mb-4">
      <CardContent>
        <div className="flex items-center">
          <div className="mr-4 flex flex-col items-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleUpvote} 
            disabled={hasVoted}
            className={hasVoted ? "bg-green-500 text-white border-green-500" : ""}
          >
            ▲
          </Button>
            <span className="text-sm mt-1">{votes}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
          <Badge variant="outline">{feature.category}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

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
  const [projectName, setProjectName] = useState<string | null>(null);
  const [featureRequests, setFeatureRequests] = useState<{ id: string; votes: number; title: string; description: string; category: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   const fetchProjectName = async () => {
      try {
        const response = await fetch(`/api/projects?id=${projectId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project name");
        }
        const data = await response.json();
        setProjectName(data.project.name);
      } catch (err) {
        console.error("Error fetching project name:", err);
      }
    };

    if (projectId) {
      fetchProjectName();
    }
  }, [projectId]);

  useEffect(() => {
    const fetchFeatureRequests = async () => {
      try {
        const response = await fetch(`/api/feature-requests?projectId=${projectId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch feature requests");
        }
        const data = await response.json();
        setFeatureRequests(data.featureRequests);
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

    if (projectId) {
      fetchFeatureRequests();
    }
  }, [projectId]);

  if (loading) {
    return <div className="text-center mt-4">Loading feature requests...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="container mx-auto p-6">
      <div className="mb-6 text-left">
        <h1 className="text-3xl font-bold">{projectName ? `${projectName}` : "Project"}</h1>
        <p className="text-muted-foreground">This is the feature request board for this project. Share your ideas and feedback to help us improve!</p>
      </div>
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
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="Features">
            <TabsList>
              <TabsTrigger value="Features">Features</TabsTrigger>
              <TabsTrigger value="Bugs">Bugs</TabsTrigger>
              <TabsTrigger value="Ideas">Ideas</TabsTrigger>
            </TabsList>

            <TabsContent value="Features" className="mt-4">
              {featureRequests.length > 0 ? (
                featureRequests.map((feature) => (
                  <FeatureRequestCard key={feature.id} feature={feature} />
                ))
              ) : (
                <p className="text-center text-muted-foreground">No feature requests found.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    </div>
  )
}