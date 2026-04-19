import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const GlassCard = ({ className, hoverEffect = true, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-6 transition-all duration-300",
        hoverEffect && "hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      {...props}
    />
  );
};
