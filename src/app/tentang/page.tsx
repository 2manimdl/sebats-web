"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Briefcase, Lightbulb, Target, Heart, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
    { year: "2020", title: "Titik Nol", desc: "Dua orang overthinking soal hustle culture. Lahirlah ide gila: 'Gimana kalau istirahat itu produktif?'" },
    { year: "2021", title: "First Campaign", desc: "Kampanye pertama viral di TikTok. 2 juta views dalam 72 jam. Gen Z mulai kenal sebats." },
    { year: "2022", title: "Studio Opens", desc: "Buka studio pertama di Bandung. Tim bertambah jadi 12 orang. Client pertama: brand lokal yang berani beda." },
    { year: "2023", title: "Going National", desc: "Kolaborasi dengan brand nasional. Netflix dan Tokopedia mulai ngobrol. Revenue naik 340%." },
    { year: "2024", title: "Culture Shift", desc: "Jadi the go-to creative studio buat Gen Z branding. 50+ project selesai. Tim tumbuh jadi 30+ people." },
    { year: "2025", title: "What's Next?", desc: "Ekspansi ke SEA market, produksi original content series, dan bikin space fisik buat Gen Z berkumpul." },
];

const team = [
    { name: "Raka Adriansyah", role: "Founder & CEO", badge: "Papa Gen Z", icon: Target },
    { name: "Sinta Maharani", role: "Creative Director", badge: "The Overthinker", icon: Lightbulb },
    { name: "Dimas Pratama", role: "Head of Production", badge: "Caffeine Addict", icon: Coffee },
    { name: "Ayu Lestari", role: "Community Lead", badge: "Vibe Curator", icon: Heart },
];

const departments = [
    { num: "01", name: "Creative & Digital", count: "12 people" },
    { num: "02", name: "Sales & Marketing", count: "8 people" },
    { num: "03", name: "Production & Film", count: "6 people" },
    { num: "04", name: "Community & Events", count: "4 people" },
    { num: "05", name: "Operations", count: "3 people" },
];

export default function TentangPage() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            gsap.utils.toArray<HTMLElement>(".team-card").forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, timelineRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="grain-overlay bg-black min-h-screen text-white" ref={timelineRef}>
            <Navbar />

            {/* Hero */}
            <section className="flex min-h-[70vh] items-end border-grid-b bg-black cretivox-grid pb-16 pt-32 md:pb-24">
                <div className="container-main">
                    <p className="mb-4 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                        <Users className="h-3 w-3" /> The Story So Far
                    </p>
                    <h1 className="font-display font-black uppercase text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: "0.85", letterSpacing: "-0.03em" }}>
                        Bukan Cuma<br /><span className="text-primary">Studio.</span>
                    </h1>
                    <div className="mt-8 h-px w-24 bg-primary" />
                    <p className="mt-8 max-w-xl font-body text-sm leading-relaxed text-white/60 md:text-base md:leading-loose">
                        Kami lahir dari keresahan yang sama: <span className="text-white italic">burnout</span>, <span className="text-white italic">hustle culture</span>, dan tekanan buat selalu produktif. Sebats hadir sebagai jawaban — bahwa momen jeda adalah momen paling jujur.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-black py-24 md:py-32">
                <div className="container-main">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between border-grid-b pb-8">
                        <div>
                            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
                                <Briefcase className="mb-0.5 inline h-3 w-3" /> Journey
                            </p>
                            <h2 className="font-display text-4xl font-black uppercase text-white md:text-5xl">Timeline.</h2>
                        </div>
                        <p className="mt-4 max-w-xs font-body text-xs uppercase tracking-[0.2em] text-white/30 md:mt-0 md:text-right">Sejarah singkat bagaimana kami tumbuh bersama keresahan.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10 md:left-1/2" />

                        <div className="space-y-12 md:space-y-0">
                            {timeline.map((item, i) => (
                                <div key={item.year} className={`timeline-item relative pl-10 md:mb-24 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-24" : "md:ml-auto md:pl-24"}`} style={{ opacity: 0 }}>
                                    {/* Dot */}
                                    <div className={`absolute top-2 h-4 w-4 rounded-full border-2 border-primary bg-black transition-transform duration-500 group-hover:scale-125 ${i % 2 === 0 ? "left-[-8px] md:right-[-8px] md:left-auto" : "left-[-8px] md:left-[-8px]"}`} />

                                    <div className="group">
                                        <span className="font-display text-6xl font-black text-white/[0.03] transition-colors duration-500 group-hover:text-primary/10 md:text-8xl">{item.year}</span>
                                        <div className="mt-[-20px] relative z-10">
                                            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                            <p className="mt-4 font-body text-sm leading-relaxed text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="border-grid-t bg-black py-24 md:py-32">
                <div className="container-main">
                    <div className="mb-16">
                        <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Our People</p>
                        <h2 className="font-display text-4xl font-black uppercase text-white md:text-6xl" style={{ lineHeight: "0.85" }}>Otak di Balik<br />Layar.</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-0 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((person) => (
                            <div key={person.name} className="team-card group border-b border-r border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.03]" style={{ opacity: 0 }}>
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                                    <person.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-display text-xl font-black uppercase tracking-tight text-white">{person.name}</h3>
                                <p className="mt-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{person.role}</p>
                                <div className="mt-6 inline-block border border-primary/20 bg-primary/5 px-3 py-1.5 transition-colors duration-500 group-hover:border-primary/40">
                                    <span className="font-body text-[9px] font-black uppercase tracking-[0.25em] text-primary">{person.badge}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments */}
            <section className="border-grid-t bg-black py-24 md:py-32">
                <div className="container-main">
                    <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Structure</p>
                            <h2 className="font-display text-4xl font-black uppercase text-white md:text-6xl" style={{ lineHeight: "0.85" }}>Divisi & Tim.</h2>
                        </div>
                        <p className="max-w-xs font-body text-xs uppercase tracking-[0.2em] text-white/30">Kolaborasi lintas disiplin untuk hasil maksimal.</p>
                    </div>

                    <div className="divide-y divide-white/5 border-y border-white/5">
                        {departments.map((dept) => (
                            <div key={dept.num} className="group flex items-center justify-between py-8 transition-all duration-500 hover:bg-white/[0.02] md:py-10">
                                <div className="flex items-center gap-8">
                                    <span className="font-display text-4xl font-black text-white/[0.05] transition-colors duration-500 group-hover:text-primary md:text-6xl">{dept.num}</span>
                                    <h3 className="font-display text-xl font-black uppercase tracking-tight text-white md:text-3xl">{dept.name}</h3>
                                </div>
                                <div className="hidden h-px flex-1 bg-white/5 mx-12 md:block group-hover:bg-primary/20 transition-colors duration-500" />
                                <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors duration-500">{dept.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
