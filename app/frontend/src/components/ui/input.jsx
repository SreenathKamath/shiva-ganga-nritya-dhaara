import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur transition-all duration-200 placeholder:text-slate-400 focus:border-[#d2296d] focus:outline-none focus:ring-2 focus:ring-[#d2296d]/20 ${className}`.trim()}
    {...props}
  />
));

Input.displayName = "Input";
