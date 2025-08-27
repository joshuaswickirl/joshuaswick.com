import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "~/lib/cn";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-md bg-tertiary dark:bg-gray-700 px-4",
          "text-base md:text-sm font-medium text-white dark:text-gray-100 shadow transition-colors",
          "hover:bg-tertiary/80 dark:hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-orange/40 focus-visible:ring-offset-2 disabled:opacity-50",
          "disabled:pointer-events-none",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
