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
        <div className="min-h-screen pt-32 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients - Made darker for better contrast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Network</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We serve 6+ major districts across Himachal Pradesh with rapid response teams and on-site support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Map Visualization */}
                    <div className="relative aspect-[4/3] bg-slate-900/80 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                        {/* Map Grid Background */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* "HIMACHAL" Text - Made brighter and larger */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-7xl md:text-8xl tracking-widest opacity-100 select-none pointer-events-none">
                            HIMACHAL
                        </div>

                        {/* Connecting Lines - Made more visible */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0">
                            <path
                                d="M30% 65% L40% 55% L25% 40% M40% 55% L45% 70% L55% 80% L65% 75%"
                                fill="none"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeDasharray="6 6"
                                className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                            />
                        </svg>

                        {/* District Pins */}
                        {districts.map((district) => (
                            <motion.button
                                key={district.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setActiveDistrict(district)}
                                className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-white shadow-lg z-20 flex items-center justify-center transition-all duration-300 ${activeDistrict.id === district.id
                                    ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] scale-110'
                                    : 'bg-slate-700 hover:bg-blue-400'
                                    }`}
                                style={{ left: `${district.x}%`, top: `${district.y}%` }}
                            >
                                {/* Inner dot */}
                                <div className={`w-2 h-2 rounded-full ${activeDistrict.id === district.id ? 'bg-white' : 'bg-slate-400'}`} />

                                {activeDistrict.id === district.id && (
                                    <motion.div
                                        layoutId="pulse"
                                        className="absolute w-full h-full rounded-full bg-blue-500 opacity-40 animate-ping"
                                    />
                                )}

                                {/* Label on hover or active */}
                                <span className={`absolute top-full mt-2 px-2 py-1 rounded bg-slate-900/90 text-xs text-white font-medium whitespace-nowrap transition-opacity ${activeDistrict.id === district.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}>
                                    {district.name}
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* District Details Card */}
                    <div>
                        <motion.div
                            key={activeDistrict.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{activeDistrict.name}</h2>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${activeDistrict.type === 'Headquarters'
                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                        }`}>
                                        {activeDistrict.type}
                                    </span>
                                </div>
                            </div>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {activeDistrict.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors">
                                        <FaTools className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Services Available</p>
                                        <p className="text-sm text-slate-400">Repair, Installation, Maintenance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors">
                                        <FaPhoneAlt className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Local Support</p>
                                        <p className="text-sm text-slate-400">24/7 Emergency Response</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* HQ Info Box */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-amber-900/10 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /> Workshop Location
                            </h3>
                            <p className="text-sm text-amber-200/80 leading-relaxed">
                                <strong className="text-amber-100 text-base">M/S S.S. Engineering Works</strong><br />
                                Near Bus Stand, Hamirpur Road, Una - 174303<br />
                                <span className="opacity-70">(Just 4 km from District HQ)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
