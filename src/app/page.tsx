import WaitlistForm from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm">
                  <span className="text-black">Coming Soon</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                    The open source way to collect feedback
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    A fully customizable platform for individuals, businesses, and developers to gather and prioritize
                    user feedback.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <WaitlistForm />
                
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="absolute top-0 left-0 right-0 bg-gray-50 p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        F
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Feedback Portal</p>
                        <p className="text-sm text-gray-500">Product Roadmap</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-20 px-4">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-lg border border-gray-200 p-4 bg-white">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Feature Request #{i}</h3>
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Planned</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            This is a sample feature request that users have voted on.
                          </p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <span className="flex items-center">
                              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              {12 + i * 8} votes
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                  Collect feedback that matters
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform helps you gather, organize, and prioritize user feedback to build better products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-black">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Feedback Collection</h3>
                  <p className="text-gray-500">
                    Collect feedback from multiple channels including your product, website, and email.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-black">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Prioritization</h3>
                  <p className="text-gray-500">
                    Analyze feedback and prioritize features based on user demand and business impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-black">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">User Updates</h3>
                  <p className="text-gray-500">
                    Keep users informed about feature progress and automatically notify them when requests are
                    completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">How it works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our waitlist today and be the first to experience our platform when we launch.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">1</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Join the waitlist</h3>
                  <p className="text-gray-500">
                    Sign up with your email to secure your spot on our exclusive waitlist.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">2</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Get early access</h3>
                  <p className="text-gray-500">
                    Receive an invitation to be among the first to try our platform before the public launch.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">3</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Enjoy exclusive benefits</h3>
                  <p className="text-gray-500">
                    Early adopters receive special perks, priority support, and influence on our roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our upcoming platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {[
                {
                  question: "How will I know when I get access?",
                  answer:
                    "We'll send you an email with instructions on how to access the platform once your spot on the waitlist is activated.",
                },
                {
                  question: "Is there a cost to join the waitlist?",
                  answer:
                    "No, joining the waitlist is completely free. We'll share more information about our pricing model closer to launch.",
                },
                {
                  question: "Will there be any benefits for early adopters?",
                  answer:
                    "Early adopters will receive exclusive features, priority support, and special perks as a thank you for joining us from the beginning.",
                },
                {
                  question: "Can I request specific features?",
                  answer:
                    "Yes, we welcome feature requests from our waitlist members. Your feedback will help shape the future of our platform.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-black">{item.question}</h3>
                  <p className="mt-2 text-gray-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your feedback process?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our waitlist today and be the first to experience our platform when we launch.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <WaitlistForm isDark={true} />
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-white py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
          <Image
                  src="/logo.png"
                  alt="Fevo"
                  width={300}
                  height={100}
                  className="h-20 w-auto"
                  priority
                />
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-black">
              Terms
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-black">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-black">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} fevo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

