"use client";

import { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export default function DynamicBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const { scrollYProgress } = useScroll();
    const [stars, setStars] = useState<{ top: string; left: string; width: string; height: string; duration: string; delay: string }[]>([]);

    // Generate stars only on client to avoid hydration mismatch
    useEffect(() => {
        const generatedStars = [...Array(100)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            duration: `${Math.random() * 3 + 2}s`,
            delay: `${Math.random() * 2}s`
        }));
        setStars(generatedStars);
    }, []);

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // --- CLEAN YELLOW TO BLUE GRADIENT ---
    const skyGradient = useTransform(smoothProgress,
        [0, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1],
        [
            'linear-gradient(to bottom, #1e3a8a 0%, #facc15 100%)',           // 0.00 Navy → Yellow (sunrise)
            'linear-gradient(to bottom, #1e40af 0%, #fde047 100%)',           // 0.10 Blue → Bright yellow
            'linear-gradient(to bottom, #2563eb 0%, #fef3c7 100%)',           // 0.20 Bright blue → Pale yellow
            'linear-gradient(to bottom, #3b82f6 0%, #fef9c3 100%)',           // 0.30 Sky blue → Cream
            'linear-gradient(to bottom, #60a5fa 0%, #fffbeb 100%)',           // 0.40 Light blue → Off-white
            'linear-gradient(to bottom, #93c5fd 0%, #f8fafc 100%)',           // 0.50 Very light blue → White
            'linear-gradient(to bottom, #38bdf8 0%, #e0f2fe 100%)',           // 0.60 Sky blue (day)
            'linear-gradient(to bottom, #0ea5e9 0%, #bae6fd 100%)',           // 0.70 Bright blue
            'linear-gradient(to bottom, #0284c7 0%, #fed7aa 100%)',           // 0.80 Blue → Peach (golden hour)
            'linear-gradient(to bottom, #1e3a8a 0%, #fb923c 100%)',           // 0.90 Navy → Orange (sunset)
            'linear-gradient(to bottom, #0f172a 0%, #1e3a8a 100%)'            // 1.00 Dark navy (night)
        ]
    );

    // --- VIBRANT TEXT COLORS WITH HIGH CONTRAST ---
    // Dark backgrounds (0-0.10, 0.90-1.0): WHITE text
    // Light backgrounds (0.10-0.90): DEEP NAVY text
    // Accents: BRIGHT CYAN throughout
    const textColorPrimary = useTransform(smoothProgress,
        [0, 0.10, 0.90, 1],
        ['#ffffff', '#0c4a6e', '#0c4a6e', '#ffffff']  // White -> Deep Navy -> White
    );

    const textColorSecondary = useTransform(smoothProgress,
        [0, 0.10, 0.90, 1],
        ['#e0f2fe', '#075985', '#075985', '#e0f2fe']  // Light Cyan -> Dark Cyan -> Light Cyan
    );

    const accentColor = useTransform(smoothProgress,
        [0, 0.10, 0.90, 1],
        ['#22d3ee', '#0891b2', '#0891b2', '#22d3ee']  // Bright Cyan throughout
    );

    // Update CSS variables globally
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (isHome) {
            document.documentElement.style.setProperty('--dynamic-text-primary', textColorPrimary.get());
            document.documentElement.style.setProperty('--dynamic-text-secondary', textColorSecondary.get());
            document.documentElement.style.setProperty('--dynamic-accent', accentColor.get());
        } else {
            document.documentElement.style.setProperty('--dynamic-text-primary', '#f8fafc');
            document.documentElement.style.setProperty('--dynamic-text-secondary', '#94a3b8');
            document.documentElement.style.setProperty('--dynamic-accent', '#38bdf8');
        }
    });

    useEffect(() => {
        if (!isHome) {
            document.documentElement.style.setProperty('--dynamic-text-primary', '#f8fafc');
            document.documentElement.style.setProperty('--dynamic-text-secondary', '#94a3b8');
            document.documentElement.style.setProperty('--dynamic-accent', '#38bdf8');
        }
    }, [isHome]);

    // --- SMOOTH CONSTANT-SPEED SUN ANIMATION ---
    const sunY = useTransform(smoothProgress,
        [0, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1],
        ['100%', '85%', '70%', '55%', '40%', '25%', '15%', '25%', '40%', '70%', '100%']
    );
    const sunX = useTransform(smoothProgress, [0, 0.90], ['10%', '85%']);
    const sunOpacity = useTransform(smoothProgress, [0, 0.10, 0.15, 0.85, 0.90, 1], [0, 0, 1, 1, 0, 0]);
    const sunColor = useTransform(smoothProgress,
        [0, 0.20, 0.40, 0.60, 0.80, 0.90],
        ['#fbbf24', '#fde047', '#fef08a', '#fef08a', '#fbbf24', '#fb923c']
    );

    // --- MOON ANIMATION (0.7 to 1.0) ---
    const moonY = useTransform(smoothProgress, [0.7, 1], ['110%', '20%']);
    const moonX = useTransform(smoothProgress, [0.7, 1], ['80%', '20%']);
    const moonOpacity = useTransform(smoothProgress, [0.7, 0.8, 1], [0, 1, 1]);

    // Stars Opacity - Visible at night, fade during day
    const starsOpacity = useTransform(smoothProgress, [0, 0.15, 0.80, 0.95], [1, 0, 0, 1]);

    // Cloud Animation
    const cloudX = useTransform(smoothProgress, [0, 1], [0, 100]);

    // --- RENDER ---
    return (
        <>
            {!isHome ? (
                // Static Night Theme for Inner Pages
                <div className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
                </div>
            ) : (
                // Dynamic Day/Night Cycle for Home Page
                <motion.div
                    ref={containerRef}
                    style={{ background: skyGradient }}
                    className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700"
                >
                    {/* Stars (Visible at Night) */}
                    <motion.div
                        style={{ opacity: starsOpacity }}
                        className="absolute inset-0"
                    >
                        {stars.map((star, i) => (
                            <div
                                key={i}
                                className="absolute bg-white rounded-full animate-pulse"
                                style={{
                                    top: star.top,
                                    left: star.left,
                                    width: star.width,
                                    height: star.height,
                                    animationDuration: star.duration,
                                    animationDelay: star.delay
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* THE SUN */}
                    <motion.div
                        style={{
                            left: sunX,
                            top: sunY,
                            opacity: sunOpacity,
                            backgroundColor: sunColor,
                            boxShadow: '0 0 100px 40px rgba(253, 224, 71, 0.4)'
                        }}
                        className="absolute w-32 h-32 rounded-full blur-md z-0"
                    >
                        <div className="absolute inset-8 bg-white/90 rounded-full blur-md" />
                    </motion.div>

                    {/* THE MOON */}
                    <motion.div
                        style={{
                            left: moonX,
                            top: moonY,
                            opacity: moonOpacity,
                            boxShadow: '0 0 60px 10px rgba(255, 255, 255, 0.2)'
                        }}
                        className="absolute w-28 h-28 rounded-full bg-slate-200 blur-sm z-0"
                    >
                        <div className="absolute inset-4 bg-slate-100 rounded-full blur-md" />
                        {/* Moon Craters */}
                        <div className="absolute top-6 left-8 w-4 h-4 bg-slate-300 rounded-full opacity-50" />
                        <div className="absolute bottom-8 right-6 w-6 h-6 bg-slate-300 rounded-full opacity-50" />
                    </motion.div>

                    {/* Cloud/Atmosphere Layers */}
                    <motion.div
                        style={{ x: cloudX }}
                        className="absolute top-[20%] left-[-10%] w-[500px] h-[200px] bg-white/5 blur-[80px] rounded-full"
                    />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>
            )}
        </>
    );
}
