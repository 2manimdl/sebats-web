"use client";

import Marquee from "react-fast-marquee";

const clients = [
    "GOJEK",
    "NETFLIX",
    "SPOTIFY",
    "TOKOPEDIA",
    "DISNEY+",
    "SAMSUNG",
    "GRAB",
    "SHOPEE",
    "TRAVELOKA",
    "BANK JAGO",
];

export default function ClientMarquee() {
    return (
        <section className="border-grid-t border-grid-b bg-black py-8 md:py-10">
            <div className="container-main mb-6">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                    ✦ Trusted By
                </p>
            </div>

            <div className="relative overflow-hidden">
                <Marquee speed={80} pauseOnHover autoFill gradient={false}>
                    {clients.map((name, i) => (
                        <span
                            key={`c1-${i}`}
                            className="mx-6 cursor-default whitespace-nowrap font-display font-black uppercase md:mx-10 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] hover:[-webkit-text-stroke:1px_#FFD700] hover:text-primary transition-all duration-300"
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                                lineHeight: "1",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {name}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
