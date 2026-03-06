"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        title: "Momen Hening",
        client: "Netflix Indonesia",
        category: "Film & Campaign",
        metric: "51,260",
        metricLabel: "Engagement",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
    {
        title: "Visual Kampanye Akhir Tahun",
        client: "Tokopedia",
        category: "Branding",
        metric: "127,840",
        metricLabel: "Reach",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
    {
        title: "Ruang Kreatif Gen Z",
        client: "Gojek",
        category: "Fotografi",
        metric: "89,120",
        metricLabel: "Impressions",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
    {
        title: "Identitas Baru Bangsa",
        client: "Samsung",
        category: "Desain",
        metric: "12,450",
        metricLabel: "Conversions",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
    {
        title: "Narasi Urban Kolektif",
        client: "Spotify",
        category: "Dokumenter",
        metric: "203,700",
        metricLabel: "Streams",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
    {
        title: "Healing Campaign",
        client: "Grab",
        category: "Campaign",
        metric: "74,300",
        metricLabel: "Engagement",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
        aspect: "aspect-[16/9]",
    },
];

// ─── Data Layanan (Improved & Expanded) ───────────────
const services = [
    { 
        title: "Film & Commercials", 
        desc: "We craft cinematic narratives that resonate. From high-end B2B brand films to engaging TV commercials and digital campaigns, we handle the entire production pipeline to ensure your story looks breathtaking and drives real impact." 
    },
    { 
        title: "Brand Architecture", 
        desc: "Building brands that people actually care about. We dive deep into your brand's core to develop a cohesive visual identity, comprehensive brand architecture, and a distinct tone of voice that stands out in today's crowded market." 
    },
    { 
        title: "Digital & Social Strategy", 
        desc: "Navigating the digital landscape with precision and style. We specialize in Gen Z engagement, crafting tailored social media strategies, short-form video content, and a comprehensive digital presence that keeps your audience hooked." 
    },
    { 
        title: "Editorial Photography", 
        desc: "Capturing moments that speak volumes. Whether it's high-fashion editorial shoots, crisp product photography, or lifestyle campaigns, our in-house studio and expert photographers deliver visuals that elevate your brand's aesthetic." 
    },
    { 
        title: "Web Experience & UI/UX", 
        desc: "Designing digital spaces that feel like home. We build immersive, interactive websites and intuitive user interfaces that not only look incredibly sleek but also provide a frictionless, engaging journey for your users." 
    },
    { 
        title: "Experiential Activations", 
        desc: "Bringing your brand into the physical world. We conceptualize and execute immersive offline activations, community events, and interactive installations that turn passive consumers into active, loyal brand advocates." 
    },
];

export default function KaryaPage() {
    const heroRef = useRef<HTMLElement>(null);
    const portfolioGridRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from("#karya-title, #karya-title-accent", { y: "110%", opacity: 0, stagger: 0.1, duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: heroRef.current, start: "top 80%" } });
            gsap.from("#karya-desc", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3, scrollTrigger: { trigger: heroRef.current, start: "top 80%" } });

            // Symmetric Grid Animation
            const cards = portfolioGridRef.current?.querySelectorAll("article") || [];
            gsap.from(cards, { y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: portfolioGridRef.current, start: "top 85%", toggleActions: "play none none reverse" } });

            // Services Grid Animation
            const serviceItems = servicesRef.current?.querySelectorAll(".service-item") || [];
            gsap.from("#service-header", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: servicesRef.current, start: "top 85%" } });
            gsap.from(serviceItems, { x: -30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: servicesRef.current, start: "top 80%", toggleActions: "play none none reverse" } });

        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-white text-black">

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative w-full bg-white">
                {/* Spacer Absolut untuk menghindari Navbar */}
                <div style={{ height: "180px" }} className="w-full" aria-hidden="true"></div>

                <div className="container-main relative z-10" style={{ paddingBottom: "100px" }}>
                    <p className="mb-6 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <TrendingUp className="h-4 w-4" /> Arsip Digital
                    </p>
                    <h1 className="font-display font-black uppercase text-black" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        Karya &<br /><span id="karya-title-accent" className="text-primary">Layanan.</span>
                    </h1>
                    <div className="mt-10 h-px w-24 bg-primary" />
                    <p id="karya-desc" className="mt-10 max-w-xl font-body text-sm leading-relaxed text-black/60 md:text-base md:leading-loose">
                        Setiap proyek adalah cerita. Setiap angka adalah bukti nyata dampak yang kami ciptakan bersama partner kami. Kami tidak sekadar mendesain, kami merekayasa persepsi.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CASE STUDIES / PORTFOLIO (SYMMETRIC CINEMATIC GRID)
            ═══════════════════════════════════════════ */}
            <section className="bg-white border-t border-black/5" style={{ padding: "120px 0" }}>
                <div className="container-main">
                    
                    {/* Section Header */}
                    <div style={{ marginBottom: "80px" }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                                Case Studies
                            </p>
                            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-black md:text-6xl">
                                Portfolio.
                            </h2>
                        </div>
                        <p className="max-w-xs font-body text-xs uppercase tracking-[0.2em] text-black/40 md:text-right leading-relaxed">
                            Mendobrak standar industri melalui eksekusi presisi.
                        </p>
                    </div>

                    {/* Symmetric Cinematic Grid (gaya Invisible UI) */}
                    <div ref={portfolioGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((project) => (
                            <article key={project.title} className="group relative flex flex-col overflow-hidden bg-gray-50 border border-black/5 cursor-pointer">
                                {/* Image Container (Seragam 16:9) */}
                                <div className={`relative w-full overflow-hidden ${project.aspect}`}>
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
                                    />
                                    {/* Vignette Overlay untuk White BG */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Top Left: Category Badge (Dibuat Solid Hitam) */}
                                    <div className="absolute top-5 left-5 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="bg-black px-3 py-1.5 font-body text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Center Reveal: Precise Metrics (B2B Trust Engine) — Dibuat White Mode */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
                                        <div className="flex flex-col items-center gap-2 bg-white/70 backdrop-blur-xl border border-black/5 p-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <BarChart className="h-5 w-5 text-primary mb-1" />
                                            <p className="font-display text-3xl font-black text-black leading-none tracking-tighter">
                                                {project.metric}
                                            </p>
                                            <p className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-black/50">
                                                {project.metricLabel}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Left: Client Info (Warna Hitam Pudar) */}
                                    <div className="absolute bottom-5 left-5 z-10 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        <p className="font-display text-lg font-bold text-white tracking-wide">
                                            for {project.client}
                                        </p>
                                    </div>
                                </div>

                                {/* Text Details Footer (Warna Hitam) */}
                                <div className="flex items-center justify-between p-5 lg:p-6 bg-white border-t border-black/5 transition-colors duration-300 group-hover:bg-gray-50">
                                    <h3 className="font-display text-sm lg:text-base font-black uppercase tracking-wider text-black line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <span className="flex-shrink-0 inline-flex items-center gap-2 font-body text-[9px] font-black uppercase tracking-[0.25em] text-primary transition-all group-hover:translate-x-1">
                                        View <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                LAYANAN KAMI SECTION (EXPANDED)
            ═══════════════════════════════════════════ */}
            <section ref={servicesRef} className="bg-gray-50 border-t border-black/5" style={{ padding: "120px 0" }}>
                <div className="container-main">
                    
                    {/* Improved Service Header */}
                    <div id="service-header" style={{ marginBottom: "80px" }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                                Capability
                            </p>
                            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-black md:text-6xl">
                                Layanan Kami.
                            </h2>
                        </div>
                        <p className="max-w-xs font-body text-xs uppercase tracking-[0.2em] text-black/40 md:text-right leading-relaxed">
                            Ekosistem kreatif lengkap untuk pertumbuhan merek Anda.
                        </p>
                    </div>

                    {/* Expanded Services List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-16">
                        {services.map((service, i) => (
                            <div key={i} className="service-item group flex flex-col gap-4 border-b border-black/10 pb-8 transition-colors duration-500 hover:border-black/30">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-display text-2xl lg:text-3xl font-black uppercase text-black transition-colors duration-500 group-hover:text-primary max-w-[80%]">
                                        {service.title}
                                    </h3>
                                    <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-black/20 group-hover:text-primary transition-colors duration-500 mt-2">
                                        0{i + 1}
                                    </span>
                                </div>
                                <p className="font-body text-sm lg:text-base text-black/50 leading-relaxed transition-colors duration-500 group-hover:text-black/80 mt-2">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* MARQUEE */}
            <div className="bg-black text-white">
                <ClientMarquee />
            </div>

        </div>
    );
}