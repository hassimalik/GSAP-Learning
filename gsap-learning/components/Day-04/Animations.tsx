"use client"

const projects = [
    {
        id: 1,
        name: "Student LMS by H Developer",
        technologies: ["React", "Tailwind", "Shadcn", "GSAP"],
    }
]

export default function Animations() {
    return (
        <div>
            {projects.map((project) => (
                <li key={project.id}>
                    <h1>{project.name}</h1>
                    <div>
                        {project.technologies.map((tech) => (
                            <span key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </li>
            ))}
        </div>
    )
}