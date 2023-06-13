import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const MainContainer = ({ children }: Props) => {
  return (
    <main>
      {children}
    </main>
  );
}
