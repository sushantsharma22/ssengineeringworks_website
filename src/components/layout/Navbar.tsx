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
                // Home Page: Transparent -> Glass Dark on scroll
                gsap.to(navRef.current, {
                    scrollTrigger: {
                        start: 'top top',
                        end: '+=100',
                        scrub: true,
                    },
                    height: '70px',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                });
            } else {
                // Inner Pages: Always Glass Dark
                gsap.set(navRef.current, {
                    height: '70px',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
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
            className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-6 lg:px-12 transition-all duration-300 bg-transparent"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    SS
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight" style={{ color: isHome ? 'var(--dynamic-text-primary)' : 'white' }}>
                        SS Engineering
                    </span>
                    <span className="text-xs tracking-wider" style={{ color: isHome ? 'var(--dynamic-text-secondary)' : '#9ca3af' }}>
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
                        className={`text-sm font-medium transition-colors hover:text-secondary`}
                        style={{
                            color: pathname === link.href
                                ? '#3b82f6' // Secondary color
                                : isHome ? 'var(--dynamic-text-secondary)' : '#d1d5db' // Dynamic or Gray-300
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
                <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-secondary hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-500/20"
                >
                    Get Service Quote
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-2xl z-50 focus:outline-none"
                style={{ color: isHome ? 'var(--dynamic-text-primary)' : 'white' }}
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
                        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-2xl font-bold ${pathname === link.href ? 'text-secondary' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-4 px-8 py-3 bg-secondary text-white text-lg font-semibold rounded-full"
                        >
                            Get Service Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
