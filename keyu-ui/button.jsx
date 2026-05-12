/**
 * Button — @keyu/ui
 * Variants: primary | secondary | ghost | soft | danger | link
 * Sizes:    sm | md | lg | icon
 *
 * Themed via tokens.css + shadcn.css. No Tailwind required; the
 * `btn`, `btn-{variant}`, `btn-{size}` classes are styled in CSS.
 */
import * as React from "react";

export const Button = React.forwardRef(function Button(
  { variant = "primary", size = "md", asChild = false, className = "", ...props },
  ref
) {
  const Comp = asChild ? "span" : "button";
  const cls = ["btn", `btn-${variant}`, size !== "md" && `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");
  return <Comp ref={ref} className={cls} {...props} />;
});

Button.displayName = "Button";
