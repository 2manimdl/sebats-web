import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, ExternalLink, ArrowUpRight, FileText } from "lucide-react";

const quickLinks = [
    { label: "Tentang", href: "/tentang" },
    { label: "Karya", href: "/karya" },
    { label: "News", href: "/news" },
    { label: "Karir", href: "#" },
];

const socials = [
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "TikTok", href: "https://tiktok.com", icon: ExternalLink },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export default function Footer() {
    return (
        <footer id="kontak" className="border-grid-t bg-black text-white">
            <div className="container-main pt-16 md:pt-24">
                <Link href="/" className="group inline-block">
                    <span className="font-display font-black tracking-[0.06em] text-white transition-colors duration-300 group-hover:text-primary" style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: "0.85" }}>
                        sebat&apos;s
                    </span>
                </Link>
                <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/40 md:text-base">
                    Ruang kreatif yang merayakan momen jeda di tengah hustle culture.
                    Karena istirahat bukan kelemahan — itu strategi.
                </p>
            </div>

            <div className="container-main grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 md:grid-cols-4 md:py-16">
                <div>
                    <p className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Navigasi</p>
                    <ul className="flex flex-col gap-3">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="font-body text-sm text-white/60 transition-colors duration-300 hover:text-white">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Socials</p>
                    <ul className="flex flex-col gap-3">
                        {socials.map((social) => (
                            <li key={social.label}>
                                <a href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-body text-sm text-white/60 transition-colors duration-300 hover:text-white">
                                    <social.icon className="h-4 w-4" />
                                    {social.label}
                                    <ArrowUpRight className="h-3 w-3 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Kontak</p>
                    <a href="https://wa.me/6281234567890?text=Halo%20sebat's%20saya%20ingin%20memulai%20project" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-primary/30 px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black">
                        <MessageCircle className="h-4 w-4" />
                        Start a Project
                    </a>
                    <div className="mt-4 flex flex-col gap-2">
                        <p className="font-body text-xs text-white/30">hello@sebats.id</p>
                        <a href="#" className="inline-flex items-center gap-1 font-body text-xs text-white/40 transition-colors hover:text-primary">
                            <FileText className="h-3 w-3" />
                            Download Presskit
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <p className="font-display font-black uppercase text-white/[0.06]" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "0.85" }}>
                        Ambil Jeda,<br />Sebats Dulu.
                    </p>
                </div>
            </div>

            <div className="container-main flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">© 2026 sebat&apos;s Creative Media Studio. All Rights Reserved.</p>
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">Built with ☕ & overthinking</p>
            </div>
        </footer>
    );
}
