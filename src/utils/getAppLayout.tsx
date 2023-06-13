import { SEO } from "@/components/common/seo";
import { ProtectedLayout, AppLayout } from "@/components/layout/common-layout";
import { MainLayout } from "@/components/layout/main-layout";
import { ReactElement, ReactNode } from "react";

export const getAppLayout = (page: ReactElement, seoTitle?: string): ReactNode => (
  <MainLayout>
    <SEO title={seoTitle ?? 'Dashboard'} />
    <AppLayout>{page}</AppLayout>
  </MainLayout>
);

export const getProtectedAppLayout = (page: ReactElement, seoTitle?: string): ReactNode => (
  <ProtectedLayout>
    {getAppLayout(page, seoTitle)}
  </ProtectedLayout>
);
