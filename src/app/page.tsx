import Image from "next/image";
import Header from "./components/header";
import MainSection from "./components/main-section";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Academics from "./components/academics";
import BitsBites from "./components/bitbites";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
       <div className="mt-8 grid-cols-12">
        <Header/>
       </div>
      <div className="my-20 grid-cols-6">
       <MainSection/>
      </div>
      <div>
      <Experience/>
      </div>
      <div>
      <Tech/>
      </div>
      {/* <div>
      <Academics/>
      </div> */}
      <div>
      <BitsBites/>
      </div>
    </div>
  );
}