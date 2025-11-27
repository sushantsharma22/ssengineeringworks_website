"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const clients = [
    "Jal Shakti Vibhag",
    "Shimla Jal Prabandhan Nigam",
    "KSB Pumps",
    "Agriculture Dept HP",
    "Industry Dept HP",
    "Horticulture Dept HP",
    "Fisheries Dept HP",
    "Public Works Dept",
];

export default function ClientMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Infinite scroll animation
            const track = trackRef.current;
            if (!track) return;

            const totalWidth = track.scrollWidth;
            const viewWidth = marqueeRef.current?.offsetWidth || 0;

            // Clone items for seamless loop if needed, but CSS marquee is often smoother for simple text
            // Here using GSAP for control

            gsap.to(track, {
                x: "-50%", // Move half way (assuming we duplicated content)
                duration: 20,
                ease: "none",
                repeat: -1,
            });

        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16 bg-transparent border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Trusted By Government & Industry Leaders</p>
            </div>

            <div ref={marqueeRef} className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <div ref={trackRef} className="flex gap-16 w-max px-8">
                    {/* Double the list for infinite loop effect */}
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[200px] h-24 opacity-40 hover:opacity-100 transition-all duration-300"
                        >
                            <span className="text-xl md:text-2xl font-bold font-heading whitespace-nowrap hover:text-blue-400 transition-colors cursor-default" style={{ color: 'var(--dynamic-text-primary)' }}>
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
