"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length; // get the angle for each element to be placed in the circle.

  const size = useScreenSize(); // allows us to get the scrren width
  const isLarge = size >= 1024; // test if screen width greater
  const ismedium = size >= 768; // test if screen width greater

  console.log(size);

  return (
    <div className=" fixed z-50 h-screen w-full flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className=" w-max flex items-center justify-center relative text-white animate-spin-slow hover:pause group">
              {" "}
              {/* group is used to help with spinning affect for navitgation*/}
              {BtnList.map((btn, index) => {
                const angleRad = (index * (angleIncrement * Math.PI)) / 180; // convert angle from degrees to radians for each btn
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : ismedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                // Above, conditional renders the radius based on screen width adjusting dynamically
                const x = `calc(${radius}*${Math.cos(angleRad)})`; // calculate x position
                const y = `calc(${radius}*${Math.sin(angleRad)})`; // calculate y position

                //console.log(angleRad,radius,x,y)
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </div>
          ) : (
            // Above renders when the width is above 480 px
            <>
              <div className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative text-white group">
                {" "}
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </div>

              {/* Above we split the list in half and grab the first half in order to position it at the start of the div */}

              <div className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative text-white group">
                {" "}
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </div>
              {/* Above we split the list in half and grab the second half in order to position it at the end of the div */}
            </>
            // Above, renders when the screen size is below 480 px
          );
        }}
      </ResponsiveComponent>{" "}
    </div>
  );
};

export default Navigation;

// Above, we wrap our nav within our responsive component so we have acess to size.
// After, we conditonally render based on the screen size.
