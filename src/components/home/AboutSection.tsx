"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getAssetPath } from '@/lib/config';

const timelineEvents = [
    { year: '1970', title: 'M.K Industries Founded', description: 'Started as the first comprehensive pumping machinery service provider in HP.' },
    { year: '2001', title: 'S.S. Engineering Works', description: 'Established to expand reach across Una, Bilaspur, and Hamirpur.' },
    { year: '2017', title: 'GST & MSME Certified', description: 'Formalized operations and expanded government contracts.' },
    { year: '2024', title: 'KSB Authorized Center', description: 'Became official service partner for KSB pumps.' },
    { year: '2025', title: 'Market Leader', description: 'Serving 6+ districts with 500+ completed projects.' },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const { fadeInUp } = useScrollAnimation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Timeline line animation
            gsap.from('.timeline-line', {
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 1,
                },
                height: 0,
                ease: 'none',
            });

            // Timeline items
            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item: any, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.8,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
            {/* No background div here - lets the Sun Animation show through */}

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Text Content */}
                    <div className="space-y-8 lg:sticky lg:top-32">
                        {/* Badge: Glass + Dark Text */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/30 border border-white/40 text-slate-900 text-sm font-bold tracking-wide uppercase backdrop-blur-md shadow-sm">
                                About Us
                            </div>
                        </div>

                        {/* Heading: Dark Text */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight text-slate-900 text-center lg:text-left">
                            Building Trust Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 font-extrabold">
                                Engineering Excellence
                            </span>
                        </h2>

                        {/* Paragraphs: Dark Grey Text for readability */}
                        <p className="text-lg leading-relaxed text-slate-700 font-medium">
                            M.K Industries was founded in 1970 as the first comprehensive pumping machinery service provider in Himachal Pradesh.
                            In 2001, S.S. Engineering Works was established to carry forward this legacy, expanding our reach across
                            Una, Bilaspur, Hamirpur, Kangra, Shimla, and Solan districts.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-700 font-medium">
                            We take pride in being the pioneer service provider in the region, offering authorized KSB services
                            and maintaining a massive inventory of spare parts to ensure minimum downtime for our clients.
                        </p>

                        <div className="pt-4">
                            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                <Image
                                    src={getAssetPath('/images/1000145912.jpg')}
                                    alt="Workshop Team"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div ref={timelineRef} className="relative pl-8 lg:pl-0">
                        {/* Center Line: Semi-transparent dark line */}
                        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-900/20 timeline-line origin-top" />

                        <div className="space-y-12">
                            {timelineEvents.map((event, index) => (
                                <div key={event.year} className={`timeline-item relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}>
                                    {/* Dot */}
                                    <div className="absolute left-[-5px] lg:left-1/2 top-0 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white/50 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />

                                    {/* Content */}
                                    <div className="lg:w-1/2 pt-1">
                                        {/* GLASS CARD: White/20 bg + Blur + Dark Text */}
                                        <div className={`bg-white/20 backdrop-blur-xl p-6 rounded-xl border border-white/30 shadow-lg hover:bg-white/30 transition-all hover:shadow-xl ${index % 2 === 0 ? 'lg:text-right' : ''
                                            }`}>
                                            <span className="text-3xl md:text-4xl font-bold block mb-2 font-mono text-blue-700">
                                                {event.year}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2 text-slate-900">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-slate-800 font-medium">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
