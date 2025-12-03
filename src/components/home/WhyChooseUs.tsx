"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAward, FaCheckCircle, FaMapMarkerAlt, FaHandshake, FaBolt, FaUserCog } from 'react-icons/fa';

const features = [
    {
        title: 'Pioneer Status',
        description: 'First comprehensive pumping machinery service provider in Himachal Pradesh since 1970.',
        icon: FaAward,
        image: '/ssengineeringworks_website/images/1764305046059~2.jpg'
    },
    {
        title: 'Government Approved',
        description: 'Empaneled service provider for Jal Shakti Vibhag and other government departments.',
        icon: FaCheckCircle,
        image: '/ssengineeringworks_website/images/1000146118.jpg'
    },
    {
        title: 'Wide Coverage',
        description: 'Serving 6+ districts: Una, Bilaspur, Hamirpur, Kangra, Shimla, and Solan.',
        icon: FaMapMarkerAlt,
        image: '/ssengineeringworks_website/images/1000146120.jpg'
    }
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Parallax for images
            gsap.utils.toArray('.why-us-image').forEach((img: any) => {
                gsap.to(img, {
                    y: 50,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            });

            // Text fade in
            gsap.utils.toArray('.why-us-content').forEach((content: any) => {
                gsap.from(content, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: content,
                        start: 'top 80%',
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-transparent overflow-hidden relative">
            {/* Smooth Gradient Background - NO GRID */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/30 border border-white/40 text-slate-800 font-bold tracking-wider uppercase text-xs mb-4 backdrop-blur-sm shadow-sm">
                        Our Advantage
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900">
                        Why Choose S.S. Engineering?
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
                        We combine decades of experience with modern technical expertise to deliver unmatched service quality.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                                    <div className="why-us-image w-full h-[120%] relative -top-[10%]">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 why-us-content">
                                <div className="w-16 h-16 bg-slate-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-400/30 shadow-lg shadow-blue-500/10">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="text-lg leading-relaxed mb-8 border-l-2 border-blue-500/30 pl-4 text-slate-700">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {index === 0 && (
                                        <>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> 55+ Years Combined Experience
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> Established Legacy
                                            </li>
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> Jal Shakti Vibhag Empaneled
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> Shimla Jal Prabandhan Nigam
                                            </li>
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> Rapid Response Team
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <FaCheckCircle className="text-emerald-500" /> Local Presence
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
