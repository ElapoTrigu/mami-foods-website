import React from "react";

/**
 * Button component
 * -----------------
 * Uses global classes from theme.css:
 * - .btn (base)
 * - .btn.primary | .btn.outline | .btn.ghost | .btn.whatsapp | .btn.danger
 *
 * Keep this file UI-only: no inline styles, no extra CSS.
 */

/* Utility: classNames joiner */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type ButtonVariant = "primary" | "outline" | "ghost" | "whatsapp" | "danger";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style that maps to your theme.css */
  variant?: ButtonVariant;
  /** Optional left-side icon */
  iconLeft?: React.ReactNode;
  /** Optional right-side icon */
  iconRight?: React.ReactNode;
  /** When true, shows a busy state and disables the button */
  loading?: boolean;
}

/**
 * <Button/>
 * -----
 * Renders a native <button>. Use <LinkButton/> for links.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      iconLeft,
      iconRight,
      loading = false,
      disabled,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cx("btn", variant, className)}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {iconLeft ? <span aria-hidden>{iconLeft}</span> : null}
        <span>{children}</span>
        {iconRight ? <span aria-hidden>{iconRight}</span> : null}
      </button>
    );
  }
);
Button.displayName = "Button";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style that maps to your theme.css */
  variant?: ButtonVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/**
 * <LinkButton/>
 * -----
 * Same look as <Button/> but renders an <a>. Useful for navigation.
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <a ref={ref} className={cx("btn", variant, className)} {...props}>
        {iconLeft ? <span aria-hidden>{iconLeft}</span> : null}
        <span>{children}</span>
        {iconRight ? <span aria-hidden>{iconRight}</span> : null}
      </a>
    );
  }
);
LinkButton.displayName = "LinkButton";

// --- Minimal usage examples (remove once integrated) ---
// <Button>Click me</Button>
// <Button variant="outline">Outline</Button>
// <LinkButton href="#" variant="whatsapp">WhatsApp Us</LinkButton>
