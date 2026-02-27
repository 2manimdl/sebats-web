"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu } from "lucide-react";
import SplitType from "split-type";

const navLinks = [
    { label: "Tentang", href: "/tentang" },
    { label: "Karya", href: "/karya" },
    { label: "News", href: "/news" },
    { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Delay slight to await DOM paint
        const timer = setTimeout(() => {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    navRef.current,
                    { y: -40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
                );

                if (logoRef.current) {
                    // SplitType makes it super consistent for text animation
                    const logoSplit = new SplitType(logoRef.current, { types: "chars" });

                    if (logoSplit.chars) {
                        gsap.set(logoSplit.chars, { y: 20, opacity: 0 });
                        gsap.to(logoSplit.chars, {
                            opacity: 1,
                            y: 0,
                            stagger: 0.05,
                            duration: 0.5,
                            ease: "back.out(1.7)",
                            delay: 0.6,
                        });
                    }

                    return () => logoSplit.revert();
                }
            }, navRef);
            return () => ctx.revert();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 border-grid-b backdrop-blur-xl bg-black/70"
            style={{ opacity: 0 }}
        >
            <div className="container-main flex h-20 items-center justify-between md:h-24">
                <Link href="/" className="group">
                    {/* Add overflow-hidden to clip jumping letters from SplitType */}
                    <div className="overflow-hidden pb-1">
                        <span
                            ref={logoRef}
                            className="font-display text-3xl font-black tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-primary md:text-4xl lg:text-5xl"
                        >
                            sebats,
                        </span>
                    </div>
                </Link>

                <ul className="hidden items-center gap-6 md:flex lg:gap-10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="group relative font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="md:hidden" aria-label="Menu">
                    <Menu className="h-6 w-6 text-white" />
                </button>
            </div>
        </nav>
    );
}
