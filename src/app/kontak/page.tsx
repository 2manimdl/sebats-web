"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight, Phone, MapPin, ExternalLink, MessageCircle, Briefcase, Mail, Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import ClientMarquee from "@/components/ClientMarquee";
import gsap from "gsap";

const contacts = [
    {
        label: "Business",
        description: "Bicarakan visi kolaborasi atau inisiasi project baru bersama kami.",
        cta: "WhatsApp Us",
        href: "https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20ingin%20diskusi%20project",
        copyValue: "+62 812-3456-7890",
        icon: MessageCircle,
    },
    {
        label: "Careers",
        description: "Kami selalu mencari pemikir, pengukir mimpi, dan overthinkers.",
        cta: "Kirim Portfolio",
        href: "mailto:career@sebats.id",
        copyValue: "career@sebats.id",
        icon: Briefcase,
    },
    {
        label: "General",
        description: "Pertanyaan seputar media, press release, atau sekedar menyapa.",
        cta: "Email Kami",
        href: "mailto:hello@sebats.id",
        copyValue: "hello@sebats.id",
        icon: Mail,
    },
];

// ─── Live Clock ───────────────────────────────────────────────────────────────
function LiveClock() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const update = () => {
            const now = new Date();
            const wib = new Date(now.getTime() + 7 * 3600 * 1000);
            setTime(
                wib.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + " WIB"
            );
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 tabular-nums">
            {time}
        </span>
    );
}

// ─── Animated Stat ────────────────────────────────────────────────────────────
function AnimatedStat({ target, suffix = "", className = "" }: { target: number; suffix?: string; className?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const ran = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !ran.current) {
                ran.current = true;
                const obj = { v: 0 };
                gsap.to(obj, {
                    v: target, duration: 1.6, ease: "power2.out",
                    onUpdate: () => setVal(Math.floor(obj.v)),
                });
            } else if (!e.isIntersecting) {
                ran.current = false;
                setVal(0);
            }
        }, { threshold: 0.5 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [target]);

    return (
        <div ref={ref}>
            <p className={`font-display text-5xl lg:text-7xl font-black tracking-tighter ${className}`}>
                {val}{suffix}
            </p>
        </div>
    );
}

// ─── Copy Button ───────────────────────────────────────────────────────────────
function CopyButton({ value }: { value: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [value]);

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 font-body text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-primary transition-colors duration-200 shrink-0"
            title={`Copy: ${value}`}
        >
            {copied
                ? <><Check className="h-3 w-3 text-green-500" /><span className="text-green-500">Copied!</span></>
                : <><Copy className="h-3 w-3" /><span>{value}</span></>
            }
        </button>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function KontakPage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(".contact-headline",
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1 }
            );

            // Grid elements animation
            gsap.fromTo(".contact-stagger",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.3 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="grain-overlay bg-black selection:bg-primary selection:text-black text-white overflow-hidden">

            {/* Spacer for Global Navbar */}
            <div style={{ height: "180px" }} className="w-full" aria-hidden="true"></div>

            <section className="container-main" style={{ paddingBottom: "clamp(80px, 12vw, 160px)" }}>

                {/* ─── 1. MASSIVE HEADER ─── */}
                <div ref={headerRef} className="w-full mb-16 md:mb-24">
                    <p className="contact-headline mb-6 flex items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <Phone className="h-4 w-4" /> Contact Studio
                    </p>
                    <h1 className="contact-headline font-display font-black uppercase tracking-tighter text-white"
                        style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        Let&apos;s <span className="text-primary">Talk.</span>
                    </h1>
                </div>

                {/* ─── 2. ARCHITECTURAL GRID BORDER ─── */}
                <div className="w-full border-t border-white/10 pt-16 md:pt-24">
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

                        {/* ── COLUMN A: Status & Location (Span 3) ── */}
                        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-12">
                            {/* Status */}
                            <div className="contact-stagger">
                                <p className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-4">
                                    Current Status
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                        </span>
                                        <span className="font-body text-xs font-bold tracking-widest text-white">ONLINE</span>
                                    </div>
                                    <LiveClock />
                                </div>
                            </div>

                            {/* Location Box */}
                            <div className="contact-stagger w-full overflow-hidden border border-white/10 group cursor-crosshair">
                                <div className="relative aspect-square bg-white/[0.02] transition-colors duration-500 group-hover:bg-primary/5">
                                    <div className="flex h-full flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                                        <MapPin className="h-8 w-8 text-white/20 group-hover:text-primary transition-colors" />
                                        <div className="text-center">
                                            <p className="font-display text-lg font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Bandung</p>
                                            <p className="font-body text-[10px] text-white/30 tracking-[0.3em] uppercase mt-2">Indonesia</p>
                                        </div>
                                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                                            className="mt-2 inline-flex items-center gap-2 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors">
                                            <span>View Map</span>
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── COLUMN B: Contact Directory (Span 5) ── */}
                        <div className="md:col-span-8 lg:col-span-5 flex flex-col">
                            <p className="contact-stagger font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8">
                                Directory
                            </p>
                            <div className="flex flex-col border-t border-white/10">
                                {contacts.map((contact, i) => (
                                    <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer"
                                        className="contact-stagger group flex flex-col py-8 border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500 px-4 -mx-4 cursor-pointer">

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <contact.icon className="h-4 w-4 text-white/20 group-hover:text-primary transition-colors" />
                                                <span className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-primary transition-colors">
                                                    0{i + 1}
                                                </span>
                                            </div>
                                            <CopyButton value={contact.copyValue} />
                                        </div>

                                        <h3 className="font-display text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-4 group-hover:text-primary transition-colors duration-500">
                                            {contact.label}
                                        </h3>

                                        <p className="font-body text-sm leading-relaxed text-white/50 max-w-sm mb-8 group-hover:text-white/80 transition-colors">
                                            {contact.description}
                                        </p>

                                        <div className="inline-flex items-center gap-3 font-body text-[10px] font-black uppercase tracking-[0.3em] text-white">
                                            <span className="relative pb-1 overflow-hidden group-hover:text-primary transition-colors">
                                                {contact.cta}
                                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                            </span>
                                            <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── COLUMN C: Philosophy & Stats (Span 4) ── */}
                        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-16 lg:pl-12">
                            <div className="contact-stagger">
                                <p className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-6">
                                    Philosophy
                                </p>
                                <p className="font-body text-base lg:text-xl leading-relaxed text-white/60">
                                    Ruang diskusi untuk arsitektur digital dan kolaborasi kreatif. Kami terbuka untuk membongkar standar industri bersama audiens global dan brand lokal. Momen jeda Anda dimulai dari sapaan pertama.
                                </p>
                            </div>

                            <div className="contact-stagger flex items-start gap-12 lg:gap-20 pt-12 border-t border-white/10">
                                <div>
                                    <AnimatedStat target={50} suffix="+" className="text-white" />
                                    <p className="mt-4 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Projects Delivered</p>
                                </div>
                                <div>
                                    <AnimatedStat target={30} suffix="+" className="text-white" />
                                    <p className="mt-4 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Creative Experts</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="mt-12 md:mt-24">
                <ClientMarquee />
            </div>
        </div>
    );
}