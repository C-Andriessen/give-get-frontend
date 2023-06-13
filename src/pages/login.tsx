import { SEO } from "@/components/common/seo";
import { LoginForm } from "@/components/auth/login-form";
import { ReactElement, ReactNode } from "react";
import { AuthLayout } from "@/components/layout/auth-layout";

export default function Login(): JSX.Element {
  return (
    <div className="grid min-h-screen grid-rows-[1fr,auto]">
      <SEO title="Login" description="todo" />
      <LoginForm />
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>{page}</AuthLayout>
);
