import Head from 'next/head';
import React from 'react';
import AboutUsHero from '../components/PagesComponents/AboutUs/AboutUsHero';
import CompanyOverview from '../components/PagesComponents/AboutUs/CompanyOverview';
import CoreValues from '../components/PagesComponents/AboutUs/CoreValues';
import ProcessFlow from '../components/PagesComponents/AboutUs/ProcessFlow';
import PeoplePrinciples from '../components/PagesComponents/AboutUs/PeoplePrinciples';
import NumberStats from '../components/PagesComponents/NumberStats';
import CompanyStats from '../components/PagesComponents/AboutUs/CompanyStats';
import CompanyAchievements from '../components/PagesComponents/AboutUs/CompanyAchievements';
import ImageGallery from '../components/PagesComponents/AboutUs/ImageGallery';
import PartnersStrip from '../components/PagesComponents/AboutUs/PartnersStrip';

export const metadata = {
  title: "Amlgo Labs – Gen AI, Data Analytics & Digital Transformation Experts",
  description: "Amlgo Labs specializes in Gen AI, data analytics, and digital transformation, driving business growth with cutting-edge solutions. Explore our expertise today.",
  keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML, AI company, data analytics, machine learning experts, leading AI and machine learning company for enterprise solutions, data analytics and generative AI expertise",
};


const page = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div>
        <AboutUsHero/>
        <CompanyOverview/>
        <CoreValues/>
        <ImageGallery/>
        <CompanyAchievements/>
        {/* <ProcessFlow/> */}
        {/* <NumberStats/> */}

        <PeoplePrinciples/>
        <CompanyStats/>

      </div>
    </>
  );
};

export default page;
