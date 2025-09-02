import React from "react";

/**
 * Card component
 * --------------
 * Uses global classes from theme.css:
 * - .card (surface, border, radius, shadow)
 * - .card-pad (internal padding)
 */

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Polymorphic element, defaults to <div> */
  as?: React.ElementType;
  /** Adds internal padding via .card-pad */
  padded?: boolean;
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ as: As = "div", padded = true, className, children, ...props }, ref) => {
    return (
      <As ref={ref as any} className={cx("card", padded && "card-pad", className)} {...props}>
        {children}
      </As>
    );
  }
);
Card.displayName = "Card";

/**
 * Optional composition helpers
 * ----------------------------
 * <CardHeader/> and <CardFooter/> just add structure; styling comes from theme.css
 */
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cx(className)} {...props} />
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cx(className)} {...props} />
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cx(className)} {...props} />
);

// Usage examples (remove when integrating):
// <Card>
//   <CardHeader><h3 className="h3">Title</h3></CardHeader>
//   <CardBody><p className="muted">Content</p></CardBody>
//   <CardFooter><button className="btn primary">Action</button></CardFooter>
// </Card>
