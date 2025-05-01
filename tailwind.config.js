export default {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{html,js}", // Include any source files if applicable
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
        inter: ['Inter', 'sans-serif'], // Add Inter font
      },
      colors: {
        "custom-green": "#39db4a", // Define custom green color
        'custom-off-white': '#fafafa', // Very light gray, often used for subtle backgrounds
        'custom-white': '#ffffff',     // Pure white, standard for clean and bright designs
        "custom-dark": "#1e1e1e", // Dark background
        "custom-gray": "#555555", // Medium gray
        "custom-light": "#FCFCFC", // Near-white background
      
        "custom-red": "#FF6868", // Soft red highlight
        "custom-deep-dark": "#272727", // Deeper dark gray
        "custom-dark-gray": "#2C2C2C", // Another dark shade
        "custom-mid-gray": "#515151", // Mid-range gray
        "custom-black": "#000000", // Pure black
        "custom-steel-gray": "#454545", // Steel gray tone
        "custom-muted-gray": "#807E7E", // Muted light gray
        "custom-mint-green": "#90BD95", // Soft mint green
        "custom-lime-green": "#5FE26C", // Bright lime green
        "custom-slate": "#484848", // Slate gray
        "custom-blue": "#1e90ff", // Define custom blue color
        "custom-red": "#ff6347", // Define custom red color
        "custom-yellow": "#ffeb3b", // Define custom yellow color
        "custom-gray": "#f0f0f0", // Define custom gray color
        "custom-black": "#000000", // Define custom black color
        "custom-white": "#ffffff", // Define custom white color
        "custom-orange": "#ff9800", // Define custom orange color
        "custom-purple": "#9c27b0", // Define custom purple color
        "custom-pink": "#e91e63", // Define custom pink color
        "custom-teal": "#009688", // Define custom teal color
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
    },
  },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1, // enables experimental features
      features: {
        'custom-properties': false,
      }
  })
  ],
};
