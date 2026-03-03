"use client";

<<<<<<< Updated upstream
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, PenTool, Tag } from "lucide-react";
=======
import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Clock, ArrowRight, PenTool, TrendingUp, User, ChevronDown, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
>>>>>>> Stashed changes
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
    date: "02 Mar 2025",
    timeAgo: "1 hari lalu",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
};

const trendingArticles = [
    { title: "5 Brand Lokal yang Berhasil Rebrand untuk Gen Z", category: "Branding", timeAgo: "3 jam" },
    { title: "Kenapa 'Authentic' Jadi Buzzword yang Paling Overused di 2025", category: "Opini", timeAgo: "3 hari" },
    { title: "Behind The Scene: Kampanye 'Momen Hening' untuk Netflix", category: "Case Study", timeAgo: "5 jam" },
    { title: "Tutorial: Bikin Visual Konten yang Bikin Orang Berhenti Scroll", category: "Tutorial", timeAgo: "2 hari" },
];

const allArticles = [
    {
        title: "5 Brand Lokal yang Berhasil Rebrand untuk Gen Z",
        excerpt: "Bagaimana brand-brand Indonesia berhasil memikat hati generasi muda dengan pendekatan yang autentik.",
        category: "Branding",
        author: "Raka Adriansyah",
        date: "02 Mar 2025",
        timeAgo: "3 jam lalu",
        readTime: "4 min",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80",
    },
    {
        title: "Behind The Scene: Kampanye 'Momen Hening' untuk Netflix",
        excerpt: "Cerita di balik proses kreatif kampanye yang meraih 51K+ engagement dalam seminggu.",
        category: "Case Study",
        author: "Dimas Pratama",
        date: "02 Mar 2025",
        timeAgo: "5 jam lalu",
        readTime: "7 min",
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    },
    {
        title: "Mental Health di Industri Kreatif: Stigma atau Strategi?",
        excerpt: "Diskusi terbuka soal burnout dan bagaimana agency-agency mulai berubah.",
        category: "Burnout",
        author: "Ayu Lestari",
        date: "01 Mar 2025",
        timeAgo: "1 hari lalu",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80",
    },
    {
        title: "Tutorial: Bikin Visual Konten yang Bikin Orang Berhenti Scroll",
        excerpt: "Step-by-step guide dari tim creative sebats untuk bikin thumb-stopping content.",
        category: "Tutorial",
        author: "Tim Creative",
        date: "01 Mar 2025",
        timeAgo: "2 hari lalu",
        readTime: "8 min",
        imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    },
    {
        title: "Kenapa 'Authentic' Jadi Buzzword yang Paling Overused di 2025",
        excerpt: "Analisis kritis soal penggunaan kata 'authentic' yang ironisnya jadi tidak autentik.",
        category: "Opini",
        author: "Raka Adriansyah",
        date: "28 Feb 2025",
        timeAgo: "3 hari lalu",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    },
    {
        title: "Rehat Sejenak: Playlist Kerja dari Tim sebats",
        excerpt: "Koleksi musik yang menemani proses kreatif kami, dari lo-fi sampai indie Indonesia.",
        category: "Lifestyle",
        author: "Ayu Lestari",
        date: "27 Feb 2025",
        timeAgo: "4 hari lalu",
        readTime: "3 min",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    },
    {
        title: "Overthinking sebagai Superpower: Perspektif Tim Kreatif",
        excerpt: "Bagaimana over-analyzing justru jadi aset ketika dikelola dengan benar dalam proses desain.",
        category: "Opini",
        author: "Sinta Maharani",
        date: "26 Feb 2025",
        timeAgo: "5 hari lalu",
        readTime: "6 min",
        imageUrl: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&q=80",
    },
    {
        title: "Panduan Lengkap Brand Voice: Dari Tone sampai Persona",
        excerpt: "Kenapa banyak brand gagal karena tidak konsisten dalam berkomunikasi dengan audiensnya.",
        category: "Branding",
        author: "Dimas Pratama",
        date: "25 Feb 2025",
        timeAgo: "6 hari lalu",
        readTime: "9 min",
        imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
    },
    {
        title: "Case Study: Viral Campaign Tanpa Budget Iklan Besar",
        excerpt: "Analisis campaign dari brand-brand lokal yang berhasil viral hanya dengan kreativitas murni.",
        category: "Case Study",
        author: "Tim Riset",
        date: "24 Feb 2025",
        timeAgo: "1 minggu lalu",
        readTime: "10 min",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
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

// ─── Category Badge ────────────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
    Opini: "bg-purple-50 text-purple-600 border-purple-200",
    Branding: "bg-blue-50 text-blue-600 border-blue-200",
    "Case Study": "bg-emerald-50 text-emerald-600 border-emerald-200",
    Tutorial: "bg-orange-50 text-orange-600 border-orange-200",
    Lifestyle: "bg-pink-50 text-pink-600 border-pink-200",
    Burnout: "bg-red-50 text-red-500 border-red-200",
};

function CategoryBadge({ cat }: { cat: string }) {
    return (
        <span className={`inline-block font-body text-[8px] font-black uppercase tracking-[0.25em] px-2 py-0.5 border ${categoryColors[cat] ?? "bg-primary/10 text-primary border-primary/20"}`}>
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

            gsap.to(featuredImgRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: featuredSectionRef.current, start: "top 70%", toggleActions: "play none none reverse" } });
            gsap.to(featuredTextRef.current, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: featuredSectionRef.current, start: "top 65%", toggleActions: "play none none reverse" } });

            const imgInner = featuredImgRef.current?.querySelector("img");
            if (imgInner) {
                gsap.to(imgInner, { yPercent: -10, ease: "none", scrollTrigger: { trigger: featuredSectionRef.current, start: "top bottom", end: "bottom top", scrub: true } });
            }

            if (articleGridRef.current) {
                const cards = articleGridRef.current.querySelectorAll("article");
                gsap.set(cards, { y: 40, opacity: 0 });
                gsap.to(cards, { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: articleGridRef.current, start: "top 75%", toggleActions: "play none none reverse" } });
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
<<<<<<< Updated upstream
        <div className="grain-overlay">
