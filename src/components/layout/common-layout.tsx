import { ReactNode } from 'react';
import { MainContainer } from '../main/main-container';
import { MainContent } from '../main/main-content';
import { MainHeader } from '../main/main-header';
import { MainWrapper } from '../main/main-wrapper';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { Placeholder } from '../common/placeholder';
import MainFooter from '../main/main-footer';

export type LayoutProps = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: LayoutProps): JSX.Element {
  const session = useRequireAuth();

  if (!session) return <Placeholder />;

  return <>{children}</>;
}

export function AppLayout({ children }: LayoutProps): JSX.Element {
  return (
    <MainContainer>
      <MainHeader/>
      <MainWrapper>
        <MainContent>
          {children}
        </MainContent>
      </MainWrapper>
      <MainFooter/>
    </MainContainer>
  );
}
