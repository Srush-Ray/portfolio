/** @jsxImportSource @emotion/react */
"use client"
import {eachSection} from './styles';
import Image from 'next/image'

const AcademicCards = ({
name='',
logo='',
degree='',
course='',
year='',
teams=[]
}:{
    name:string;
    logo:string;
    degree:string;
    course:string;
    year:string;
    teams?:string[];
}) => {
  return (
    <div className='container justify-center items-center text-left' css={eachSection}>
        <div className='grid grid-cols-8'>
        <div className='grid grid-cols-1'>
         <Image
          src={logo}
          height={50}
          width={50}
          alt={name}
          // css={imageStyle}
         />
        </div>
        <div className='pl-4 grid grid-cols-1 col-span-6'>
          <p>{name}</p>
          <p>{degree} - {course}</p>
          <p>{year}</p>
        </div>
        </div>
    </div>
  )
}

export default AcademicCards