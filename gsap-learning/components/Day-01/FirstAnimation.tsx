'use client'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
export default function Playground() {
  const boxRef = useRef(null);
  useGSAP(()=>{
    gsap.from(boxRef.current,{
      opacity:0,
      scale:0,
      repeat:-1,
      duration:1,
      x:-120,
    })
  })
  return (
    <div className='flex items-center justify-center'>
      <div ref={boxRef} className='h-20 mt-10 w-20 bg-amber-700 rounded-lg '></div>
    </div>
  )
}