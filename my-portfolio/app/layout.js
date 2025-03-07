'use client';
import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import SpaceStarsBackground from "./components/SpaceStarsBackground";
import Sound from "./components/sound";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const basePath = process.env.NODE_ENV === 'production' 
  ? '/BC-React-App/'  // Adjust for production
  : '/';  // Default to root for local development

// Define the icon path dynamically
const iconPath = `${basePath}images/helmet.png`;


export const metadata = {
  title: "AK Web-Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: iconPath,
  },
};

export default function RootLayout({ children }) {


  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')  // This is the path to the service worker generated by Workbox
          .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed: ', error);
          });
      });
    }
  }, []);





  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpaceStarsBackground />
        {/* going to add spacestars background to each page so we add it to the layout page.*/}

        <Sound />
        {/* Above is our sound component */}

        <div id="my-modal" />
        {/* Parent container for our modal */}
      </body>
    </html>
  );
}
