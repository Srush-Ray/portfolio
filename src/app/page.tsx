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
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";

export default function Home() {
  const mainSection = useRef<null | HTMLDivElement>(null)
  const techSection = useRef<null | HTMLDivElement>(null)
  const bitesSection = useRef<null | HTMLDivElement>(null)
  const expSection = useRef<null | HTMLDivElement>(null)
  const acaSection = useRef<null | HTMLDivElement>(null)
  
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

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized");
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
}).catch((error) => {
  console.error("Error checking analytics support:", error);
});

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
        <ContactDetails />
        </div>}
    </div>

  );
}