// src/lib/utils.js
// Simple helper to merge Tailwind CSS classes safely
export function cn(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  