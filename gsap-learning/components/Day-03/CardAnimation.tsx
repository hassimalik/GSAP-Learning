"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function CardAnimation() {
    // Setting Refs for gsap
    const cardRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    //selecting all refs and making initial state of animation
    useGSAP(() => {
        gsap.set([titleRef.current, descRef.current, tagRef.current], {
            opacity: 0,
            y: 20
        })
        //making timeline
        const tl = gsap.timeline({
            repeat: -1
        })
        tl.to(tagRef.current, {
            opacity: 1,
            y: 0,
        })
            .to(titleRef.current, {
                opacity: 1,
                duration: 0.5,
                y: 0,
                ease: "power2.out"
            })
            .to(descRef.current, {
                opacity: 1,
                ease: "power2.out",
                y: 0,
                duration: 0.5,
            })
    }, { scope: cardRef })

    return (
        <div ref={cardRef} className="bg-white rounded-2xl mb-6 p-6 shadow-md w-72">
            <span ref={tagRef} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                This is tag ref
            </span>
            <h2 ref={titleRef} className="text-lg font-bold text-zinc-900 mt-3">
                Title Ref
            </h2>
            <p ref={descRef} className="text-sm text-zinc-500 mt-1">
                Hey this is an animation paragraph
            </p>
        </div>
    );
}


