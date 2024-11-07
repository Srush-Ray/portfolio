/** @jsxImportSource @emotion/react */
"use client"
import MainSection from "./components/main-section";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Academics from "./components/academics";
import BitsBites from "./components/bitbites";
import { useEffect, useRef, useState } from "react";
import { stickyHeader,header } from "./components/header/styles";
import ContactDetails from "./components/contact";
import {initializeAnalytics, trackClick} from './firebase';
import { useSearchParams } from "next/navigation";

export default function Home() {
  const mainSection = useRef<null | HTMLDivElement>(null)
  const techSection = useRef<null | HTMLDivElement>(null)
  const bitesSection = useRef<null | HTMLDivElement>(null)
  const expSection = useRef<null | HTMLDivElement>(null)
  const acaSection = useRef<null | HTMLDivElement>(null)
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source');

  // const onClickScroll=(key:number)=>{
  //   switch (key) {
  //     case 1:
  //       mainSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //       break;
  //       case 2:
  //       expSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //         break;
  //         case 3:
  //       techSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //           break;
  //           case 4:
  //          bitesSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //             break;  
  //             case 5:
  //               acaSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //                  break;    
  //     default:
  //       break;
  //   }
  
  // }
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    const currentElement = mainSection.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [mainSection]);
  useEffect(() => {
    // Initialize Firebase Analytics when the component is mounted
    initializeAnalytics();
    trackClick('page-load',{
      utm_source: utmSource||''
    })
  }, []);

  return (
    <div>
       {/* <div className="" css={stickyHeader}>
        <Header onClickScroll={onClickScroll}/>
       </div> */}
      <div className="container justify-self-center px-5">
      <div ref={mainSection} className="my-20 grid-cols-6">
       <MainSection />
      </div>
      <div ref={expSection}>
      <Experience/>
      </div>
      <div ref={techSection}>
      <Tech/>
      </div>
      <div ref={bitesSection}>
      <BitsBites/>
      </div>
      <div ref={acaSection}>
      <Academics/>
      </div>
    </div>
   {!isIntersecting && <div css={[stickyHeader,header]}>
        <ContactDetails details={{utm_source: utmSource||''}} />
        </div>}
    </div>

  );
}