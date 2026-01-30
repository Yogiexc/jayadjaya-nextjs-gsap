"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function CTA() {
    return (
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900 border-t border-white/5">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/plantation.png"
                    alt="Misty Plantation"
                    fill
                    className="object-cover"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-2xl">
                    Ready to start trading with Indonesia?
                </h2>
                <p className="text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
                    Get a competitive quote for premium commodities today.
                    Direct from the source.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-xl" onClick={() => window.open('https://wa.me/628155018955', '_blank')}>
                        Chat on WhatsApp
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black backdrop-blur-sm" onClick={() => window.location.href = 'mailto:jayadjaya.official@gmail.com'}>
                        Send Email Inquiry
                    </Button>
                </div>
            </div>
        </section>
    );
}
