"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const galleryImages = [
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.30.jpeg', alt: 'Workshop Interior' },
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.31.jpeg', alt: 'Technician at Work' },
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.32.jpeg', alt: 'Pump Repair' },
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.33.jpeg', alt: 'Spare Parts Inventory' },
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.34.jpeg', alt: 'Testing Facility' },
    { src: '/images/WhatsApp Image 2025-11-27 at 00.56.35.jpeg', alt: 'Completed Project' },
];

export default function WorkshopPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Header */}
            <div className="container mx-auto px-6 lg:px-12 mb-16 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Workshop & Team</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    State-of-the-art repair facility located in Una, equipped with advanced diagnostic tools and a massive spare parts inventory.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-6 lg:px-12 mb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-bold text-lg">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm border-y border-white/5 py-20 relative">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Expert Technical Team</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our team consists of 12-14 highly skilled technicians with decades of combined experience in pumping machinery.
                                Regular training ensures they stay updated with the latest technologies from KSB and other major manufacturers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'KSB Authorized Technicians',
                                    '47 Years Combined Experience',
                                    'Specialized in WKL/MOVI Series',
                                    'Government Approved Staff',
                                    'Safety Certified',
                                    '24/7 Emergency Availability'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-300">
                                        <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                                {/* Placeholder for team photo */}
                                <Image
                                    src="/images/WhatsApp Image 2025-11-27 at 00.56.36.jpeg"
                                    alt="Technical Team"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-blue-600/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl border border-white/10">
                                <p className="text-4xl font-bold font-mono mb-1">500+</p>
                                <p className="text-sm opacity-90">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
