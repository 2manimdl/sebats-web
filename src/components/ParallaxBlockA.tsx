"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBlockA() {
    const ref = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // GSAP ScrollTrigger — text slide-up reveal
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!textRef.current) return;

            const elements = textRef.current.querySelectorAll(".reveal-item");
            gsap.fromTo(
                elements,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <section id="tentang" ref={ref} className="overflow-hidden bg-black py-16 md:py-24">
            <div className="container-main grid grid-cols-1 gap-0 md:grid-cols-2">
                {/* Left — Large Parallax Image */}
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 md:aspect-auto md:min-h-[600px]">
                    <motion.img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1000&q=80"
                        alt="Creative process"
                        style={{ y: imageY }}
                        className="absolute inset-[-10%] h-[120%] w-[120%] object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>

                {/* Right — Text Content with GSAP ScrollTrigger reveal */}
                <div
                    ref={textRef}
                    className="flex flex-col justify-center border border-t-0 border-white/10 p-8 md:border-t md:border-l-0 md:p-14 lg:p-20"
                >
                    <p className="reveal-item mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary" style={{ opacity: 0 }}>
                        Tentang Kami
                    </p>
                    <h2
                        className="reveal-item font-display font-black uppercase text-white"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                            lineHeight: "0.85",
                            letterSpacing: "-0.02em",
                            opacity: 0,
                        }}
                    >
                        Bukan cuma
                        <br />
                        <span className="text-primary">istirahat.</span>
                    </h2>
                    <div className="reveal-item mt-8 h-px w-12 bg-primary" style={{ opacity: 0 }} />
                    <p className="reveal-item mt-6 max-w-sm font-body text-sm leading-relaxed text-white/50 md:text-base" style={{ opacity: 0 }}>
                        Kami percaya bahwa momen jeda adalah momen paling jujur. Di situlah ide terbaik lahir,
                        di antara hembusan napas dan obrolan tanpa filter.
                    </p>
                    <p className="reveal-item mt-4 max-w-sm font-body text-sm leading-relaxed text-white/40 md:text-base" style={{ opacity: 0 }}>
                        sebat&apos;s hadir sebagai ruang kreatif yang merayakan kemanusiaan di tengah hustle culture.
                    </p>
                </div>
            </div>
        </section>
    );
}
