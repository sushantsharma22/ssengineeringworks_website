"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollAnimation = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
    }, []);

    const fadeInUp = (element: string | Element, delay = 0) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay,
            ease: 'power3.out',
        });
    };

    const staggerFadeIn = (elements: string | Element[] | NodeListOf<Element>, delay = 0, trigger?: string | Element) => {
        gsap.from(elements, {
            scrollTrigger: {
                trigger: trigger || (elements as any)[0] || elements,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay,
            ease: 'power2.out',
        });
    };

    return { fadeInUp, staggerFadeIn };
};
