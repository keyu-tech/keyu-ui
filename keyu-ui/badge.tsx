import * as React from "react";
import { cn } from "./lib/cn";

export type BadgeVariant = "default" | "gold" | "solid" | "outline" | "ok" | "warn" | "error";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = "default", className, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn("badge", variant !== "default" && `badge-${variant}`, className)}
      {...props}
    />
  );
});
