import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
       
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins :['Poppins', 'sans-serif'],
                
            },
            colors: {
                "primary" : "#1D3557",  
                "secondary" : "#E63946",  
                "tertiary" : "#FAF9F6",  
              },

              container: {
                padding: {
                  DEFAULT: '1rem',
                  sm: '2rem',
                  lg: '4rem',
                  xl: '5rem',
                  '2xl': '6rem',
                },
              },
        },
    },

    plugins: [forms],
};
