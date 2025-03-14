import { RegisterForm } from "@/components/register-form"
import { Suspense } from "react"

export default function RegisterPage() {
  return (
    <div className="bg-muted flex h-screen flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        }>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  )
}
