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
    const [scrolled, setScrolled] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Detect scroll to adjust navbar bg
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* ─── FLOATING HEADER ─── */}
            <header
                className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500 ${scrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-10 lg:px-14 py-4"
                        : "px-6 md:px-10 lg:px-14 pt-6 md:pt-10 lg:pt-12 pb-0"
                    }`}
            >
                {/* Brand Logo */}
                <Link
                    href="/"
                    className="font-display text-3xl md:text-4xl font-black tracking-wide text-white hover:text-primary transition-colors duration-300"
                >
                    sebat&apos;s
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="group text-white"
                    aria-label="Open Menu"
                >
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                        <Menu className="h-5 w-5 md:h-6 md:w-6" />
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
                        className="fixed inset-0 z-[200] bg-black text-white flex flex-col h-[100dvh] overflow-hidden"
                    >
                        {/* Overlay Header */}
                        <div className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6 md:pt-10 lg:pt-12">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="font-display text-3xl md:text-4xl font-black tracking-wide text-white hover:text-primary transition-colors"
                            >
                                sebat&apos;s
                            </Link>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="group text-white"
                                aria-label="Close Menu"
                            >
                                <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-colors duration-300">
                                    <X className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                            </button>
                        </div>

                        {/* Main Menu Links & Horizontal Slogan */}
                        <div className="flex flex-1 w-full items-center justify-between px-6 md:px-10 lg:px-20 overflow-hidden">

                            {/* Left: Nav Links */}
                            <div className="flex flex-col justify-center">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden py-0.5 md:py-2">
                                        <motion.div
                                            initial={{ y: "110%", rotate: 2 }}
                                            animate={{ y: "0%", rotate: 0 }}
                                            exit={{ y: "110%", rotate: -2 }}
                                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (i * 0.08) }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-center gap-3 md:gap-6 font-display font-black uppercase tracking-tighter text-white hover:text-primary transition-colors inline-block"
                                                style={{ fontSize: "clamp(2.25rem, 8vw, 7rem)", lineHeight: 1.0 }}
                                            >
                                                <span
                                                    className="font-body font-bold text-white/20 tracking-widest group-hover:text-primary/50 transition-colors"
                                                    style={{ fontSize: "clamp(0.6rem, 1.5vw, 1.25rem)", transform: "translateY(-30%)" }}
                                                >
                                                    0{i + 1}
                                                </span>
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Horizontal Slogan (desktop only) */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="hidden lg:flex flex-col gap-2 font-display font-black uppercase leading-[0.85] text-right"
                                style={{ fontSize: "clamp(3rem, 5vw, 7rem)" }}
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
                            className="flex-shrink-0 w-full px-6 md:px-10 lg:px-20 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/10 pt-5 pb-5 md:pb-10"
                        >
                            <div className="flex flex-wrap gap-4 md:gap-6 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
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