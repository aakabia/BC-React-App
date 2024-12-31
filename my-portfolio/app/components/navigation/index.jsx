import React from 'react'
import { BtnList } from '@/app/data'
import NavButton from './NavButton';

const Navigation = () => {

    const angleIncrement = 360/BtnList.length; // get the angle for each element to be placed in the circle.



  return (
  <div className=' fixed z-50 h-screen w-full flex items-center justify-center'> {/* set z index when position is fixed to prevent overlapping children*/}
      <div className='flex items-center justify-between relative text-white '>
      {BtnList.map((btn,index)=>{
        const angleRad = index*(angleIncrement*Math.PI)/180 // convert angle from degrees to radians for each btn
        const radius = 'calc(20vw - 1rem)' // set radius for positioning elements 
        const x = `calc(${radius}*${Math.cos(angleRad)})` // calculate x position 
        const y = `calc(${radius}*${Math.sin(angleRad)})`// calculate y position 

        //console.log(angleRad,radius,x,y)
        return <NavButton key={btn.label} x ={x} y ={y} {...btn}/>
        
        
       

      })}
    </div>
  </div>
  )
}

export default Navigation
