"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight, Phone, MapPin, ExternalLink, MessageCircle, Briefcase, Mail, Copy, Check } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import gsap from "gsap";
import SplitType from "split-type";

const contacts = [
    {
        label: "Business",
        description: "Bicarakan visi kolaborasi atau inisiasi project baru bersama kami.",
        cta: "WhatsApp Us",
        href: "https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20ingin%20diskusi%20project",
        copyValue: "+62 812-3456-7890",
        icon: MessageCircle,
        hoverBg: "hover:bg-amber-50/60",
    },
    {
        label: "Careers",
        description: "Kami selalu mencari pemikir, pengukir mimpi, dan overthinkers.",
        cta: "Kirim Portfolio",
        href: "mailto:career@sebats.id",
        copyValue: "career@sebats.id",
        icon: Briefcase,
        hoverBg: "hover:bg-blue-50/50",
    },
    {
        label: "General",
        description: "Pertanyaan seputar media, press release, atau sekedar menyapa.",
        cta: "Email Kami",
        href: "mailto:hello@sebats.id",
        copyValue: "hello@sebats.id",
        icon: Mail,
        hoverBg: "hover:bg-green-50/40",
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
        <span className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 tabular-nums">
            {time}
        </span>
    );
}

// ─── Animated Stat ────────────────────────────────────────────────────────────
function AnimatedStat({ target, suffix = "", label, className = "" }: { target: number; suffix?: string; label: string; className?: string }) {
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
            <p className={`font-display text-4xl font-black tracking-tighter ${className}`}>
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
            className="inline-flex items-center gap-1.5 font-body text-[9px] font-bold uppercase tracking-[0.3em] text-black/20 hover:text-primary transition-colors duration-200 shrink-0"
            title={`Copy: ${value}`}
        >
            {copied
                ? <><Check className="h-2.5 w-2.5 text-green-500" /><span className="text-green-500">Copied!</span></>
                : <><Copy className="h-2.5 w-2.5" /><span>{value}</span></>
            }
        </button>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function KontakPage() {
    const heroTextRef = useRef<HTMLHeadingElement>(null);
    const labelRef = useRef<HTMLParagraphElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroTextRef.current) return;

        const timer = setTimeout(() => {
            const splitHero = new SplitType(heroTextRef.current!, { types: "chars" });
            const splitDesc = new SplitType(descRef.current!, { types: "chars" });

            const heroChars = splitHero.chars || [];
            const descChars = splitDesc.chars || [];

            gsap.set([heroChars, descChars], { visibility: "hidden", opacity: 0 });

            const tl = gsap.timeline({ repeat: -1 });

            if (heroChars.length > 0) {
                tl.to(heroChars, { visibility: "visible", opacity: 1, stagger: 0.08, duration: 0.01, ease: "none" });
            }
            tl.to({}, { duration: 0.5 });
            if (descChars.length > 0) {
                tl.to(descChars, { visibility: "visible", opacity: 1, stagger: 0.02, duration: 0.01, ease: "none" });
            }
            tl.to({}, { duration: 4.5 });
            if (descChars.length > 0) {
                tl.to([...descChars].reverse(), {
                    opacity: 0, stagger: 0.01, duration: 0.01, ease: "none",
                    onComplete: () => gsap.set(descChars, { visibility: "hidden" }),
                });
            }
            if (heroChars.length > 0) {
                tl.to([...heroChars].reverse(), {
                    opacity: 0, stagger: 0.03, duration: 0.01, ease: "none",
                    onComplete: () => gsap.set(heroChars, { visibility: "hidden" }),
                });
            }
            tl.to({}, { duration: 1 });

            gsap.fromTo(labelRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 });
            gsap.fromTo(mapRef.current, { scale: 0.95, opacity: 0, filter: "blur(5px)" }, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out", delay: 0.5 });

            return () => { tl.kill(); splitHero.revert(); splitDesc.revert(); };
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="grain-overlay bg-black selection:bg-white selection:text-black">
            {/* Controlled Asymmetry Layout: 65% Black / 35% White */}
            <section className="min-h-screen">
                <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 relative w-full pt-20 md:pt-24">

                    {/* ── LEFT ── */}
                    <div className="lg:col-span-7 bg-black text-white flex flex-col p-8 md:p-16 lg:px-24 lg:py-20 border-r border-white/10">
                        <div className="max-w-3xl mt-32 md:mt-48 lg:mt-56">
                            <p ref={labelRef} className="mb-4 md:mb-12 flex items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                                <Phone className="h-3 w-3" /> [ 01 ] Contact
                            </p>
                            <h1
                                ref={heroTextRef}
                                className="font-display font-black uppercase text-white tracking-tighter"
                                style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", lineHeight: "0.95" }}>
                                <br />Let's <br />Talk.
                            </h1>
                        </div>

                        <div className="flex-1" />

                        <div className="mt-24 lg:mt-32 w-full flex flex-col justify-center">
                            <p ref={descRef} className="font-body text-base lg:text-lg leading-relaxed text-white/50 mb-16 md:mb-24 max-w-lg lg:max-w-xl">
                                Ruang diskusi untuk arsitektur digital dan kolaborasi kreatif. Terbuka
                                untuk membongkar standar industri bersama audiens global dan lokal.
                            </p>
                            <div ref={mapRef} className="w-full overflow-hidden border border-white/10 group cursor-crosshair">
                                <div className="relative aspect-[21/9] sm:aspect-[24/9] bg-[#0a0a0a] transition-colors duration-500 group-hover:bg-[#0ea5e9]/5">
                                    <div className="flex h-full flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                                        <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-white/30 group-hover:text-[#0ea5e9] transition-colors" />
                                        <div className="text-center">
                                            <p className="font-display text-sm md:text-base lg:text-lg font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Bandung, Indonesia</p>
                                            <p className="font-body text-[10px] lg:text-xs text-white/30 tracking-[0.3em] uppercase mt-2">GMT+7</p>
                                        </div>
                                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                                            className="mt-6 inline-flex items-center gap-3 font-body text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                                            <span className="border-b border-white/20 hover:border-white pb-1 transition-colors">View Coordinates</span>
                                            <ExternalLink className="h-3 w-3 -mt-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT ── */}
                    <div className="lg:col-span-5 bg-white flex flex-col justify-center border-l-0 lg:-ml-px p-8 md:p-16 lg:px-20 lg:py-32">

                        {/* Top meta row: online status + live clock */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="font-body text-[9px] font-bold uppercase tracking-[0.35em] text-black/35">Tim Online</span>
                            </div>
                            <LiveClock />
                        </div>

                        {/* Availability badge */}
                        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-black/5">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="font-body text-[9px] font-bold uppercase tracking-[0.35em] text-primary/70">
                                Open for Projects · Q2 2025
                            </span>
                        </div>

                        {/* Contact cards */}
                        <div className="flex flex-col w-full border-t border-black/10">
                            {contacts.map((contact, i) => (
                                <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer"
                                    className={`group flex flex-col pt-6 pb-8 border-b border-black/10 hover:border-black/30 transition-all duration-500 cursor-pointer w-full ${contact.hoverBg}`}>

                                    {/* Label */}
                                    <h3 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                        {contact.label}
                                    </h3>

                                    {/* Icon + Number + Copy */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <contact.icon className="h-3 w-3 text-black/20 group-hover:text-primary transition-colors duration-300" />
                                            <span className="font-body text-[10px] font-bold uppercase tracking-[0.45em] text-black/25 group-hover:text-primary transition-colors duration-300">
                                                0{i + 1}
                                            </span>
                                        </div>
                                        {/* Copy button */}
                                        <CopyButton value={contact.copyValue} />
                                    </div>

                                    {/* Description */}
                                    <p className="font-body text-sm leading-relaxed text-black/50 max-w-[280px] mb-5 group-hover:text-black/70 transition-colors duration-300">
                                        {contact.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="inline-flex items-center gap-3 font-body text-[10px] font-black uppercase tracking-[0.3em] text-black self-start">
                                        <span className="relative pb-1 overflow-hidden">
                                            {contact.cta}
                                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                                        </span>
                                        <ArrowRight className="h-3.5 w-3.5 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Stats — animated counters */}
                        <div className="mt-10 pt-8 border-t border-black/5 flex items-start gap-12">
                            <div>
                                <AnimatedStat target={50} suffix="+" label="Projects" className="text-black" />
                                <p className="mt-1 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">Projects</p>
                            </div>
                            <div>
                                <AnimatedStat target={30} suffix="+" label="Experts" className="text-black" />
                                <p className="mt-1 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">Experts</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl font-black text-primary tracking-tighter">∞</p>
                                <p className="mt-1 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">Overthinking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientMarquee />
        </div >
    );
}