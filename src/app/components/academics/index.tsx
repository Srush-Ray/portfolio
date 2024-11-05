/** @jsxImportSource @emotion/react */
"use client"
import { AcademicsData } from '@/app/constants/academics';
import AcademicCards from './academic-cards.tsx';
export default function Academics() {
  return (
    <div className='mb-10'>
        <h2 className='section-header text-2xl md:text-3xl font-semibold mt-5'>Academics</h2>
        <div className='container'>
        <div className='grid grid-cols-2 m-2 justify-center items-center text-center'>
          {AcademicsData?.map((item)=>{
            return <div key={item.name} className='m-2'>
              <AcademicCards 
              name={item.name}
              logo={item.logo}
              degree={item.degree}
              course={item.course}
              year={item.year}
              teams={item.teams || []}
              />  
            </div>
          })}
        </div>
        </div>
    </div>
  )
}

