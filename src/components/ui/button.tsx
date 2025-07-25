import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 rounded-full px-5 py-2 shadow-md hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
    {
      variants: {
        variant: {
          default:
              "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost:
              "hover:bg-accent hover:text-accent-foreground",
          link:
              "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 text-sm px-5 py-2",
          sm: "h-9 px-4 rounded-md",
          lg: "h-12 px-6 text-base",
          icon: "h-10 w-10 p-0",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)


function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
