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
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
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

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </motion.button>
  );
}