/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a2947',  // Navy Blue from logo
                    dark: '#152038',
                    light: '#243a5e',
                },
                gold: {
                    DEFAULT: '#d4a853',  // Rich Gold from logo
                    dark: '#b8933f',
                    light: '#e0bd6f',
                },
                navy: {
                    DEFAULT: '#1a2947',
                    dark: '#152038',
                    light: '#243a5e',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.6s ease-out',
                slideUp: 'slideUp 0.8s ease-out',
            },
        },
    },
    plugins: [],
}