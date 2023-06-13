import type { ReactNode } from "react";

type MainContentProps = {
  children?: ReactNode;
};

export function MainContent({ children }: MainContentProps): JSX.Element {
  return (
    <div className="flex-1 max-h-full overflow-hidden">
      <div className="">{children}</div>
    </div>
  );
}
