import { Button } from "@/components/ui/button"
import { MessageSquare, BarChart2, Bell, CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Fevo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary hidden sm:block">
              Sign In
            </Link>
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Collect feedback. Build better products.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Fevo helps you collect, organize, and prioritize user feedback to build the features your customers
                    actually want.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12">
                    Start for free
                  </Button>
                  <Button size="lg" variant="outline" className="h-12">
                    Book a demo
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                  <CheckCircle className="ml-2 h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Fevo dashboard preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium">Trusted by innovative teams</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=40&width=120&text=LOGO+${i}`}
                      alt={`Company logo ${i}`}
                      width={120}
                      height={40}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage feedback
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fevo provides all the tools you need to collect, organize, and act on user feedback.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Feedback Collection</h3>
                  <p className="text-muted-foreground">
                    Collect feedback from multiple channels including your product, website, and email.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Prioritization</h3>
                  <p className="text-muted-foreground">
                    Analyze feedback and prioritize features based on user demand and business impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bell className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">User Updates</h3>
                  <p className="text-muted-foreground">
                    Keep users informed about feature progress and automatically notify them when requests are
                    completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple workflow, powerful results
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fevo streamlines your feedback process from collection to implementation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Collect feedback</h3>
                  <p className="text-muted-foreground">
                    Embed Fevo in your product or website to collect feedback directly from your users. Import feedback
                    from other channels like support tickets or social media.
                  </p>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Organize and analyze</h3>
                  <p className="text-muted-foreground">
                    Categorize feedback, identify trends, and get insights into what your users really want. Merge
                    similar requests to avoid duplication.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Prioritize features</h3>
                  <p className="text-muted-foreground">
                    Use voting, impact scores, and custom criteria to prioritize which features to build next. Align
                    your roadmap with user needs and business goals.
                  </p>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Close the loop</h3>
                  <p className="text-muted-foreground">
                    Update users on feature progress and notify them when their requested features are shipped. Build
                    trust by showing users you're listening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by product teams</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about how Fevo has transformed their feedback process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Fevo has completely transformed how we collect and prioritize user feedback. Our product roadmap is
                    now truly aligned with what our users want."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Manager, Acme Inc</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The ability to close the feedback loop with our users has been game-changing. Our users feel heard,
                    and we're building exactly what they need."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CTO, TechStart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              {/* Starter Plan */}
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">$29</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <p className="text-muted-foreground">
                    Perfect for small teams just getting started with user feedback.
                  </p>
                  <ul className="space-y-2">
                    {["Up to 500 feedback items", "Basic analytics", "Email notifications", "1 feedback portal"].map(
                      (feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <Button className="mt-6 w-full">Get Started</Button>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">$79</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <p className="text-muted-foreground">
                    For growing teams that need more advanced features and integrations.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Unlimited feedback items",
                      "Advanced analytics",
                      "Custom fields",
                      "Multiple feedback portals",
                      "Integrations with Slack, Jira, etc.",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-6 w-full">Get Started</Button>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">Custom</p>
                    <p className="text-sm text-muted-foreground">contact for pricing</p>
                  </div>
                  <p className="text-muted-foreground">
                    For large organizations that need advanced security and support.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Everything in Pro",
                      "Dedicated support",
                      "Custom integrations",
                      "SSO authentication",
                      "Advanced permissions",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="mt-6 w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about Fevo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              {[
                {
                  question: "How does Fevo collect user feedback?",
                  answer:
                    "Fevo provides multiple ways to collect feedback: a widget that can be embedded in your product, a dedicated feedback portal, email integration, and API endpoints for custom integrations.",
                },
                {
                  question: "Can I import existing feedback from other tools?",
                  answer:
                    "Yes, Fevo supports importing feedback from CSV files and direct integrations with popular tools like Intercom, Zendesk, and more.",
                },
                {
                  question: "How does the voting system work?",
                  answer:
                    "Users can upvote feature requests they want to see implemented. This helps you understand which features are most in demand. You can also enable weighted voting to give certain users or segments more influence.",
                },
                {
                  question: "Can I customize the feedback portal to match my brand?",
                  answer:
                    "You can customize the colors, logo, and domain of your feedback portal to match your brand identity.",
                },
                {
                  question: "Does Fevo integrate with product management tools?",
                  answer:
                    "Yes, Fevo integrates with popular product management tools like Jira, Trello, Asana, and more. You can sync feature requests and updates between Fevo and your existing workflow.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your feedback process?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of product teams using Fevo to build better products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="h-12">
                  Start your free trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Book a demo
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
                <CheckCircle className="ml-2 h-4 w-4" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Fevo</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Fevo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

