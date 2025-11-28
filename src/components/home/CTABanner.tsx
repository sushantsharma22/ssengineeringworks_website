"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CTABanner() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            // FIX 1: Set bg-transparent so the global background shows through
            // FIX 2: Removed the absolute divs that were covering the background
            className="py-24 text-white text-center relative overflow-hidden bg-transparent"
        >

            <div className="container mx-auto px-6 relative z-10 cta-content">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-slate-900 dark:text-white">
                    Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Expert Pumping Service?</span>
                </h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto text-slate-700 dark:text-slate-300 leading-relaxed">
                    Contact us today for a free consultation and service quote.
                    Our team is ready to assist you 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1"
                    >
                        Get Free Quote
                    </Link>
                    <Link
                        href="/services"
                        // Adjusted button style to look good on any background (light or dark)
                        className="px-8 py-4 bg-slate-900/10 dark:bg-white/10 border border-slate-900/20 dark:border-white/20 hover:bg-slate-900/20 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold rounded-full transition-all backdrop-blur-sm"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
