import React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"
