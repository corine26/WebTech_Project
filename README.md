●Project description
  This project involves creating a modern, responsive web application using Next.js as the React framework, Tailwind CSS for utility-first styling, and Flowbite as the component-based UI library. The main objective is to establish a clean development environment that supports rapid UI development with reusable and accessible components.

By integrating these technologies, the project demonstrates how developers can build scalable and aesthetically consistent web applications with minimal custom CSS or JavaScript. The result is a solid foundation ready for further expansion into dashboards, blogs, e-commerce apps, or admin panels.

●Setup and installation instructions
 Step 1: Create a Next.js App
  npx create-next-app@latest my-app
  cd my-app
 Step 2: Install Tailwind CSS
  npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Step 3: Configure Tailwind
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
 Step 4: Set Up Tailwind in Your CSS
 @tailwind base;
@tailwind components;
@tailwind utilities;

Step 5: Install Flowbite and Flowbite-React
npm install flowbite flowbite-react

 Step 6: Import Flowbite Styles (Optional for JS components)
 import 'flowbite';
import '../styles/globals.css';


 Step 7: Use Flowbite Components
 // Example: Using a Button from Flowbite
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <div className="p-6">
      <Button>Click me</Button>
    </div>
  );
}
Step 8: (Optional) Add Dark Mode or Custom Themes
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
};


●Team member contributions
MEMEBERS:
Hermione Bernabe:setup and styling tailwind
Corine Dino:integrate and layout design
Francine Ramos: Setup, documentation, testing
Jannah Mae Jepega:gived suggestion for overall design of the website
●Deployed URL
https://dashboardx-beta.vercel.app/

