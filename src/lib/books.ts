import type { Book } from "./types"

export function getBookRecommendations(): Book[] {
  return [
    {
      id: "rec-1",
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      description: "A novel about friendship, love, and video game design spanning thirty years.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.3,
      reviewCount: 1823,
      categories: ["Fiction", "Contemporary"],
    },
    {
      id: "rec-2",
      title: "Sea of Tranquility",
      author: "Emily St. John Mandel",
      description:
        "A novel of art, time travel, love, and plague that takes the reader from Vancouver Island in 1912 to a dark colony on the moon.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.2,
      reviewCount: 1547,
      categories: ["Science Fiction", "Literary Fiction"],
    },
    {
      id: "rec-3",
      title: "The Lincoln Highway",
      author: "Amor Towles",
      description:
        "In June 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.5,
      reviewCount: 2109,
      categories: ["Historical Fiction", "Literary Fiction"],
    },
    {
      id: "rec-4",
      title: "Cloud Cuckoo Land",
      author: "Anthony Doerr",
      description:
        "Set in Constantinople in the fifteenth century, in a small town in present-day Idaho, and on an interstellar ship decades from now.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.3,
      reviewCount: 1876,
      categories: ["Historical Fiction", "Science Fiction"],
    },
    {
      id: "rec-5",
      title: "The Sentence",
      author: "Louise Erdrich",
      description:
        "A small independent bookstore in Minneapolis is haunted from November 2019 to November 2020 by the store's most annoying customer.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.1,
      reviewCount: 1432,
      categories: ["Fiction", "Literary Fiction"],
    },
    {
      id: "rec-6",
      title: "The Last Thing He Told Me",
      author: "Laura Dave",
      description: "Before Owen Michaels disappears, he smuggles a note to his beloved wife of one year: Protect her.",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.0,
      reviewCount: 1987,
      categories: ["Mystery", "Thriller"],
    },
  ]
}

