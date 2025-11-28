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
            gsap.from(textRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.5,
            });

            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.3,
            });

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
            className="relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-20 overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Hero Image / Logo - HIDDEN ON MOBILE AS REQUESTED */}
                <div ref={imageRef} className="hidden lg:hidden items-center justify-center h-[300px] w-full mb-8">
                    {/* Content removed for mobile */}
                </div>

                {/* Text Content */}
                <div ref={textRef} className="space-y-8 text-center lg:text-left">
                    {/* Badge - Desktop Only */}
                    <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/40 backdrop-blur-xl border border-white/20 text-white text-sm font-medium shadow-lg">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                        </span>
                        Pioneer Pumping Machinery Services Since 1970
                    </div>

                    {/* Main Heading with 3D/Gradient Effect */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.95] tracking-tight drop-shadow-2xl">
                        <span className="block text-white drop-shadow-md">Expert</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 drop-shadow-sm pb-2 mr-2">
                            Pumping
                        </span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 drop-shadow-sm pb-2">
                            Solutions
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed font-light drop-shadow-md">
                        Authorized KSB Service Center with 55+ years of excellence.
                        Serving 6+ districts with 24/7 emergency support and ₹25L+ spare parts inventory.
                    </p>

                    {/* Buttons - CENTERED */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 text-center"
                        >
                            Get Service Quote
                        </Link>
                        <Link
                            href="/coverage"
                            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/10 text-center"
                        >
                            View Coverage Areas
                        </Link>
                    </div>

                    {/* Stats Section - VISIBILITY FIXED HERE */}
                    {/* Stats Section - VISIBILITY FIXED HERE */}
                    <div className="mt-8 bg-slate-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-lg w-full mx-auto lg:mx-0">
                        <div className="text-center sm:text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-1 drop-shadow-sm">55+</div>
                            <div className="text-sm text-blue-200 font-medium tracking-wide uppercase">Years Exp.</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-white/20" />
                        <div className="text-center sm:text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-1 drop-shadow-sm">12+</div>
                            <div className="text-sm text-blue-200 font-medium tracking-wide uppercase">Technicians</div>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-white/20" />
                        <div className="text-center sm:text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-1 drop-shadow-sm">6+</div>
                            <div className="text-sm text-blue-200 font-medium tracking-wide uppercase">Districts</div>
                        </div>
                    </div>

                    {/* Pioneer Badge - Mobile Only (Relative Flow) */}
                    <div className="flex justify-center lg:hidden mt-8 pb-4">
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/40 backdrop-blur-xl border border-white/20 text-white text-xs font-medium shadow-lg max-w-[90vw]">
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                            </span>
                            <span className="text-center">Pioneer Pumping Machinery Services Since 1970</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Logo - DESKTOP VERSION */}
                <div className="relative hidden lg:flex items-center justify-center h-[650px]">
                    {/* Subtle glow effect behind logo */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    </div>

                    {/* Logo Image */}
                    <div className="relative w-[500px] h-[500px]">
                        <Image
                            src="/images/1000146046.jpg"
                            alt="S.S. Engineering Works"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Authorized Badge */}
                    {/* Authorized Badge (Desktop) */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/30 px-8 py-4 rounded-2xl shadow-2xl ring-1 ring-white/10 hidden lg:block">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                            <div>
                                <div className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase mb-1">
                                    Authorized Center
                                </div>
                                <div className="text-lg font-bold text-white tracking-wide">KSB & Major Brands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pioneer Badge - Removed from here (moved to relative flow) */}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 scroll-indicator text-white/70 drop-shadow-md animate-bounce hidden lg:block">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll to explore</span>
                <FaArrowDown className="text-lg" />
            </div>
        </section>
    );
}