/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "almost-black": "#151515",
                gold: "#d5966c",
                "dark-grey": "#444",
            },
        },
        screens: {
            md: "768px",
            lg: "1440px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2.5rem",
                lg: "10.3125rem",
            },
        },
        fontFamily: {
            "big-shoulder": ["Big Shoulders Display", "cursive", "sans-serif"],
            body: ["Outfit", "sans-serif"],
        },
    },
    plugins: [],
};
