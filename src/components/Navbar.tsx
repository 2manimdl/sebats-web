"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Karya", href: "/karya" },
    { name: "News", href: "/news" },
    { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            {/* ─── FLOATING HEADER (FORCED SPACING FROM EDGES) ─── */}
            <header className="fixed top-6 left-6 right-6 md:top-10 md:left-10 md:right-10 lg:top-12 lg:left-14 lg:right-14 z-[100] pointer-events-none mix-blend-difference text-white flex items-start justify-between">
                {/* Brand Logo */}
                <Link href="/" className="pointer-events-auto font-display text-3xl md:text-4xl font-black tracking-wide hover:opacity-70 transition-opacity">
                    sebat's
                </Link>

                {/* Hamburger Button (Icon Only) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto group"
                    aria-label="Open Menu"
                >
                    <div className="h-14 w-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                        <Menu className="h-6 w-6" />
                    </div>
                </button>
            </header>

            {/* ─── FULLSCREEN OVERLAY MENU ─── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[200] bg-black text-white flex flex-col h-[100dvh]"
                    >
                        {/* Overlay Header (Matches Floating Header Spacing) */}
                        <div className="absolute top-6 left-6 right-6 md:top-10 md:left-10 md:right-10 lg:top-12 lg:left-14 lg:right-14 flex items-start justify-between">
                            <Link href="/" onClick={() => setIsOpen(false)} className="font-display text-3xl md:text-4xl font-black tracking-wide hover:text-primary transition-colors">
                                sebat's
                            </Link>

                            {/* Close Button (Icon Only) */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="group"
                                aria-label="Close Menu"
                            >
                                <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-colors duration-300">
                                    <X className="h-6 w-6" />
                                </div>
                            </button>
                        </div>

                        {/* Main Menu Links & Horizontal Slogan */}
                        <div className="flex flex-1 w-full items-center justify-between px-6 md:px-12 lg:px-20 mt-24">

                            {/* Left: Nav Links */}
                            <div className="flex flex-col justify-center">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden py-1 md:py-2">
                                        <motion.div
                                            initial={{ y: "110%", rotate: 2 }}
                                            animate={{ y: "0%", rotate: 0 }}
                                            exit={{ y: "110%", rotate: -2 }}
                                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (i * 0.08) }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-center gap-4 md:gap-6 font-display text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter text-white hover:text-primary transition-colors inline-block"
                                            >
                                                <span className="text-sm md:text-xl font-body font-bold text-white/20 tracking-widest -translate-y-3 md:-translate-y-8 group-hover:text-primary/50 transition-colors">0{i + 1}</span>
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Horizontal Slogan */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="hidden lg:flex flex-col gap-2 font-display text-5xl xl:text-[7rem] font-black uppercase leading-[0.85] text-right"
                            >
                                <span className="text-white">AMBIL JEDA,</span>
                                <span className="text-primary">SEBATS DULU.</span>
                            </motion.div>
                        </div>

                        {/* Footer Menu inside Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-6 pb-6 md:pb-10 mt-auto"
                        >
                            <div className="flex gap-6 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="mailto:hello@sebats.id" className="hover:text-primary transition-colors">hello@sebats.id</a>
                            </div>
                            <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/30">
                                © 2026 sebats, Creative Media Studio.
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}