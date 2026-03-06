import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="kontak" className={styles.footer}>
            <div className={styles.inner}>

                {/* ─── Top Section: Brand + Links ─── */}
                <div className={styles.topSection}>

                    {/* Left Column: Brand & Info */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className="mb-5 inline-block">
                            <span className="font-display text-4xl font-black tracking-wide text-white transition-colors hover:text-primary">
                                sebats,
                            </span>
                        </Link>

                        <p className="mb-8 max-w-sm font-body text-sm leading-relaxed text-white/50">
                            Hassle-free creative agency. Merayakan momen jeda di tengah hiruk-pikuk kultur produktivitas tanpa batas.
                        </p>

                        <div className={styles.socialRow}>
                            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                            <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
                            <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
                            <a href="mailto:hello@sebats.id" aria-label="Email"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>

                    {/* Right Columns: Links Grid (Disusutkan jadi 3 Kolom) */}
                    <div className={styles.linksGrid}>

                        {/* Col 1 — Studio */}
                        <div className={styles.linkColumn}>
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Studio</h3>
                            <Link href="/tentang" className="font-body text-sm text-white/70 transition-colors hover:text-white">Tentang Kami</Link>
                            <Link href="/karya" className="font-body text-sm text-white/70 transition-colors hover:text-white">Portofolio</Link>
                            <Link href="/news" className="font-body text-sm text-white/70 transition-colors hover:text-white">Editorial & News</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Karir</Link>
                        </div>

                        {/* Col 2 — Layanan */}
                        <div className={styles.linkColumn}>
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Layanan</h3>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Film & Campaign</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Brand Architecture</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Digital Strategy</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">UI/UX Design</Link>
                        </div>

                        {/* Col 3 — Kolaborasi */}
                        <div className={styles.linkColumn}>
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Kolaborasi</h3>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Start a Project</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Media Partner</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Community</Link>
                        </div>

                    </div>
                </div>

                {/* ─── Bottom Section: Baseplate ─── */}
                <div className={styles.baseplate}>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">
                        © 2026 sebats, Creative Media Studio. All rights reserved.
                    </p>

                    <div className={`${styles.legalLinks} font-body text-[10px] uppercase tracking-[0.2em] text-white/30`}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}