import * as React from "react";
import type { PortableTextBlock } from "sanity";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(["mb-4 !text-balance font-bold"], {
  variants: {
    level: {
      h1: "text-5xl md:text-7xl !leading-tight",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg",
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children">,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
  portableText?: boolean;
  children: PortableTextBlock | React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, level = "h1", as: Component, ...props }, ref) => {
    const Comp = Component || (level as string);

    return (
      <Comp
        className={cn(headingVariants({ level, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
