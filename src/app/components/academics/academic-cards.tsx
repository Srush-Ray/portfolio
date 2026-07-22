/** @jsxImportSource @emotion/react */
"use client"
import {eachSection} from './styles';
import Image from 'next/image'

const AcademicCards = ({
  name = '',
  logo = '',
  degree = '',
  course = '',
  year = '',
}: {
  name: string;
  logo: string;
  degree: string;
  course: string;
  year: string;
  teams?: string[];
}) => {
  return (
    <div className='w-full text-left' css={eachSection}>
      <div className='flex items-center gap-[16px] flex-wrap sm:flex-nowrap justify-between'>
        <div className='flex items-center gap-[16px]'>
          {/* Logo Badge */}
          <div className='w-[56px] h-[56px] rounded-[12px] bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center p-[8px] flex-shrink-0 shadow-sm'>
            <Image
              src={logo}
              height={44}
              width={44}
              alt={name}
              className='object-contain max-h-[40px] w-auto'
            />
          </div>

          {/* Institution & Degree */}
          <div className='space-y-[4px]'>
            <h3 className='text-[16px] font-bold text-[var(--text-primary)] tracking-tight'>{name}</h3>
            <h4 className='text-[12px] font-semibold text-[var(--text-accent)]'>{degree} — {course}</h4>
          </div>
        </div>

        {/* Year Badge */}
        <div className='flex-shrink-0 flex items-center'>
          <span className='inline-flex items-center justify-center px-[12px] py-[4px] rounded-[9999px] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[12px] font-semibold text-[var(--badge-text)] shadow-sm'>
            {year}
          </span>
        </div>
      </div>
    </div>

  )
}

export default AcademicCards