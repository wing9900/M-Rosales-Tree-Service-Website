import { Phone } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface CallButtonProps {
  children?: ReactNode;
  showIcon?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent" | "cta";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}
export const CallButton = ({
  children = "Call Now",
  showIcon = true,
  className = "",
  variant = "default",
  size = "default"
}: CallButtonProps) => {
  // Direct button styles matching the design system
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-medium",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    accent: "accent-gradient text-accent-foreground hover:scale-105 shadow-medium",
    cta: "cta-gradient text-emergency-foreground hover:scale-105 shadow-cta font-semibold"
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 rounded-md px-3 text-sm",
    lg: "h-11 rounded-md px-8 text-sm",
    xl: "h-14 rounded-lg px-10 text-base",
    icon: "h-10 w-10"
  };
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:shrink-0 cursor-pointer";
  
  // Icon size based on button size
  const iconSize = size === "xl" ? "h-6 w-6" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
  
  return (
    <a
      href="tel:{{Phone Number}}"
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {showIcon && <Phone className={iconSize} />}
      {children}
    </a>
  );
};