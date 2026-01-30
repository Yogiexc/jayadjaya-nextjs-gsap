"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-gold text-charcoal hover:bg-white transition-colors duration-300",
            outline: "border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300",
            ghost: "text-white hover:text-gold transition-colors duration-300",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg uppercase tracking-wider",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "rounded-full font-medium inline-flex items-center justify-center gap-2",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props} // Pass the rest of the props (including onClick)
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
