/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    boxSizing: 'border-box',
    extend: {
      borderWidth: {
        '5': '5px', // Custom border width with name '5' and width of 5 pixels
        '7': '7px',
        '9':'9px' // Custom border width with name '7' and width of 7 pixels
        // Add more custom border widths as needed
      },
      colors:{
        darkIcon: '#1C1C1C',
        greySearch:'#8B96A5'
        ,textColor1:'#0D6EFD'
        ,gray200:'#EFF2F4'
        ,sourceBlue:'#0D6EFD'
        ,borderColor:'#DEE2E7'
        ,textGray:'#8B96A5'
      }
     
   
      
      
    },




  }, 
   corePlugins: {
   
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         white: "#fff",
//         "black-normal": "#37474f",
//         dimgray: "#555",
//         darkslategray: "#3f3f3f",
//         "label-light-primary": "#000",
//         royalblue: "#007aff",
//       },
//       fontFamily: {
//         "mobile-body-meduim-14": "Poppins",
//         "sf-subheadline-semibold": "'SF Pro Text'",
//       },
//       borderRadius: {
//         xl: "20px",
//       },
//     },
//     fontSize: {
//       sm: "0.88rem",
//       mini: "0.94rem",
//       xl: "1.25rem",
//       xs: "0.75rem",
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
