"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Momen Hening",
        category: "Film",
        metric: "50K+ Views",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
        title: "Visual Kampanye",
        category: "Branding",
        metric: "120K Reach",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    },
    {
        title: "Ruang Kreatif",
        category: "Fotografi",
        metric: "Viral Campaign",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
        title: "Identitas Baru",
        category: "Desain",
        metric: "Brand Refresh",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
        title: "Narasi Urban",
        category: "Dokumenter",
        metric: "50K+ Engagement",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

interface BentoGridProps {
    limit?: number;
    showViewAll?: boolean;
}

export default function BentoGrid({ limit, showViewAll = false }: BentoGridProps) {
    const items = limit ? projects.slice(0, limit) : projects;

    // Split items: first goes as featured, rest as secondary
    const featured = items[0];
    const secondary = items.slice(1);

    return (
        <section id="karya" className="border-grid-t bg-black py-20 md:py-28">
            <div className="container-main">
                {/* Section Header */}
                <div className="mb-16 border-grid-b pb-8">
                    <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        Portfolio
                    </p>
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <h2
                            className="font-display font-black uppercase text-white"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                lineHeight: "0.85",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Karya Kami
                        </h2>
                        <div className="flex items-center gap-6">
                            <p className="hidden font-body text-xs uppercase tracking-[0.15em] text-white/30 md:block">
                                Koleksi pilihan
                            </p>
                            {showViewAll && (
                                <a
                                    href="/karya"
                                    className="group inline-flex items-center gap-3 border border-primary/30 px-6 py-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-black"
                                >
                                    Lihat Semua
                                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Editorial Showcase Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 gap-[1px] bg-white/10 lg:grid-cols-2"
                >
                    {/* Featured Card — Large */}
                    {featured && (
                        <motion.article
                            variants={cardVariants}
                            className="group relative cursor-pointer overflow-hidden bg-black lg:row-span-2"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[600px]">
                                {/* Image */}
                                <img
                                    src={featured.imageUrl}
                                    alt={featured.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-60" />

                                {/* Ghost Number */}
                                <span
                                    className="absolute right-6 top-6 font-display font-black text-white/[0.04] transition-colors duration-700 group-hover:text-primary/[0.08]"
                                    style={{ fontSize: "clamp(6rem, 12vw, 14rem)", lineHeight: "0.8" }}
                                >
                                    01
                                </span>

                                {/* Category */}
                                <div className="absolute left-6 top-6 z-10">
                                    <span className="inline-block border border-primary/40 bg-black/60 px-3 py-1.5 font-body text-[9px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                                        {featured.category}
                                    </span>
                                </div>

                                {/* Content at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
                                    <div className="mb-3 h-px w-10 bg-primary transition-all duration-700 group-hover:w-16" />
                                    <h3
                                        className="font-display font-black uppercase text-white transition-colors duration-500 group-hover:text-primary"
                                        style={{
                                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                                            lineHeight: "0.9",
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {featured.title}
                                    </h3>
                                    <div className="mt-4 flex items-center gap-3">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                                            {featured.metric}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom gold accent line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />
                            </div>
                        </motion.article>
                    )}

                    {/* Secondary Cards — stacked on right, last one spans full if odd */}
                    {secondary.map((project, index) => {
                        const isLastOdd = secondary.length % 2 === 1 && index === secondary.length - 1;
                        return (
                            <motion.article
                                key={project.title}
                                variants={cardVariants}
                                className={`group relative cursor-pointer overflow-hidden bg-black ${isLastOdd ? "lg:col-span-2" : ""}`}
                            >
                                <div className={`relative w-full overflow-hidden ${isLastOdd ? "aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:min-h-[298px]" : "aspect-[16/9] sm:aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[298px]"}`}>
                                    {/* Image */}
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-60" />

                                    {/* Ghost Number */}
                                    <span
                                        className="absolute right-4 top-4 font-display font-black text-white/[0.04] transition-colors duration-700 group-hover:text-primary/[0.08] md:right-6 md:top-6"
                                        style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: "0.8" }}
                                    >
                                        {String(index + 2).padStart(2, "0")}
                                    </span>

                                    {/* Category */}
                                    <div className="absolute left-4 top-4 z-10 md:left-6 md:top-6">
                                        <span className="inline-block border border-primary/40 bg-black/60 px-3 py-1.5 font-body text-[9px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Content at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
                                        <div className="mb-2 h-px w-8 bg-primary transition-all duration-700 group-hover:w-12" />
                                        <h3 className="font-display text-lg font-black uppercase tracking-tight text-white transition-colors duration-500 group-hover:text-primary md:text-xl">
                                            {project.title}
                                        </h3>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                                            <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                                                {project.metric}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom gold accent line on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
