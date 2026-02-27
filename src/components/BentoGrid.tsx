"use client";

import { motion } from "framer-motion";

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
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

interface BentoGridProps {
    /** Show only the first N items (for homepage featured view) */
    limit?: number;
    /** Show "Lihat Semua" link */
    showViewAll?: boolean;
}

export default function BentoGrid({ limit, showViewAll = false }: BentoGridProps) {
    const items = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="karya" className="border-grid-t bg-black py-20">
            <div className="container-main">
                {/* Section Header */}
                <div className="mb-14 border-grid-b pb-6">
                    <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
                        Portfolio
                    </p>
                    <div className="flex items-end justify-between">
                        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                            Karya Kami
                        </h2>
                        <div className="flex items-center gap-4">
                            <p className="hidden font-body text-xs uppercase tracking-[0.2em] text-white/50 md:block">
                                Koleksi pilihan
                            </p>
                            {showViewAll && (
                                <a
                                    href="/karya"
                                    className="group inline-flex items-center gap-2 border border-white/20 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                                >
                                    Lihat Semua
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid auto-rows-auto grid-cols-1 gap-0 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {items.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            className={`group cursor-pointer relative border-b border-r border-white/15 ${index === 0 ? "sm:row-span-2" : ""}`}
                        >
                            {/* Image */}
                            <div className={`relative w-full overflow-hidden ${index === 0 ? "aspect-[3/5]" : "aspect-[4/3]"}`}>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="bg-primary px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-black">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Metrics Reveal Badge */}
                                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="flex items-center gap-1.5 border border-white/30 bg-black/80 px-3 py-1.5 backdrop-blur-md">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                                            {project.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="flex items-center justify-between border-t border-white/15 bg-black px-4 py-3 transition-colors duration-300 group-hover:bg-white/5">
                                <h3 className="font-display text-xs font-bold uppercase tracking-wide text-white">
                                    {project.title}
                                </h3>
                                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                    {project.category}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
