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
        <div className="bg-black py-20 md:py-28 lg:py-36">
            <div className="border-grid-t border-b border-white/5 bg-black py-4">
                <Marquee speed={40} autoFill gradient={false}>
                    <span style={{
                        whiteSpace: "nowrap",
                        paddingRight: "1rem",
                        fontFamily: "var(--font-display), system-ui, sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.3em",
                        color: "rgba(255,255,255,0.2)",
                    }}>
                        AMBIL JEDA // SEBATS DULU // REHAT SEJENAK // OVERTHINKING AREA //&nbsp;
                    </span>
                </Marquee>
            </div>

            <section className="border-grid-b bg-black py-8 md:py-10">
                <div className="relative overflow-hidden">
                    <Marquee speed={80} pauseOnHover autoFill gradient={false}>
                        {clients.map((name, i) => (
                            <span
                                key={`c1-${i}`}
                                /* Ukuran teks diturunkan menjadi text-lg (HP), text-xl (Tablet), text-2xl (Desktop) */
                                className="mx-5 cursor-default whitespace-nowrap font-display text-lg font-black uppercase md:mx-8 md:text-xl lg:text-2xl text-white hover:text-primary transition-all duration-300"
                            >
                                {name}
                            </span>
                        ))}
                    </Marquee>
                </div>
            </section>
        </div>
    );
}