
/** @jsxImportSource @emotion/react */
"use client"
import MainSection from "./components/main-section";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Academics from "./components/academics";
import BitsBites from "./components/bitbites";
import { useEffect, useRef, useState } from "react";
import { stickyHeader, header } from "./components/header/styles";
import ContactDetails from "./components/contact";
import ThemeToggle from "./components/theme-toggle";
import { useSearchParams } from "next/navigation";

export default function AllSections() {
  const mainSection = useRef<null | HTMLDivElement>(null)
  const techSection = useRef<null | HTMLDivElement>(null)
  const bitesSection = useRef<null | HTMLDivElement>(null)
  const expSection = useRef<null | HTMLDivElement>(null)
  const acaSection = useRef<null | HTMLDivElement>(null)
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source');

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

  return (
    <div className="min-h-screen relative">
      {/* Theme toggle hidden for now */}
      {/* <div className="fixed top-5 right-5 z-[100001]">
        <ThemeToggle />
      </div> */}


      <div className="max-w-[1152px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] py-[32px] space-y-[80px]">

        <div ref={mainSection}>
          <MainSection />
        </div>
        <div ref={expSection}>
          <Experience />
        </div>
        <div ref={techSection}>
          <Tech />
        </div>
        <div ref={bitesSection}>
          <BitsBites />
        </div>
        <div ref={acaSection}>
          <Academics />
        </div>
      </div>
      {!isIntersecting && (
        <div css={[stickyHeader, header]}>
          <ContactDetails details={{ utm_source: utmSource || '' }} />
        </div>
      )}
    </div>
  );
}