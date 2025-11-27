"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Background() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.bg-orb', {
                x: 'random(-100, 100)',
                y: 'random(-100, 100)',
                duration: 'random(10, 20)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    amount: 5,
                    from: 'random'
                }
            });
        }, bgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={bgRef} className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,41,59,0.3),_rgba(2,6,23,1))]" />
            <div className="absolute inset-0 opacity-[0.15] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

            {/* Animated Orbs */}
            <div className="bg-orb absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
            <div className="bg-orb absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
            <div className="bg-orb absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[80px]" />
        </div>
    );
}
