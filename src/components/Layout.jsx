import React from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { GitGraph, X } from 'lucide-react';

const Layout = () => {
    const location = useLocation();

    const getFileName = () => {
        switch (location.pathname) {
            case '/': return 'About.jsx';
            case '/experience': return 'Experience.jsx';
            case '/projects': return 'Projects.jsx';
            case '/contact': return 'Contact.css';
            default: return 'About.jsx';
        }
    }

    const getIcon = () => {
        const path = location.pathname;
        if (path === '/contact') return <span className="text-blue-400 font-bold mr-2">#</span>
        return <span className="text-yellow-400 font-bold mr-2">JS</span>
    }

    return (
        <div className="flex h-screen w-screen bg-vscode-bg text-vscode-text overflow-hidden font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full bg-vscode-bg">
                {/* Top Tabs */}
                <div className="h-9 bg-vscode-sidebar flex items-center overflow-x-auto">
                    <div className="bg-vscode-bg h-full px-3 flex items-center border-t-2 border-vscode-statusBar text-sm cursor-pointer w-auto min-w-[120px] justify-between text-white pr-2">
                        <div className="flex items-center">
                            {getIcon()}
                            <span>{getFileName()}</span>
                        </div>
                        <X size={14} className="ml-2 hover:bg-gray-700 rounded-sm" />
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="h-6 bg-vscode-bg flex items-center px-4 text-xs text-vscode-text opacity-60 shadow-sm z-10">
                    src &gt; pages &gt; {getFileName()}
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-0 relative scroll-smooth">
                    <Outlet />
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-vscode-statusBar flex items-center px-2 justify-between text-xs text-white select-none z-20">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer"><GitGraph size={12} /> main*</div>
                        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer">0 <span className="text-white">⚠</span> 0</div>
                    </div>
                    <div className="flex gap-4">
                        <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer">Ln 12, Col 34</span>
                        <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer">UTF-8</span>
                        <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer">JavaScript React</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout;
