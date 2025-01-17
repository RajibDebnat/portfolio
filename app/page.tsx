import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
// import Image from "next/image";
// import { title } from "process";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/raw-data/gridItemsData";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="  relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={navItems} />
      <Hero/>
      {/* <Grid/> */}
      <RecentProjects/>
      <Client/>
      <Experience/>
      <Approach/>
      <Footer/>
      </div>
    </main>
  );
}
