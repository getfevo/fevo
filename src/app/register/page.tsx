import { RegisterForm } from "@/components/register-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex h-screen flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  )
}
