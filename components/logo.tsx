"use client"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark" | "colored"
}

export default function Logo({ className = "", size = "md", variant = "colored" }: LogoProps) {
  const sizes = {
    sm: "text-base md:text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl lg:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  }

  const getColors = () => {
    switch (variant) {
      case "light":
        return {
          innovate: "text-white",
          x: "text-red-500",
          gcs: "text-white",
        }
      case "dark":
        return {
          innovate: "text-foreground",
          x: "text-foreground/90",
          gcs: "text-foreground",
        }
      case "colored":
      default:
        return {
          innovate: "text-primary",
          x: "text-secondary",
          gcs: "text-primary",
        }
    }
  }

  const colors = getColors()

  return (
    <span className={`font-black ${sizes[size]} ${className}`}>
      <span className={colors.innovate}>Innovate</span>
      <span className={colors.x}>X</span>
      <span className={`ml-1 ${colors.gcs}`}>GCS</span>
    </span>
  )
}
