"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowRight } from "lucide-react";
import Minimalist3D from "./Minimalist3D";
import Marquee from "react-fast-marquee";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const magneticBtnRef = useRef<HTMLAnchorElement>(null);

    const splitText = (text: string) => {
        return text.split("").map((char, index) => (
            <span
                key={index}
                className="char"
                style={{ opacity: 0, transform: "translateY(100%)", display: "inline-block" }}
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

            tl.to(".hero-marquee", {
                opacity: 1, duration: 1, ease: "power2.out",
            }, "-=0.4");
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
        <section ref={heroRef} className="hero-section cretivox-grid">
            {/* 3D Minimalist Artwork */}
            <Minimalist3D />

            <div className="hero-content">
                <div className="hero-inner">

                    {/* Tagline */}
                    <div style={{ overflow: "hidden" }}>
                        <p
                            className="hero-brand-tag"
                            style={{ opacity: 0, transform: "translateY(30px)" }}
                        >
                            Creative Media Studio
                        </p>
                    </div>

                    {/* Headline 1 */}
                    <div className="hero-headline-wrap">
                        <h1 className="hero-headline hero-headline--white">
                            {splitText("Ambil Jeda,")}
                        </h1>
                    </div>

                    {/* Headline 2 */}
                    <div className="hero-headline-wrap">
                        <h1 className="hero-headline hero-headline--gold">
                            {splitText("sebats dulu.")}
                        </h1>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-cta-group">
                        <a
                            ref={magneticBtnRef}
                            href="/karya"
                            className="hero-cta hero-btn-primary"
                            style={{ opacity: 0, transform: "translateY(20px)" }}
                        >
                            <span>Lihat Karya</span>
                            <div className="hero-btn-icon">
                                <ArrowRight style={{ width: 20, height: 20 }} />
                            </div>
                        </a>

                        <a
                            href="#overthinking"
                            className="hero-cta hero-btn-secondary"
                            style={{ opacity: 0, transform: "translateY(20px)" }}
                        >
                            <span>Curhat Dulu</span>
                            <MessageCircle style={{ width: 20, height: 20 }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}