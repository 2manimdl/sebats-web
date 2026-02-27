"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImmersiveImageProps {
    imageUrl: string;
    alt: string;
    quote?: string;
    attribution?: string;
}

export default function ImmersiveImage({
    imageUrl,
    alt,
    quote,
    attribution,
}: ImmersiveImageProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image scale-down on scroll past
            gsap.fromTo(
                imageRef.current,
                { scale: 1.15 },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );

            // Overlay darkens as you scroll in
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0.2 },
                {
                    opacity: 0.6,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "center center",
                        scrub: 1,
                    },
                }
            );

            // Text reveal
            if (textRef.current) {
                gsap.fromTo(
                    textRef.current,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 40%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-black"
            style={{ height: "85vh" }}
        >
            {/* Full-Bleed Image with GSAP ScrollTrigger scale */}
            <img
                ref={imageRef}
                src={imageUrl}
                alt={alt}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                style={{ transform: "scale(1.15)" }}
            />

            {/* Dark overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.2 }}
            />

            {/* Centered Quote */}
            {quote && (
                <div
                    ref={textRef}
                    className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
                    style={{ opacity: 0 }}
                >
                    <div className="mb-6 h-px w-12 bg-primary" />
                    <blockquote
                        className="max-w-2xl font-display font-black uppercase text-white"
                        style={{
                            fontSize: "clamp(1.5rem, 5vw, 4rem)",
                            lineHeight: "0.9",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {quote}
                    </blockquote>
                    <div className="mt-8 h-px w-12 bg-primary" />
                    {attribution && (
                        <p className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-white/50">
                            {attribution}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}
