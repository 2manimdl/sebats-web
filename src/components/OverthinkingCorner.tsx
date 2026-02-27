"use client";

import { Brain, Flame, Zap, Coffee, Heart, CloudLightning } from "lucide-react";
import Marquee from "react-fast-marquee";

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

const marqueeItems2 = [
    "Quarter-life crisis vibes...",
    "Self-care bukan mager...",
    "Touch grass challenge...",
    "Doom scrolling at midnight...",
    "LinkedIn influencer energy...",
    "Manifesting work-life balance...",
    "CEO of procrastination...",
    "Gak produktif = gak valid??",
    "Napas dulu bestie...",
    "Rebahan is valid...",
];

export default function OverthinkingCorner() {
    return (
        <section id="overthinking" className="relative overflow-hidden border-grid-t border-grid-b bg-black py-10 md:py-14">
            <div className="container-main">
                <p className="mb-6 flex items-center justify-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                    <Brain className="h-3 w-3" />
                    Overthinking Corner
                </p>
            </div>

            <div className="relative overflow-hidden">
                <Marquee speed={40} direction="right" pauseOnHover autoFill gradient={false}>
                    {marqueeItems2.map((item, i) => (
                        <span key={`c-${i}`} className="whitespace-nowrap cursor-default font-body text-sm font-medium uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white md:text-base">
                            {item}<span className="mx-6 text-primary/40">—</span>
                        </span>
                    ))}
                </Marquee>
            </div>

            <div className="relative mt-6 overflow-hidden group">
                <Marquee speed={60} pauseOnHover autoFill gradient={false}>
                    {marqueeItems.map((item, i) => (
                        <span key={`a-${i}`} className="flex cursor-default items-center gap-2 whitespace-nowrap font-display text-2xl font-black uppercase text-white/90 transition-colors hover:text-primary md:text-3xl lg:text-5xl">
                            {item.text}
                            <item.icon className="mx-4 h-4 w-4 md:mx-6 md:h-6 md:w-6" />
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
