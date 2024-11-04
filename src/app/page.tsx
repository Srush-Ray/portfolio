/** @jsxImportSource @emotion/react */
"use client"
import Image from "next/image";
import Header from "./components/header";
import MainSection from "./components/main-section";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Academics from "./components/academics";
import BitsBites from "./components/bitbites";
import { useRef } from "react";
import { stickyHeader } from "./components/header/styles";

export default function Home() {
  const mainSection = useRef<null | HTMLDivElement>(null)
  const techSection = useRef<null | HTMLDivElement>(null)
  const bitesSection = useRef<null | HTMLDivElement>(null)
  const expSection = useRef<null | HTMLDivElement>(null)
  const acaSection = useRef<null | HTMLDivElement>(null)
  
  const onClickScroll=(key:number)=>{
    switch (key) {
      case 1:
        mainSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break;
        case 2:
        expSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          break;
          case 3:
        techSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            break;
            case 4:
           bitesSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              break;  
              case 5:
                acaSection?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                   break;    
      default:
        break;
    }
  
  }
  return (
    <div>
       <div className="" css={stickyHeader}>
        <Header onClickScroll={onClickScroll}/>
       </div>
    <div className="container justify-self-center">
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
    </div>

  );
}