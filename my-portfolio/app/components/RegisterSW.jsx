"use client";
import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    // Check if the browser supports service workers
    if ("serviceWorker" in navigator) {
      console.log("Service Worker Online!");

      // Register the service worker after the page has loaded
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register("/BC-React-App/sw.js");
          console.log(
            "Service Worker registered with scope: ",
            registration.scope
          );
        } catch (error) {
          console.log("Service Worker registration failed:", error);
        }
      };

      // Register the service worker on page load
      window.addEventListener("load", registerServiceWorker);

      // Cleanup event listener when the component is unmounted
      return () => {
        window.removeEventListener("load", registerServiceWorker);
      };
    }
  }, []); // The empty dependency array ensures this effect runs only once

  return null; // This component does not render anything
}
