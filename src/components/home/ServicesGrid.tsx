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
        description: '₹25L+ inventory of genuine OEM spare parts ensuring rapid replacements.',
        link: '/services#parts'
    },
    {
        icon: FaAmbulance,
        title: 'Emergency Repairs',
        description: '24/7 rapid response team available across 6+ districts for critical breakdowns.',
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
                clearProps: 'transform,opacity'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/30 border border-white/40 text-slate-800 font-bold tracking-wider uppercase text-xs mb-4 backdrop-blur-sm shadow-sm">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading tracking-tight text-slate-900">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold">Pumping Solutions</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        From emergency repairs to turnkey installations, we provide end-to-end services
                        backed by 55+ years of industry experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="service-card group bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                        >
                            <div className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-400/30 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-6 text-slate-700 transition-colors">
                                {service.description}
                            </p>
                            <span className="text-blue-600 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 group-hover:text-blue-700 transition-all">
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
