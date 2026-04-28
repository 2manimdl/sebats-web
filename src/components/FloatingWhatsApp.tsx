"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Variants untuk Animasi Staggered ──────────────────────────
const popupVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            staggerChildren: 0.08,
            delayChildren: 0.1
        } 
    },
    exit: { 
        opacity: 0, 
        y: 16, 
        scale: 0.95, 
        transition: { duration: 0.3, ease: "easeIn" as const } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function FloatingWhatsApp() {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [time, setTime] = useState("");

    // Tunda kemunculan awal widget
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    // Logic untuk Live Clock (WIB)
    useEffect(() => {
        if (!expanded) return;
        const updateTime = () => {
            const now = new Date();
            const wib = new Date(now.getTime() + 7 * 3600 * 1000);
            setTime(wib.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + " WIB");
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [expanded]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
            
            {/* ─── TOOLTIP BUBBLE (TICKET STYLE) ─── */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white border border-black/10 shadow-2xl w-[300px] flex flex-col origin-bottom-right overflow-hidden"
                    >
                        {/* Header: Status & Live Time */}
                        <motion.div variants={itemVariants} className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-gray-50/50">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    {/* Indikator Online sekarang warna Kuning Emas */}
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]" />
                                </span>
                                <p className="font-body text-[9px] font-bold uppercase tracking-widest text-black/60">
                                    Tim Online
                                </p>
                            </div>
                            <span className="font-body text-[9px] font-black uppercase tracking-[0.2em] text-black/30 tabular-nums">
                                {time || "SYNCING..."}
                            </span>
                        </motion.div>

                        {/* Body: Main Copy */}
                        <motion.div variants={itemVariants} className="px-6 py-6">
                            <h4 className="font-display text-3xl font-black uppercase tracking-tighter text-black leading-none mb-4">
                                Initiate<br />Project.
                            </h4>
                            <p className="font-body text-xs text-black/50 leading-relaxed mb-2">
                                Siap untuk mendobrak standar industri? Tim sebats, siap mengeksekusi visi Anda hari ini.
                            </p>
                        </motion.div>

                        {/* Footer: Action Button */}
                        <motion.div variants={itemVariants} className="p-2 border-t border-black/5">
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20tertarik%20untuk%20inisiasi%20project%20baru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between bg-[#FFD700] text-black font-display text-[10px] font-black uppercase tracking-[0.2em] px-5 py-4 w-full hover:bg-black hover:text-[#FFD700] transition-colors duration-500 overflow-hidden"
                            >
                                {/* Glare effect on hover */}
                                <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[45deg] group-hover:left-[200%] transition-all duration-700 ease-out" />
                                
                                <span className="relative z-10 flex items-center gap-3">
                                    <Zap className="h-3.5 w-3.5" />
                                    Buka WhatsApp
                                </span>
                                <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── FAB BUTTON (BRUTALIST BOX) ─── */}
            <button
                onClick={() => setExpanded(e => !e)}
                className={`relative flex h-14 w-14 items-center justify-center transition-colors duration-500 shadow-2xl border ${
                    expanded 
                    ? "bg-black text-[#FFD700] border-transparent hover:bg-white hover:text-black hover:border-black/20" 
                    : "bg-[#FFD700] text-black border-[#FFD700] hover:bg-black hover:text-[#FFD700] hover:border-black"
                }`}
                aria-label="Toggle WhatsApp Chat"
            >
                {/* Outer pulsing ring for attention when closed (Kuning) */}
                {!expanded && (
                    <span className="absolute inset-0 border border-[#FFD700] animate-ping opacity-50" />
                )}
                
                {/* Smooth icon toggle animation */}
                <motion.div
                    initial={false}
                    animate={{ rotate: expanded ? 90 : 0, scale: expanded ? 0.9 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    {expanded ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
                </motion.div>
            </button>
        </div>
    );
}