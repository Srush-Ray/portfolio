/** @jsxImportSource @emotion/react */
"use client"
import React, { useRef } from 'react'
import {selectedTab,notSelectedTab,eachTab,mainContainer} from './styles.js'
import ExperienceCards from './experience-cards.tsx';
import {ExperienceDetails} from '../../constants/experience';

const Experience = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const mainTabContainer=useRef<null | HTMLDivElement>(null);
  return (
    <div>
        <h2 className='section-header md:text-3xl text-2xl font-semibold'>Experience</h2>
        <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            
              <a
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                // className={
                //   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                //   (openTab === 1
                //     ? "text-white bg-blueGray-600"
                //     : "text-blueGray-600 bg-white")
                // }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                  mainTabContainer?.current?.scrollTo(0,0)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <li 
            css={[eachTab,openTab===1?selectedTab:notSelectedTab]}
            >
                Professional
            </li>
              </a>
              <a
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                  mainTabContainer?.current?.scrollTo(0,0)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                  <li 
                  css={[eachTab,openTab===2?selectedTab:notSelectedTab]}
                  >
                Internship
            </li>
              </a>
              <a
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                  mainTabContainer?.current?.scrollTo(0,0)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                  <li 
                  css={[eachTab,openTab===3?selectedTab:notSelectedTab]}
                  >
                Freelance
            </li>
              </a>
          </ul>
          <div ref={mainTabContainer} css={mainContainer} className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <ExperienceCards details={ExperienceDetails.professional}/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <ExperienceCards details={ExperienceDetails.internship}/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <ExperienceCards details={ExperienceDetails.freelance}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience