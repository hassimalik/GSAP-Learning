"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap"

export default function Playground() {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ 
            repeat: -1,
        });

        tl.from(boxRef1.current, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            x: -120,
        }, 0)  

        tl.to(boxRef2.current, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            x: -120,
        }, 0)  
        tl.fromTo(boxRef3.current, {
            opacity: 0,
            scale: 0.5,
            x: -120,
        }, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1,
        }, 0) 
    }, { scope: containerRef }) 

    return (
        <div ref={containerRef} className="flex flex-col gap-12 mt-5 items-center justify-center">
            <div ref={boxRef1} className="bg-red-400 border-1 border-amber-400 rounded-lg w-20 h-20"></div>
            <div ref={boxRef2} className="bg-red-400 border-1 border-amber-400 rounded-lg w-20 h-20"></div>
            <div ref={boxRef3} className="bg-red-400 border-1 border-amber-400 rounded-lg w-20 h-20"></div>
        </div>
    )
}