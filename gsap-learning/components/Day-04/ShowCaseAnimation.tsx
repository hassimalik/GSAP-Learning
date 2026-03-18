"use client"
import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const projects = [
    {
        id: 1,
        name: "Student LMS by H Developer",
        image: "/projects/lms.png",
        technologies: ["React", "Tailwind", "Shadcn", "GSAP"],
    },
    {
        id: 2,
        name: "Portfolio Website",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "GSAP", "Tailwind"],
    },
    {
        id: 3,
        name: "E-Commerce Store",
        image: "/projects/ecommerce.png",
        technologies: ["Next.js", "Stripe", "MongoDB"],
    }
]

export default function ShowCaseAnimations() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
    gsap.from(".project-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        repeat: -1        // ✅ loops forever
    })

    gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: { each: 0.2, },
        repeat: -1     // ✅ loops forever
    })

    gsap.from(".tech-tag", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: { each: 0.08, },
        repeat: -1        // ✅ loops forever
    })

}, { scope: containerRef })

    return (
        <div ref={containerRef} className="min-h-screen bg-zinc-950 p-10">
            <h1 className="project-title text-white text-4xl font-bold mb-10">
                My Projects
            </h1>
            <div className="flex gap-12 items-center flex-wrap">
                {projects.map((project) => (
                    <div key={project.id} className="project-card bg-zinc-900 rounded-2xl p-6 flex flex-col gap-4 w-72">
                        <div className="w-full h-48 bg-zinc-800 rounded-xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={400}
                                height={192}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="project-name text-white text-xl font-semibold">
                            {project.name}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="tech-tag text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}