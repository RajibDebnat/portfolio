import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
// import Image from "next/image";
// import { title } from "process";
import Head from "next/head";
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
    <>
      <Head>
        <title>Rajib Debnath | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Rajib Debnath, a passionate frontend developer with expertise in React, Next.js, and web development. Check out my projects and skills!"
        />
        <meta
          name="keywords"
          content="Rajib Debnath, frontend developer, React developer, Next.js developer, portfolio, web developer, JavaScript, responsive design,website developer, rajib portfolio , portfolio webwite, website inpiration"
        />
        <meta name="author" content="Rajib Debnath" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph for social media sharing */}
        <meta
          property="og:title"
          content="Rajib Debnath | Frontend Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Rajib Debnath, showcasing skills in React, Next.js, and web development projects."
        />
        <meta property="og:url" content="https://rajibportfolio.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://your-portfolio-url.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rajib Debnath | Frontend Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Discover the portfolio of Rajib Debnath, a skilled frontend developer with expertise in modern web technologies."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio-url.com/twitter-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  relative bg-black-100 flex justify-center items-center flex-col  overflow-x-clip mx-auto sm:px-10 px-5">
        <div>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid/>
          <RecentProjects />
          <Client />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
