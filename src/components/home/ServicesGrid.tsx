"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTools, FaCogs, FaAward, FaClipboardCheck, FaBoxOpen, FaAmbulance } from 'react-icons/fa';

const services = [
    {
        icon: FaTools,
        title: 'Pumping Machinery Repair',
        description: 'Expert repair for WKL, MOVI, WKFI, WK/WL, and MEGA series pumps with genuine parts.',
        link: '/services#repair'
    },
    {
        icon: FaCogs,
        title: 'Installation & Commissioning',
        description: 'Professional installation for irrigation, water supply, sewerage, and industrial projects.',
        link: '/services#installation'
    },
    {
        icon: FaAward,
        title: 'KSB Authorized Service',
        description: 'Official service center empaneled by Jal Shakti Vibhag & Shimla Jal Prabandhan.',
        link: '/services#ksb'
    },
    {
        icon: FaClipboardCheck,
        title: 'Preventive Maintenance',
        description: 'Annual maintenance contracts (AMC) and scheduled inspections to prevent breakdowns.',
        link: '/services#maintenance'
    },
    {
        icon: FaBoxOpen,
        title: 'Spare Parts Supply',
        description: '₹10 lakh inventory of genuine OEM spare parts ensuring rapid replacements.',
        link: '/services#parts'
    },
    {
        icon: FaAmbulance,
        title: 'Emergency Repairs',
        description: '24/7 rapid response team available across 6 districts for critical breakdowns.',
        link: '/services#emergency'
    }
];

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Ensure elements are visible if JS fails or before animation
            gsap.set('.service-card', { opacity: 0, y: 30 });

            gsap.to('.service-card', {
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'transform,opacity' // Ensure it stays visible after animation
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-600 font-bold tracking-wider uppercase text-xs mb-4 backdrop-blur-sm">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight" style={{ color: 'var(--dynamic-text-primary)' }}>
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-teal-600 to-cyan-600 font-extrabold">Pumping Solutions</span>
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--dynamic-text-secondary)' }}>
                        From emergency repairs to turnkey installations, we provide end-to-end services
                        backed by 47 years of industry experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="service-card group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-cyan-400/60 transition-all duration-300 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30"
                        >
                            <div className="w-14 h-14 bg-slate-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-400/30 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors" style={{ color: 'var(--dynamic-text-primary)' }}>
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-6 transition-colors" style={{ color: 'var(--dynamic-text-secondary)' }}>
                                {service.description}
                            </p>
                            <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 group-hover:text-cyan-300 transition-all">
                                Learn more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
