import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold no-underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-700 text-white hover:bg-brand-800 shadow-[0_8px_30px_-12px_rgba(23,34,138,0.6)]",
        primary:
          "bg-brand-700 text-white hover:bg-brand-800 shadow-[0_4px_16px_rgba(23,34,138,0.28)] hover:shadow-[0_6px_20px_rgba(23,34,138,0.32)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-background hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-brand-700 underline-offset-4 hover:underline rounded-md",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebc59] shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)]",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
