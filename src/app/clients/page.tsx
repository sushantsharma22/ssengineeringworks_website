"use client";

import { motion } from 'framer-motion';
import { FaBuilding, FaTint, FaIndustry, FaLeaf, FaFish, FaWater } from 'react-icons/fa';

const clients = [
    {
        name: 'Jal Shakti Vibhag, HP',
        description: 'Execution of water supply schemes, pumping machinery repair, and maintenance across 6 districts.',
        icon: FaTint,
        color: 'bg-blue-50 text-blue-600'
    },
    {
        name: 'Shimla Jal Prabandhan Nigam',
        description: 'Maintenance of critical water infrastructure and emergency pumping solutions for the state capital.',
        icon: FaBuilding,
        color: 'bg-indigo-50 text-indigo-600'
    },
    {
        name: 'Agriculture Department, HP',
        description: 'Installation and commissioning of irrigation pump sets for agricultural development projects.',
        icon: FaLeaf,
        color: 'bg-green-50 text-green-600'
    },
    {
        name: 'Industry Department, HP',
        description: 'Industrial pumping solutions and preventive maintenance for state industrial areas.',
        icon: FaIndustry,
        color: 'bg-slate-50 text-slate-600'
    },
    {
        name: 'Fisheries Department, HP',
        description: 'Specialized circulation pumps and aeration systems for aquaculture projects.',
        icon: FaFish,
        color: 'bg-cyan-50 text-cyan-600'
    },
    {
        name: 'Municipal Corporations',
        description: 'Sewage and drainage pumping machinery maintenance for urban local bodies.',
        icon: FaWater,
        color: 'bg-teal-50 text-teal-600'
    }
];

export default function ClientsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Our Valued <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Clients</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Trusted by major government departments and industrial leaders across Himachal Pradesh for over 4 decades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group hover:bg-white/10"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${client.color.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-')} group-hover:scale-110 transition-transform border border-white/5`}>
                                <client.icon />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{client.name}</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                {client.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sectors Section */}
                <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-12 font-heading">Sectors We Serve</h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {['Irrigation', 'Water Supply', 'Sewerage', 'Industrial', 'Infrastructure'].map((sector, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 font-medium hover:bg-white/20 hover:border-blue-500/30 hover:text-blue-300 transition-all cursor-default shadow-lg">
                                    {sector}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
