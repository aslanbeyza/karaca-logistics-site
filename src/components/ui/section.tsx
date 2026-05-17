import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  bleed?: boolean;
};

export function Section({ className, children, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-24 lg:py-28", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant="brand" className="uppercase tracking-wider">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
