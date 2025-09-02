import React from "react";

/**
 * Section wrapper
 * ---------------
 * Uses global classes from theme.css:
 * - .section (default vertical spacing)
 * - .section-tight (reduced spacing)
 *
 * This is a light layout helper so your pages stay consistent.
 */

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Render a different semantic element (e.g., "div", "main", "section", "article"). Default: "section" */
  as?: React.ElementType;
  /** Use tighter vertical spacing via .section-tight */
  tight?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: As = "section", tight = false, className, children, ...props }, ref) => {
    return (
      <As ref={ref} className={cx(tight ? "section-tight" : "section", className)} {...props}>
        {children}
      </As>
    );
  }
);
Section.displayName = "Section";

// Minimal example (remove when integrating):
// <Section>
//   <div className="container">Content...</div>
// </Section>
