import { LoginForm } from "@/components/admin/login-form";
import { Wordmark } from "@/components/wordmark";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm">
        <Wordmark />
        <h1 className="mt-10 text-3xl font-bold tracking-[-0.03em]">
          Inquiries console
        </h1>
        <p className="mt-3 text-[0.95rem] text-slate">
          Staff only. Everything sent through the website's inquiry form
          arrives here.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
