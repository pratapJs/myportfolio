import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 max-w-4xl font-mono text-sm md:text-base"
        >
            <div className="text-gray-500 mb-4">/* <br />&nbsp;* About Me <br />&nbsp;* I am a dedicated professional with a background in IT and teaching.<br />&nbsp;*/</div>

            <div className="mb-2">
                <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">profile</span> <span className="text-vscode-keyword">=</span> <span className="text-vscode-text">{'{'}</span>
            </div>

            <div className="pl-6 md:pl-8 space-y-1">
                <div>
                    <span className="text-vscode-string">name</span>: <span className="text-vscode-string">"Pratap Adhikari"</span>,
                </div>
                <div>
                    <span className="text-vscode-string">title</span>: <span className="text-vscode-string">"Full Stack Developer"</span>,
                </div>
                <div>
                    <span className="text-vscode-string">location</span>: <span className="text-vscode-string">"Melbourne, Australia"</span>,
                </div>
                <div>
                    <span className="text-vscode-string">email</span>: <span className="text-vscode-string">"<a href="mailto:pratap1adhikari@gmail.com" className="hover:underline">pratap1adhikari@gmail.com</a>"</span>,
                </div>
                <div>
                    <span className="text-vscode-string">website</span>: <span className="text-vscode-string">"<a href="https://pratapadhikari.netlify.app" target="_blank" rel="noreferrer" className="hover:underline">https://pratapadhikari.netlify.app</a>"</span>,
                </div>
                <div>
                    <span className="text-vscode-string">education</span>: <span className="text-vscode-text">{'['}</span>
                    <div className="pl-4">
                        <span className="text-vscode-text">{'{'}</span> <span className="text-vscode-string">degree</span>: <span className="text-vscode-string">"Master of IT (Software Engineering)"</span>, <span className="text-vscode-string">school</span>: <span className="text-vscode-string">"Charles Darwin University"</span>, <span className="text-vscode-string">year</span>: <span className="text-vscode-number">2016</span> <span className="text-vscode-text">{'}'}</span>,
                    </div>
                    <div className="pl-4">
                        <span className="text-vscode-text">{'{'}</span> <span className="text-vscode-string">degree</span>: <span className="text-vscode-string">"Bachelor in Computer Application"</span>, <span className="text-vscode-string">school</span>: <span className="text-vscode-string">"Pokhara University"</span>, <span className="text-vscode-string">year</span>: <span className="text-vscode-number">2005</span> <span className="text-vscode-text">{'}'}</span>
                    </div>
                    <span className="text-vscode-text">{'],'}</span>
                </div>

                <div className="mt-4">
                    <span className="text-vscode-string">skills</span>: <span className="text-vscode-text">{'['}</span>
                    <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        {/* JavaScript */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="js" />
                            <span className="text-vscode-string">"JavaScript"</span>,
                        </div>
                        {/* React */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="react" />
                            <span className="text-vscode-string">"React / Next.js"</span>,
                        </div>
                        {/* HTML */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="html" />
                            <span className="text-vscode-string">"HTML5"</span>,
                        </div>
                        {/* CSS */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-5 h-5" alt="css" />
                            <span className="text-vscode-string">"CSS3 / Tailwind"</span>,
                        </div>
                        {/* Node */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-5 h-5" alt="node" />
                            <span className="text-vscode-string">"Node.js / Express"</span>,
                        </div>
                        {/* MongoDB */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="mongo" />
                            <span className="text-vscode-string">"MongoDB / MySQL"</span>,
                        </div>
                        {/* C++ */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-5 h-5" alt="cpp" />
                            <span className="text-vscode-string">"C / C++"</span>,
                        </div>
                        {/* Java */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-5 h-5" alt="java" />
                            <span className="text-vscode-string">"Java"</span>,
                        </div>
                        {/* React Native */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="reactnative" />
                            <span className="text-vscode-string">"React Native"</span>,
                        </div>
                        {/* Material UI */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="w-5 h-5" alt="mui" />
                            <span className="text-vscode-string">"Material UI"</span>,
                        </div>
                        {/* Firebase */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-5 h-5" alt="firebase" />
                            <span className="text-vscode-string">"Firebase"</span>,
                        </div>
                        {/* Git */}
                        <div className="flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-5 h-5" alt="git" />
                            <span className="text-vscode-string">"Git"</span>,
                        </div>
                    </div>
                    <span className="text-vscode-text">{']'}</span>
                </div>
            </div>

            <div><span className="text-vscode-text">{'}'};</span></div>
        </motion.div>
    )
}

export default About;
