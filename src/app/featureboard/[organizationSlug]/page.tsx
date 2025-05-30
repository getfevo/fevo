"use client"
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useParams } from "next/navigation";
import { api } from "@/trpc/react";
import { toast } from "sonner";


type Feature = {
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  priority: number | null;
  votes: number | null; 
  category: string | null;
  createdBy: string | null;
  createdAt: Date;
  updatedAt: Date;
  organizationId: string | null;
};


function FeatureRequestCard({ feature }: { feature: Feature }) {
  const [votes, setVotes] = useState(feature.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const updateVotes = api.features.updateVotes.useMutation({
    onSuccess: async () => {
      toast.success("Upvoted!")
    },
    onError: (err) => {
      toast.error(`We were not able to create a feature. Error:${err.message}`)
    },
  });

  useEffect(() => {
    const votedRequests = JSON.parse(localStorage.getItem("votedFeatureRequests") || "[]");
    setHasVoted(votedRequests.includes(feature.id));
  }, [feature.id]);

  const handleUpvote = async () => {
    if (hasVoted) return;

    try {
      const data = await updateVotes.mutateAsync({ featureRequestId: feature.id });
      setVotes(data.featureRequest.votes!);
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
          <Badge variant="outline">{feature.status ? feature.status : "Unplanned"}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function NewPostDialog({ organizationSlug }: { organizationSlug: string }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const createFeature = api.features.create.useMutation({
    onSuccess: async (data) => {
      toast.success("Feature created successfully")
    },
    onError: (err) => {
      toast.error(`We were not able to create a feature. Error:${err.message}`)
    },
  });

  const handleSubmit = async () => {
    if (!title || !category || !content) {
      alert("All fields are required");
      return;
    }

    setLoading(true);  

    try {
      createFeature.mutate({ 
        organizationSlug,
        title,
        description: content,
        category,
       });
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
  const { organizationSlug } = useParams<{ organizationSlug: string }>();
  const [organizationName, setorganizationName] = useState<string | null>(null);
  const [projectDescription, setProjectDescription] = useState<string | null>(null);
  const [featureRequests, setFeatureRequests] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const getFeatures = api.features.get.useMutation({
        onSuccess: async () => {
          toast.success("Fetched all features!")
        },
        onError: (err) => {
          toast.error(`We were not able to fetch features. Error:${err.message}`)
        },
    });

  useEffect(() => {
   const fetchProjectName = async () => {
      try {
        const response = await fetch(`/api/organization?slug=${organizationSlug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project name");
        }
        const data = await response.json();
        setorganizationName(data.organization.name);
        //setProjectDescription(data.project.description);
      } catch (err) {
        console.error("Error fetching project name:", err);
      }
    };

    if (organizationSlug) {
      fetchProjectName();
    }
  }, [organizationSlug]);

  useEffect(() => {
    const fetchFeatureRequests = async () => {
      try {
        const response = await getFeatures.mutateAsync({ organizationSlug });
        setFeatureRequests(response.requests);
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
      fetchFeatureRequests();
    }
  }, [organizationSlug]);

  if (loading) {
    return <div className="text-center mt-4">Loading feature requests...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="container mx-auto p-6">
      <div className="mb-6 text-left flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{organizationName ? `${organizationName}` : "Project"}</h1>
          <p className="text-muted-foreground">{projectDescription ? `${projectDescription}` : "This is the standard description"}</p>
        </div>
        <NewPostDialog organizationSlug={organizationSlug} />
      </div>

      <div className="flex flex-col md:flex-row mt-6 gap-6">
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="All">
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Features">Features</TabsTrigger>
              <TabsTrigger value="Bugs">Bugs</TabsTrigger>
              <TabsTrigger value="Ideas">Ideas</TabsTrigger>
            </TabsList>

            <TabsContent value="All" className="mt-4">
              {featureRequests.length > 0 ? (
                featureRequests.map((feature) => (
                  <FeatureRequestCard key={feature.id} feature={feature} />
                ))
              ) : (
                <p className="text-center text-muted-foreground">No requests found.</p>
              )}
            </TabsContent>

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