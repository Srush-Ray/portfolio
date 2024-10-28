/** @jsxImportSource @emotion/react */
"use client"
import { AcademicsData } from '@/app/constants/academics';
import AcademicCards from './card';
import {links} from './styles.js';
export default function Academics() {
  return (
    <div>
        <h2 className='section-header text-3xl font-semibold mt-5'>Academics</h2>
        <div className='container'>
        <div className='grid grid-cols-3 justify-center items-center text-center'>
          {AcademicsData?.map((item)=>{
            return <div key={item.name} className='grid grid-cols-1'>
              {/* <AcademicCards details={item}/>   */}
            </div>
          })}
        </div>
        </div>
    </div>
  )
}

