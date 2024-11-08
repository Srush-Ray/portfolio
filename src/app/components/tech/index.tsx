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
          techStack?.map((item)=>{
            return <div key={item.tech} css={eachTag} className='text-wrap'>
              <div className='justify-center items-center '>
               <Image
               src={item.image}
               alt={item.tech}
               width={50}
               height={50}
               className='inline-block items-center mb-4 mt-2 justify-center align-middle'
               />
                <p className='text-xs justify-center items-center break-all'>{item.tech}</p>
              </div>
              
              </div>
          })
        }
      </div>
    </div>
        </div>
    </div>
  )
}


