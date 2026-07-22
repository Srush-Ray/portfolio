/** @jsxImportSource @emotion/react */
"use client"
import React, { useRef } from 'react'
import {selectedTab,notSelectedTab,eachTab,mainContainer} from './styles.js'
import ExperienceCards from './experience-cards.tsx';
import {ExperienceDetails} from '../../constants/experience';

const Experience = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const mainTabContainer = useRef<null | HTMLDivElement>(null);
  
  return (
    <div className='mb-[32px]'>
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="h-[32px] w-[4px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-[9999px]"></span>
        <h2 className='text-[24px] md:text-[30px] font-bold tracking-tight text-[var(--text-primary)]'>
          Work Experience
        </h2>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full">
          {/* Segmented Tab Controls */}
          <div className="flex flex-wrap gap-[8px] mb-[24px] p-[6px] rounded-[9999px] bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-md w-fit shadow-sm">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
                mainTabContainer?.current?.scrollTo(0, 0);
              }}
              css={[eachTab, openTab === 1 ? selectedTab : notSelectedTab]}
            >
              Professional
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
                mainTabContainer?.current?.scrollTo(0, 0);
              }}
              css={[eachTab, openTab === 2 ? selectedTab : notSelectedTab]}
            >
              Internship
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
                mainTabContainer?.current?.scrollTo(0, 0);
              }}
              css={[eachTab, openTab === 3 ? selectedTab : notSelectedTab]}
            >
              Freelance
            </button>
          </div>

          {/* Cards Glass Container */}
          <div ref={mainTabContainer} css={mainContainer} className="relative flex flex-col min-w-0 break-words w-full">
            <div className="tab-content">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <ExperienceCards details={ExperienceDetails.professional} />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <ExperienceCards details={ExperienceDetails.internship} />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <ExperienceCards details={ExperienceDetails.freelance} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Experience