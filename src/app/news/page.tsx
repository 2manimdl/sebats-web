"use client";

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Clock, ArrowRight, PenTool, TrendingUp, User, ChevronDown, Filter } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = ["Semua", "Opini", "Branding", "Case Study", "Tutorial", "Lifestyle", "Burnout"];

const featuredArticle = {
    title: "Mengapa Gen Z Memilih 'Slow Living' Dibanding Hustle Culture",
    excerpt: "Sebuah investigasi mendalam tentang shifting mindset generasi muda Indonesia yang mulai mempertanyakan budaya kerja keras tanpa batas.",
    category: "Opini",
    author: "Sinta Maharani",
    date: "02 Mar 2026",
    timeAgo: "1 hari lalu",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
};

const trendingArticles = [
    { title: "5 Brand Lokal yang Berhasil Rebrand untuk Gen Z", category: "Branding", timeAgo: "3 jam" },
    { title: "Kenapa 'Authentic' Jadi Buzzword yang Paling Overused di 2026", category: "Opini", timeAgo: "3 hari" },
    { title: "Behind The Scene: Kampanye 'Momen Hening' untuk Netflix", category: "Case Study", timeAgo: "5 jam" },
    { title: "Tutorial: Bikin Visual Konten yang Bikin Orang Berhenti Scroll", category: "Tutorial", timeAgo: "2 hari" },
];

const allArticles = [
    {
        title: "5 Brand Lokal yang Berhasil Rebrand untuk Gen Z",
        excerpt: "Bagaimana brand-brand Indonesia berhasil memikat hati generasi muda dengan pendekatan yang autentik.",
        category: "Branding",
        author: "Raka Adriansyah",
        date: "02 Mar 2026",
        timeAgo: "3 jam lalu",
        readTime: "4 min",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80",
    },
    {
        title: "Behind The Scene: Kampanye 'Momen Hening' untuk Netflix",
        excerpt: "Cerita di balik proses kreatif kampanye yang meraih 51K+ engagement dalam seminggu.",
        category: "Case Study",
        author: "Dimas Pratama",
        date: "02 Mar 2026",
        timeAgo: "5 jam lalu",
        readTime: "7 min",
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    },
    {
        title: "Mental Health di Industri Kreatif: Stigma atau Strategi?",
        excerpt: "Diskusi terbuka soal burnout dan bagaimana agency-agency mulai berubah.",
        category: "Burnout",
        author: "Ayu Lestari",
        date: "01 Mar 2026",
        timeAgo: "1 hari lalu",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80",
    },
    {
        title: "Tutorial: Bikin Visual Konten yang Bikin Orang Berhenti Scroll",
        excerpt: "Step-by-step guide dari tim creative sebats untuk bikin thumb-stopping content.",
        category: "Tutorial",
        author: "Tim Creative",
        date: "01 Mar 2026",
        timeAgo: "2 hari lalu",
        readTime: "8 min",
        imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    },
    {
        title: "Kenapa 'Authentic' Jadi Buzzword yang Paling Overused di 2026",
        excerpt: "Analisis kritis soal penggunaan kata 'authentic' yang ironisnya jadi tidak autentik.",
        category: "Opini",
        author: "Raka Adriansyah",
        date: "28 Feb 2026",
        timeAgo: "3 hari lalu",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    },
    {
        title: "Rehat Sejenak: Playlist Kerja dari Tim sebats",
        excerpt: "Koleksi musik yang menemani proses kreatif kami, dari lo-fi sampai indie Indonesia.",
        category: "Lifestyle",
        author: "Ayu Lestari",
        date: "27 Feb 2026",
        timeAgo: "4 hari lalu",
        readTime: "3 min",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    },
];

// ─── Magnetic Button ───────────────────────────────────────────────────────────
function MagneticButton({ children, className, href }: { children: React.ReactNode; className: string; href: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current; if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    return (
        <a ref={ref} href={href} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </a>
    );
}

// ─── Counter Hook ──────────────────────────────────────────────────────────────
function useCounter(target: number, duration: number = 1.5) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasRun = useRef(false);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasRun.current) {
                hasRun.current = true;
                const obj = { val: 0 };
                gsap.to(obj, { val: target, duration, ease: "power2.out", onUpdate: () => setCount(Math.floor(obj.val)) });
            } else if (!entry.isIntersecting) { hasRun.current = false; setCount(0); }
        }, { threshold: 0.5 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);
    return { count, ref };
}

