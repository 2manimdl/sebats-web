"use client";

import { Brain, Flame, Zap, Coffee, Heart, CloudLightning } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const marqueeItems = [
    { text: "Hustle culture is a scam...", icon: Flame },
    { text: "Need 6 months of holiday, twice a year...", icon: Coffee },
    { text: "Overthinking at 2 AM...", icon: Brain },
    { text: "Healing but make it aesthetic...", icon: Heart },
    { text: "Burnout check...", icon: CloudLightning },
    { text: "Kerja keras bagai quda...", icon: Zap },
    { text: "Bare minimum is not enough...", icon: Flame },
    { text: "Matiin notif Teams/Slack bentar...", icon: Brain },
    { text: "Toxic productivity era...", icon: Zap },
    { text: "Sunday scaries hitting different...", icon: CloudLightning },
    { text: "Mau resign tapi duit mepet...", icon: Coffee },
    { text: "Sebats dulu lah...", icon: Heart },
];

// Kita duplikasi array ini sangat panjang (15 kali) agar aman 
// dan teksnya tidak akan habis meski pengguna men-scroll sampai ujung bawah web.
const duplicatedItems = Array(15).fill(marqueeItems).flat();

export default function OverthinkingCorner() {
    // 1. Ambil data pergerakan scroll vertikal dari window
    const { scrollY } = useScroll();

    // 2. Berikan efek "Pegas" (Spring) agar saat scroll berhenti, 
    // pergerakan teks melambat dengan mulus (smooth inertia), tidak kaku.
    const smoothScroll = useSpring(scrollY, {
        damping: 25,
        stiffness: 120,
        mass: 0.5
    });

    // 3. Ubah nilai scroll vertikal (Y) menjadi pergeseran horizontal (X).
    // Angka 0.8 adalah pengali kecepatan. (Makin besar = geser makin cepat).
    const xMove = useTransform(smoothScroll, (v) => `-${v * 0.8}px`);

    return (
        <section id="overthinking" className="relative overflow-hidden border-grid-t border-grid-b bg-black py-20 md:py-28 lg:py-36">
            <div className="relative overflow-hidden flex w-full">

                {/* Pembungkus Motion yang diikat ke posisi Scroll */}
                <motion.div
                    style={{ x: xMove }}
                    className="flex w-max items-center"
                >
                    {duplicatedItems.map((item, i) => (
                        <span
                            key={`a-${i}`}
                            className="flex cursor-default items-center gap-2 whitespace-nowrap font-display text-lg font-black uppercase text-white/90 transition-colors hover:text-primary md:text-xl lg:text-2xl"
                        >
                            {item.text}
                            <item.icon className="mx-4 h-4 w-4 md:mx-6 md:h-6 md:w-6" />
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}