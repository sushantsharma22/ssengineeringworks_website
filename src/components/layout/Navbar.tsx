"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'Workshop', href: '/workshop' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    const isHome = pathname === '/';

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (isHome) {
                // 1. Start State (At Top): 
                // Completely transparent, taller, no blur, no shadow.
                // This lets the "Sun Animation" show through perfectly.
                gsap.set(navRef.current, {
                    backgroundColor: 'rgba(15, 23, 42, 0)', // 0 opacity = Invisible
                    backdropFilter: 'blur(0px)',
                    height: '100px', // Spacious
                    boxShadow: 'none',
                    borderBottom: 'none',
                });

                // 2. Animation (On Scroll):
                // Smoothly morphs into the Glass Bar
                gsap.to(navRef.current, {
                    scrollTrigger: {
                        start: 'top top',
                        end: '+=150', // Transitions over 150px of scrolling
                        scrub: true,  // smooth scrubbing
                    },
                    backgroundColor: 'rgba(15, 23, 42, 0.7)', // Becomes dark/glassy
                    backdropFilter: 'blur(12px)', // Blur fades in
                    height: '80px', // Shrinks slightly
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Shadow appears
                    ease: "none"
                });
            } else {
                // Inner Pages: Always Glass (No hard border)
                gsap.set(navRef.current, {
                    height: '80px',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                });
            }
        }, navRef);

        return () => ctx.revert();
    }, [isHome]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            ref={navRef}
            // Default classes (will be overridden by GSAP above)
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-300"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
                {/* Logo Box: Glass style to match the vibe */}
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                    SS
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight text-white drop-shadow-md">
                        S.S. Engineering
                    </span>
                    <span className="text-xs tracking-wider text-blue-200">
                        WORKS
                    </span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${pathname === link.href
                                ? 'text-blue-400 drop-shadow-md'
                                : 'text-white/80 hover:text-white hover:drop-shadow-md'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
                <Link
                    href="/contact"
                    // Button: Glass style, no border, blends with background
                    className="px-6 py-2.5 bg-white/10 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all shadow-lg backdrop-blur-sm hover:scale-105"
                >
                    Get Service Quote
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-2xl z-50 focus:outline-none text-white drop-shadow-md"
            >
                {isOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-2xl font-bold ${pathname === link.href ? 'text-blue-400' : 'text-white hover:text-blue-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all shadow-lg"
                        >
                            Get Service Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
