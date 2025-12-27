/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                vscode: {
                    bg: 'var(--bg-color)',
                    sidebar: 'var(--sidebar-color)',
                    activityBar: 'var(--activity-bar-color)',
                    statusBar: 'var(--status-bar-color)',
                    tabActive: 'var(--tab-active-color)',
                    tabInactive: 'var(--tab-inactive-color)',
                    text: 'var(--text-color)',
                    comment: 'var(--comment-color)',
                    keyword: 'var(--keyword-color)',
                    string: 'var(--string-color)',
                    function: 'var(--function-color)',
                    number: 'var(--number-color)',
                    lineNum: 'var(--line-num-color)',
                    selection: 'var(--selection-color)',
                    input: 'var(--input-bg-color)',
                }
            },
            fontFamily: {
                mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
                sans: ['Inter', 'Segoe UI', 'sans-serif'],
            },
            fontSize: {
                'sm': 'var(--font-size-sm)',
                'base': 'var(--font-size-base)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
            }
        },
    },
    plugins: [],
}
