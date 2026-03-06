"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */
const timeline = [
    {
        year: "2020",
        title: "Titik Nol",
        metaphor: "Tunas Pertumbuhan",
        desc: "Dua orang overthinking soal hustle culture. Lahirlah ide gila: 'Gimana kalau istirahat itu produktif?'",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
        year: "2021",
        title: "First Campaign",
        metaphor: "Percikan Api",
        desc: "Kampanye pertama viral di TikTok. 2 juta views dalam 72 jam. Gen Z mulai kenal sebats.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
        year: "2022",
        title: "Studio Opens",
        metaphor: "Koloni Lebah",
        desc: "Buka studio pertama di Bandung. Tim bertambah jadi 12 orang. Client pertama: brand lokal yang berani beda.",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
        year: "2023",
        title: "Going National",
        metaphor: "Gelombang Pasang",
        desc: "Kolaborasi dengan brand nasional. Netflix dan Tokopedia mulai ngobrol. Revenue naik 340%.",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
    {
        year: "2024",
        title: "Culture Shift",
        metaphor: "Hutan Belantara",
        desc: "Jadi the go-to creative studio buat Gen Z branding. 50+ project selesai. Tim tumbuh jadi 30+ people.",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    },
    {
        year: "2025",
        title: "What's Next?",
        metaphor: "Supernova",
        desc: "Ekspansi ke SEA market, produksi original content series, dan bikin space fisik buat Gen Z berkumpul.",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
];

const team = [
    {
        name: "Raka Adriansyah",
        role: "Founder & CEO",
        badge: "Papa Gen Z",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
        name: "Sinta Maharani",
        role: "Creative Director",
        badge: "The Overthinker",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    },
    {
        name: "Dimas Pratama",
        role: "Head of Production",
        badge: "Caffeine Addict",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    },
    {
        name: "Ayu Lestari",
        role: "Community Lead",
        badge: "Vibe Curator",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    },
];

const departments = [
    { num: "01", name: "Creative & Digital", count: "12 people", imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
    { num: "02", name: "Sales & Marketing", count: "8 people", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" },
    { num: "03", name: "Production & Film", count: "6 people", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
    { num: "04", name: "Community & Events", count: "4 people", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
    { num: "05", name: "Operations", count: "3 people", imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80" },
];

/* ═══════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════ */
export default function TentangPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const deptSectionRef = useRef<HTMLDivElement>(null);
    const [activeDept, setActiveDept] = useState<number | null>(null);

    /* ── GSAP: Timeline reveal ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".tl-card").forEach((card) => {
                gsap.fromTo(card, { y: 60, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
                });
            });

            gsap.utils.toArray<HTMLElement>(".team-card").forEach((card, i) => {
                gsap.fromTo(card, { y: 50, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" }
                });
            });

            gsap.utils.toArray<HTMLElement>(".dept-row").forEach((row) => {
                gsap.fromTo(row, { x: -30, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: row, start: "top 90%", toggleActions: "play none none reverse" }
                });
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    /* ── Department hover image position ── */
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const handleDeptMouseMove = useCallback((e: React.MouseEvent) => {
        if (!deptSectionRef.current) return;
        const rect = deptSectionRef.current.getBoundingClientRect();
        setImgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, []);

    return (
        <div className="grain-overlay min-h-screen bg-black text-white" ref={pageRef}>

            {/* ═══════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════ */}
            <section className="relative w-full bg-black cretivox-grid">
                {/* Spacer dikurangi agar teks tidak terlalu jatuh */}
                <div style={{ height: "180px" }} className="w-full" aria-hidden="true"></div>

                <div className="container-main relative z-10" style={{ paddingBottom: "clamp(60px, 8vw, 100px)" }}>
                    <p className="mb-6 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <Users className="h-4 w-4" /> The Story So Far
                    </p>
                    <h1 className="font-display font-black uppercase text-white" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        Bukan Cuma<br /><span className="text-primary">Studio.</span>
                    </h1>
                    <div className="mt-8 h-px w-24 bg-primary" />
                    <p className="mt-8 max-w-xl font-body text-sm leading-relaxed text-white/60 md:text-base md:leading-loose">
                        Kami lahir dari keresahan yang sama: <span className="italic text-white">burnout</span>, <span className="italic text-white">hustle culture</span>, dan tekanan buat selalu produktif. Sebats hadir sebagai jawaban — bahwa momen jeda adalah momen paling jujur.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                TIMELINE
            ═══════════════════════════════════════════ */}
            <section className="bg-black" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
                <div className="container-main">
                    {/* Margin antar judul dengan konten diseimbangkan (60px) */}
                    <div style={{ marginBottom: "60px" }} className="flex flex-col md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                                <Briefcase className="mb-0.5 inline h-3 w-3" /> Journey
                            </p>
                            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">Timeline.</h2>
                        </div>
                        <p className="mt-4 max-w-xs font-body text-xs uppercase tracking-[0.2em] text-white/30 md:mt-0 md:text-right">
                            Sejarah singkat bagaimana kami tumbuh bersama keresahan.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {timeline.map((item, i) => (
                            <div key={item.year} className="tl-card grid grid-cols-1 md:grid-cols-12" style={{ opacity: 0 }}>
                                <div className="flex items-start py-8 md:col-span-4 md:py-12">
                                    <div className="sticky top-32">
                                        <span className="font-display font-black text-white/[0.06]" style={{ fontSize: "clamp(4rem, 10vw, 10rem)", lineHeight: 0.85 }}>
                                            {item.year}
                                        </span>
                                        <div className="mt-2">
                                            <span className="inline-block border border-primary/30 bg-primary/5 px-3 py-1 font-body text-[9px] font-black uppercase tracking-[0.25em] text-primary">
                                                {item.metaphor}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 py-8 md:col-span-8 md:pl-12 md:py-12">
                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                                        <Image src={item.imageUrl} alt={item.title} fill className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0" sizes="(max-width: 768px) 100vw, 60vw" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">{item.title}</h3>
                                        <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-white/50 md:text-base">{item.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                                            {String(i + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                TEAM
            ═══════════════════════════════════════════ */}
            <section className="bg-black" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
                <div className="container-main">
                    <div style={{ marginBottom: "60px" }}>
                        <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Our People</p>
                        <h2 className="font-display text-4xl font-black uppercase text-white md:text-6xl" style={{ lineHeight: "0.85" }}>
                            Otak di Balik<br />Layar.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((person) => (
                            <motion.div key={person.name} className="team-card group relative aspect-[3/4] cursor-pointer overflow-hidden bg-white/5" style={{ opacity: 0, perspective: 800 }} whileHover={{ scale: 1.03, rotateX: -2, rotateY: 3, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}>
                                <Image src={person.imageUrl} alt={person.name} fill className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                                <div className="absolute left-3 top-3 z-10 border border-primary/40 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
                                    <span className="font-body text-[9px] font-black uppercase tracking-[0.25em] text-primary">{person.badge}</span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-16">
                                    <h3 className="font-display text-xl font-black uppercase tracking-tight text-white md:text-2xl">{person.name}</h3>
                                    <p className="mt-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{person.role}</p>
                                </div>
                                <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-primary/30" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                DEPARTMENTS
            ═══════════════════════════════════════════ */}
            <section className="bg-black" style={{ padding: "clamp(60px, 10vw, 120px) 0" }}>
                <div className="container-main">
                    <div style={{ marginBottom: "60px" }} className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Structure</p>
                            <h2 className="font-display text-4xl font-black uppercase text-white md:text-6xl" style={{ lineHeight: "0.85" }}>Divisi &amp; Tim.</h2>
                        </div>
                        <p className="max-w-xs font-body text-xs uppercase tracking-[0.2em] text-white/30">Kolaborasi lintas disiplin untuk hasil maksimal.</p>
                    </div>

                    <div ref={deptSectionRef} className="relative" onMouseMove={handleDeptMouseMove} onMouseLeave={() => setActiveDept(null)}>
                        <div className="pointer-events-none fixed z-50 h-[280px] w-[380px] overflow-hidden transition-opacity duration-500" style={{ left: imgPos.x, top: imgPos.y, opacity: activeDept !== null ? 1 : 0, transform: "translate(-50%, -50%)", position: "absolute" }}>
                            {departments.map((dept, i) => (
                                <Image key={dept.num} src={dept.imageUrl} alt={dept.name} fill className={`object-cover transition-opacity duration-500 ${activeDept === i ? "opacity-100" : "opacity-0"}`} sizes="380px" />
                            ))}
                        </div>

                        {departments.map((dept, i) => (
                            <div key={dept.num} className="dept-row group relative flex cursor-pointer items-center justify-between border-b border-white/5 px-2 py-8 transition-all duration-500 md:py-10" style={{ opacity: 0 }} onMouseEnter={() => setActiveDept(i)}>
                                <div className="absolute inset-0 bg-black transition-opacity duration-500" style={{ opacity: activeDept !== null && activeDept !== i ? 0.6 : 0 }} />
                                <div className="relative z-10 flex items-center gap-6 md:gap-10">
                                    <span className="font-display font-black text-white/[0.06] transition-all duration-500 group-hover:text-primary/30" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>{dept.num}</span>
                                    <h3 className="font-display text-xl font-black uppercase tracking-tight text-white transition-all duration-500 group-hover:text-primary md:text-3xl lg:text-5xl">{dept.name}</h3>
                                </div>
                                <div className="relative z-10 hidden items-center gap-8 md:flex">
                                    <div className="h-px w-24 bg-white/5 transition-colors duration-500 group-hover:bg-primary/20 lg:w-40" />
                                    <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 transition-colors duration-500 group-hover:text-white/60">{dept.count}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ClientMarquee />
        </div>
    );
}