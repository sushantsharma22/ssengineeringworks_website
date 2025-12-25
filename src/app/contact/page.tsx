"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { getAssetPath } from '@/lib/config';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        district: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = encodeURIComponent('New Inquiry from Website');
        const body = encodeURIComponent(
            `Name: ${formState.name}\n` +
            `Phone: ${formState.phone}\n` +
            `Email: ${formState.email}\n` +
            `District: ${formState.district}\n` +
            `Service: ${formState.service}\n\n` +
            `Message:\n${formState.message}`
        );

        window.location.href = `mailto:ssewuna@gmail.com?subject=${subject}&body=${body}`;

        // Simulate short delay for UI feedback
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', phone: '', district: '', service: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundImage: `url('${getAssetPath('/grid.svg')}')` }} />

            {/* Header */}
            <div className="relative z-10 mb-12">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Ready to optimize your pumping machinery? Contact us for expert service, repairs, and consultation.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                        {isSuccess ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                                    <FaEnvelope size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h3>
                                <p className="text-slate-400 mb-2">
                                    Your email client has been opened with a pre-filled message.
                                </p>
                                <p className="text-blue-400 font-semibold text-lg mb-1">
                                    📧 Please click "Send" in your email to complete the inquiry.
                                </p>
                                <p className="text-slate-500 text-sm">
                                    If your email didn't open, you can manually email us at{' '}
                                    <a href="mailto:ssewuna@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                                        ssewuna@gmail.com
                                    </a>
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-8 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-600"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">District *</label>
                                        <select
                                            name="district"
                                            required
                                            value={formState.district}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        >
                                            <option value="" className="bg-slate-900 text-slate-400">Select District</option>
                                            <option value="Una" className="bg-slate-900">Una</option>
                                            <option value="Bilaspur" className="bg-slate-900">Bilaspur</option>
                                            <option value="Hamirpur" className="bg-slate-900">Hamirpur</option>
                                            <option value="Kangra" className="bg-slate-900">Kangra</option>
                                            <option value="Shimla" className="bg-slate-900">Shimla</option>
                                            <option value="Solan" className="bg-slate-900">Solan</option>
                                            <option value="Other" className="bg-slate-900">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">Service Required *</label>
                                        <select
                                            name="service"
                                            required
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        >
                                            <option value="" className="bg-slate-900 text-slate-400">Select Service</option>
                                            <option value="Repair" className="bg-slate-900">Repair & Maintenance</option>
                                            <option value="Installation" className="bg-slate-900">Installation</option>
                                            <option value="Spare Parts" className="bg-slate-900">Spare Parts</option>
                                            <option value="AMC" className="bg-slate-900">AMC Inquiry</option>
                                            <option value="Emergency" className="bg-slate-900">Emergency Support</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-slate-600"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit Inquiry'
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl flex-shrink-0 border border-blue-500/20">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Workshop Address</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            M/S S.S. Engineering Works<br />
                                            Near Bus Stand, Hamirpur Road<br />
                                            Una, Himachal Pradesh - 174303
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl flex-shrink-0 border border-blue-500/20">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Phone Number</h3>
                                        <p className="text-slate-400">+91 98161 34151</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl flex-shrink-0 border border-blue-500/20">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Email Address</h3>
                                        <a href="mailto:ssewuna@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">ssewuna@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl flex-shrink-0 border border-emerald-500/20">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">WhatsApp Support</h3>
                                        <p className="text-slate-400">+91 98161 34151</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-2 rounded-2xl shadow-lg border border-white/10 h-[320px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27223.541342568955!2d76.24824343555362!3d31.470763254261477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad16b29d78e4b%3A0xf53e84b80ce9c9eb!2sS.S.%20Engg%20Works!5e0!3m2!1sen!2sca!4v1764316533015!5m2!1sen!2sca"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1rem', filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="S.S. Engineering Works Location"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
