/**
 * Badge — @keyu/ui
 * Variants: default | ok | warn | error | gold | outline
 */
import * as React from "react";

export function Badge({ variant = "default", className = "", children, ...props }) {
  const map = {
    default: "badge",
    ok: "badge badge-ok",
    warn: "badge badge-warn",
    error: "badge badge-error",
    gold: "badge badge-gold",
    outline: "badge badge-outline",
  };
  return (
    <span className={[map[variant] || map.default, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </span>
  );
}
