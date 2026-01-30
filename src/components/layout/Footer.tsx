"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white relative pt-8 pb-12 px-6 border-t border-white/5">
            {/* Main Footer Content */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Col 1: Brand */}
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-4">CV Jaya Djaya</h2>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Premium Agricultural & Charcoal Products for the World. Your trusted partner for high-quality Indonesian commodities.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="#catalog" className="hover:text-gold transition-colors">Commodities</Link></li>
                            <li><Link href="#process" className="hover:text-gold transition-colors">Export Process</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                                <span>Wiyung Indah MX 20, <br />Surabaya, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gold shrink-0" />
                                <span>+62 815 501 8955</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gold shrink-0" />
                                <span>jayadjaya.official@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Social */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={18} />, href: "#" },
                                { icon: <Facebook size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 border border-white/10"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <p>© 2026 CV Jaya Djaya. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
