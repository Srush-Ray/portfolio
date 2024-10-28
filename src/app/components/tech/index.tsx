/** @jsxImportSource @emotion/react */
"use client"
import { techStack } from '@/app/constants/techstack.ts';
import {eachTag} from './styles.js';
import Image from 'next/image';

export default function Tech() {
  return (
    <div>
        <h2 className='section-header text-3xl font-semibold'>Tech Stack</h2>
        <div className='container'>
        <div className='grid grid-cols-1 mt-5 justify-center items-center text-center'>
         <div className="grid grid-cols-6">
         {
          techStack?.map((item)=>{
            return <div key={item.tech} css={eachTag} className='grid grid-cols-1'>
              <div className='justify-center items-center '>
               <Image
               src={item.image}
               alt={item.tech}
               width={50}
               height={50}
               className='inline-block items-center justify-center align-middle'
               />
                <p className='justify-center items-center'>{item.tech}</p>
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


