"use client"; // This ensures that the code only runs on the client side

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const basePath =
        process.env.NODE_ENV === "production" ? "/BC-React-App" : ""; // Set the base path for production
      navigator.serviceWorker
        .register(`${basePath}/service-worker.js`) // Dynamically set the correct path for both environments
        .then((registration) => {
          console.log(
            "Service Worker registered with scope: ",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }
  }, []);

  return null; // This component does not render anything
}
