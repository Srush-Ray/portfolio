/** @jsxImportSource @emotion/react */
"use client"
import { headerStyles, para, imageStyle } from './styles';
import ContactDetails from '../contact';
import Image from 'next/image';

export default function MainSection() {
  return (
    <div className="w-full my-4 flex justify-center">
      <div className='flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-16'>
        {/* Left Side: Name, Titles & Contact Info */}
        <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
          <h1 className='md:text-5xl text-3xl font-bold' css={headerStyles}>Srushti Raybhoge</h1>
          <h3 className='md:text-3xl text-xl font-semibold' css={headerStyles}>Software Engineer</h3>
          <h5 className='md:text-2xl text-lg' css={headerStyles}>Fullstack | Frontend</h5>
          <h5 className='md:text-2xl text-lg' css={headerStyles}>Google Developer Expert - Firebase</h5>
          <h5 className='md:text-2xl text-lg' css={headerStyles}>Public Speaker</h5>
          <div className='w-full mt-2 flex justify-center md:justify-start'>
            <ContactDetails align="responsive" />
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className='flex justify-center items-center flex-shrink-0'>
          <Image
            src="/images/photos/my-photo.png"
            width={260}
            height={260}
            alt="Srushti Raybhoge"
            css={imageStyle}
            priority
          />
        </div>
      </div>
    </div>
  )
}
