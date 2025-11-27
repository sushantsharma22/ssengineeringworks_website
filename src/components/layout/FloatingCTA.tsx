"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { FaPhoneAlt } from 'react-icons/fa';

export default function FloatingCTA() {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Pulse animation
        gsap.to(buttonRef.current, {
            scale: 1.05,
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <Link
            ref={buttonRef}
            href="tel:+919816134151"
            className="fixed bottom-6 right-6 z-40 bg-secondary text-white w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full shadow-lg flex items-center justify-center gap-3 transition-colors hover:bg-blue-700"
        >
            <FaPhoneAlt className="text-xl md:text-lg" />
            <span className="hidden md:inline font-bold">Get Quote</span>
        </Link>
    );
}
