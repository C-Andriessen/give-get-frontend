import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode, ChangeEvent } from "react";
import type { Theme } from "@/types/theme";

type ThemeContext = {
  theme: Theme;
  changeTheme: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

function setInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // return savedTheme ?? (prefersDark ? 'dark' : 'light');
  return "light";
}

export function ThemeContextProvider({
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(setInitialTheme);

  useEffect(() => {
    const flipTheme = (theme: Theme): NodeJS.Timeout | undefined => {
      const root = document.documentElement;
      const targetTheme = theme;

      if (targetTheme === "dark") root.classList.add("dark");
      else root.classList.remove("dark");

      root.style.setProperty("--main-background", `var(--${theme}-background)`);
      root.style.setProperty(
        "--header-background",
        `var(--${theme}-header-background)`
      );
      root.style.setProperty(
        "--card-background",
        `var(--${theme}-card-background)`
      );
      root.style.setProperty(
        "--secondary-main",
        `var(--${theme}-secondary-main)`
      );
      root.style.setProperty("--text-primary", `var(--${theme}-text-primary)`);
      root.style.setProperty(
        "--text-secondary",
        `var(--${theme}-text-secondary)`
      );
      root.style.setProperty(
        "--text-disabled",
        `var(--${theme}-text-disabled)`
      );
      root.style.setProperty("--text-muted", `var(--${theme}-text-muted)`);

      return undefined;
    };

    const timeoutId = flipTheme(theme);
    return () => clearTimeout(timeoutId);
  }, [theme]);

  const changeTheme = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setTheme(value as Theme);

  const switchTheme = () => setTheme(theme == "light" ? "dark" : "light");

  const value: ThemeContext = {
    theme,
    changeTheme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used within an ThemeContextProvider");

  return context;
}
