"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, PenTool, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientMarquee from "@/components/ClientMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const featuredArticle = {
    title: "Mengapa Gen Z Memilih 'Slow Living' Dibanding Hustle Culture",
    excerpt: "Sebuah investigasi mendalam tentang shifting mindset generasi muda Indonesia yang mulai mempertanyakan budaya kerja keras tanpa batas.",
    category: "Opini",
    author: "Sinta Maharani",
    timeAgo: "1 hari lalu",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
};

const articles = [
    {
        title: "5 Brand Lokal yang Berhasil Rebrand untuk Gen Z",
        excerpt: "Bagaimana brand-brand Indonesia berhasil memikat hati generasi muda dengan pendekatan yang autentik.",
        category: "Branding",
        author: "Raka Adriansyah",
        timeAgo: "3 jam lalu",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80",
    },
    {
        title: "Behind The Scene: Kampanye 'Momen Hening' untuk Netflix",
        excerpt: "Cerita di balik proses kreatif kampanye yang meraih 51K+ engagement dalam seminggu.",
        category: "Case Study",
        author: "Dimas Pratama",
        timeAgo: "5 jam lalu",
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    },
    {
        title: "Mental Health di Industri Kreatif: Stigma atau Strategi?",
        excerpt: "Diskusi terbuka soal burnout dan bagaimana agency-agency mulai berubah.",
        category: "Opini",
        author: "Ayu Lestari",
        timeAgo: "1 hari lalu",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80",
    },
    {
        title: "Tutorial: Bikin Visual Konten yang Bikin Orang Berhenti Scroll",
        excerpt: "Step-by-step guide dari tim creative sebats untuk bikin thumb-stopping content.",
        category: "Tutorial",
        author: "Tim Creative",
        timeAgo: "2 hari lalu",
        imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    },
    {
        title: "Kenapa 'Authentic' Jadi Buzzword yang Paling Overused di 2025",
        excerpt: "Analisis kritis soal penggunaan kata 'authentic' yang ironisnya jadi tidak autentik.",
        category: "Opini",
        author: "Raka Adriansyah",
        timeAgo: "3 hari lalu",
        imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    },
    {
        title: "Rehat Sejenak: Playlist Kerja dari Tim sebats",
        excerpt: "Koleksi musik yang menemani proses kreatif kami, dari lo-fi sampai indie Indonesia.",
        category: "Lifestyle",
        author: "Ayu Lestari",
        timeAgo: "4 hari lalu",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    },
];

