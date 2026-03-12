import Link from "next/link";
import Image from "next/image";
import youtubeIcon from "../assets/youtube.svg";
import instagramIcon from "../assets/Instagram_logo_2016.svg";
import linkedinIcon from "../assets/LinkedIn_icon.svg";
import twitterIcon from "../assets/twitter-svgrepo-com.svg";
import emailIcon from "../assets/email-icon.svg";

export default function Footer() {
    return (
        <footer id="kontak" className="relative w-full max-w-full bg-black text-white border-t border-white/10">
            <div className="w-full px-8 pt-8 pb-4 md:px-12 md:pt-10 md:pb-6 lg:px-20 lg:pt-12 lg:pb-6 xl:px-24">

                {/* ─── Top Section: Brand + Links ─── */}
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">

                    {/* Left Column: Brand & Info */}
                    <div className="flex flex-col items-start gap-8 w-full lg:max-w-xs shrink-0">
                        <Link href="/" className="inline-block">
                            <span className="font-display text-4xl font-black tracking-wide text-white transition-colors hover:text-primary">
                                sebats,
                            </span>
                        </Link>

                        <p className="max-w-sm font-body text-base leading-relaxed text-white/50">
                            Hassle-free creative agency. Merayakan momen jeda di tengah hiruk-pikuk kultur produktivitas tanpa batas.
                        </p>

                        {/* Social Icons */}
                        <div className="social-icon flex items-center gap-6">
                            <a href="#" className="instagram" aria-label="Instagram">
                                <Image src={instagramIcon} alt="Instagram" className="h-4 w-4" />
                            </a>
                            <a href="#" className="linkedin" aria-label="LinkedIn">
                                <Image src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
                            </a>
                            <a href="#" className="twitter" aria-label="Twitter">
                                <Image src={twitterIcon} alt="Twitter" className="h-4 w-4" />
                            </a>
                            <a href="#" className="youtube" aria-label="YouTube">
                                <Image src={youtubeIcon} alt="YouTube" className="h-4 w-4" />
                            </a>
                            <a href="mailto:hello@sebats.id" className="email" aria-label="Email">
                                <Image src={emailIcon} alt="Email" className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Columns: Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:flex-1 lg:pl-8">

                        {/* Col 1 — Studio */}
                        <div className="flex flex-col gap-4">
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Studio</h3>
                            <Link href="/tentang" className="font-body text-sm text-white/70 transition-colors hover:text-white">Tentang Kami</Link>
                            <Link href="/karya" className="font-body text-sm text-white/70 transition-colors hover:text-white">Portofolio</Link>
                            <Link href="/news" className="font-body text-sm text-white/70 transition-colors hover:text-white">Editorial &amp; News</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Karir</Link>
                        </div>

                        {/* Col 2 — Layanan */}
                        <div className="flex flex-col gap-4">
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Layanan</h3>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Film &amp; Campaign</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Brand Architecture</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Digital Strategy</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">UI/UX Design</Link>
                        </div>

                        {/* Col 3 — Kolaborasi */}
                        <div className="flex flex-col gap-4">
                            <h3 className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Kolaborasi</h3>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Start a Project</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Media Partner</Link>
                            <Link href="#" className="font-body text-sm text-white/70 transition-colors hover:text-white">Community</Link>
                        </div>

                    </div>
                </div>

                {/* ─── Bottom Section: Baseplate ─── */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">
                        © 2026 sebats, Creative Media Studio. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.2em] text-white/30">
                        <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="transition-colors hover:text-white">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}