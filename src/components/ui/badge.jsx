import React from "react"
import { cn } from "@/lib/utils"

export const Badge = ({ className, children, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
    