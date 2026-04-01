import React from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1538] disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  default: "bg-[#8B1538] text-white hover:bg-[#6B0F2A]",
  outline: "border border-current bg-transparent text-current hover:bg-white/10",
  ghost: "bg-transparent text-current hover:bg-black/5",
};

export const Button = React.forwardRef(
  ({ className = "", variant = "default", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`${baseClasses} ${variants[variant] || variants.default} ${className}`.trim()}
      {...props}
    />
  )
);

Button.displayName = "Button";
