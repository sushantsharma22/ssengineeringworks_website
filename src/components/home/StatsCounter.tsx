"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendarAlt, FaUsers, FaMapMarkedAlt, FaBox } from 'react-icons/fa';
import { getAssetPath } from '@/lib/config';

const stats = [
    { icon: FaCalendarAlt, value: 55, label: 'Years Experience', suffix: '+' },
    { icon: FaUsers, value: 14, label: 'Skilled Technicians', suffix: '+' },
    { icon: FaMapMarkedAlt, value: 6, label: 'Districts Covered', suffix: '+' },
    { icon: FaBox, value: 25, label: 'Spare Parts Inventory', suffix: 'L+' },
];

export default function StatsCounter() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animate numbers counting up
            const counters = gsap.utils.toArray('.stat-number');

            counters.forEach((counter: any, index) => {
                const target = stats[index].value;

                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        ease: 'power1.inOut',
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play reverse play reverse',
                        },
                        onUpdate: function () {
                            counter.innerText = Math.ceil(counter.innerText);
                        }
                    }
                );
            });

            // Icons animate in
            gsap.fromTo('.stat-icon',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 md:py-20 bg-white/10 backdrop-blur-sm relative overflow-hidden border-y border-white/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-center" style={{ backgroundImage: `url('${getAssetPath('/grid.svg')}')` }} />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/5 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                            <div className="stat-icon w-16 h-16 mx-auto bg-slate-700/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/10 group-hover:shadow-blue-500/30 border border-slate-600/40 group-hover:border-blue-500/50 group-hover:-translate-y-2">
                                <stat.icon size={32} />
                            </div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-heading text-slate-900">
                                <span className="stat-number">0</span>
                                {stat.suffix}
                            </div>
                            <div className="text-sm uppercase tracking-wider font-bold text-slate-700">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
