import React, { useState } from 'react';
import { Files, Github, MessageCircle, User, Settings as SettingsIcon, ChevronRight, ChevronDown, Mail, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Settings from './Settings';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);
    const [showSettings, setShowSettings] = useState(false);
    const [showExplorer, setShowExplorer] = useState(window.innerWidth >= 768);

    const isActive = (path) => location.pathname === path;

    // Auto-close explorer on mobile when navigating
    const handleNavigation = () => {
        if (window.innerWidth < 768) {
            setShowExplorer(false);
        }
    };

    return (
        <div className="flex h-full select-none relative z-50">
            {/* Activity Bar */}
            <div className="w-12 bg-vscode-activityBar flex flex-col items-center py-2 justify-between z-10 border-r border-gray-800">
                <div className="flex flex-col gap-4">
                    {/* Explorer Toggle */}
                    <div
                        className={`p-3 cursor-pointer hover:opacity-100 ${showExplorer ? 'border-l-2 border-vscode-text opacity-100' : 'opacity-40'}`}
                        title="Explorer"
                        onClick={() => setShowExplorer(!showExplorer)}
                    >
                        <Files size={24} color="#d4d4d4" />
                    </div>

                    {/* GitHub */}
                    <a href="https://github.com/pratapJs" target="_blank" rel="noreferrer" className="p-3 cursor-pointer opacity-40 hover:opacity-100" title="GitHub">
                        <Github size={24} color="#d4d4d4" />
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/61431305009" target="_blank" rel="noreferrer" className="p-3 cursor-pointer opacity-40 hover:opacity-100" title="WhatsApp: 0431305009">
                        <MessageCircle size={24} color="#d4d4d4" />
                    </a>

                    {/* Gmail */}
                    <a href="mailto:pratapadhikari37@gmail.com" className="p-3 cursor-pointer opacity-40 hover:opacity-100" title="Email: pratapadhikari37@gmail.com">
                        <Mail size={24} color="#d4d4d4" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/pratap" target="_blank" rel="noreferrer" className="p-3 cursor-pointer opacity-40 hover:opacity-100" title="LinkedIn">
                        <Linkedin size={24} color="#d4d4d4" />
                    </a>
                </div>
                <div className="flex flex-col gap-4 mb-2 relative">
                    {/* User Profile */}
                    <Link to="/contact" className="p-3 cursor-pointer opacity-40 hover:opacity-100" title="Contact Me">
                        <User size={24} color="#d4d4d4" />
                    </Link>

                    {/* Settings Toggle */}
                    <div
                        className={`p-3 cursor-pointer hover:opacity-100 ${showSettings ? 'opacity-100' : 'opacity-40'}`}
                        title="Settings"
                        onClick={() => setShowSettings(!showSettings)}
                    >
                        <SettingsIcon size={24} color="#d4d4d4" />
                    </div>

                </div>
            </div>

            {/* Explorer */}
            {showExplorer && (
                <div className="w-60 bg-vscode-sidebar flex flex-col text-vscode-text text-sm border-r border-gray-800 absolute md:static left-12 h-full shadow-xl md:shadow-none z-40">
                    <div className="p-2 text-xs font-bold uppercase tracking-wider flex items-center justify-between pl-4">
                        <span>Explorer</span>
                        <span className="text-xl leading-none cursor-pointer">...</span>
                    </div>

                    {/* Project Folder */}
                    <div className="flex flex-col">
                        <div
                            className="flex items-center px-1 py-1 cursor-pointer font-bold hover:bg-vscode-tabInactive"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <ChevronDown size={14} className="mr-1" /> : <ChevronRight size={14} className="mr-1" />}
                            <span>PORTFOLIO</span>
                        </div>

                        {isOpen && (
                            <div className="flex flex-col">
                                <Link to="/" onClick={handleNavigation} className={`flex items-center pl-6 py-1 cursor-pointer hover:bg-vscode-tabInactive ${isActive('/') ? 'bg-vscode-tabInactive text-white' : 'opacity-80'}`}>
                                    <span className="w-4 mr-2 text-yellow-400 font-bold text-md text-center">JS</span>
                                    <span>About.jsx</span>
                                </Link>
                                <Link to="/experience" onClick={handleNavigation} className={`flex items-center pl-6 py-1 cursor-pointer hover:bg-vscode-tabInactive ${isActive('/experience') ? 'bg-vscode-tabInactive text-white' : 'opacity-80'}`}>
                                    <span className="w-4 mr-2 text-yellow-400 font-bold text-md text-center">JS</span>
                                    <span>Experience.jsx</span>
                                </Link>
                                <Link to="/projects" onClick={handleNavigation} className={`flex items-center pl-6 py-1 cursor-pointer hover:bg-vscode-tabInactive ${isActive('/projects') ? 'bg-vscode-tabInactive text-white' : 'opacity-80'}`}>
                                    <span className="w-4 mr-2 text-yellow-400 font-bold text-md text-center">JS</span>
                                    <span>Projects.jsx</span>
                                </Link>
                                <Link to="/contact" onClick={handleNavigation} className={`flex items-center pl-6 py-1 cursor-pointer hover:bg-vscode-tabInactive ${isActive('/contact') ? 'bg-vscode-tabInactive text-white' : 'opacity-80'}`}>
                                    <span className="w-4 mr-2 text-blue-400 font-bold text-md text-center">#</span>
                                    <span>Contact.css</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {/* Settings Modal */}
            {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        </div>
    );
};

export default Sidebar;
