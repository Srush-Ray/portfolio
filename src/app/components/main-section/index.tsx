/** @jsxImportSource @emotion/react */
"use client"
import React from 'react'
import './styles.css';
import {headerStyles} from './styles';
import ContactDetails from '../contact';


export default function MainSection() {
  return (
    <div className="container mx-auto py-20">
    <div className="grid grid-cols-2 gap-4">
      <div className='grid grid-cols-1 justify-center items-center text-center'>
        <h1 css={headerStyles}>Srushti Raybhoge</h1>
        <h3>Software Development Engineer</h3>
        <h5>Fullstack | Frontend | Backend</h5>
        <p className='wide-paragraph'>
          Working on Javascript and Typescript based frameworks and libraries like React, NextJs, NodeJs, NestJs, React Native etc.
          Avid reader, versatile learner, supportive mentor and gentle leader.
        </p>
        <ContactDetails/>
      </div>
      <div className='grid grid-cols-1 justify-center items-center text-center'>
      {/* <Image
      src="public/images/photos/my.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      </div>
      </div>
     </div>
     
  )
}
