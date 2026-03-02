"use client";

import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, PenTool, Tag } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";

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
    return (
        <div className="grain-overlay">

            {/* Hero */}
            <section className="flex min-h-[40vh] items-end bg-white cretivox-grid pb-12 pt-32 md:pb-16">
                <div className="container-main">
                    <p className="mb-4 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <Newspaper className="h-3 w-3" /> Editorial
                    </p>
                    <h1 className="font-display font-black uppercase text-black" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        News &<br /><span className="text-primary">Stories.</span>
                    </h1>
                </div>
            </section>

            {/* Featured Article */}
            <section className="border-grid-t bg-white">
                <div className="container-main py-12 md:py-0">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[500px]">
                            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block bg-primary px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-black">{featuredArticle.category}</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center border border-t-0 border-black/10 p-8 md:border-t md:border-l-0 md:p-14">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{featuredArticle.author}</span>
                                <span className="text-black/20">•</span>
                                <span className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted">
                                    <Clock className="h-3 w-3" /> {featuredArticle.timeAgo}
                                </span>
                            </div>
                            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-black md:text-3xl" style={{ lineHeight: "0.9" }}>{featuredArticle.title}</h2>
                            <p className="mt-4 font-body text-sm leading-relaxed text-muted">{featuredArticle.excerpt}</p>
                            <a href="#" className="group mt-6 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Baca Selengkapnya <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
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
                        viewport={{ once: true, margin: "-60px" }}
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
            <section className="border-grid-t bg-black py-20 text-white">
                <div className="container-main text-center">
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
                </div>
            </section>

            <ClientMarquee />
        </div>
    );
}
