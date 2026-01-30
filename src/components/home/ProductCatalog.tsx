"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        category: "Coffee",
        items: [
            { name: "Robusta Green Beans", grade: "Grade 1, Screen 16-18", desc: "Bold, nutty flavor with high caffeine content. Sourced from Lampung & Java.", image: "/images/robusta-bean.png" },
            { name: "Arabica Green Beans", grade: "Specialty Grade", desc: "Complex acidity and floral notes. Sourced from Aceh Gayo & Toraja.", image: "/images/arabica-bean.png" },
        ]
    },
    {
        category: "Charcoal",
        items: [
            { name: "Coconut Shell Briquettes", grade: "Premium Shisha Grade", desc: "High heat, low ash (<2.5%), white ash, 2+ hours burn time.", image: "/images/coco-briq.png" },
            { name: "Hardwood Charcoal", grade: "BBQ Grade", desc: "Long burning lump charcoal, perfect for grilling and industrial use.", image: "/images/hardwood-char.png" },
        ]
    },
    {
        category: "Spices",
        items: [
            { name: "Whole Cloves", grade: "AB6", desc: "Hand-picked, dried to perfection. High oil content and potent aroma.", image: "/images/cloves-only.png" },
            { name: "Nutmeg & Mace", grade: "ABCD", desc: "Premium aromatic nutmeg for culinary and essential oil extraction.", image: "/images/nutmeg-mace.png" },
        ]
    }
];

export function ProductCatalog() {
    return (
        <section id="catalog" className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Commodities</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Sourced directly from Indonesian farmers and processed with strict quality control to meet international export standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((cat, idx) => (
                        cat.items.map((product, pIdx) => (
                            <GlassCard key={product.name} variant="dark" className="group relative overflow-hidden h-[450px] flex flex-col">
                                <div className="relative h-[250px] w-full overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
                                    <span className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {cat.category}
                                    </span>
                                </div>

                                <div className="p-6 flex-1 flex flex-col relative z-10 -mt-10">
                                    <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors mb-2">{product.name}</h3>
                                    <p className="text-gold/80 text-sm font-medium mb-3">{product.grade}</p>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>

                                    <Button variant="outline" className="w-full group-hover:bg-gold group-hover:text-charcoal border-white/20 text-white">
                                        Request Quote
                                        <ArrowUpRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </GlassCard>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}
