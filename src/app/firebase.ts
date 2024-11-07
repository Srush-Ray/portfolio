import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics,isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics:Analytics;
const initializeAnalytics = async () => {
  // Ensure we are in the browser environment
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
    } else {
    }
  }
};

const trackClick=(
  eventName:string, 
  eventParams?:{
  [key: string]: any;
  }
)=>{
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  } 
}

export { initializeAnalytics,  trackClick };