// ─── Category Badge (Light Mode Adjusted) ──────────────────────────────────────
const categoryColors: Record<string, string> = {
    Opini: "bg-purple-100 text-purple-700 border-purple-200",
    Branding: "bg-blue-100 text-blue-700 border-blue-200",
    "Case Study": "bg-emerald-100 text-emerald-700 border-emerald-200",
    Tutorial: "bg-orange-100 text-orange-700 border-orange-200",
    Lifestyle: "bg-pink-100 text-pink-700 border-pink-200",
    Burnout: "bg-red-100 text-red-700 border-red-200",
};

function CategoryBadge({ cat }: { cat: string }) {
    return (
        <span className={`inline-block font-body text-[8px] font-black uppercase tracking-[0.25em] px-2 py-0.5 border ${categoryColors[cat] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
            {cat}
        </span>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function NewsPage() {
    const heroSectionRef = useRef<HTMLElement>(null);
    const featuredSectionRef = useRef<HTMLElement>(null);
    const heroRef = useRef<HTMLHeadingElement>(null);
    const featuredImgRef = useRef<HTMLDivElement>(null);
    const featuredTextRef = useRef<HTMLDivElement>(null);
    const editorialLabelRef = useRef<HTMLParagraphElement>(null);
    const articleGridRef = useRef<HTMLDivElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);

    const { count: counterVal, ref: counterRef } = useCounter(500, 1.8);

    const [activeCategory, setActiveCategory] = useState("Semua");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredArticles = useMemo(() =>
        activeCategory === "Semua"
            ? allArticles
            : allArticles.filter(a => a.category === activeCategory),
        [activeCategory]
    );

    const visibleArticles = filteredArticles.slice(0, visibleCount);
    const hasMore = visibleCount < filteredArticles.length;

    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory]);

    useEffect(() => {
        if (!heroRef.current) return;
        const split = new SplitType(heroRef.current!, { types: "words,chars" });
        const ctx = gsap.context(() => {
            gsap.set(editorialLabelRef.current, { y: 24, opacity: 0 });
            gsap.set(featuredImgRef.current, { scale: 1.08, opacity: 0 });
            gsap.set(featuredTextRef.current, { x: 40, opacity: 0 });
            if (split.chars) gsap.set(split.chars, { y: "110%", opacity: 0 });

            const tlHero = gsap.timeline({ scrollTrigger: { trigger: heroSectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
            tlHero.to(editorialLabelRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0);
            if (split.chars) tlHero.to(split.chars, { y: "0%", opacity: 1, stagger: 0.025, duration: 0.8, ease: "power4.out" }, 0.2);

            gsap.to(featuredImgRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: featuredSectionRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
            gsap.to(featuredTextRef.current, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: featuredSectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });

            const imgInner = featuredImgRef.current?.querySelector("img");
            if (imgInner) {
                gsap.to(imgInner, { yPercent: -10, ease: "none", scrollTrigger: { trigger: featuredSectionRef.current, start: "top bottom", end: "bottom top", scrub: true } });
            }

            if (articleGridRef.current) {
                const cards = articleGridRef.current.querySelectorAll("article");
                gsap.set(cards, { y: 40, opacity: 0 });
                gsap.to(cards, { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: articleGridRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
            }

            if (tagsRef.current) {
                const tags = tagsRef.current.querySelectorAll("span");
                gsap.set(tags, { y: 16, opacity: 0, scale: 0.9 });
                gsap.to(tags, { y: 0, opacity: 1, scale: 1, stagger: 0.07, duration: 0.5, ease: "back.out(1.5)", scrollTrigger: { trigger: tagsRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
            }
        });
        return () => { ctx.revert(); split.revert(); };
    }, []);

    return (
        <div className="min-h-screen bg-white text-black">

            {/* ── HERO ──────────────────────────────────────────── */}
            <section ref={heroSectionRef} className="relative w-full bg-white">
                {/* Spacer Absolut untuk Navbar */}
                <div style={{ height: "180px" }} className="w-full" aria-hidden="true"></div>

                <div className="container-main w-full relative z-10" style={{ paddingBottom: "120px" }}>
                    <p ref={editorialLabelRef} className="mb-6 flex items-center gap-3 font-body text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                        <Newspaper className="h-4 w-4" /> Editorial Journal
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
                        <h1 ref={heroRef} className="font-display font-black uppercase text-black text-5xl md:text-7xl lg:text-8xl" style={{ lineHeight: "0.88", letterSpacing: "-0.03em" }}>
                            News &<br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Stories.</span>
                                {/* Aksen garis kuning di bawah teks */}
                                <span className="absolute bottom-1 left-0 w-full h-4 bg-primary/40 -z-10" />
                            </span>
                        </h1>
                        {/* Hero meta stats */}
                        <div className="flex items-start gap-8 lg:pb-2">
                            <div>
                                <p className="font-display text-2xl font-black text-black tracking-tighter">{allArticles.length}+</p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/40 mt-0.5">Artikel</p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-black text-black tracking-tighter">{CATEGORIES.length - 1}</p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/40 mt-0.5">Kategori</p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-black text-black tracking-tighter flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Live
                                </p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/40 mt-0.5">Editorial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ARTICLE ──────────────────────────────── */}
            <section ref={featuredSectionRef} className="bg-white" style={{ padding: "100px 0" }}>
                <div className="container-main">
                    <div className="mb-10 flex items-center gap-3">
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.4em] text-black/40">Pilihan Editor</span>
                        <span className="flex-1 h-px bg-black/10" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10 lg:gap-16 items-center">
                        <div ref={featuredImgRef} className="relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden bg-black/5 shrink-0 group cursor-pointer">
                            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div ref={featuredTextRef} className="flex flex-col justify-center">
                            <div>
                                <div className="mb-6 flex flex-wrap items-center gap-4">
                                    <CategoryBadge cat={featuredArticle.category} />
                                    <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/60 flex items-center gap-1.5">
                                        <User size={10} /> {featuredArticle.author}
                                    </span>
                                    <span className="font-body text-[9px] text-black/40 tracking-wider">{featuredArticle.date}</span>
                                    <span className="flex items-center gap-1 text-black/40 font-body text-[9px] ml-auto">
                                        <Clock size={10} /> {featuredArticle.readTime} read
                                    </span>
                                </div>
                                <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6 text-black group-hover:text-primary transition-colors cursor-pointer">
                                    {featuredArticle.title}
                                </h2>
                                <p className="font-body text-sm md:text-base text-black/60 mb-10 leading-relaxed max-w-xl">
                                    {featuredArticle.excerpt}
                                </p>
                            </div>
                            <a href="#" className="group inline-flex items-center gap-3 font-display text-[10px] font-black uppercase tracking-[0.3em] text-black pb-1 border-b border-black/20 hover:border-black hover:text-primary transition-all self-start">
                                Baca Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRENDING NOW ──────────────────────────────────── */}
            {/* Bagian ini menggunakan background off-white (#f8f8f8) untuk memberikan kedalaman layout */}
            <section className="bg-[#f8f8f8] border-y border-black/5" style={{ padding: "100px 0" }}>
                <div className="container-main">
                    <div className="flex items-center gap-3 mb-10">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.45em] text-black">Trending Sekarang</span>
                        <span className="flex-1 h-px bg-black/10" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-black/10 border-y border-black/10">
                        {trendingArticles.map((t, i) => (
                            <a key={i} href="#"
                                className="group flex flex-col gap-4 px-0 sm:px-8 py-8 hover:bg-white transition-colors duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <span className="font-display text-4xl font-black text-black/10 group-hover:text-primary transition-colors">0{i + 1}</span>
                                    <CategoryBadge cat={t.category} />
                                </div>
                                <p className="font-display text-sm font-black uppercase tracking-tight text-black/80 group-hover:text-black transition-colors leading-relaxed line-clamp-3 mt-2">
                                    {t.title}
                                </p>
                                <span className="font-body text-[9px] uppercase tracking-[0.3em] text-black/40 mt-auto pt-4">{t.timeAgo} lalu</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ARTICLE GRID ──────────────────────────────────── */}
            <section className="bg-white" style={{ padding: "100px 0" }}>
                <div className="container-main">
                    {/* Header + Category Filter */}
                    <div className="mb-12 flex flex-col gap-8">
                        <div className="flex items-center gap-4 border-b border-black/10 pb-6">
                            <span className="font-display text-2xl font-black uppercase tracking-tight text-black">Semua Artikel</span>
                            <span className="flex-1" />
                            <Filter className="h-4 w-4 text-black/30" />
                            <span className="font-body text-[10px] uppercase tracking-[0.35em] text-black/40 hidden md:block">Filter Topik</span>
                        </div>
                        {/* Category filter tabs */}
                        <div className="flex flex-wrap gap-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`font-body text-[9px] font-black uppercase tracking-[0.25em] px-5 py-3 transition-all duration-300 ${activeCategory === cat
                                        ? "bg-black text-white"
                                        : "bg-transparent text-black/50 border border-black/10 hover:border-black/30 hover:text-black"
                                        }`}
                                >
                                    {cat}
                                    {cat !== "Semua" && (
                                        <span className="ml-2 opacity-50">({allArticles.filter(a => a.category === cat).length})</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Article Grid */}
                    <div ref={articleGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[300px]">
                        <AnimatePresence mode="popLayout">
                            {visibleArticles.map((article, idx) => (
                                <motion.article
                                    key={`${article.title}-${idx}`}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="group cursor-pointer flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/2] overflow-hidden bg-black/5 mb-6">
                                        <img src={article.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={article.title} />
                                    </div>
                                    {/* Meta top */}
                                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                                        <CategoryBadge cat={article.category} />
                                        <span className="font-body text-[9px] text-black/40 tracking-widest">{article.date}</span>
                                        <span className="flex items-center gap-1.5 text-black/40 font-body text-[9px] ml-auto">
                                            <Clock size={10} /> {article.readTime}
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <h3 className="font-display text-xl font-black uppercase leading-tight text-black group-hover:text-primary transition-colors duration-300 mb-3">
                                        {article.title}
                                    </h3>
                                    {/* Excerpt */}
                                    <p className="text-sm text-black/60 line-clamp-2 leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                                    {/* Bottom: author + arrow */}
                                    <div className="flex items-center gap-3 pt-5 border-t border-black/10 mt-auto">
                                        <User size={10} className="text-black/30 shrink-0" />
                                        <span className="font-body text-[9px] uppercase tracking-widest text-black/50 font-bold">{article.author}</span>
                                        <ArrowRight size={14} className="ml-auto text-black/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>

                        {/* Empty state when filter returns nothing */}
                        {filteredArticles.length === 0 && (
                            <div className="col-span-full py-24 text-center">
                                <p className="font-body text-sm text-black/30 uppercase tracking-widest">Belum ada artikel di kategori ini</p>
                            </div>
                        )}
                    </div>

                    {/* ── Load More ─────────────────────────────────── */}
                    {hasMore && (
                        <div className="mt-20 flex justify-center">
                            <button
                                onClick={() => setVisibleCount(v => v + 3)}
                                className="group inline-flex items-center gap-3 font-display text-[10px] font-black uppercase tracking-[0.3em] text-black border border-black/20 px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                                Muat Lebih Banyak
                                <span className="opacity-50 group-hover:opacity-80 transition-opacity">({filteredArticles.length - visibleCount} tersisa)</span>
                            </button>
                        </div>
                    )}
                    {!hasMore && filteredArticles.length > 0 && (
                        <p className="mt-20 text-center font-body text-[9px] uppercase tracking-[0.4em] text-black/30">
                            ─── Semua artikel telah ditampilkan ───
                        </p>
                    )}
                </div>
            </section>

            {/* ── CTA (Tetap Hitam untuk jembatan ke Footer) ──────── */}
            <section className="bg-black text-white border-t border-white/10 overflow-hidden">
                <div className="container-main">
                    <div className="flex items-center justify-between py-5 border-b border-white/10">
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.5em] text-primary flex items-center gap-2">
                            <PenTool className="h-3 w-3" /> Kirim Tulisan
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/30">editorial@sebats.id</span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="py-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-24 items-start"
                    >
                        <div className="flex flex-col gap-4 lg:border-r lg:border-white/10 lg:pr-20">
                            <div className="flex flex-col">
                                <span ref={counterRef} className="font-display font-black text-white/10" style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{counterVal}</span>
                                <span className="font-display text-4xl font-black text-primary uppercase" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>Kata.</span>
                            </div>
                            <p className="font-body text-xs uppercase tracking-[0.25em] text-white/40 max-w-[200px] leading-relaxed">Minimum kata yang kami tunggu dari tulisanmu.</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-display font-black uppercase text-white leading-none mb-7" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}>
                                Sambat<br />Disini.
                            </h2>
                            <p className="font-body text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
                                Keresahanmu soal industri kreatif layak dibaca orang lain. Kirim opini, case study, atau curhatanmu.
                            </p>
                            <div ref={tagsRef} className="flex flex-wrap gap-2.5 mb-10">
                                {["Burnout", "Hustle Culture", "Branding", "Opini", "Case Study", "Lifestyle"].map((tag) => (
                                    <span key={tag} className="font-body text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border border-white/20 text-white/40 hover:border-primary/50 hover:text-primary transition-colors cursor-default">{tag}</span>
                                ))}
                            </div>
                            <MagneticButton href="mailto:editorial@sebats.id" className="group self-start inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[10px] font-black uppercase tracking-[0.25em] text-black hover:bg-white transition-colors duration-300">
                                <PenTool className="h-4 w-4" />
                                Kirim Tulisan
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                        </div>
                    </motion.div>
                    <div className="border-t border-white/10 py-5 flex items-center justify-between">
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/20">Docs · Notion · PDF · sebats.id/kirim</span>
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/20 hidden md:block">© 2026 Sebats Editorial</span>
                    </div>
                </div>
            </section>

            <div className="bg-black text-white">
                <ClientMarquee />
            </div>
        </div>
    );
}