=======
        <div className="bg-white">
            <Navbar />
>>>>>>> Stashed changes

            {/* ── HERO ──────────────────────────────────────────── */}
            <section ref={heroSectionRef} className="min-h-[52vh] flex items-end pt-36 md:pt-40 pb-16 md:pb-20 border-b border-black/5 bg-white">
                <div className="container-main w-full">
                    <p ref={editorialLabelRef} className="mb-6 flex items-center gap-3 font-body text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                        <Newspaper className="h-3 w-3" /> Editorial Journal
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h1 ref={heroRef} className="font-display font-black uppercase text-black text-5xl md:text-7xl lg:text-8xl" style={{ lineHeight: "0.88", letterSpacing: "-0.03em" }}>
                            News &<br /><span className="text-primary">Stories.</span>
                        </h1>
                        {/* Hero meta stats */}
                        <div className="flex items-start gap-8 lg:pb-2">
                            <div>
                                <p className="font-display text-2xl font-black text-black tracking-tighter">{allArticles.length}+</p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/30 mt-0.5">Artikel</p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-black text-black tracking-tighter">{CATEGORIES.length - 1}</p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/30 mt-0.5">Kategori</p>
                            </div>
                            <div>
                                <p className="font-display text-2xl font-black text-primary tracking-tighter">Live</p>
                                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-black/30 mt-0.5">Editorial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ARTICLE ──────────────────────────────── */}
            <section ref={featuredSectionRef} className="bg-white border-b border-black/5">
                <div className="container-main py-12 lg:py-16">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Pilihan Editor</span>
                        <span className="flex-1 h-px bg-black/5" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
                        <div ref={featuredImgRef} className="relative aspect-[3/2] overflow-hidden bg-black shrink-0 group cursor-pointer">
                            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div ref={featuredTextRef} className="flex flex-col justify-between py-1">
                            <div>
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <CategoryBadge cat={featuredArticle.category} />
                                    <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black/35 flex items-center gap-1.5">
                                        <User size={9} /> {featuredArticle.author}
                                    </span>
                                    <span className="font-body text-[9px] text-black/25 tracking-wider">{featuredArticle.date}</span>
                                    <span className="flex items-center gap-1 text-black/25 font-body text-[9px] ml-auto">
                                        <Clock size={9} /> {featuredArticle.readTime} read
                                    </span>
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-4 text-black">
                                    {featuredArticle.title}
                                </h2>
                                <p className="font-body text-sm text-black/50 mb-6 leading-relaxed max-w-lg">{featuredArticle.excerpt}</p>
                            </div>
                            <a href="#" className="group inline-flex items-center gap-2 font-display text-[10px] font-black uppercase tracking-[0.3em] text-black pb-1 border-b border-black/10 hover:border-primary hover:text-primary transition-all self-start">
                                Baca Selengkapnya <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRENDING NOW ──────────────────────────────────── */}
            <section className="bg-black text-white border-b border-white/5">
                <div className="container-main py-8">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="h-3.5 w-3.5 text-primary" />
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.45em] text-primary">Trending Sekarang</span>
                        <span className="flex-1 h-px bg-white/5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                        {trendingArticles.map((t, i) => (
                            <a key={i} href="#"
                                className="group flex flex-col gap-3 px-0 sm:px-6 py-4 sm:py-0 first:pl-0 last:pr-0 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <span className="font-display text-3xl font-black text-white/5 group-hover:text-white/10 transition-colors">0{i + 1}</span>
                                    <CategoryBadge cat={t.category} />
                                </div>
                                <p className="font-display text-sm font-black uppercase tracking-tight text-white/70 group-hover:text-white transition-colors leading-tight line-clamp-2">
                                    {t.title}
                                </p>
                                <span className="font-body text-[8px] uppercase tracking-[0.3em] text-white/20">{t.timeAgo} lalu</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ARTICLE GRID ──────────────────────────────────── */}
            <section className="bg-white py-16">
                <div className="container-main">
                    {/* Header + Category Filter */}
                    <div className="mb-8 flex flex-col gap-5">
                        <div className="flex items-center gap-4 border-b-2 border-black pb-4">
                            <span className="font-display text-sm font-black uppercase tracking-widest">Artikel Terbaru</span>
                            <span className="flex-1" />
                            <Filter className="h-3 w-3 text-black/20" />
                            <span className="font-body text-[9px] uppercase tracking-[0.35em] text-black/25 hidden md:block">2025</span>
                        </div>
                        {/* Category filter tabs */}
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`font-body text-[9px] font-black uppercase tracking-[0.25em] px-4 py-2 border transition-all duration-200 ${activeCategory === cat
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-black/40 border-black/10 hover:border-black/30 hover:text-black/70"
                                        }`}
                                >
                                    {cat}
                                    {cat !== "Semua" && (
                                        <span className="ml-1.5 opacity-50">{allArticles.filter(a => a.category === cat).length}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Article Grid */}
                    <div ref={articleGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
                        <AnimatePresence mode="popLayout">
                            {visibleArticles.map((article, idx) => (
                                <motion.article
                                    key={`${article.title}-${idx}`}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/2] overflow-hidden bg-black/5 mb-5">
                                        <img src={article.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={article.title} />
                                    </div>
                                    {/* Meta top */}
                                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                                        <CategoryBadge cat={article.category} />
                                        <span className="font-body text-[8px] text-black/25 tracking-wider">{article.date}</span>
                                        <span className="flex items-center gap-1 text-black/20 font-body text-[8px] ml-auto">
                                            <Clock size={8} /> {article.readTime}
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <h3 className="font-display text-lg font-black uppercase leading-tight text-black group-hover:text-primary transition-colors duration-300 mb-2">
                                        {article.title}
                                    </h3>
                                    {/* Excerpt */}
                                    <p className="text-sm text-black/45 line-clamp-2 leading-relaxed mb-4">{article.excerpt}</p>
                                    {/* Bottom: author + arrow */}
                                    <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                                        <User size={9} className="text-black/20 shrink-0" />
                                        <span className="font-body text-[9px] uppercase tracking-widest text-black/35 font-bold">{article.author}</span>
                                        <ArrowRight size={11} className="ml-auto text-black/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>

                        {/* Empty state when filter returns nothing */}
                        {filteredArticles.length === 0 && (
                            <div className="col-span-3 py-20 text-center">
                                <p className="font-body text-sm text-black/30 uppercase tracking-widest">Belum ada artikel di kategori ini</p>
                            </div>
                        )}
                    </div>

                    {/* ── Load More ─────────────────────────────────── */}
                    {hasMore && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setVisibleCount(v => v + 3)}
                                className="group inline-flex items-center gap-3 font-display text-[10px] font-black uppercase tracking-[0.3em] text-black border border-black/15 px-8 py-4 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                            >
                                <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                                Muat Lebih Banyak
                                <span className="text-black/30 group-hover:text-white/40">({filteredArticles.length - visibleCount} tersisa)</span>
                            </button>
                        </div>
                    )}
                    {!hasMore && filteredArticles.length > 0 && (
                        <p className="mt-12 text-center font-body text-[9px] uppercase tracking-[0.4em] text-black/20">
                            ─── Semua artikel telah ditampilkan ───
                        </p>
                    )}
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────── */}
            <section className="bg-black text-white border-grid-t overflow-hidden">
                <div className="container-main">
                    <div className="flex items-center justify-between py-5 border-b border-white/10">
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.5em] text-primary flex items-center gap-2">
                            <PenTool className="h-3 w-3" /> Kirim Tulisan
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/20">editorial@sebats.id</span>
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
                                <span ref={counterRef} className="font-display font-black text-white/[0.07]" style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{counterVal}</span>
                                <span className="font-display text-4xl font-black text-primary uppercase" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>Kata.</span>
                            </div>
                            <p className="font-body text-xs uppercase tracking-[0.25em] text-white/25 max-w-[200px] leading-relaxed">Minimum kata yang kami tunggu dari tulisanmu.</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-display font-black uppercase text-white leading-none mb-7" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}>
                                Sambat<br />Disini.
                            </h2>
                            <p className="font-body text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
                                Keresahanmu soal industri kreatif layak dibaca orang lain. Kirim opini, case study, atau curhatanmu.
                            </p>
                            <div ref={tagsRef} className="flex flex-wrap gap-2.5 mb-10">
                                {["Burnout", "Hustle Culture", "Branding", "Opini", "Case Study", "Lifestyle"].map((tag) => (
                                    <span key={tag} className="font-body text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 text-white/25 hover:border-primary/30 hover:text-primary/50 transition-colors cursor-default">{tag}</span>
                                ))}
                            </div>
                            <MagneticButton href="mailto:editorial@sebats.id" className="group self-start inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[10px] font-black uppercase tracking-[0.25em] text-black hover:bg-white transition-colors duration-300">
                                <PenTool className="h-4 w-4" />
                                Kirim Tulisan
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                        </div>
                    </motion.div>
                    <div className="border-t border-white/5 py-5 flex items-center justify-between">
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/15">Docs · Notion · PDF · sebats.id/kirim</span>
                        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/15 hidden md:block">© 2025 Sebats Editorial</span>
                    </div>
                </div>
            </section>

            <ClientMarquee />
        </div>
    );
}