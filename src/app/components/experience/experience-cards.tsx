/** @jsxImportSource @emotion/react */
"use client"
import { Details } from '@/app/constants/experience';
import {experienceCardsContainer,divInline,eachTag} from './styles.js'

const ExperienceCards = ({details=[]}:{
  details: Details[]
}) => {
  return (
    <div className='container'>
      {details?.map((detail)=>{
        return <div key={detail.year} className='grid grid-cols-8' css={experienceCardsContainer}>
        <div  className='grid grid-cols-1 col-span-2 text-right'>
        <div className='text-lg'>{detail.year}</div>
        </div>
        <div className='grid grid-cols-1 col-span-6 text-left pl-5 pr-5'>
          <p className='text-lg font-bold'>{detail.company}</p>
          <p className='font-bold'>{detail.title}</p>
          <div css={divInline} className='grid grid-cols-12'>
          {detail?.qualities?.map((item,index)=>{
            return <div key={index} css={eachTag} >
              <p className='text-xs whitespace-nowrap'>{item}</p>
            </div>
          })}
          </div>
          <p>{detail.description}</p>
          </div>
        </div>
      })}
    
    </div>
  )
}

export default ExperienceCards