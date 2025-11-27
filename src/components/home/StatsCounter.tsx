"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendarAlt, FaUsers, FaMapMarkedAlt, FaBox } from 'react-icons/fa';

const stats = [
    { icon: FaCalendarAlt, value: 47, label: 'Years Experience', suffix: '+' },
    { icon: FaUsers, value: 14, label: 'Skilled Technicians', suffix: '+' },
    { icon: FaMapMarkedAlt, value: 6, label: 'Districts Covered', suffix: '' },
    { icon: FaBox, value: 10, label: 'Spare Parts Inventory', suffix: 'L+' },
];

export default function StatsCounter() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Numbers count up
            gsap.from('.stat-number', {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            // Icons pulse
            gsap.from('.stat-icon', {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-transparent text-white relative overflow-hidden border-y border-white/5">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/10 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <div className="stat-icon w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20 group-hover:shadow-blue-500/30 border border-white/5 group-hover:border-blue-500/50 group-hover:-translate-y-2">
                                <stat.icon size={32} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading" style={{ color: 'var(--dynamic-text-primary)' }}>
                                <span ref={(el) => {
                                    if (el) counterRefs.current[index] = el;
                                }}>0</span>
                                {stat.suffix}
                            </div>
                            <div className="text-sm uppercase tracking-wider font-bold" style={{ color: 'var(--dynamic-text-secondary)' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
