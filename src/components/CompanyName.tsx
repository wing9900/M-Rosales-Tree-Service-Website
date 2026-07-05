import { useBusinessName } from "@/contexts/BusinessNameContext";

type CompanyNameProps = {
  className?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
};

/**
 * Renders the business name from URL (?bizname=...) or defaults to "Local Tree Services".
 * Use this component anywhere you want the business name to appear (header, footer, hero, etc.).
 */
export function CompanyName({ className, as: Component = "span" }: CompanyNameProps) {
  const { businessName } = useBusinessName();
  return <Component className={className}>{businessName}</Component>;
}
