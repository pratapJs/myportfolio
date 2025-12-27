import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        background: 'vscode', // vscode, light, dark-high-contrast
        fontSize: 'normal', // normal, large, x-large
        contrast: 'normal', // normal, high
    });

    useEffect(() => {
        // Apply classes to body/root based on theme
        const root = document.documentElement;

        // Reset classes
        root.classList.remove('theme-vscode', 'theme-light', 'theme-hc');
        root.classList.remove('text-normal', 'text-large', 'text-xlarge');
        root.classList.remove('contrast-normal', 'contrast-high');

        // Add new classes
        root.classList.add(`theme-${theme.background}`);
        root.classList.add(`text-${theme.fontSize}`);
        root.classList.add(`contrast-${theme.contrast}`);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
