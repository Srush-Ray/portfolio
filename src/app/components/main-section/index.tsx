/** @jsxImportSource @emotion/react */
"use client"
import React from 'react'
// import './styles.css';
import {headerStyles,para,imageStyle} from './styles';
import ContactDetails from '../contact';
import Image from 'next/image';


export default function MainSection() {
  return (
    <div className="container mx-auto py-10">
    {/* <div className="grid grid-cols-2 gap-4"> */}
      <div className='grid grid-cols-1 justify-center items-center text-center'>
        <h1 className='text-5xl font-bold' css={headerStyles}>Srushti Raybhoge</h1>
        <h3 className='text-3xl font-semibold'  css={headerStyles}>Software Development Engineer</h3>
        <h5 className='text-2xl'  css={headerStyles}>Fullstack | Frontend </h5>
        {/* <h5 className='text-2xl'  css={headerStyles}>Linkedin Top Voice Software Development</h5> */}
        <h5 className='text-2xl'  css={headerStyles}>Public Speaker and Contributor</h5>
        <h5 className='text-2xl'  css={headerStyles}>Adventurous Reader</h5>
        <p css={para} className='text-lg'>
        </p>
        <ContactDetails/>
      </div>
      {/* <div className='grid grid-cols-1 justify-center items-center text-center'>
        <Image
        src="/images/photos/my-photo.png"
        width={250}
        height={250}
        alt="Picture of the author"
        className='grid grid-cols-1 justify-center items-center text-center'
        css={imageStyle}
      />
      </div> */}
      </div>
    //  </div>
     
  )
}
