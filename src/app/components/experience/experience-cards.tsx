/** @jsxImportSource @emotion/react */
"use client"
import { Details } from '@/app/constants/experience';
import {experienceCardsContainer,divInline,eachTag} from './styles.js'

const ExperienceCards = ({ details = [] }: {
  details: Details[]
}) => {
  return (
    <div className='w-full space-y-[24px]'>
      {details?.map((detail, index) => {
        return (
          <div key={index} css={experienceCardsContainer} className='grid grid-cols-1 md:grid-cols-8 gap-[16px] items-start'>
            {/* Duration Badge */}
            <div className='md:col-span-2 flex md:justify-end items-center pt-[4px]'>
              <span className='inline-flex items-center justify-center px-[12px] py-[4px] rounded-[9999px] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[12px] font-semibold text-[var(--badge-text)] whitespace-nowrap shadow-sm'>
                {detail.year}
              </span>
            </div>

            {/* Role & Company Details */}
            <div className='md:col-span-6 text-left space-y-[8px]'>
              <div>
                <h3 className='text-[20px] font-bold text-[var(--text-primary)] tracking-tight'>{detail.title}</h3>
                <h4 className='text-[16px] font-semibold text-[var(--text-accent)]'>{detail.company}</h4>
              </div>

              {/* Qualities / Skills */}
              <div css={divInline}>
                {detail?.qualities?.map((item, qIndex) => {
                  return (
                    <div key={qIndex} css={eachTag}>
                      <span>{item}</span>
                    </div>
                  )
                })}
              </div>

              {/* Description */}
              <p className='text-[14px] text-[var(--text-secondary)] font-normal'>
                {detail.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default ExperienceCards