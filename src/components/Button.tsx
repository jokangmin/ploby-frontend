"use client";

import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition-colors";
  const variantStyle = clsx({
    "bg-primary text-white hover:bg-indigo-600": variant === "primary",
    "bg-secondary text-white hover:bg-orange-500": variant === "secondary",
  });

  return <button className={clsx(baseStyle, variantStyle, className)} {...props} />;
}
