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
            gsap.to(sectionRef.current, {
                backgroundPosition: '100% 50%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-transparent text-white text-center relative overflow-hidden"
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/80 to-blue-900/80 z-0" />
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/grid.svg')] bg-center" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight" style={{ color: 'var(--dynamic-text-primary)' }}>
                    Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expert Pumping Service?</span>
                </h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--dynamic-text-secondary)' }}>
                    Contact us today for a free consultation and service quote.
                    Our team is ready to assist you 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1"
                    >
                        Get Free Quote
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all backdrop-blur-sm hover:border-blue-500/30"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
