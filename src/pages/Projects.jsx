import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            tech: ["React", "Tailwind", "Vite"],
            desc: "A personal portfolio website themed like VS Code.",
            link: "#"
        },
        {
            id: 2,
            name: "Currency Exchange App",
            tech: ["React", "API", "CSS"],
            desc: "Real-time currency exchange rate converter.",
            link: "#"
        },
        {
            id: 3,
            name: "Task Manager",
            tech: ["Node.js", "MongoDB", "Express"],
            desc: "A full-stack Todo application with authentication.",
            link: "#"
        },
        {
            id: 4,
            name: "Jeka Mobile",
            tech: ["Web App", "GCP"],
            desc: "Mobile application dashboard hosted on AppEngine.",
            link: "https://jekamobile.uc.r.appspot.com/"
        },
        {
            id: 5,
            name: "Card Game Scorer",
            tech: ["JavaScript", "HTML", "CSS"],
            desc: "Scorer app for Call-break and Marriage card games.",
            link: "https://github.com/pratapJs/cardgamescore"
        },
        {
            id: 6,
            name: "E-commerce Platform",
            tech: ["MERN Stack", "Redux"],
            desc: "Full-stack e-commerce app with client & server side.",
            link: "https://github.com/pratapJs/eCommerce"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 max-w-6xl font-mono text-sm md:text-base text-vscode-text"
        >
            <div className="text-gray-500 mb-6 font-mono text-sm">
             // My Projects.json
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-vscode-sidebar p-6 rounded border border-gray-800 hover:border-vscode-selection transition-all group">
                        <h3 className="text-vscode-function text-lg font-bold mb-2 group-hover:text-vscode-keyword transition-colors">{project.name}</h3>
                        <p className="text-gray-400 mb-4 h-12">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs bg-vscode-activityBar px-2 py-1 rounded text-vscode-string">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-block bg-vscode-selection text-white px-4 py-2 rounded text-xs font-bold hover:bg-vscode-statusBar transition-colors">
                            View Project
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a href="https://github.com/pratapJs" target="_blank" rel="noreferrer" className="text-vscode-keyword hover:text-vscode-function hover:underline text-lg">
                    View more projects on GitHub...
                </a>
            </div>
        </motion.div>
    )
}

export default Projects;
