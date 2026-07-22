/** @jsxImportSource @emotion/react */
"use client"
import { AcademicsData } from '@/app/constants/academics';
import AcademicCards from './academic-cards.tsx';
export default function Academics() {
  return (
    <div className='mb-[32px]'>
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="h-[32px] w-[4px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-[9999px]"></span>
        <h2 className='text-[24px] md:text-[30px] font-bold tracking-tight text-[var(--text-primary)]'>
          Education & Academics
        </h2>
      </div>

      <div className='w-full space-y-[16px]'>
        {AcademicsData?.map((item) => {
          return (
            <div key={item.name}>
              <AcademicCards
                name={item.name}
                logo={item.logo}
                degree={item.degree}
                course={item.course}
                year={item.year}
                teams={item.teams || []}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}



