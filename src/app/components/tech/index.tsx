/** @jsxImportSource @emotion/react */
"use client"
import { techStack } from '@/app/constants/techstack.ts';
import {eachTag,divInline} from './styles.js';
import Image from 'next/image';

export default function Tech() {
  return (
    <div className='mb-[32px]'>
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="h-[32px] w-[4px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-[9999px]"></span>
        <h2 className='text-[24px] md:text-[30px] font-bold tracking-tight text-[var(--text-primary)]'>
          Tech Stack & Tools
        </h2>
      </div>

      <div className='w-full'>
        <div css={divInline}>
          {
            techStack?.map((item) => {
              return (
                <div key={item.tech} css={eachTag} className='group'>
                  <div className='flex-1 flex items-center justify-center w-full my-[4px] transition-transform group-hover:scale-110 duration-300'>
                    <Image
                      src={item.image}
                      alt={item.tech}
                      width={48}
                      height={48}
                      className='object-contain max-h-[48px] w-auto'
                    />
                  </div>
                  <p className='text-[14px] text-center break-words mt-auto pt-[4px] font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] transition-colors'>
                    {item.tech}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


