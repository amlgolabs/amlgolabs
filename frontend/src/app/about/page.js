import Head from 'next/head';
import React from 'react';
import AboutUsHero from '../components/PagesComponents/AboutUs/AboutUsHero';
import CompanyOverview from '../components/PagesComponents/AboutUs/CompanyOverview';
import CoreValues from '../components/PagesComponents/AboutUs/CoreValues';
import ProcessFlow from '../components/PagesComponents/AboutUs/ProcessFlow';
import PeoplePrinciples from '../components/PagesComponents/AboutUs/PeoplePrinciples';
import NumberStats from '../components/PagesComponents/NumberStats';
import CompanyStats from '../components/PagesComponents/AboutUs/CompanyStats';

export const metadata = {
  title: "About Us - Amlgo Labs",
  description: "Learn more about Amlgo Labs, our mission, vision, and team.",
  keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
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
        {/* <ProcessFlow/> */}
        {/* <NumberStats/> */}
        <CompanyStats/>
        <PeoplePrinciples/>
      </div>
    </>
  );
};

export default page;
