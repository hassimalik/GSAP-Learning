"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function CardAnimation() {
    const cardRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        // Step 1: Set starting state (invisible + offset)
        gsap.set([tagRef.current, titleRef.current, descRef.current], {
            opacity: 0,
            y: 20,
        });

        // Step 2: Animate to final state using timeline
        const tl = gsap.timeline({
            repeat: -1,
        });

        tl.to(tagRef.current, {
            opacity: 1,
            y: 0,
            rotation: 180,
            duration: 0.6,
        })
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.1,
            })
            .to(descRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.1,
            });

    }, { scope: cardRef }); // scope is correct ✅

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