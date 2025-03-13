"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitToWaitlist } from "@/app/actions"
import { CheckCircle, Loader2 } from "lucide-react"

interface WaitlistFormProps {
  isDark?: boolean
}

export default function WaitlistForm({ isDark = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      const response = await fetch("/api/auth/early_access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to join the waitlist.");
      }
  
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center space-y-4 rounded-lg ${isDark ? "bg-white/10 border-white/20" : "bg-gray-50 border-gray-200"} border p-6 text-center`}
      >
        <CheckCircle className={`h-12 w-12 ${isDark ? "text-white" : "text-black"}`} />
        <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>You're on the list!</h3>
        <p className={isDark ? "text-white/80" : "text-gray-500"}>
          Thank you for joining our waitlist. We'll notify you as soon as we launch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`h-10 ${
            isDark
              ? "bg-white/10 text-white placeholder:text-white/70 border-white/20"
              : "bg-white text-black placeholder:text-gray-500 border-gray-300"
          }`}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`h-10 ${
            isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
      {error && <p className={`text-sm mt-2 ${isDark ? "text-red-300" : "text-red-500"}`}>{error}</p>}
    </form>
  )
}

