"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-[30px] cursor-pointer";

  const variants: Record<string, string> = {
    primary:
      "gradient-electric text-deep-blue font-semibold hover:shadow-electric hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-deep-blue text-white hover:bg-deep-blue-light hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-electric text-electric hover:bg-electric hover:text-white active:scale-[0.98]",
    ghost:
      "text-white/90 hover:text-white hover:bg-white/10 active:scale-[0.98]",
  };

  const classes = `${base} ${sizeClasses[size]} ${variants[variant]} ${className}`;

  // If disabled, we adjust the cursor and opacity, and prevent hover/press effects
  const disabledStyle = disabled
    ? "cursor-not-allowed opacity-50"
    : "";

  if (href) {
    // For links, we can't disable the native behavior, but we can prevent click and style it
    // However, if there's an href, we treat it as a link and ignore disabled for functionality
    // but we can still apply disabled styling if needed.
    return (
      <motion.a
        href={href}
        className={`${classes} ${disabledStyle}`}
        whileHover={!disabled ? { y: -2 } : undefined}
        whileTap={!disabled ? { y: 0 } : undefined}
        // Disable pointer events when disabled
        style={{ pointerEvents: disabled ? "none" : "all" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${classes} ${disabledStyle}`}
      whileHover={!disabled ? { y: -2 } : undefined}
      whileTap={!disabled ? { y: 0 } : undefined}
    >
      {children}
    </motion.button>
  );
}