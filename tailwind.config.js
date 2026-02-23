/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#22C55E', // Canonical green / income / positive
                secondary: '#F87171', // Canonical red / expense / negative
                background: '#0B0D12', // Deep dark glass backdrop (Base)
                surface: 'rgba(255, 255, 255, 0.04)', // Glass surface
                surfaceVariant: 'rgba(255, 255, 255, 0.06)',
                surfaceBorder: 'rgba(255, 255, 255, 0.1)',
                textMain: '#F8F9FA', // OnBackground
                textSub: '#E9ECEF', // OnSurface
                warning: '#FFA502',
                info: '#54A0FF',
                gold: '#FFC107',
                purple: '#A855F7',
            },
            fontFamily: {
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                data: ['"Space Mono"', 'monospace'],
            },
            backdropBlur: {
                glass: '20px',
            }
        },
    },
    plugins: [],
}
