import React from 'react'

const ProjectLayout = ({name,description,date,link}) => {
    // ProjectLayout component takes in four props which are also properties of our projects.


  return (
    <div  className='flex justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg'>
     <div className='flex items-center justify-center space-x-2'>
        <h2 className='font-bold text-foreground '>{name} </h2>
        <p className=' font-bold text-muted'>{description}</p>
     </div>
        {/* name and escription above */}
     
     <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'/>
       {/* dashed line above */}

     <p className=' font-bold text-foreground'>
        {new Date(date).toDateString()}
     </p>
        {/* date above */}
    </div>
  )
}

//  ProjectLayout component returns a div containing the properties of our project styled within different elements.

export default ProjectLayout
