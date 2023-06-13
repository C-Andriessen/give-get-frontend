import { SEO } from "@/components/common/seo";
import { ReactElement, ReactNode } from "react";
import { AuthLayout } from "@/components/layout/auth-layout";
import { RegisterForm } from "@/components/auth/register-form";

export default function Register(): JSX.Element {
  return (
    <div className="grid min-h-screen grid-rows-[1fr,auto]">
      <SEO title="Register" description="todo" />
      <RegisterForm />
    </div>
  );
}

Register.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>{page}</AuthLayout>
);
