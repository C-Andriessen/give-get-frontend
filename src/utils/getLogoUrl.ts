import { useTheme } from "@/context/theme-context";

export function getLogoUrl(): string {
  const { theme } = useTheme();
  return `/images/give-get-${theme}.png`;
}
