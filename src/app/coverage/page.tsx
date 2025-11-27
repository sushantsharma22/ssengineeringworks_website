"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaTools, FaPhoneAlt } from 'react-icons/fa';

const districts = [
    { id: 'una', name: 'Una', x: 30, y: 65, type: 'Headquarters', description: 'Main Workshop & Office' },
    { id: 'hamirpur', name: 'Hamirpur', x: 40, y: 55, type: 'Service Area', description: 'On-site repairs available' },
    { id: 'bilaspur', name: 'Bilaspur', x: 45, y: 70, type: 'Service Area', description: 'Full service coverage' },
    { id: 'kangra', name: 'Kangra', x: 25, y: 40, type: 'Service Area', description: 'Emergency support' },
    { id: 'solan', name: 'Solan', x: 55, y: 80, type: 'Service Area', description: 'Installation & maintenance' },
    { id: 'shimla', name: 'Shimla', x: 65, y: 75, type: 'Service Area', description: 'KSB authorized center' },
];

export default function CoveragePage() {
    const [activeDistrict, setActiveDistrict] = useState(districts[0]);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Coverage</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We serve 6 major districts across Himachal Pradesh with rapid response teams and on-site support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Map Visualization */}
                    <div className="relative aspect-[4/3] bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-6xl opacity-100 select-none">
                            HIMACHAL
                        </div>

                        {/* District Pins */}
                        {districts.map((district) => (
                            <motion.button
                                key={district.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setActiveDistrict(district)}
                                className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white shadow-lg z-10 flex items-center justify-center transition-colors ${activeDistrict.id === district.id ? 'bg-blue-500 box-shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-slate-600 hover:bg-blue-400'
                                    }`}
                                style={{ left: `${district.x}%`, top: `${district.y}%` }}
                            >
                                {activeDistrict.id === district.id && (
                                    <motion.div
                                        layoutId="pulse"
                                        className="absolute w-full h-full rounded-full bg-blue-500 opacity-50 animate-ping"
                                    />
                                )}
                            </motion.button>
                        ))}

                        {/* Connecting Lines (Decorative) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                            <path
                                d="M30% 65% L40% 55% L25% 40% M40% 55% L45% 70% L55% 80% L65% 75%"
                                fill="none"
                                stroke="#60A5FA"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                        </svg>
                    </div>

                    {/* District Details */}
                    <div>
                        <motion.div
                            key={activeDistrict.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl border border-blue-500/20">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{activeDistrict.name}</h2>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${activeDistrict.type === 'Headquarters' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                        }`}>
                                        {activeDistrict.type}
                                    </span>
                                </div>
                            </div>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {activeDistrict.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <FaTools className="text-slate-400" />
                                    <div>
                                        <p className="font-bold text-white">Services Available</p>
                                        <p className="text-sm text-slate-400">Repair, Installation, Maintenance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <FaPhoneAlt className="text-slate-400" />
                                    <div>
                                        <p className="font-bold text-white">Local Support</p>
                                        <p className="text-sm text-slate-400">24/7 Emergency Response</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <h3 className="font-bold text-amber-400 mb-2">Workshop Location</h3>
                            <p className="text-sm text-amber-200/80">
                                <strong className="text-amber-200">M/S S.S. Engineering Works</strong><br />
                                Near Bus Stand, Hamirpur Road, Una - 174303<br />
                                (Just 4 km from District HQ)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
