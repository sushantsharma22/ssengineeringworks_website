import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                SS
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-lg leading-tight">
                                    S.S. Engineering
                                </span>
                                <span className="text-gray-400 text-xs tracking-wider">
                                    WORKS
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Pioneer pumping machinery services in Himachal Pradesh since 1978.
                            Authorized KSB Service Center delivering excellence across 6 districts.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <FaLinkedinIn size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <FaInstagram size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Coverage Areas', 'Workshop', 'Clients', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-sm hover:text-secondary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">Pumping Machinery Repair</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">KSB Authorized Service</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">Installation & Commissioning</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">Preventive Maintenance</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">Spare Parts Supply</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-secondary transition-colors">Emergency Repairs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    Hamirpur Road, Near Old Bus Stand,<br />
                                    Una, Himachal Pradesh - 174303
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-secondary flex-shrink-0" />
                                <span className="text-sm">+91 98161 34151</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-secondary flex-shrink-0" />
                                <span className="text-sm">ssewuna123@gmail.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <p className="text-xs text-gray-500">
                                GST: 02AODPS3941M1ZS<br />
                                UDYAM: UDYAM-HP-12-0003182
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {currentYear} S.S. Engineering Works. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
