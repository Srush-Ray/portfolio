/** @jsxImportSource @emotion/react */
"use client"
import { headerStyles, para, imageStyle } from './styles';
import ContactDetails from '../contact';
import Image from 'next/image';

export default function MainSection() {
  return (
    <div className="w-full my-[24px] flex justify-center">
      <div className='flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left gap-[32px] md:gap-[64px] max-w-[1024px] w-full'>
        {/* Left Side: Name, Titles & Personal Intro */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left flex-1'>

          {/* Greeting & Name */}
          <div>
            <h1 className='text-[36px] md:text-[60px] font-extrabold tracking-tight gradient-text my-[8px]' css={headerStyles}>
              Srushti Raybhoge
            </h1>
          </div>

          <h2 className='text-[18px] md:text-[24px] font-semibold gradient-text-accent mb-[12px]' css={headerStyles}>
            Software Engineer
          </h2>

          {/* Warm Personal Bio */}
          <p className='text-[var(--text-secondary)] text-[14px] md:text-[16px] max-w-[512px] font-normal mb-[16px]'>
            Passionate about building fintech products, leveraging Agentic AI, and crafting intuitive user experiences. Always excited to mentor, build, and speak about tech!
          </p>

          {/* Key Specialty Badges */}
          <div className='flex flex-wrap gap-[8px] justify-center md:justify-start my-[4px]'>
            <span className='px-[12px] py-[4px] rounded-[9999px] text-[12px] font-medium bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] transition shadow-sm'>
              Google Developer Expert — Firebase
            </span>
            <span className='px-[12px] py-[4px] rounded-[9999px] text-[12px] font-medium bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] transition shadow-sm'>
              Fullstack | Frontend
            </span>
            <span className='px-[12px] py-[4px] rounded-[9999px] text-[12px] font-medium bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] transition shadow-sm'>
              Agentic AI & Fintech
            </span>
            <span className='px-[12px] py-[4px] rounded-[9999px] text-[12px] font-medium bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] transition shadow-sm'>
              Public Speaker & Mentor
            </span>
          </div>




          {/* Contact Icons */}
          <div className='w-full mt-[8px] flex justify-center md:justify-start'>
            <ContactDetails align="responsive" />
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className='flex justify-center items-center flex-shrink-0'>
          <Image
            src="/images/photos/GDE Profile.png"
            width={280}
            height={373}
            alt="Srushti Raybhoge — Google Developer Expert"
            css={imageStyle}
            priority
          />
        </div>

      </div>
    </div>
  )
}


