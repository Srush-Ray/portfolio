/** @jsxImportSource @emotion/react */
"use client"
import { techStack } from '@/app/constants/techstack.ts';
import {eachTag,divInline} from './styles.js';
import Image from 'next/image';

export default function Tech() {
  return (
    <div className='mb-5'>
        <h2 className='section-header text-2xl md:text-3xl font-semibold'>Tech</h2>
        <div className='container'>
        <div className='grid grid-cols-1 justify-center items-center text-center'>
          <div className="" css={divInline}>
            {
              techStack?.map((item) => {
                return (
                  <div key={item.tech} css={eachTag} className='text-wrap'>
                    <div className='flex-1 flex items-center justify-center w-full my-1'>
                      <Image
                        src={item.image}
                        alt={item.tech}
                        width={48}
                        height={48}
                        className='object-contain max-h-12 w-auto'
                      />
                    </div>
                    <p className='text-sm text-center break-words mt-auto pt-1 font-medium'>{item.tech}</p>
                  </div>
                )
              })
            }
          </div>
    </div>
        </div>
    </div>
  )
}
