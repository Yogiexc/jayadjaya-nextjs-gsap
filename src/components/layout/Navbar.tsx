"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "#" },
    { name: "Commodities", href: "#catalog" },
    { name: "Process", href: "#process" },
    { name: "Trust", href: "#trust" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl mx-auto rounded-full flex items-center justify-between px-6 py-3 transition-all duration-500",
                    isScrolled
                        ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white hover:text-gold transition-colors">
                    CV Jaya Djaya
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden md:block">
                    <Button variant="primary" size="sm" onClick={() => window.open('https://wa.me/628155018955', '_blank')}>
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 p-4 md:hidden"
                >
                    <div className="bg-charcoal/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-white hover:text-gold text-center py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full" onClick={() => window.open('https://wa.me/628155018955', '_blank')}>
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
