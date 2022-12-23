/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                main: {
                    tl: "#330219",
                    td: "#A0F0FF",
                    bl: "#DBFFF5",
                    bd: "#330219",
                },
                primary: {
                    100: "#CF0664",
                    200: "#8F0445",
                    300: "#330219",
                    400: "#430220",
                    500: "#330219",
                },
                secondary: {
                    100: "#5CC4D7",
                    200: "#1BB5CF",
                    300: "#14879C",
                    400: "#22484F",
                    500: "#0A454F",
                },
                tertiary: {
                    100: "#D7C85C",
                    200: "#CFBB1B",
                    300: "#9C8C14",
                    400: "#4F4A22",
                    500: "#4F470A",
                },
            },
            fontFamily: {
                body: ['Quicksand']
            }
        },
    },
    plugins: [],
}