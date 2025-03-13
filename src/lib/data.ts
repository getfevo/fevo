import type { Book, FriendReading } from "./types"

export const trendingBooks: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.2,
    reviewCount: 2547,
    categories: ["Fiction", "Fantasy"],
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    description:
      "From the bestselling and Booker Prize-winning author of Never Let Me Go and The Remains of the Day, a stunning new novel that asks, what does it mean to love? A thrilling feat of world-building, a novel of exquisite tenderness and impeccable restraint, Klara and the Sun is a magnificent achievement.",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.1,
    reviewCount: 1823,
    categories: ["Fiction", "Science Fiction"],
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.5,
    reviewCount: 3214,
    categories: ["Science Fiction", "Adventure"],
  },
  {
    id: "4",
    title: "The Four Winds",
    author: "Kristin Hannah",
    description:
      "From the number-one bestselling author of The Nightingale and The Great Alone comes a powerful American epic about love and heroism and hope, set during the Great Depression, a time when the country was in crisis and at war with itself, when millions were out of work and even the land seemed to have turned against them.",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.3,
    reviewCount: 2109,
    categories: ["Historical Fiction", "Drama"],
  },
]

export const friendsReading: FriendReading[] = [
  {
    id: "1",
    friend: {
      id: "101",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "201",
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction masterpiece about politics, religion, and ecology.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.7,
      reviewCount: 5432,
      categories: ["Science Fiction", "Fantasy"],
    },
    status: "Currently reading",
    progress: 45,
  },
  {
    id: "2",
    friend: {
      id: "102",
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "202",
      title: "The Song of Achilles",
      author: "Madeline Miller",
      description: "A retelling of the Trojan War from the perspective of Patroclus.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.4,
      reviewCount: 3219,
      categories: ["Historical Fiction", "Fantasy"],
    },
    status: "75% complete",
    progress: 75,
  },
  {
    id: "3",
    friend: {
      id: "103",
      name: "Taylor Wong",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "203",
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.6,
      reviewCount: 4123,
      categories: ["Memoir", "Biography"],
    },
    status: "Just started",
    progress: 10,
  },
  {
    id: "4",
    friend: {
      id: "104",
      name: "Jordan Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "204",
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      description:
        "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.3,
      reviewCount: 2876,
      categories: ["Fantasy", "Historical Fiction"],
    },
    status: "Almost finished",
    progress: 90,
  },
  {
    id: "5",
    friend: {
      id: "105",
      name: "Casey Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "205",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      description:
        "The story of twin sisters who choose to live in two very different worlds, one black and one white.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.2,
      reviewCount: 3542,
      categories: ["Literary Fiction", "Historical Fiction"],
    },
    status: "Halfway through",
    progress: 50,
  },
  {
    id: "6",
    friend: {
      id: "106",
      name: "Riley Patel",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    book: {
      id: "206",
      title: "Circe",
      author: "Madeline Miller",
      description: "A retelling of the story of Circe, the witch from Homer's Odyssey.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.5,
      reviewCount: 4231,
      categories: ["Fantasy", "Mythology"],
    },
    status: "Just finished",
    progress: 100,
  },
]

