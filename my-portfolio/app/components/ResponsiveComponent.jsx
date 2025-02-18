"use client"

import React from 'react'
import useScreenSize from './hooks/useScreenSize'

const ResponsiveComponent = ({children}) => {
    const size = useScreenSize();

  return (
    <>
      {children({size})}
    </>
  );
};

export default ResponsiveComponent

// Above is a component used to render its children (function ) with the size of screen as a argument.
