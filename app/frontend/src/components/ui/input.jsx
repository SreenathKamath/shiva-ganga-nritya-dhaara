import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-[#8B1538] focus:outline-none focus:ring-2 focus:ring-[#8B1538]/20 ${className}`.trim()}
    {...props}
  />
));

Input.displayName = "Input";
