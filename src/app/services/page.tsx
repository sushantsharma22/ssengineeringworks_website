"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaCogs, FaAward, FaClipboardCheck, FaBoxOpen, FaAmbulance, FaChevronDown } from 'react-icons/fa';

const services = [
    {
        id: 'repair',
        title: 'Pumping Machinery Repair & Maintenance',
        icon: FaTools,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    We provide comprehensive repair services for a wide range of pumping machinery, ensuring optimal performance and longevity.
                    Our workshop is equipped with state-of-the-art diagnostic tools to identify issues accurately.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-white/5">
                        <h4 className="font-bold text-blue-400 mb-2">Supported Models</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                            <li>WKL Series</li>
                            <li>MOVI Series</li>
                            <li>WKFI Series</li>
                            <li>WK/WL Series</li>
                            <li>MEGA Series</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-white/5">
                        <h4 className="font-bold text-blue-400 mb-2">Service Highlights</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                            <li>48-72 hours turnaround</li>
                            <li>Genuine spare parts</li>
                            <li>Post-repair load testing</li>
                            <li>Warranty on repairs</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'installation',
        title: 'Installation & Commissioning',
        icon: FaCogs,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    From site survey to final testing, our expert team handles the complete installation process for various sectors.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400">
                    <li><strong className="text-white">Sectors:</strong> Irrigation, Water Supply, Sewerage, Industrial Applications</li>
                    <li><strong className="text-white">Planning:</strong> Detailed site survey and hydraulic calculations</li>
                    <li><strong className="text-white">Execution:</strong> Professional installation by skilled technicians</li>
                    <li><strong className="text-white">Training:</strong> Operational training for on-site staff</li>
                </ul>
            </div>
        )
    },
    {
        id: 'ksb',
        title: 'KSB Authorized Service Center',
        icon: FaAward,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    As an official KSB partner, we adhere to global standards of service and maintenance.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">Why Choose Authorized Service?</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2">✓ Access to proprietary technical data</li>
                        <li className="flex items-center gap-2">✓ Factory-trained technicians</li>
                        <li className="flex items-center gap-2">✓ Original KSB spare parts</li>
                        <li className="flex items-center gap-2">✓ Validates product warranty</li>
                    </ul>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                    Empaneled by Jal Shakti Vibhag & Shimla Jal Prabandhan Nigam Ltd.
                </p>
            </div>
        )
    },
    {
        id: 'maintenance',
        title: 'Preventive Maintenance (AMC)',
        icon: FaClipboardCheck,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    Minimize downtime and extend equipment life with our Annual Maintenance Contracts.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400">
                    <li>Scheduled quarterly/annual inspections</li>
                    <li>Predictive maintenance using vibration analysis</li>
                    <li>Priority emergency support for AMC clients</li>
                    <li>Detailed health reports for every pump</li>
                </ul>
            </div>
        )
    },
    {
        id: 'parts',
        title: 'Spare Parts Supply',
        icon: FaBoxOpen,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    We maintain a massive inventory of genuine spares to ensure rapid replacements.
                </p>
                <div className="flex items-center gap-4 bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                    <div className="text-3xl font-bold text-emerald-400">₹10L+</div>
                    <div className="text-sm text-emerald-200/80">
                        Worth of inventory maintained in-stock for immediate dispatch.
                    </div>
                </div>
                <p className="text-sm text-slate-400">
                    Genuine OEM parts for KSB, Kirloskar, Crompton, and other major brands.
                </p>
            </div>
        )
    },
    {
        id: 'emergency',
        title: '24/7 Emergency Repairs',
        icon: FaAmbulance,
        content: (
            <div className="space-y-4">
                <p className="text-slate-300">
                    Critical breakdowns don't wait for business hours. Neither do we.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400">
                    <li>Rapid response team for 6 districts</li>
                    <li>Mobile workshop vehicle for on-site repairs</li>
                    <li>Emergency hotline support</li>
                    <li>Temporary backup pump arrangement (subject to availability)</li>
                </ul>
            </div>
        )
    }
];

export default function ServicesPage() {
    const [openId, setOpenId] = useState<string | null>('repair');

    return (
        <div className="min-h-screen pt-24 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Header */}
            <div className="relative z-10 mb-12">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        From repair to installation, we handle all your pumping equipment needs with
                        47 years of proven expertise across Himachal Pradesh.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
                <div className="space-y-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <button
                                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-colors ${openId === service.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-blue-400 border border-white/10'
                                        }`}>
                                        <service.icon />
                                    </div>
                                    <h3 className={`text-xl font-bold transition-colors ${openId === service.id ? 'text-blue-400' : 'text-white'
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: openId === service.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-slate-400"
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 border-t border-white/5">
                                            <div className="pt-6 text-slate-300">
                                                {service.content}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
