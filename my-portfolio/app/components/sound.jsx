"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  // create modal component using createPortal that takes two args.
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 xs:px-10 sm:px-10 rounded shadow-glass-inset text-center space-y-8 text-white">
        <p className="font-light p-1">
          Would you like to play the background music?
        </p>
        <div className="flex items-center justify-center space-x-4 z-50">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2 cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded cursor-pointer"
          >
            No
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef();

  // useState for state control and useRef for reference control

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    // get consent from local storage

    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setisPlaying(true); // safeguard to make sure is playig is set to true!
    }

    // check if consent and is playing are true.
    // if they both are we play the audio and set is playing to true as safeguard.

    ["click", "keydown", "touchstart"].forEach((event) => {
      document.removeEventListener(event, handleFirstUserInteraction);
    });

    // remove all event listeners so the events dont persist when component unmounts.
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    // gets consent and consentTime from local storage

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 100 > new Date()
    ) {
      setisPlaying(consent === "true");
      // Above says, if consent exists and consentTime exists and if the consentTime plus three days is greater than the current date we set is playing to the value of consent === "true"
      // new Date(consentTime).getTime() gets miliseconds of the consentTime

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) => {
          document.addEventListener(event, handleFirstUserInteraction);
        });
      }
      // Above says, if consent === "true" we add array of event listener to to document to handleFirstUserInteraction.
    } else {
      setShowModal(true);

      // if consent does not exist we call setShowModal and set it to true!
    }
  }, []); // empty array means we only run this on component mount.

  const toggle = () => {
    const newState = !isPlaying; // our set state on each togge; as a variable
    setisPlaying(!isPlaying); // change actual state of isPlaying
    newState ? audioRef.current.play() : audioRef.current.pause(); // play audio based off value of our newState;
    localStorage.setItem("musicConsent", String(newState)); // set the string version of our newState to local storage for future use.
    localStorage.setItem("consentTime", new Date().toISOString()); // set the date and time the consent happened.
    setShowModal(false); // call setShowModal beacuse we use toggle in our modal and use it to close the model
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 text-white z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
      {/* show our modal depending on value of showModal */}

      <audio ref={audioRef} loop>
        <source src={"/audio/spaceAudio.mp3"} type="audio/mpeg" />
        your browser does not support the audio element
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className=" w-10 h-10 xs:w-14 xs:h-14 text-white rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg "
        aria-label={"sound"}
        name={"sound"}
      >
        {isPlaying ? (
          <Volume2
            className=" w-full h-full text-white group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className=" w-full h-full text-white group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;

// Our, Sound component uses state, and ref to display audio for users.
// Also, it uses effect to handle user preference through the help of local storage.
// Last, it uses a modal to ask the user if how they would like to set their sound setting.
