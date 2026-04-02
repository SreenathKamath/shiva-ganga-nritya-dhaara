import React from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d2296d] disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  default:
    "bg-[linear-gradient(135deg,#d2296d_0%,#7b1df4_100%)] text-white shadow-[0_18px_36px_rgba(141,34,110,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(123,29,244,0.32)]",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10",
  ghost: "bg-transparent text-current hover:bg-white/10",
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
