"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import  Header from "@/components/header"

export default function PricingPage() {
  const plans = [
    {
      name: "Individuals",
      price: "Free",
      description: "Good for individuals who are just starting out and simply want the essentials.",
      buttonText: "Go to app",
      features: [
        "1 user",
        "Unlimited calendars",
        "Unlimited event types",
        "Workflows",
        "Integrate with your favorite apps",
        "Accept payments via Stripe",
      ],
      highlight: false,
    },
    {
      name: "Teams",
      price: "$15",
      description: "Highly recommended for small teams looking to upgrade their time and performance.",
      buttonText: "Get started",
      features: [
        "1 team",
        "Schedule meetings as a team",
        "Round-Robin, Fixed Round-Robin",
        "Collective Events",
        "Routing Forms",
        "Team Workflows",
        "Remove Branding",
        "Same-day email and chat support",
      ],
      highlight: true, // Dark background
      trial: "14 day free trial",
    },
    {
      name: "Organizations",
      price: "$37",
      description: "Robust scheduling for larger teams looking for more control, privacy, and security.",
      buttonText: "Get started",
      features: [
        "1 parent team & unlimited sub-teams",
        "Organization workflows",
        "Custom subdomain",
        "SOC2, HIPAA, ISO 27001 Compliance",
        "SAML SSO and SCIM",
        "Domain-Wide Delegation",
        "Member Attributes",
        "Attribute-based routing",
        "Insights - Analyze your booking data",
        "Extensive White-labeling",
        "Priority email and chat support",
      ],
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      description: "The most advanced scheduling and routing solution for enterprise organizations.",
      buttonText: "Contact us",
      features: [
        "Advanced Routing Forms",
        "Cal.com Instant Meetings",
        "Cal.ai Phone Agents",
        "Active Directory Sync",
        "Sync with your HRIS tools",
        "Dedicated onboarding and engineering support",
        "Enterprise-Level support",
        "99.9% Uptime SLA",
        "24/7 Real-time Slack Connect and phone support",
      ],
      highlight: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center px-6 py-12 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Simple pricing based on your needs</h1>
        <p className="mt-2 text-gray-500">
          Start scheduling for free, with no usage limits. For collaborative features, choose one of our premium plans.
        </p>
        <div className="mt-4 flex justify-center space-x-2">
          <Button variant="outline">Use Cal.com</Button>
          <Button variant="ghost">Build with Cal.com API</Button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {plans.map((plan, index) => (
          <Card key={index} className={`p-6 rounded-xl ${plan.highlight ? "bg-black text-white" : "bg-white border border-gray-200"}`}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
              {plan.trial && <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-md">{plan.trial}</span>}
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{plan.price} {plan.price !== "Free" && <span className="text-sm font-normal">/month/user</span>}</div>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className={`size-4 ${plan.highlight ? "text-white" : "text-green-500"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className={`w-full ${plan.highlight ? "bg-white text-black" : ""}`}>{plan.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
    </div>
  )
}