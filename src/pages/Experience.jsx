import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 max-w-4xl font-mono text-sm md:text-base text-vscode-text"
        >
            <div className="text-gray-500 mb-4">
             // Experience Timeline
            </div>

            <div className="flex flex-col gap-8 border-l-2 border-gray-700 pl-8 relative ml-4">

                {/* Job 1 */}
                <div className="relative">
                    <div className="absolute -left-[41px] bg-vscode-keyword w-5 h-5 rounded-full border-4 border-vscode-bg"></div>
                    <div className="mb-1 text-vscode-comment text-xs">June 2021 - Present</div>
                    <h3 className="text-vscode-function text-xl font-bold">Housekeeping Manager</h3>
                    <div className="text-vscode-string mb-2">Jani King – Darwin, Australia</div>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400">
                        <li>Oversee daily housekeeping operations for 200+ rooms.</li>
                        <li>Lead, train, and schedule a team of 25+ staff.</li>
                        <li>Ensure safety policies and high standards of cleanliness.</li>
                    </ul>
                </div>

                {/* Job 2 */}
                <div className="relative">
                    <div className="absolute -left-[41px] bg-vscode-keyword w-5 h-5 rounded-full border-4 border-vscode-bg"></div>
                    <div className="mb-1 text-vscode-comment text-xs">April 2016 – May 2021</div>
                    <h3 className="text-vscode-function text-xl font-bold">Housekeeping Supervisor</h3>
                    <div className="text-vscode-string mb-2">Jani King – Darwin, Australia</div>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400">
                        <li>Supervised staff and ensured high-quality service.</li>
                        <li>Trained new employees on safety and procedures.</li>
                    </ul>
                </div>

                {/* Job 3 */}
                <div className="relative">
                    <div className="absolute -left-[41px] bg-vscode-keyword w-5 h-5 rounded-full border-4 border-vscode-bg"></div>
                    <div className="mb-1 text-vscode-comment text-xs">July 2006 – Jan 2014</div>
                    <h3 className="text-vscode-function text-xl font-bold">Computer Science Teacher</h3>
                    <div className="text-vscode-string mb-2">Shaheed Smriti Multiple Campus – Chitwan, Nepal</div>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400">
                        <li>Taught C, Java, C++, JavaScript, and web development.</li>
                        <li>Designed curriculums and provided hands-on training.</li>
                        <li>Guided students in project development.</li>
                    </ul>
                </div>

            </div>

        </motion.div>
    )
}

export default Experience;
