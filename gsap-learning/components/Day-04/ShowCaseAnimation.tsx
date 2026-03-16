"use client"

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'

export default function BusinessCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        gsap.set([titleRef.current, skillRef.current, contactRef.current], {
            opacity: 0,
            y: 20
        })

        const tl = gsap.timeline({
            repeat:-1
        }
        );
        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.5
        })
            .to(skillRef.current, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
            })
            .to(contactRef.current, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
            })
    }, { scope: cardRef })

    return (
        <div ref={cardRef} className="w-96 mb-12 h-48 bg-[#091929] rounded-xl p-5 flex flex-col justify-between">
            <div className="flex flex-col gap-1 text-left leading-none">
                <h1 ref={titleRef} className="text-white text-4xl font-bold font-poppins">
                    Hassaan
                </h1>
                <p ref={skillRef} className="text-gray-300  text-sm font-normal font-inter text-[14px]">
                    Frontend Developer
                </p>
            </div>
            <p ref={contactRef} className="text-gray-300 text-xs font-normal font-inter text-right">
                hassaan@gmail.com
            </p>
        </div>
    );
}
