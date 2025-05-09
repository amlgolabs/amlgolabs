import React from 'react'
import IndustryHero1 from '../components/PagesComponents/Hero/IndustryHero1'
import Introduction1 from '../components/PagesComponents/Introduction/Introduction1'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes';
import AmlgoDifference from '../components/PagesComponents/AmlgoDifference';
import ToolsTechnologies from '../components/ToolsTechnologies';
import RegulatoryReach from '../components/RegulatoryReach';

const page = () => {

  const IntroductionData = {
    title: 'Amlgo Labs in Risk and Regulatory Compliances',
    subtitle: 'From Crisis to Control : Empowering Finance Through Compliance.',
    content1: "We here at Amlgo Lab helps financial institutions go beyond regulatory checkboxes. Our expert-led solutions streamline risk management and regulatory reporting, reducing complexity while unlocking new opportunities for growth. Whether you're working with AxiomSL Controller View V10, OneSumX, or Moody's risk management reporting solutions, we tailor the approach to your unique infrastructure and regulatory landscape.",
    content2: 'Post-2008, compliance became more than a formality—it became fundamental. Regulatory frameworks now shape how financial institutions operate, from capital allocation to daily reporting cycles. Tools like Axiom V10, Moody’s Risk, and OneSumX have become indispensable, but integrating and managing them effectively still requires expertise. At Amlgo Labs, we ensure your systems are more than compliant—they’re future-ready.'
  };

  const solutionsData = [
    {
      heading: "Tailored Reporting Solutions",
      text: "We align seamlessly with your existing systems and reporting requirements, delivering solutions that enhance efficiency, ensure compliance, and support your long-term operational goals."
    },
    {
      heading: "Tool Compatibility and Implementation",
      text: "Our team comprises experts with hands-on experience across various regulatory tools. They quickly master new technologies and integrate them into existing systems to enhance efficiency and compliance."
    },
    {
      heading: "Accurate and Timely Submissions",
      text: "Recognizing the importance of submission deadlines, we optimize operations to ensure seamless system flow, with rigorous validation processes for accurate, compliant reports."
    },
    {
      heading: "Efficient Data Enhancement",
      text: "Our solutions reduce manual intervention and enhance consistency. With each release cycle, we drive continuous improvement and operational reliability."
    },
    {
      heading: "Smooth System Migration",
      text: "Whether transitioning from legacy platforms or optimizing current systems, we ensure seamless migration, preserving data integrity and operational continuity."
    },
    {
      heading: "Beyond Compliance: Sustaining Systems and Driving Innovation",
      text: "We go beyond basic compliance by proactively maintaining systems, ensuring operational excellence, and driving innovation to meet evolving business needs."
    }
  ];
  

  return (
    <>
      <IndustryHero1
        imageSrc="/businesses/risk-regulatory/hero.png"
        altText="Banking Hero"
        heading="Navigating the New Norm: Mastering Risk in a Shifting Landscape"
        subHeading="At Amlgo Labs, we offer end-to-end expertise in tools and solutions to navigate complex regulatory frameworks and deliver resilient financial operations across the global ecosystem."
      />

      <Introduction1 {...IntroductionData} />

      <SolutionsBoxes
        title="Our Solutions"
        description="We provide tailored solutions that simplify regulatory compliance, reduce operational risk, and ensure your business meets evolving industry standards with confidence."
        solutions={solutionsData}
      />
      <AmlgoDifference/>
      <ToolsTechnologies/>
      <RegulatoryReach/>
    </>
  )
}

export default page