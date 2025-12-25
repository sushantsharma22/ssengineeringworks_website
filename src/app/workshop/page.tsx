"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { getAssetPath } from '@/lib/config';

// UPDATED GALLERY LIST - using relative paths, getAssetPath will add basePath dynamically
const imageNames = [
    'WhatsApp Image 2025-11-27 at 00.56.30 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.30.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.31 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.31 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.31.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.32 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.32 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.32.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.33 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.33 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.33.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.34 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.34 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.34.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.35 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.35 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.35.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.36 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.36.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.37 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.37 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.37.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.38 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.38 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.38.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.39 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.39 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.39.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.40 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.40 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.40.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.41 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.41 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.41.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.42 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.42 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.42.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.43 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.43 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.43.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.44 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.44 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.44.jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.45 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.45 (2).jpeg',
    'WhatsApp Image 2025-11-27 at 00.56.45.jpeg',
    'WhatsApp Image 2025-11-27 at 00.57.26.jpeg',
    'WhatsApp Image 2025-11-27 at 00.58.02 (1).jpeg',
    'WhatsApp Image 2025-11-27 at 00.58.02.jpeg',
    'WhatsApp Image 2025-11-27 at 00.58.03.jpeg',
];

const allGalleryImages = imageNames.map(name => ({
    src: getAssetPath(`/images/${name}`),
    alt: ''
}));


export default function WorkshopPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden">
            {/* Atmospheric Background */}
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950" />

            {/* Header Section */}
            <div className="container mx-auto px-6 lg:px-12 mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Workshop & Team</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        A state-of-the-art repair facility in Una, equipped with advanced diagnostic tools and a massive spare parts inventory to ensure minimal downtime for our clients.
                    </p>
                </motion.div>
            </div>

            {/* Professional Gallery Grid */}
            <div className="container mx-auto px-6 lg:px-12 mb-24 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allGalleryImages.map((img, index) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900"
                        >
                            <Image
                                src={img.src}
                                alt="Workshop Image"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team & Expertise Section */}
            <div className="bg-slate-900/50 backdrop-blur-md border-y border-white/5 py-24 relative">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">An Expert Technical Team</h2>
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                    Our team consists of highly skilled technicians with decades of combined experience. Regular training ensures they stay updated with the latest technologies from KSB and other major manufacturers.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                    {[
                                        'KSB Authorized Technicians',
                                        '55+ Years Combined Experience',
                                        'Specialists in WKL/MOVI Series',
                                        'Government Approved Staff',
                                        'Certified Safety Engineers',
                                        '24/7 Emergency Availability'
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-slate-300">
                                            <FaCheckCircle className="text-emerald-400 flex-shrink-0 text-xl" />
                                            <span className="text-base font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Featured Team Image */}
                        <div className="lg:w-1/2 w-full relative mt-10 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                                    <Image
                                        src={getAssetPath('/images/WhatsApp Image 2025-11-27 at 00.56.36.jpeg')}
                                        alt="Technical Team Group Photo"
                                        fill
                                        sizes="(max-width: 1200px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 lg:bottom-6 bg-blue-600/90 backdrop-blur-xl text-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/10 w-[90%] lg:max-w-xs text-center lg:text-left">
                                    <p className="text-4xl lg:text-5xl font-bold font-mono mb-2">500+</p>
                                    <p className="text-sm lg:text-base opacity-90 tracking-wide font-medium">Successful Projects Completed Across 6+ Districts</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
