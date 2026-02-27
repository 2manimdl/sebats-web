"use client";

import { MessageCircle, Mail, Briefcase, MapPin, ArrowRight, Phone, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
    {
        label: "Business Inquiries",
        description: "Mau kolaborasi atau mulai project? Langsung chat aja.",
        cta: "Chat via WhatsApp",
        href: "https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20ingin%20diskusi%20project",
        icon: MessageCircle,
    },
    {
        label: "Career Opportunities",
        description: "Join our team. We're always looking for overthinkers and daydreamers.",
        cta: "Kirim Portfolio",
        href: "mailto:career@sebats.id",
        icon: Briefcase,
    },
    {
        label: "General Inquiry",
        description: "Pertanyaan umum, press, atau sekedar say hi.",
        cta: "Email Kami",
        href: "mailto:hello@sebats.id",
        icon: Mail,
    },
];

export default function KontakPage() {
    return (
        <div className="grain-overlay">
            <Navbar />

            {/* Split Screen */}
            <section className="min-h-screen bg-white pt-24">
                <div className="grid min-h-[calc(100vh-6rem)] grid-cols-1 md:grid-cols-2">
                    {/* Left — Massive Typography */}
                    <div className="flex flex-col justify-center border-r border-black/10 bg-black p-8 text-white md:p-16 lg:p-24">
                        <p className="mb-6 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                            <Phone className="h-3 w-3" /> Get In Touch
                        </p>
                        <h1 className="font-display font-black uppercase text-white" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                            Let&apos;s<br />Talk.
                        </h1>
                        <div className="mt-8 h-px w-16 bg-primary" />
                        <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-white/50 md:text-base">
                            Kami selalu terbuka untuk ngobrol — soal project, kolaborasi, atau bahkan cuma curhat soal industri kreatif.
                        </p>

                        {/* Map placeholder */}
                        <div className="mt-12 overflow-hidden border border-white/10">
                            <div className="relative aspect-[16/9] bg-white/5">
                                <div className="flex h-full flex-col items-center justify-center gap-3">
                                    <MapPin className="h-8 w-8 text-primary" />
                                    <p className="font-display text-sm font-black uppercase tracking-tight text-white/60">Bandung, Indonesia</p>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.2em] text-primary transition-colors hover:text-white">
                                        Open in Maps <ExternalLink className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Contact Cards */}
                    <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24">
                        <div className="space-y-0 divide-y divide-black/10 border-y border-black/10">
                            {contacts.map((contact) => (
                                <div key={contact.label} className="group py-8 transition-colors duration-300 hover:bg-black/[0.02] md:py-10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                                            <contact.icon className="h-5 w-5 text-black/40 transition-colors duration-300 group-hover:text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display text-lg font-black uppercase tracking-tight text-black">{contact.label}</h3>
                                            <p className="mt-1 font-body text-sm leading-relaxed text-muted">{contact.description}</p>
                                            <a href={contact.href} target="_blank" rel="noopener noreferrer" className="group/link mt-4 inline-flex items-center gap-2 border border-black/20 px-6 py-3 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
                                                {contact.cta}
                                                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-0 border border-black/10">
                            <div className="border-r border-black/10 p-4 text-center md:p-6">
                                <p className="font-display text-2xl font-black text-black md:text-3xl">50+</p>
                                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted">Projects</p>
                            </div>
                            <div className="border-r border-black/10 p-4 text-center md:p-6">
                                <p className="font-display text-2xl font-black text-black md:text-3xl">30+</p>
                                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted">Team</p>
                            </div>
                            <div className="p-4 text-center md:p-6">
                                <p className="font-display text-2xl font-black text-primary md:text-3xl">∞</p>
                                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted">Overthinking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
