import * as React from "react";
import { cn } from "~/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 hover:border-orange/50 bg-primary/20 caret-orange",
          "px-3 py-2 text-base sm:text-sm placeholder:text-gray-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30 focus-visible:border-orange/60",
          "focus-visible:ring-offset-2 ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
