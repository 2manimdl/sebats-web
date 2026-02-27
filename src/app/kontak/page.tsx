"use client";

import { ArrowRight, Phone, MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
    {
        label: "Business",
        description: "Bicarakan visi kolaborasi atau inisiasi project baru bersama kami.",
        cta: "WhatsApp Us",
        href: "https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20ingin%20diskusi%20project",
    },
    {
        label: "Careers",
        description: "Kami selalu mencari pemikir, pengukir mimpi, dan overthinkers.",
        cta: "Kirim Portfolio",
        href: "mailto:career@sebats.id",
    },
    {
        label: "General",
        description: "Pertanyaan seputar media, press release, atau sekedar menyapa.",
        cta: "Email Kami",
        href: "mailto:hello@sebats.id",
    },
];

export default function KontakPage() {
    return (
        <div className="grain-overlay bg-black selection:bg-white selection:text-black">

            {/* Header Guard: Solid black background to prevent the white column from ruining the transparent Navbar when scrolling up */}
            <div className="fixed top-0 left-0 w-full h-20 md:h-24 bg-black z-40" />

            <div className="relative z-50">
                <Navbar />
            </div>

            {/* Controlled Asymmetry Layout: 65% Black / 35% White */}
            <section className="min-h-screen">
                <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 relative w-full pt-20 md:pt-24">

                    {/* LEFT (65% / col-span-7 or 8) — Typography Hero & The Void */}
                    {/* Kita ganti justify-between dengan margin yang lebih terkontrol agar tidak tabrakan di atas */}
                    <div className="lg:col-span-7 bg-black text-white flex flex-col p-8 md:p-16 lg:px-24 lg:py-20 border-r border-white/10">

                        {/* Top Anchor: Label & Massive Text */}
                        <div className="max-w-3xl mt-32 md:mt-48 lg:mt-56">
                            <p className="mb-4 md:mb-12 flex items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                                <Phone className="h-3 w-3" /> [ 01 ] Contact
                            </p>

                            {/* Typography Scale Extreme - Safe padding & line heights for mobile */}
                            <h1 className="font-display font-black uppercase text-white tracking-tighter"
                                style={{
                                    fontSize: "clamp(3.5rem, 11vw, 11rem)",
                                    lineHeight: "0.95",
                                }}>
                                <br />Let&apos;s <br></br>Talk.
                            </h1>
                        </div>

                        <div className="flex-1"></div> {/* Spacer pendorong the void */}

                        {/* Bottom Anchor: Description & Location */}
                        <div className="mt-24 lg:mt-32 w-full max-w-2xl">
                            <p className="font-body text-sm leading-relaxed text-white/50 mb-12 max-w-sm">
                                Ruang diskusi untuk arsitektur digital dan kolaborasi kreatif. Terbuka
                                untuk membongkar standar industri bersama audiens global dan lokal.
                            </p>

                            {/* Re-added Map Block - Minimal Editorial Style */}
                            <div className="mt-12 overflow-hidden border border-white/10 group cursor-crosshair w-full md:max-w-[500px]">
                                <div className="relative aspect-[16/9] bg-[#0a0a0a] transition-colors duration-500 group-hover:bg-[#0ea5e9]/5">
                                    <div className="flex h-full flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                                        <MapPin className="h-6 w-6 text-white/30 group-hover:text-[#0ea5e9] transition-colors" />
                                        <div className="text-center">
                                            <p className="font-display text-sm font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Bandung, Indonesia</p>
                                            <p className="font-body text-[10px] text-white/30 tracking-[0.2em] uppercase mt-1">GMT+7</p>
                                        </div>
                                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative">
                                            <span className="border-b border-white/20 hover:border-white pb-1 transition-colors">View Coordinates</span>
                                            <ExternalLink className="h-3 w-3 -mt-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (35% / col-span-5 or 4) — Dense Information Pillar */}
                    {/* Padding dikondisikan agar text wrap membentuk kolom majalah sempit */}
                    <div className="lg:col-span-5 bg-white flex flex-col justify-center border-l-0 lg:-ml-px p-8 md:p-16 lg:px-20 lg:py-32">

                        {/* Contact List - The Corner-Anchored Stack */}
                        <div className="flex flex-col w-full border-t border-black/10 mt-12 lg:mt-0">
                            {contacts.map((contact, i) => (
                                <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer"
                                    className="group flex flex-col pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-black/10 hover:border-black transition-colors duration-500 cursor-pointer w-full">

                                    {/* Top Line: Title (Left) & Index (Right) */}
                                    <div className="flex justify-between items-start w-full mb-6 lg:mb-12">
                                        <h3 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black transition-transform duration-500 group-hover:translate-x-3">
                                            {contact.label}
                                        </h3>
                                        <span className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 group-hover:text-black transition-colors duration-500 mt-2">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    {/* Bottom Line: Description (Left) & Architectural Pill CTA (Right/Bottom) */}
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-8">
                                        {/* Description */}
                                        <p className="font-body text-sm leading-relaxed text-black/60 max-w-[280px] group-hover:text-black transition-colors duration-500">
                                            {contact.description}
                                        </p>

                                        {/* Pure Typographic CTA - No Button Borders, Just Raw Editorial Text */}
                                        <div className="group/btn inline-flex items-center gap-4 font-body text-[11px] font-black uppercase tracking-[0.3em] text-black self-start sm:self-auto">
                                            <span className="relative pb-2 overflow-hidden">
                                                {contact.cta}
                                                {/* Surgical thin underline that draws from left to right */}
                                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
                                            </span>
                                            {/* Minimalist arrow that pushes right on hover */}
                                            <ArrowRight className="h-4 w-4 text-black/40 group-hover:text-black transition-all duration-500 group-hover:translate-x-2" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Inline Minimal Fast Stats */}
                        {/* Membuang grid-boxes, menggunakan susunan flat typographical */}
                        <div className="mt-20 flex items-start gap-16">
                            <div>
                                <p className="font-display text-4xl font-black text-black tracking-tighter">50+</p>
                                <p className="mt-2 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Projects</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl font-black text-black tracking-tighter">30+</p>
                                <p className="mt-2 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Experts</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl font-black text-black tracking-tighter">∞</p>
                                <p className="mt-2 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Overthinking</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
