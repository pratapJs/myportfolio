import React, { useState } from 'react';
import { Settings as SettingsIcon, X, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Settings = ({ onClose }) => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (val) => setTheme({ ...theme, background: val });
    const handleFontChange = (val) => setTheme({ ...theme, fontSize: val });

    return (
        <div className="absolute bottom-12 left-12 w-64 bg-vscode-sidebar border border-gray-600 shadow-xl rounded-md z-50 text-vscode-text select-none">
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
                <h3 className="font-bold text-sm">Settings</h3>
                <X size={16} className="cursor-pointer hover:text-white" onClick={onClose} />
            </div>

            <div className="p-4 space-y-4">
                {/* Theme Section */}
                <div>
                    <h4 className="text-xs font-semibold mb-2 text-gray-400 uppercase">Color Theme</h4>
                    <div className="flex flex-col gap-1">
                        {[
                            { id: 'vscode', name: 'Dark+ (default)' },
                            { id: 'light', name: 'Light Modern' },
                            { id: 'hc', name: 'High Contrast' }
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleThemeChange(t.id)}
                                className={`flex items-center justify-between text-left text-xs px-2 py-1 rounded hover:bg-vscode-selection hover:text-white ${theme.background === t.id ? 'bg-vscode-selection text-white' : ''}`}
                            >
                                {t.name}
                                {theme.background === t.id && <Check size={12} />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Font Size Section */}
                <div>
                    <h4 className="text-xs font-semibold mb-2 text-gray-400 uppercase">Font Size</h4>
                    <div className="flex bg-vscode-input rounded p-1">
                        {[
                            { id: 'normal', name: 'A' },
                            { id: 'large', name: 'A+' },
                            { id: 'xlarge', name: 'A++' }
                        ].map((f) => (
                            <button
                                key={f.id}
                                onClick={() => handleFontChange(f.id)}
                                className={`flex-1 text-center py-1 text-xs rounded ${theme.fontSize === f.id ? 'bg-vscode-selection text-white' : 'hover:bg-vscode-activityBar'}`}
                            >
                                {f.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
