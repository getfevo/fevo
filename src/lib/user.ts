import type { User, ReadingProgress, Activity, ReadingGoal, Challenge } from "./types"
import { BookOpen, MessageSquare, ThumbsUp, Award, UserPlus } from "lucide-react"

export async function getCurrentUser(): Promise<User> {
  // In a real app, this would fetch from an API
  return {
    id: "user-1",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=128&width=128",
    joinDate: "2023-01-15",
    booksRead: 37,
    booksToRead: 24,
    currentlyReading: "The Midnight Library by Matt Haig",
    favoriteGenres: ["Science Fiction", "Mystery", "Biography"],
  }
}

export function getUserReadingProgress(): {
  currentlyReading: ReadingProgress[]
  recentlyFinished: ReadingProgress[]
} {
  return {
    currentlyReading: [
      {
        id: "book-1",
        title: "The Midnight Library",
        author: "Matt Haig",
        coverImage: "/placeholder.svg?height=300&width=200",
        progress: 65,
        currentPage: 213,
        totalPages: 328,
        startedDate: "2023-05-10",
      },
      {
        id: "book-2",
        title: "Project Hail Mary",
        author: "Andy Weir",
        coverImage: "/placeholder.svg?height=300&width=200",
        progress: 32,
        currentPage: 142,
        totalPages: 448,
        startedDate: "2023-05-18",
      },
    ],
    recentlyFinished: [
      {
        id: "book-3",
        title: "The Song of Achilles",
        author: "Madeline Miller",
        coverImage: "/placeholder.svg?height=300&width=200",
        progress: 100,
        currentPage: 416,
        totalPages: 416,
        startedDate: "2023-04-05",
        finishedDate: "2023-04-28",
        rating: 5,
      },
      {
        id: "book-4",
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        coverImage: "/placeholder.svg?height=300&width=200",
        progress: 100,
        currentPage: 320,
        totalPages: 320,
        startedDate: "2023-03-15",
        finishedDate: "2023-04-02",
        rating: 4,
      },
      {
        id: "book-5",
        title: "The Four Winds",
        author: "Kristin Hannah",
        coverImage: "/placeholder.svg?height=300&width=200",
        progress: 100,
        currentPage: 464,
        totalPages: 464,
        startedDate: "2023-02-20",
        finishedDate: "2023-03-10",
        rating: 4,
      },
    ],
  }
}

export function getUserActivity(): Activity[] {
  return [
    {
      id: "activity-1",
      type: "reading",
      title: "Started reading a new book",
      description: "You started reading 'Project Hail Mary' by Andy Weir",
      timestamp: "2023-05-18T10:30:00Z",
      icon: BookOpen,
    },
    {
      id: "activity-2",
      type: "social",
      title: "Jamie Smith commented on your review",
      description: '"I completely agree with your take on the character development!"',
      timestamp: "2023-05-17T15:45:00Z",
      user: {
        id: "user-2",
        name: "Jamie Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      actions: ["Reply", "Like"],
    },
    {
      id: "activity-3",
      type: "achievement",
      title: "Earned a new badge",
      description: "You earned the 'Bookworm' badge for reading 5 books in a month",
      timestamp: "2023-05-15T09:20:00Z",
      icon: Award,
      system: true,
    },
    {
      id: "activity-4",
      type: "reading",
      title: "Updated reading progress",
      description: "You're 65% through 'The Midnight Library' by Matt Haig",
      timestamp: "2023-05-14T22:10:00Z",
      icon: BookOpen,
    },
    {
      id: "activity-5",
      type: "social",
      title: "Taylor Wong liked your review",
      description: "Your review of 'The Song of Achilles' received a like",
      timestamp: "2023-05-12T14:30:00Z",
      user: {
        id: "user-3",
        name: "Taylor Wong",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      icon: ThumbsUp,
    },
    {
      id: "activity-6",
      type: "social",
      title: "New friend connection",
      description: "You are now friends with Jordan Lee",
      timestamp: "2023-05-10T11:15:00Z",
      user: {
        id: "user-4",
        name: "Jordan Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      icon: UserPlus,
    },
    {
      id: "activity-7",
      type: "review",
      title: "Posted a new review",
      description: "You reviewed 'The Song of Achilles' and gave it 5 stars",
      timestamp: "2023-05-08T19:45:00Z",
      icon: MessageSquare,
    },
  ]
}

export function getUserReadingGoals(): ReadingGoal {
  return {
    yearlyGoal: 50,
    booksRead: 18,
    pagesRead: 5842,
    pagesGoal: 15000,
    streak: 12,
  }
}

export function getUserChallenges(): Challenge[] {
  return [
    {
      id: "challenge-1",
      type: "personal",
      title: "2023 Reading Challenge",
      description: "Read 50 books in 2023",
      progress: 18,
      target: 50,
      unit: "books",
      timeRemaining: "7 months",
    },
    {
      id: "challenge-2",
      type: "group",
      title: "Fantasy Book Club",
      description: "Read 5 fantasy novels with your club",
      progress: 3,
      target: 5,
      unit: "books",
      timeRemaining: "2 months",
    },
    {
      id: "challenge-3",
      type: "event",
      title: "Summer Reading Sprint",
      description: "Read 1,000 pages in June",
      progress: 0,
      target: 1000,
      unit: "pages",
      timeRemaining: "Starts in 3 weeks",
    },
  ]
}

