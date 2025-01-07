"use client";
import React, { useEffect, useState } from "react";


// use client becuase we are interacting with frontend tools like use effect and state.

const createSpaceStar = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

// Above is a function that uses a object literal with ({}) and returns a object "space star"

const SpaceStarsBackground = () => {
  const [spaceStars, setSpaceStars] = useState([]);

  // set spaceStars to a empty array first 

  useEffect(() => {
    const addSpaceStarPeriodically = () => {
      const newSpaceStar = createSpaceStar();
      
      setSpaceStars(currentSpaceStars=>
        [...currentSpaceStars.slice(-20),
          newSpaceStar

        ]
      );

      // use effect to create a space star and add it to our array.
      // .slice(-20) allows us to limit our array to first 20 items 
      //setSpaceStars uses a callback fucntion to return a array




    };
    const interval = setInterval(addSpaceStarPeriodically, 1000);

    // Above calls our addSpaceStarPeriodically every second 

    return () => clearInterval(interval);

    // above clears the interval on unmount 
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {spaceStars.map((spaceStar) => {
        return (
          <div
            key={spaceStar.id}
            className="absolute  w-[10px] h-[10px] bg-spacestar-linear "
            style={{ top: spaceStar.top, left: spaceStar.left, animation: `move ${spaceStar.animationDuration} infinite alternate`}}
          >
            
          </div>
        );
      })}
    </div>
  );
};

// Above I create a div for each space star with the help of map 

export default SpaceStarsBackground;

/* [] used in tailwind for specific values */
/* added key frames for animation in global css because we are not adding the animation in the className but in the styles property.*/