export default function NewsPage() {
    const heroSectionRef = useRef<HTMLElement>(null);
    const featuredSectionRef = useRef<HTMLElement>(null);
    const heroRef = useRef<HTMLHeadingElement>(null);
    const featuredImgRef = useRef<HTMLDivElement>(null);
    const featuredTextRef = useRef<HTMLDivElement>(null);
    const editorialLabelRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const split = new SplitType(heroRef.current!, { types: "chars" });

        let ctx = gsap.context(() => {
            // Set initial states
            if (split.chars) {
                gsap.set(split.chars, {
                    y: 100,
                    opacity: 0,
                    rotateX: -90,
                    transformOrigin: "50% 50% -50px"
                });
            }
            gsap.set(editorialLabelRef.current, { y: 30, opacity: 0 });
            gsap.set(featuredImgRef.current, { y: 60, opacity: 0, scale: 0.95 });
            gsap.set(featuredTextRef.current, { x: 30, opacity: 0 });

            // Hero Animation Timeline
            const tlHero = gsap.timeline({
                scrollTrigger: {
                    trigger: heroSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    // play, reverse (when scrolling down past it), play (when scrolling back up into it), reverse (when scrolling up past it)
                    toggleActions: "play reverse play reverse"
                }
            });

            if (split.chars) {
                tlHero.to(split.chars, {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.05,
                    duration: 1.2,
                    ease: "power4.out"
                }, 0.1);
            }
            tlHero.to(editorialLabelRef.current, {
                y: 0, opacity: 1, duration: 1.2, ease: "power3.out"
            }, 0.8);

            // Featured Article Animation Timeline
            const tlFeatured = gsap.timeline({
                scrollTrigger: {
                    trigger: featuredSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            tlFeatured.to(featuredImgRef.current, {
                y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out"
            }, 0);
            tlFeatured.to(featuredTextRef.current, {
                x: 0, opacity: 1, duration: 1.2, ease: "power3.out"
            }, 0.3);

        }); // scoping using heroSectionRef as root is okay but we'll omit scope to access all refs

        return () => {
            ctx.revert();
            split.revert();
        };
    }, []);

    return (
        <div className="grain-overlay">
            <Navbar />

            {/* Hero */}
            <section ref={heroSectionRef} className="flex min-h-[40vh] items-end bg-white cretivox-grid pb-12 pt-32 md:pb-16">
                <div className="container-main">
                    <p ref={editorialLabelRef} className="mb-4 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <Newspaper className="h-3 w-3" /> Editorial
                    </p>
                    <h1 ref={heroRef} className="font-display font-black uppercase text-black" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        News &<br /><span className="text-primary">Stories.</span>
                    </h1>
                </div>
            </section>

            {/* Featured Article */}
            <section ref={featuredSectionRef} className="border-grid-t bg-white">
                <div className="container-main py-16 md:py-24 lg:py-32">
                    <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-24 md:grid-cols-2 items-center">
                        <div ref={featuredImgRef} className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[500px] lg:min-h-[650px] w-full">
                            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0" />
                        </div>
                        <div ref={featuredTextRef} className="flex flex-col justify-center lg:pr-12">
                            <div className="mb-6 md:mb-10 flex flex-wrap items-center gap-3">
                                <span className="inline-block bg-primary px-3 py-1 font-body text-[9px] font-bold uppercase tracking-[0.25em] text-black">
                                    {featuredArticle.category}
                                </span>
                                <span className="text-black/20">•</span>
                                <span className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-black/40">{featuredArticle.author}</span>
                                <span className="text-black/20">•</span>
                                <span className="inline-flex items-center gap-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                                    <Clock className="h-3 w-3 -mt-0.5" /> {featuredArticle.timeAgo}
                                </span>
                            </div>
                            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black" style={{ lineHeight: "0.85" }}>
                                {featuredArticle.title}
                            </h2>
                            <p className="mt-8 md:mt-10 font-body text-base lg:text-lg leading-relaxed text-black/60 max-w-xl">
                                {featuredArticle.excerpt}
                            </p>

                            {/* Pure Typographic CTA */}
                            <a href="#" className="group mt-12 inline-flex items-center gap-4 font-body text-[11px] font-black uppercase tracking-[0.3em] text-black self-start pb-1">
                                <span className="relative pb-2 overflow-hidden">
                                    Baca Selengkapnya
                                    {/* Surgical thin underline */}
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
                                </span>
                                {/* Minimalist arrow */}
                                <ArrowRight className="h-4 w-4 text-black/40 group-hover:text-black transition-all duration-500 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Grid */}
            <section className="border-grid-t bg-white py-20">
                <div className="container-main">
                    <div className="mb-14 border-grid-b pb-6">
                        <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">Latest</p>
                        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-black md:text-5xl">Artikel</h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1, margin: "50px" }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                        className="grid grid-cols-1 gap-0 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {articles.map((article) => (
                            <motion.article
                                key={article.title}
                                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                                className="group border-b border-r border-black/10"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img src={article.imageUrl} alt={article.title} className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center gap-1 bg-white/90 px-2 py-1 backdrop-blur-sm">
                                            <Tag className="h-2.5 w-2.5 text-primary" />
                                            <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-black">{article.category}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="mb-3 flex items-center gap-2">
                                        <span className="font-body text-[10px] text-muted">{article.author}</span>
                                        <span className="text-black/20">•</span>
                                        <span className="inline-flex items-center gap-1 font-body text-[10px] text-muted">
                                            <Clock className="h-2.5 w-2.5" /> {article.timeAgo}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-sm font-black uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-primary">{article.title}</h3>
                                    <p className="mt-2 font-body text-xs leading-relaxed text-muted line-clamp-2">{article.excerpt}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* UGC CTA — "Write In Here" */}
            <section className="border-grid-t bg-black py-20 text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="container-main text-center"
                >
                    <PenTool className="mx-auto mb-6 h-8 w-8 text-primary" />
                    <h2 className="font-display text-4xl font-black uppercase text-white md:text-6xl" style={{ lineHeight: "0.85" }}>
                        Sambat Disini.
                    </h2>
                    <p className="mx-auto mt-6 max-w-md font-body text-sm leading-relaxed text-white/50 md:text-base">
                        Punya cerita, opini, atau curhat soal industri kreatif? Kirim tulisanmu ke kami. Minimum 500 kata, maksimum tanpa batas.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <a href="mailto:editorial@sebats.id" className="group inline-flex items-center gap-2 border-2 border-primary px-10 py-5 font-body text-[11px] font-bold uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-black">
                            <PenTool className="h-4 w-4" />
                            Kirim Tulisan
                        </a>
                        <div className="flex flex-col items-start gap-1">
                            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Format</span>
                            <span className="font-body text-xs text-white/50">Google Docs / Notion / PDF</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            <ClientMarquee />
            <Footer />
        </div>
    );
}
