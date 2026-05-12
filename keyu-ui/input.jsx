/**
 * Input — @keyu/ui
 * Styled via the `.input` class in shadcn.css (3px radius, hairline rule,
 * gold focus ring, monospace numerics on `type=number|tel`).
 */
import * as React from "react";

export const Input = React.forwardRef(function Input(
  { className = "", ...props },
  ref
) {
  return <input ref={ref} className={["input", className].filter(Boolean).join(" ")} {...props} />;
});

Input.displayName = "Input";

export const Textarea = React.forwardRef(function Textarea(
  { className = "", rows = 4, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={["input textarea", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export function Label({ className = "", required, children, ...props }) {
  return (
    <span className={["sc-form-label", className].filter(Boolean).join(" ")} {...props}>
      {children}
      {required && <span className="req"> *</span>}
    </span>
  );
}
