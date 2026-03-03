"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip bubble */}
            {expanded && (
                <div className="bg-white border border-black/10 shadow-xl p-4 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="font-body text-[11px] font-bold uppercase tracking-widest text-black/60 mb-1">Tim sebat&apos;s</p>
                    <p className="font-body text-sm text-black/70 leading-relaxed mb-3">
                        Halo! Ada yang bisa kami bantu? Kami online dan siap diskusi 🙂
                    </p>
                    <a
                        href="https://wa.me/6281234567890?text=Halo%20sebats,%20saya%20ingin%20diskusi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2.5 w-full justify-center hover:bg-[#1fba57] transition-colors"
                    >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Chat di WhatsApp
                    </a>
                </div>
            )}

            {/* FAB button */}
            <button
                onClick={() => setExpanded(e => !e)}
                className={`relative flex h-14 w-14 items-center justify-center transition-all duration-300 shadow-lg ${expanded ? "bg-black text-white" : "bg-[#25D366] text-white hover:bg-[#1fba57]"
                    }`}
                aria-label="WhatsApp"
            >
                {/* Pulsing ring (only when not expanded) */}
                {!expanded && (
                    <span className="absolute inset-0 rounded-none animate-ping bg-[#25D366] opacity-20" />
                )}
                {expanded
                    ? <X className="h-5 w-5" />
                    : <MessageCircle className="h-6 w-6" />
                }
            </button>
        </div>
    );
}
