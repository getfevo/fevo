import WaitlistForm from "@/components/waitlist-form"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AuroraBackground } from "@/components/ui/background"
import { BellDotIcon, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, MessagesSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <AuroraBackground>
      <Header />
        {/* Hero Section */}
        <main className="flex-1 z-10 self-center px-4 sm:px-6 md:px-8">
        <section className="mt-10 py-12 md:py-24 lg:py-32">
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

        {/* Bento Box Layout */}
        <section className="w-full py-12 md:py-24 lg:py-32 mt-10 rounded-2xl">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Main Feature */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 md:col-span-2 md:row-span-2 hover:shadow-[0_10px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:bg-white/60">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black">Complete Feedback Ecosystem</h3>
                    <p className="text-gray-600 mb-6">Our platform integrates collection, analysis, and implementation tracking in one seamless workflow.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl blur-sm opacity-75"></div>
                    <Image src="/dashboard-preview.png" width={600} height={400} alt="Dashboard Preview" className="relative rounded-xl shadow-sm border border-white/70" />
                  </div>
                </div>
              </div>
              
              {/* Small Features */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-black mb-4 shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Multi-channel Collection</h3>
                <p className="text-gray-600">Gather feedback from your website, product, email, and social media in one place.</p>
              </div>
              
              <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-800/50 text-muted hover:shadow-[0_10px_40px_rgb(0,0,0,0.3)] transition-all duration-300 hover:bg-black">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 text-gray-200 mb-4 shadow-sm">
                  <ChartNoAxesColumnIncreasing className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Prioritization</h3>
                <p className="text-muted">AI-powered analysis to identify high-impact features based on user demand.</p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-black mb-4 shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Automated Updates</h3>
                <p className="text-gray-600">Keep users informed about feature progress with customizable notifications.</p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-black mb-4 shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Developer-friendly</h3>
                <p className="text-gray-600">Robust API and webhooks to integrate with your existing tools and workflows.</p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-black mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-7 w-7">
                    <path d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-4.3-.1-8.5-13.9 3-16.8-6.7-16.8-6.7-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .4 7.7 5.2 7.7 5.2 4.5 7.6 11.7 5.4 14.5 4.1.5-3.2 1.7-5.4 3.2-6.7-11.1-1.3-22.7-5.6-22.7-24.7 0-5.5 1.9-9.9 5.1-13.4-.5-1.3-2.2-6.3.5-13.2 0 0 4.2-1.3 13.7 5.1 4-1.1 8.3-1.7 12.5-1.7 4.2 0 8.5.6 12.5 1.7 9.5-6.5 13.7-5.1 13.7-5.1 2.7 6.9 1 12 .5 13.2 3.2 3.5 5.1 8 5.1 13.4 0 19.2-11.7 23.4-22.8 24.7 1.8 1.5 3.4 4.6 3.4 9.3 0 6.7-.1 12.1-.1 13.7 0 1.3.9 2.9 3.4 2.4C85.7 90.8 100 72.1 100 50 100 22.4 77.6 0 50 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Open Source</h3>
                <p className="text-gray-600">Fully transparent codebase with MIT license. Contribute, customize, and self-host with complete freedom.</p>
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
                  <MessagesSquare className="size-6" />
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
                  <ChartNoAxesColumnIncreasing className="size-6" />
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
                  <BellDotIcon className="size-6" />
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
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 mt-10">
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
            <div className="flex flex-col items-center text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group hover:bg-white/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-muted mb-2">1</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Join the waitlist</h3>
                  <p className="text-gray-500">
                    Sign up with your email to secure your spot on our exclusive waitlist.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-muted mb-2">2</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">Get early access</h3>
                  <p className="text-gray-500">
                    Receive an invitation to be among the first to try our platform before the public launch.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group hover:bg-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-muted mb-2">3</div>
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
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 mt-10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col items-center lg:items-start mb-auto">
            <div className="flex flex-col space-y-6 lg:w-1/3 w-full lg:mb-0 mb-10">
              <div className="space-y-4">
                <small className="font-bold text-gray-400">FAQ</small>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-black">
                  Frequently Asked Questions.
                </h2>
                <p className="max-w-[1000px] text-gray-500 md:text-xl lg:text-lg xl:text-xl">
                  Everything you need to know about our upcoming platform.
                </p>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="ml-auto lg:w-3/5 w-full">
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
                    <AccordionTrigger className="text-lg font-medium cursor-pointer">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base pb-6">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 mt-12 md:mt-24 lg:mt-32 bg-black text-muted rounded-2xl shadow-sm mb-10">
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

      <footer className="w-full border-t border-gray-200 bg-white py-6 md:py-12">
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
