"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Text Animation
            gsap.from(textRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.5,
            });

            // Image Animation
            gsap.from(imageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.2,
            });

            // Scroll Indicator
            gsap.to('.scroll-indicator', {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div ref={textRef} className="text-white space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Pioneer Pumping Machinery Services Since 1978
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-heading tracking-tight" style={{ color: 'var(--dynamic-text-primary)' }}>
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-teal-600 to-cyan-600 font-extrabold">Pumping Solutions</span>
                    </h1>

                    <p className="text-lg max-w-xl leading-relaxed border-l-4 border-blue-500/50 pl-6" style={{ color: 'var(--dynamic-text-secondary)' }}>
                        Authorized KSB Service Center with 47 years of excellence.
                        Serving 6 districts with 24/7 emergency support and ₹10L+ spare parts inventory.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative">Get Service Quote</span>
                        </Link>
                        <Link
                            href="/coverage"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all backdrop-blur-sm hover:border-blue-500/30"
                        >
                            View Coverage Areas
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-sm font-mono border-t border-white/5 mt-8" style={{ color: 'var(--dynamic-text-secondary)' }}>
                        <div>
                            <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--dynamic-text-primary)' }}>47+</span>
                            Years Exp.
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div>
                            <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--dynamic-text-primary)' }}>12+</span>
                            Technicians
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div>
                            <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--dynamic-text-primary)' }}>6</span>
                            Districts
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div ref={imageRef} className="relative hidden lg:block h-[600px] w-full perspective-1000">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />

                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-slate-900/50 backdrop-blur-sm transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                        <Image
                            src="/images/Gemini_Generated_Image_iz311hiz311hiz31.png"
                            alt="Industrial Pumping Machinery"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                                <p className="font-bold text-sm tracking-wide uppercase" style={{ color: '#10b981' }}>Authorized Center</p>
                            </div>
                            <p className="text-lg font-bold" style={{ color: 'var(--dynamic-text-primary)' }}>KSB & Major Brands</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 scroll-indicator">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Scroll to explore</span>
                <FaArrowDown className="animate-bounce" />
            </div>
        </section>
    );
}
