import { AuthCard } from "../components/AuthCard";
import { AuthLayout } from "../components/AuthLayout";
import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back "
        description="Sign in to your account to continue."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
