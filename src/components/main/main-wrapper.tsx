import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: Props) => {
  return <main>{children}</main>;
};
