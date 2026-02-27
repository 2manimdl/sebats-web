"use client";

import { Camera, Palette, Film, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    { number: "01", title: "Photography", description: "Visual storytelling yang menangkap momen autentik dan raw.", icon: Camera },
    { number: "02", title: "Branding", description: "Identitas visual yang bold, berani, dan nempel di kepala.", icon: Palette },
    { number: "03", title: "Film", description: "Dokumenter dan konten sinematik yang relate sama Gen Z.", icon: Film },
    { number: "04", title: "Campaign", description: "Kampanye kreatif yang bikin orang berhenti scroll.", icon: Zap },
];

export default function ServicesGrid() {
    return (
        <section className="border-grid-t bg-black py-16 md:py-24">
            <div className="container-main">
                <div className="mb-12 flex flex-col gap-4 border-grid-b pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">What We Do</p>
                        <h2 className="font-display font-black uppercase text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", lineHeight: "0.85" }}>Layanan Kami</h2>
                    </div>
                    <p className="max-w-xs font-body text-xs uppercase tracking-[0.15em] text-white/40">Empat pilar kreativitas yang bikin brand lo standout.</p>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <motion.div key={service.number} variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }} className="group relative border-b border-r border-white/10 p-6 transition-all duration-500 hover:bg-white/5 md:p-8">
                            <span className="font-display text-5xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.08] md:text-6xl">{service.number}</span>
                            <div className="mb-4 mt-2">
                                <service.icon className="h-8 w-8 text-white/20 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
                            </div>
                            <h3 className="mb-3 font-display text-lg font-black uppercase tracking-tight text-white transition-colors duration-500 group-hover:text-primary">{service.title}</h3>
                            <div className="mb-4 h-px w-8 bg-primary transition-all duration-500 group-hover:w-12" />
                            <p className="font-body text-xs leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/60">{service.description}</p>
                            <div className="mt-6 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <span className="inline-flex items-center gap-1 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    Explore <ArrowRight className="h-3 w-3" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
