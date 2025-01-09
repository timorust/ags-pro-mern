/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                slideIn: "slideIn 1.5s ease-in-out",
            },
            colors: {
                // customBackground: '#000000',
            },
            keyframes: {
                slideIn: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [daisyui],
}
