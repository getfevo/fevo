import WaitlistForm from "@/components/waitlist-form"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import FeatureRequestListLanding from "@/components/featureRequestListLanding"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AuroraBackground } from "@/components/ui/background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 ">
      <AuroraBackground>
      <Header />
        {/* Hero Section */}
        <main className="flex-1 z-10 self-center px-4 sm:px-6 md:px-8">
        <section className="mt-10 lg:py-12">
          <div className="container z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[600px] mx-auto">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                    The open source way to collect feedback
                  </h1>
                  <p className="text-gray-800 md:text-xl">
                    A fully customizable platform for individuals, businesses, and developers to gather and prioritize
                    user feedback.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white/30 backdrop-blur-md border-white/40 border mt-10 rounded-2xl shadow-sm">
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
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white/30 backdrop-blur-md border-white/40 border mt-10 rounded-2xl shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">How it works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our waitlist today and be the first to experience our platform when we launch.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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

        {/*FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-20 lg:py-28 bg-gray-100/30 backdrop-blur-md mt-10 shadow rounded-2xl">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-black">
                  Frequently asked questions
                </h2>
                <p className="max-w-[1000px] text-gray-500 md:text-xl lg:text-lg xl:text-xl">
                  Everything you need to know about our upcoming platform.
                </p>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="mx-auto max-w-4xl py-12">
              <Accordion type="single" collapsible>
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
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white mt-10 rounded-2xl shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your feedback process?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our waitlist today and be the first to experience our platform when we launch!
                </p>
              </div>
              <div className="w-full max-w-sm">
                <WaitlistForm isDark={true} />
              </div>
            </div>
          </div>
        </section>
        </main>
      </AuroraBackground>

      <footer className="w-full border-t border-gray-200 bg-white py-6 md:py-12 mt-10">
        <div className="container flex flex-col items-center justify-between gap-6 px-4 text-center md:text-left md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Fevo" width={300} height={100} className="h-20 w-auto" priority />
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

