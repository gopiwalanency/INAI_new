import React from "react"
import { cn } from "@/lib/utils"

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("rounded-2xl border bg-white shadow p-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children }) => (
  <div className={cn("mb-2", className)}>{children}</div>
)

export const CardTitle = ({ className, children }) => (
  <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>
)

export const CardDescription = ({ className, children }) => (
  <p className={cn("text-sm text-gray-500", className)}>{children}</p>
)

export const CardContent = ({ className, children }) => (
  <div className={cn("mt-2", className)}>{children}</div>
)
