"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowRight } from "lucide-react";
import Minimalist3D from "./Minimalist3D";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const magneticBtnRef = useRef<HTMLAnchorElement>(null);

    const splitText = (text: string) => {
        return text.split("").map((char, index) => (
            <span
                key={index}
                className="char inline-block"
                style={{ opacity: 0, transform: "translateY(100%)" }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.to(".hero-brand-tag", {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            });

            tl.to(".hero-divider", {
                scaleX: 1, duration: 1, ease: "power4.inOut",
            }, "-=0.6");

            tl.to(".char", {
                y: 0, opacity: 1, stagger: 0.02, duration: 0.8, ease: "back.out(1.2)",
            }, "-=0.4");

            tl.to(".hero-subtitle", {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            }, "-=0.5");

            tl.to(".hero-cta", {
                y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
            }, "-=0.6");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Magnetic Button Effect
    useEffect(() => {
        const btn = magneticBtnRef.current;
        if (!btn) return;

        const handleMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
        };

        const handleLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1.2, 0.3)" });
        };

        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
        return () => {
            btn.removeEventListener("mousemove", handleMove);
            btn.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero-section cretivox-grid relative flex items-center justify-center min-h-dvh overflow-hidden bg-black"
        >
            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 z-[1]"
                style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 100%)" }}
            />

            {/* Floating accent dots */}
            <div className="pointer-events-none absolute top-[15%] right-[10%] z-[2] h-[6px] w-[6px] rounded-full bg-primary/30 animate-float"
                style={{ boxShadow: "-60vw 20vh 0 3px rgba(255,215,0,0.08), -30vw -10vh 0 2px rgba(255,255,255,0.06), 20vw 30vh 0 4px rgba(255,215,0,0.05), -45vw 40vh 0 2px rgba(255,255,255,0.04), 35vw -20vh 0 3px rgba(255,215,0,0.06)" }}
            />

            {/* 3D Minimalist Artwork */}
            <Minimalist3D />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="flex flex-col items-center text-center">

                    {/* Tagline */}
                    <div style={{ overflow: "hidden" }}>
                        <p
                            className="hero-brand-tag font-body text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.5em] text-primary mb-8 relative"
                            style={{ opacity: 0, transform: "translateY(30px)" }}
                        >
                            Creative Media Studio
                        </p>
                    </div>

                    {/* Headline 1 */}
                    <div className="overflow-hidden px-2 pb-2">
                        <h1 className="flex justify-center flex-wrap font-display font-black uppercase leading-[0.88] tracking-[-0.04em] text-white"
                            style={{ fontSize: "clamp(3rem, 12vw, 11rem)", textShadow: "0 0 80px rgba(255,255,255,0.05)" }}>
                            {splitText("Ambil Jeda,")}
                        </h1>
                    </div>

                    {/* Headline 2 */}
                    <div className="overflow-hidden px-2 pb-2">
                        <h1 className="flex justify-center flex-wrap font-display font-black uppercase leading-[0.88] tracking-[-0.04em] text-primary"
                            style={{ fontSize: "clamp(3rem, 12vw, 11rem)", textShadow: "0 0 60px rgba(255,215,0,0.15)" }}>
                            {splitText("sebats dulu.")}
                        </h1>
                    </div>

                    {/* Divider */}
                    <div
                        className="hero-divider w-20 h-px my-10 origin-center"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)",
                            transform: "scaleX(0)",
                        }}
                    />

                    {/* Subtitle */}
                    <p
                        className="hero-subtitle max-w-[32rem] font-body text-sm md:text-base leading-[1.8] md:leading-[1.9] text-white/45 font-light tracking-[0.03em]"
                        style={{ opacity: 0, transform: "translateY(20px)" }}
                    />

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-14 max-sm:flex-col max-sm:gap-4">
                        {/* Primary CTA */}
                        <a
                            ref={magneticBtnRef}
                            href="/karya"
                            className="hero-cta hero-btn-primary relative inline-flex items-center gap-10 pl-12 pr-1.5 py-1.5 bg-primary text-black rounded-full font-body text-[11px] font-bold uppercase tracking-[0.2em] no-underline transition-all duration-500 overflow-hidden cursor-pointer"
                            style={{ opacity: 0, transform: "translateY(20px)" }}
                        >
                            <span className="relative z-[1] pt-[2px]">Lihat Karya</span>
                            <div className="hero-btn-icon relative z-[1] flex items-center justify-center w-12 h-12 rounded-full bg-black text-primary transition-all duration-500">
                                <ArrowRight style={{ width: 20, height: 20 }} />
                            </div>
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="#overthinking"
                            className="hero-cta hero-btn-secondary relative inline-flex items-center gap-4 px-10 py-5 border border-white/15 rounded-full bg-white/[0.03] text-white/50 font-body text-[11px] font-bold uppercase tracking-[0.2em] no-underline transition-all duration-500 cursor-pointer backdrop-blur-md overflow-hidden max-sm:px-8 max-sm:py-4"
                            style={{ opacity: 0, transform: "translateY(20px)" }}
                        >
                            <span className="relative z-[1] pt-[2px]">Curhat Dulu</span>
                            <MessageCircle style={{ width: 20, height: 20, position: "relative", zIndex: 1 }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}