import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: "light" | "dark";
}

export function GlassCard({ className, children, variant = "light", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border transition-all duration-300",
                variant === "light"
                    ? "bg-white/5 border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                    : "bg-black/20 border-white/5 backdrop-blur-xl shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
