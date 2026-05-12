import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "soft" | "danger" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", asChild = false, className, type, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : (type ?? "button")}
      className={cn(
        "btn",
        `btn-${variant}`,
        size !== "md" && `btn-${size}`,
        size === "icon" && "btn-icon",
        className,
      )}
      {...props}
    />
  );
});
