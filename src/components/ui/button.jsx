import React from "react"
import { cn } from "@/lib/utils"

export const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
