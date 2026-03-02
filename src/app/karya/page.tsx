"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesGrid from "@/components/ServicesGrid";

const caseStudies = [
    {
        title: "Momen Hening",
        client: "Netflix Indonesia",
        category: "Film",
        metric: "51,260",
        metricLabel: "Engagement",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        span: "col-span-1 sm:row-span-2",
        aspect: "aspect-[3/5]",
    },
    {
        title: "Visual Kampanye Akhir Tahun",
        client: "Tokopedia",
        category: "Branding",
        metric: "127,840",
        metricLabel: "Reach",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        span: "col-span-1",
        aspect: "aspect-[4/3]",
    },
    {
        title: "Ruang Kreatif Gen Z",
        client: "Gojek",
        category: "Fotografi",
        metric: "89,120",
        metricLabel: "Impressions",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        span: "col-span-1",
        aspect: "aspect-[4/3]",
    },
    {
        title: "Identitas Baru Bangsa",
        client: "Samsung",
        category: "Desain",
        metric: "12,450",
        metricLabel: "Conversions",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        span: "col-span-1",
        aspect: "aspect-[4/3]",
    },
    {
        title: "Narasi Urban Kolektif",
        client: "Spotify",
        category: "Dokumenter",
        metric: "203,700",
        metricLabel: "Streams",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        span: "col-span-1",
        aspect: "aspect-[4/3]",
    },
    {
        title: "Healing Campaign",
        client: "Grab",
        category: "Campaign",
        metric: "74,300",
        metricLabel: "Engagement",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
        span: "col-span-1",
        aspect: "aspect-[4/3]",
    },
];

export default function KaryaPage() {
    return (
        <div className="grain-overlay">

            {/* Typographic Hero */}
            <section className="flex min-h-[50vh] items-end bg-white cretivox-grid pb-12 pt-32 md:pb-16">
                <div className="container-main">
                    <p className="mb-4 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary md:text-xs">
                        <TrendingUp className="h-3 w-3" /> Arsip
                    </p>
                    <h1 className="font-display font-black uppercase text-black" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        Karya &<br /><span className="text-primary">Layanan.</span>
                    </h1>
                    <div className="mt-8 h-px w-16 bg-primary" />
                    <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-muted md:text-base">
                        Setiap proyek adalah cerita. Setiap angka adalah bukti nyata impact yang kami ciptakan bersama partner kami.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid with Precise Metrics */}
            <section className="border-grid-t bg-white py-20">
                <div className="container-main">
                    <div className="mb-14 border-grid-b pb-6">
                        <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">Case Studies</p>
                        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-black md:text-5xl">Portfolio</h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid auto-rows-auto grid-cols-1 gap-0 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {caseStudies.map((project, index) => (
                            <motion.article
                                key={project.title}
                                variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                                className={`group relative border-b border-r border-black/10 ${index === 0 ? "sm:row-span-2" : ""}`}
                            >
                                <div className={`relative w-full overflow-hidden ${index === 0 ? "aspect-[3/5]" : "aspect-[4/3]"}`}>
                                    <img src={project.imageUrl} alt={project.title} className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="bg-primary px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-black">{project.category}</span>
                                    </div>

                                    {/* Precise Metrics Reveal */}
                                    <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <div className="flex items-center gap-2 border border-white/20 bg-black/80 px-4 py-2 backdrop-blur-md">
                                            <TrendingUp className="h-3 w-3 text-primary" />
                                            <div>
                                                <p className="font-display text-lg font-black text-white" style={{ lineHeight: "1" }}>{project.metric}</p>
                                                <p className="font-body text-[9px] uppercase tracking-[0.2em] text-white/50">{project.metricLabel}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Client name overlay */}
                                    <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">for {project.client}</p>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between border-t border-black/10 px-4 py-3">
                                    <h3 className="font-display text-xs font-bold uppercase tracking-wide text-black">{project.title}</h3>
                                    <span className="inline-flex items-center gap-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                        View <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <ServicesGrid />

            <ClientMarquee />
        </div>
    );
}
