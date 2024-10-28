import React from 'react'

const AcademicCards = ({details}:{details:{
    name:string;
    logo:string;
    degree?:string;
    course?:string;
    year?:string;
    teams?:string;
}}) => {
  return (
    <div className='container'>
        <div className='grid grid-cols-2'>
        <div className='grid grid-cols-1'>
        <p>here</p>
        </div>
        <div className='grid grid-cols-1'>
        <p>here</p>
        </div>
        </div>
    </div>
  )
}

export default AcademicCards