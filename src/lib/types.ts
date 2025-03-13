import type { LucideIcon } from "lucide-react"

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null;
}

export interface Book {
  id: string; // Can be mapped to the "isbn" or "isbn13" from the API
  title: string; // Matches "title" from the API
  author: string; // Map the first author from the "authors" array, e.g., book.authors[0] or join all as a string
  description: string; // Use "synopsis" or "overview" from the API
  coverImage: string; // Map to "image" from the API
  rating?: number; // API does not provide a rating directly, can be optional
  reviewCount?: number; // Same as rating, optional
  categories: string[]; // Map to "subjects" from the API
}
export interface ReadingProgress {
  id: string
  title: string
  author: string
  coverImage: string
  progress: number
  currentPage: number
  totalPages: number
  startedDate: string
  finishedDate?: string
  rating?: number
}

export interface Activity {
  id: string
  type: string
  title: string
  description: string
  timestamp: string
  user?: {
    id: string
    name: string
    avatar: string
  }
  icon?: LucideIcon
  actions?: string[]
  system?: boolean
}

export interface ReadingGoal {
  yearlyGoal: number
  booksRead: number
  pagesRead: number
  pagesGoal: number
  streak: number
}

export interface Challenge {
  id: string
  type: string
  title: string
  description: string
  progress: number
  target: number
  unit: string
  timeRemaining: string
}

export interface Friend {
  id: string
  name: string
  avatar: string
}

export interface FriendReading {
  id: string
  friend: Friend
  book: Book
  status: string
  progress: number
}

