import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, Mail, Circle } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="kontak" className={styles.footer}>
            <div className={styles.inner}>

                {/* ─── Top Section: Brand + Links ─── */}
                <div className={styles.topSection}>

                    {/* Left Column: Brand & Info */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className="mb-6 inline-block">
                            <span className="font-display text-3xl font-black tracking-wide text-white transition-colors hover:text-primary md:text-4xl">
                                sebats,
                            </span>
                        </Link>

                        <p className="mb-8 font-body text-sm leading-relaxed text-white/60">
                            Hassle-free creative agency. Ruang kreatif yang merayakan momen jeda di tengah hiruk-pikuk masyarakat modern.
                        </p>

                        <div className={styles.socialRow}>
                            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                            <a href="#" aria-label="Email"><Mail className="h-5 w-5" /></a>
                        </div>

                        {/* Status Badge */}
                        <div className={`${styles.statusBadge} font-body text-xs text-white/80`}>
                            <Circle className="h-2.5 w-2.5 fill-green-500 text-green-500" />
                            All systems operational
                        </div>
                    </div>

                    {/* Right Columns: Links Grid */}
                    <div className={styles.linksGrid}>

                        {/* Col 1 — Layanan */}
                        <div className={styles.linkColumn}>
                            <h3 className="font-body text-sm font-bold text-white">Layanan</h3>
                            <Link href="#" className="inline-flex items-center gap-2 font-body text-sm text-white/60 transition-colors hover:text-primary">
                                Creative Video
                                <span className={styles.newBadge}>New</span>
                            </Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Brand Strategy</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Social Media</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">KOL Management</Link>
                        </div>

                        {/* Col 2 — Perusahaan */}
                        <div className={styles.linkColumn}>
                            <h3 className="font-body text-sm font-bold text-white">Perusahaan</h3>
                            <Link href="/tentang" className="font-body text-sm text-white/60 transition-colors hover:text-white">Tentang Kami</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Karir</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Brand Assets</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Changelog</Link>
                        </div>

                        {/* Col 3 — Ekosistem */}
                        <div className={styles.linkColumn}>
                            <h3 className="font-body text-sm font-bold text-white">Ekosistem</h3>
                            <Link href="/news" className="font-body text-sm text-white/60 transition-colors hover:text-white">News Platform</Link>
                            <Link href="/karya" className="font-body text-sm text-white/60 transition-colors hover:text-white">Portofolio</Link>
                            <Link href="#sambatan" className="font-body text-sm text-white/60 transition-colors hover:text-white">Curhat Area</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Community</Link>
                        </div>

                        {/* Col 4 — Kolaborasi */}
                        <div className={styles.linkColumn}>
                            <h3 className="font-body text-sm font-bold text-white">Kolaborasi</h3>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Start a Project</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Media Partner</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Support Docs</Link>
                            <Link href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">Contact</Link>
                        </div>

                    </div>
                </div>

                {/* ─── Bottom Section: Baseplate ─── */}
                <div className={styles.baseplate}>
                    <p className="font-body text-xs text-white/40">
                        © 2026 sebats, Creative Media Studio. All rights reserved.
                    </p>

                    <div className={`${styles.legalLinks} font-body text-xs text-white/40`}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Code of conduct</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}