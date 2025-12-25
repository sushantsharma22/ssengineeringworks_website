import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-gray-300 pt-8 pb-6 md:pt-16 md:pb-8 text-[10px]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                SS
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-white font-bold text-base md:text-lg leading-tight">
                                    S.S. Engineering
                                </span>
                                <span className="text-gray-400 text-[10px] md:text-xs tracking-wider">
                                    WORKS
                                </span>
                            </div>
                        </div>
                        <p className="hidden md:block text-sm leading-relaxed mb-4 md:mb-6">
                            Pioneer pumping machinery services in Himachal Pradesh since 1970.
                            Authorized KSB Service Center delivering excellence across 6+ districts.
                        </p>
                        {/* Social Links Removed as requested */}
                    </div>

                    {/* Quick Links, Services & Contact - 3 Columns on Mobile */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-2 md:gap-8">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold text-sm md:text-lg mb-3 md:mb-6">Quick Links</h3>
                            <ul className="space-y-1.5 md:space-y-3">
                                {['Home', 'Services', 'Network', 'Workshop', 'Clients', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}/`}
                                            className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-bold text-sm md:text-lg mb-3 md:mb-6">Services</h3>
                            <ul className="space-y-1.5 md:space-y-3">
                                <li><Link href="/services/#repair" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">Repair</Link></li>
                                <li><Link href="/services/#ksb" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">KSB Service</Link></li>
                                <li><Link href="/services/#installation" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">Installation</Link></li>
                                <li><Link href="/services/#maintenance" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">Maintenance</Link></li>
                                <li><Link href="/services/#parts" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">Spare Parts</Link></li>
                                <li><Link href="/services/#emergency" className="text-[10px] md:text-sm hover:text-secondary transition-colors whitespace-nowrap">Emergency</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info - Moved here */}
                        <div>
                            <h3 className="text-white font-bold text-sm md:text-lg mb-3 md:mb-6">Contact</h3>
                            <ul className="space-y-2 md:space-y-4">
                                <li className="flex items-start gap-2">
                                    <FaMapMarkerAlt className="text-secondary mt-0.5 shrink-0 text-xs" />
                                    <span className="text-[10px] md:text-sm leading-tight">
                                        Una, HP
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-secondary shrink-0 text-xs" />
                                    <a href="tel:+919816134151" className="text-[10px] md:text-sm hover:text-white transition-colors whitespace-nowrap">
                                        +91 98161-34151
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope className="text-secondary shrink-0 text-xs" />
                                    <a href="mailto:info@ssengineering.com" className="text-[10px] md:text-sm hover:text-white transition-colors whitespace-nowrap">
                                        ssewuna@gmail.com
                                    </a>
                                </li>
                                <li className="mt-2 pt-2 border-t border-white/10 text-[9px] text-gray-400 leading-tight">
                                    GST: 02AODPS3941M1ZS<br />
                                    UDYAM: UDYAM-HP-12-0003182
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Removed separate GST/Udyam div */}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-6 flex flex-col items-center gap-2">
                    <p className="text-[10px] text-gray-500 text-center">
                        &copy; {currentYear} S.S. Engineering Works. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privacy/" className="text-[9px] text-gray-600 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms/" className="text-[9px] text-gray-600 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
