"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided } from "@hello-pangea/dnd";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

interface FeatureRequest {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
  category: string;
  votes: number;
}

interface Column {
  id: string;
  title: string;
  tasks: FeatureRequest[];
}

interface Board {
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}

export default function KanbanPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [board, setBoard] = useState<Board>({
    columns: {
      "new": {
        id: "new",
        title: "New",
        tasks: [],
      },
      "not-started": {
        id: "not-started",
        title: "Not Started",
        tasks: [],
      },
      "in-progress": {
        id: "in-progress",
        title: "In Progress",
        tasks: [],
      },
      "completed": {
        id: "completed",
        title: "Completed",
        tasks: [],
      },
    },
    columnOrder: ["new", "not-started", "in-progress", "completed"],
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`);
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
        const response = await fetch(`/api/feature-requests?projectId=${projectId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch feature requests");
        }
        const data = await response.json();
    
        // Ensure all columns exist in the board
        const newBoard = {
          ...board,
          columns: {
            new: {
              ...board.columns.new,
              tasks: data.featureRequests?.filter((fr: FeatureRequest) =>
                fr.status === "new" || fr.status === null || fr.status === undefined
              ) || [],
            },
            "not-started": {
              ...board.columns["not-started"],
              tasks: data.featureRequests?.filter((fr: FeatureRequest) => fr.status === "not-started") || [],
            },
            "in-progress": {
              ...board.columns["in-progress"],
              tasks: data.featureRequests?.filter((fr: FeatureRequest) => fr.status === "in-progress") || [],
            },
            completed: {
              ...board.columns.completed,
              tasks: data.featureRequests?.filter((fr: FeatureRequest) => fr.status === "completed") || [],
            },
          },
        };
    
        setBoard(newBoard);
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
      fetchProjectDetails();
      fetchFeatureRequests();
    }
  }, [projectId]);

  const onDragEnd = async (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = board.columns[source.droppableId];
    const destColumn = board.columns[destination.droppableId];
    const sourceTasks = Array.from(sourceColumn.tasks);
    const destTasks = Array.from(destColumn.tasks);

    const [movedTask] = sourceTasks.splice(source.index, 1);
    
    // Update the task's status based on the destination column
    const updatedTask = {
      ...movedTask,
      status: destination.droppableId === 'new' ? null : destination.droppableId
    };

    if (source.droppableId === destination.droppableId) {
      // Moving within the same column
      sourceTasks.splice(destination.index, 0, updatedTask);

      const newColumn = {
        ...sourceColumn,
        tasks: sourceTasks,
      };

      setBoard({
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      // Moving to different column
      destTasks.splice(destination.index, 0, updatedTask);

      const newSourceColumn = {
        ...sourceColumn,
        tasks: sourceTasks,
      };

      const newDestColumn = {
        ...destColumn,
        tasks: destTasks,
      };

      setBoard({
        ...board,
        columns: {
          ...board.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
      });
    }

    // Update the task status in the backend
    try {
      const response = await fetch(`/api/feature-requests?id=${draggableId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: destination.droppableId === 'new' ? null : destination.droppableId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task status');
      }
    } catch (error) {
      console.error('Error updating task status:', error);
      // You might want to show an error message to the user
      // and potentially revert the UI change
    }
  };

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
                      placeholder="Search tasks..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                    />
                  </div>
                </form>
              </div>
            </header>
            <main className="flex-1 space-y-6 p-6">
              <div className="max-w-8xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">{projectName}</h1>
                    <p className="text-muted-foreground">{projectDescription}</p>
                  </div>
                </div>
                
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {board.columnOrder.map((columnId) => {
  const column = board.columns[columnId];

  if (!column) {
    console.error(`Column with ID "${columnId}" is missing`);
    return null;
  }

  return (
    <div key={columnId}>
      <Card>
        <CardHeader>
          <CardTitle>{column.title}</CardTitle>
        </CardHeader>
                            <CardContent>
                              <Droppable droppableId={columnId}>
                                {(provided: DroppableProvided) => (
                                  <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="min-h-[200px]"
                                  >
                                    {column.tasks.map((task, index) => (
                                      <Draggable
                                        key={task.id}
                                        draggableId={task.id}
                                        index={index}
                                      >
                                        {(provided: DraggableProvided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="mb-2 text-sm"
                                          >
                                            <Card>
                                              <CardContent className="p-3">
                                                <div className="flex justify-between items-start mb-2">
                                                  <h3 className="font-semibold">{task.title}</h3>
                                                  <Badge variant={task.category === 'feature' ? 'default' : 'destructive'}>
                                                    {task.category}
                                                  </Badge>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-2">{task.description}</p>
                                                <div className="flex justify-between items-center">
                                                  <span className="text-xs text-gray-500">
                                                    {new Date(task.createdAt).toLocaleDateString()}
                                                  </span>
                                                  <span className="text-xs text-gray-600">{task.votes} votes</span>
                                                </div>
                                              </CardContent>
                                            </Card>
                                          </div>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </DragDropContext>
              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
