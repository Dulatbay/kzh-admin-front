/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgColor: "#1a1a1a",
                bgNavColor: "#282828",
                formColor: "#282828",
                innerFormColor: "#505050" ,
                innerFormTextColor: "#91898C",
                primaryTextColor: "#5348F2",
                verifyButton:"#2CBB5D"

            },
            fontFamily: {
                custom: ['"Poppins"', 'sans-serif'],

            },
            margin:{
                'custom-40':'40px'
            }

        },
    },
    plugins: [],
}