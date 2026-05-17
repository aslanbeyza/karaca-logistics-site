import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-secondary-foreground ring-border",
        brand:
          "bg-brand-50 text-brand-800 ring-brand-700/15",
        outline: "bg-background text-foreground ring-border",
        success:
          "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
        dark: "bg-white/10 text-white ring-white/15 backdrop-blur",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
