"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Components/Header/Header1.module.css";
import Image from "next/image";
import logo from "../../../../public/logo/logo21march.png";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Collapse,
  ListItemText,
  Button,
} from "@mui/material";
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';


import StoreIcon from '@mui/icons-material/Store';
import BungalowIcon from '@mui/icons-material/Bungalow';

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PolicyIcon from '@mui/icons-material/Policy';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SchoolIcon from '@mui/icons-material/School';
import FlightIcon from '@mui/icons-material/Flight';
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiDell } from "react-icons/si";
import { SiDatabricks } from "react-icons/si";
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import PermCameraMicIcon from '@mui/icons-material/PermCameraMic';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrainIcon from '@mui/icons-material/PsychologyAlt';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { LuDatabaseBackup } from "react-icons/lu";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { SiCloudera } from "react-icons/si";
import GavelIcon from '@mui/icons-material/Gavel';







const Header1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [desktopdrawerOpen, setdesktopDrawerOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const TABS = ["Overview", "Capabilities", "Solutions", "Research and Innovation"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedSolution, setSelectedSolution] = useState("Conversational AI Chatbot");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);


  const capabilities = [
    { name: 'Generative AI', icon: <PsychologyIcon />, description: 'AI that can generate text, images, and more.', link: "/generative-ai-services" },
    { name: 'LLMs', icon: <MenuBookIcon />, description: 'Large Language Models for natural language processing.', link: "/large-language-models-llms" },
    { name: 'GenAI Agents', icon: <SmartToyIcon />, description: 'Intelligent agents powered by generative AI.', link: "/genai-agents-development" },
    { name: 'Computer Vision', icon: <VisibilityIcon />, description: 'Enabling machines to interpret visual data.', link: "/computer-vision-services" },
    { name: 'Machine Learning and Deep Learning', icon: <BrainIcon />, description: 'Techniques for data-driven predictions.', link: "/machine-deep-learning-services" },
    { name: 'Cloud : AWS, Azure, GCP', icon: <CloudIcon />, description: 'Cloud platforms for scalable solutions.', link: "/cloud-solutions-aws-azure-gcp" },
    { name: 'Data Analytics', icon: <BarChartIcon />, description: 'Analyzing data to extract insights.', link: "/data-analytics-services" },
    { name: 'Data Engineering', icon: <BuildIcon />, description: 'Building systems for data collection and processing.', link: "/data-engineering-services" },
    { name: 'Operations and Security', icon: <SettingsIcon />, description: 'DataOps, DevOps, MLOps, SecurityOps Solutions', link: "/operations-and-security" }
  ];



  const solutions = [
    {
      name: "Conversational AI Chatbot",
      icon: <QuickreplyIcon />,
      description: 'Develop, train, and implement a chatbot to handle Level 1 support requests.',
      link: "/conversational-ai-chatbot",
      image: "/Header/ChatbotBlog.png", // <-- Add your image path here
      blogLine: "AI chatbots: Sparking smarter chats, one conversation at a time."
    },
    {
      name: "Text to SQL",
      icon: <LuDatabaseBackup />,
      description: 'Use Natural Language Processing functionality to translate everyday language into SQL queries.',
      link: "/text-to-sql-solution",
      image: "/Header/TextSQL.png",
      blogLine: "Speak your query, let AI write perfect SQL statements."
    },
    {
      name: "Vehicle Quality AI",
      icon: <CarCrashIcon />,
      description: 'Use AI and predictive analytics to forecast failures and enhance defect prevention in automotive model development.',
      link: "/vehicle-quality-ai-solutions",
      image: "/Header/VehicleQualityAI.png", // <-- Add your image path here
      blogLine: "Smarter rides ahead: AI models ensuring flawless vehicle performance."
    }
  ];

  const selectedSolutionData = solutions.find((solution) => solution.name === selectedSolution);


  const handleAboutToggle = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggledesktopDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setdesktopDrawerOpen(open);
  };

  const handleDropdownToggle = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const handleSubDropdownToggle = (category) => {
    setActiveSubDropdown(activeSubDropdown === category ? null : category);
  };


  return (
    <div className={styles.navBar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={200} height={200} />
          </Link>
        </div>

        <div className={styles.desktopLinks}>

          <div
            className={styles.dropdown}
            onMouseEnter={() => { handleMouseEnter(); setActiveTab('Overview'); }}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={toggleDropdown} className={styles.navLink}>
              NextGen AI Lab <ArrowDropDownIcon className={styles.arrowIcon} />
            </div>

            {isOpen && (
              <div className={styles.dropdownContent}>
                <div className={styles.subMenuArea}>
                  <div className={styles.sidebar}>
                    {TABS.map((tab) => (
                      <div
                        key={tab}
                        className={activeTab === tab ? styles.activeTab : styles.tab}
                        onMouseEnter={() => setActiveTab(tab)}
                      >
                        <p className={styles.tabText}>{tab}</p>
                        <ArrowRightIcon className={styles.arrowIcon} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.contentArea}>
                    {activeTab === "Overview" && (
                      <div className={styles.overview}>
                        <div className={styles.overViewContent}>
                          <h2>Amlgo Labs is dedicated to making a positive impact through technological innovation.</h2>
                          <p>For nearly a decade, Amlgo Labs has pioneered innovative solutions, helping businesses across diverse sectors achieve greater success.</p>
                          <Link href="/about-us" onClick={closeDropdown}>
                            <button className="globalButton">Learn More</button>
                          </Link>
                        </div>
                        <div className={styles.headerBlogLink}>
                          <h3>Featured Resource</h3>
                          {/* <Image height={200} width={350} src="/header/headerPartner.png" alt="casestudy" /> */}
                          <Image height={200} width={350} src="/Header/headerPartner.png" alt="casestudy" />

                          <h4>Partnering with Leaders empowering success.</h4>
                          {/* <Link href="/partners">Read More</Link> */}
                          <Link href="/about-us" onClick={closeDropdown}>
                            <button className="globalButton">Learn More</button>
                          </Link>
                        </div>
                      </div>
                    )}
                    {activeTab === "Capabilities" && (
                      <div className={styles.capabilitiesGrid}>
                        {capabilities.map(({ name, icon, description, link }) => (
                          <Link href={link} className={styles.linkWrapper} key={name} onClick={closeDropdown}>
                            <div className={styles.iconWrapper}>
                              {icon && React.cloneElement(icon, { className: styles.icon })}
                            </div>
                            <div className={styles.textWrapper}>
                              <span className={styles.title}>{name}</span>
                              <p className={styles.description}>{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {activeTab === "Solutions" && (
                      <div className={styles.solutions}>
                        <div className={styles.solutionsItem}>
                          {solutions.map(({ name, icon, link, description }) => (
                            <Link href={link} key={name} onClick={closeDropdown}>
                              <div
                                key={name}
                                className={`${styles.linkWrapper} ${selectedSolution === name ? styles.activeSolution : ""}`}
                                onMouseEnter={() => setSelectedSolution(name)}
                              >
                                <div className={styles.iconWrapper}>
                                  {icon && React.cloneElement(icon, { className: styles.icon })}
                                </div>
                                <div className={styles.textWrapper}>
                                  <span className={styles.title}>{name}</span>
                                  <p className={styles.description}>
                                    {description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {selectedSolutionData && (
                          <div className={styles.headerBlogLink}>
                            <h3>Featured Resource</h3>
                            <Image
                              height={200}
                              width={350}
                              src={selectedSolutionData.image}   // <-- Dynamic image
                              alt={selectedSolutionData.name}
                            />
                            <h4>{selectedSolutionData.blogLine}</h4>
                            {/* <Link onClick={closeDropdown} href={selectedSolutionData.link}>Read More</Link>  Optional: make link dynamic too */}
                            <Link href={selectedSolutionData.link} onClick={closeDropdown}>
                              <button className="globalButton">Read More</button>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab === "Research and Innovation" && (
                      <div className={styles.research}>
                        <Image
                          src="/Research.png"
                          width={434}
                          height={278}
                          alt="Your Image"
                        />
                        <div className={styles.researchContent}>
                          <h2>Overcome GenAI Fears: Get your Live GEN-AI Agent in days.</h2>
                          <p>Harnessing the creative potential of Generative AI brings both transformative opportunities and operational challenges. Organizations often struggle with scalability, data quality, and integration issues.
                            This white paper delves into how advanced Generative AI solutions empower businesses to automate content generation, drive innovation, and enhance decision-making. Discover practical insights to streamline processes and overcome common challenges, positioning your organization for success in a rapidly evolving AI landscape.</p>

                          <Link href="/documents/genaiagent_amlgolabs.pdf" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>
                            <button className="globalButton">Explore More</button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>





          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={toggleDropdown} className={styles.navLink}>
              Industries <ArrowDropDownIcon className={styles.arrowIcon} />
            </div>

            {isOpen && (
              <div className={styles.dropdownContent}>
                <div className={styles.subMenuArea}>
                  {/* Submenu Links */}
                  <div className={styles.subMenuAreaLinks}>
                    <Link href="/consumer-goods-retail" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <StoreIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Consumer Goods and Retail</span>
                        <p className={styles.description}>Elevate retail experiences with smart, connected solutions and insights.</p>
                      </div>
                    </Link>
                    <Link href="/real-estate-infrastructure" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <BungalowIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Real Estate and Infrastructure</span>
                        <p className={styles.description}>Building the future with smart, sustainable infrastructure solutions.</p>
                      </div>
                    </Link>
                    <Link href="/manufacturing-ai-industry" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <PrecisionManufacturingIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Manufacturing</span>
                        <p className={styles.description}>Transforming manufacturing with intelligent, connected industrial solutions.</p>
                      </div>
                    </Link>

                  </div>

                  <div className={styles.subMenuAreaLinks}>

                    <Link href="/banking-and-finance" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <MonetizationOnIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Banking & Finance</span>
                        <p className={styles.description}>Secure, agile, and customer-centric financial technology solutions.</p>
                      </div>
                    </Link>


                    <Link href="/insurance-technology-industry" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <PolicyIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Insurance</span>
                        <p className={styles.description}>Protecting the future with innovative, data-driven insurance solutions.</p>
                      </div>
                    </Link>
                    <Link href="/pharma-life-sciences" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <LocalHospitalIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Pharma and Life Sciences</span>
                        <p className={styles.description}>Advancing healthcare with innovative, data-driven life science solutions.</p>
                      </div>
                    </Link>

                  </div>
                  <div className={styles.subMenuAreaLinks}>
                    <Link href="/automotive-industry" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <DirectionsCarIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Automotive</span>
                        <p className={styles.description}>Driving automotive innovation with intelligent, connected solutions.</p>
                      </div>
                    </Link>
                    <Link href="risk-regulatory-compliance" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                      <GavelIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Risk and Regulatory Compliance</span>
                        <p className={styles.description}>Ensuring compliance and managing risk.</p>
                      </div>
                    </Link>
                    <Link href="/communication-media" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}>
                        <PermCameraMicIcon className={styles.icon} />
                      </div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Communication and Media</span>
                        <p className={styles.description}>Connecting the world with innovative communication and media solutions.</p>
                      </div>
                    </Link>
                  </div>



                </div>

              </div>
            )}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/partners">
              <div onClick={toggleDropdown} className={styles.navLink}>
                Partners <ArrowDropDownIcon className={styles.arrowIcon} />
              </div>
            </Link>
            {isOpen && (
              <div className={styles.dropdownContent}>
                <div className={styles.subMenuArea}>
                  <div className={styles.subMenuAreaLinks}>
                    <Link href="/partners/microsoft-azure" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><VscAzure className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Azure</span>
                        <p className={styles.description}>Harness comprehensive capabilities to develop tailored solutions that integrate seamlessly with existing systems.</p>
                      </div>
                    </Link>
                    <Link href="/partners/google-cloud-platform" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><SiGooglecloud className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Google Cloud</span>
                        <p className={styles.description}>Leveraging the immense power of Google Cloud, a comprehensive suite of cloud computing.</p>
                      </div>
                    </Link>
                    <Link href="/partners/amazon-web-services" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><FaAws className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>AWS</span>
                        <p className={styles.description}>Transformative power of the cloud, fuel innovation, scale seamlessly, and accelerate their journey toward digital mastery.</p>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.subMenuAreaLinks}>
                    <Link href="/partners/dell-technologies" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><SiDell className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Dell</span>
                        <p className={styles.description}>Leverage premier infrastructure solutions to drive data-centric innovation for unparalleled performance and scalability.</p>
                      </div>
                    </Link>
                    <Link href="/partners/databricks" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><SiDatabricks className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Databricks</span>
                        <p className={styles.description}>Ensure your data teams effortlessly process massive datasets, leveraging advanced analytics and AI-driven insights.</p>
                      </div>
                    </Link>
                    <Link href="/partners/cloudera" className={styles.linkWrapper} onClick={closeDropdown}>
                      <div className={styles.iconWrapper}><SiCloudera className={styles.icon} /></div>
                      <div className={styles.textWrapper}>
                        <span className={styles.title}>Cloudera</span>
                        <p className={styles.description}>Comprehensive suite of tools for seamlessly integrating across hybrid and multi-cloud environments.</p>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.headerBlogLink}>
                    <h3>Featured Resource</h3>
                    <Image height={200} width={350} src="/Header/headerPartner.png" alt="casestudy" />
                    <h4>Partnering with Leaders empowering success.</h4>
                    <Link onClick={closeDropdown} href="/partners">
                      <button className="globalButton">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/careers">
            <div className={styles.navLink}>
              Careers
            </div>
          </Link>



          <MenuOpenIcon onClick={toggledesktopDrawer(true)} className={styles.desktopMenuIcon} />
        </div>

        {/* Desktop Drawer */}

        <Drawer
  anchor="right"
  open={desktopdrawerOpen}
  onClose={toggledesktopDrawer(false)}
  classes={{ paper: styles.desktopDrawerContainer }}
>
  <div className={styles.desktopDrawerHeader}>
    <IconButton
      className={styles.desktopCloseButton}
      onClick={toggledesktopDrawer(false)}
    >
      <Close />
    </IconButton>
  </div>
  <List className={styles.desktopList}>
    {/* About Us Section */}
    <ListItem className={styles.desktopListItem} onClick={handleAboutToggle}>
      <ListItemText primary="About Us" />
      {aboutOpen ? (
        <ExpandLess className={styles.desktopExpandIcon} />
      ) : (
        <ExpandMore className={styles.desktopExpandIcon} />
      )}
    </ListItem>
    <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem className={styles.desktopSubListItem}>
          <Link href="/about-us" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
            Overview
          </Link>
        </ListItem>
        <ListItem className={styles.desktopSubListItem}>
          <Link href="/about-us#values" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
            Our Values
          </Link>
        </ListItem>
        <ListItem className={styles.desktopSubListItem}>
          <Link href="/founder-message" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
            Founder Message
          </Link>
        </ListItem>
      </List>
    </Collapse>

    {/* Blogs Section */}
    <ListItem className={styles.desktopListItem}>
      <Link href="/resources" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
        Resources
      </Link>
    </ListItem>

    {/* Contact Section */}
    <ListItem className={styles.desktopListItem}>
      <Link href="/contact-us" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
        Contact
      </Link>
    </ListItem>

    {/* Careers Section */}
    <ListItem className={styles.desktopListItem}>
      <Link href="/careers" className={styles.desktopLink} onClick={toggledesktopDrawer(false)}>
        Careers
      </Link>
    </ListItem>

    {/* Get in Touch Button */}
    <ListItem className={styles.desktopButtonWrapper}>
      <Link href="/contact-us" onClick={toggledesktopDrawer(false)}>
        <button
          className="globalButtonBlack"
        >
          Get in Touch
        </button>
      </Link>
    </ListItem>
  </List>

  <div className={styles.sideBarBlog}>
      <Image width={300} height={150} src="/Header/desktopBlog.png" alt="blog"/>
      <h2>Disrupting Industries with GenAI : Amlgo Labs at the Helm</h2>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat cum? Earum ex officiis adipisci?</p> */}
      <Link href="/documents/how_generative_ai_is_disrupting_entindustries_and_how_amlgo_labs_is_leading_the_charge.pdf">
        Learn More
      </Link>
  </div>

</Drawer>

        {/* Hamburger Menu */}
        <IconButton

          className={styles.mobileMenuIcon}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* <div className={styles.headerUnderLine}></div> */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: styles.drawerPaper }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className={styles.listContainer}>
          <List>
            <ListItem className={styles.mobileParentLink}>
              <Link href="/about-us" onClick={toggleDrawer(false)}>
                <div className={styles.textWithIcon}>
                  About Us
                </div>
              </Link>
            </ListItem>

            <ListItem className={styles.mobileParentLink}>
              <Link href="/founder-message" onClick={toggleDrawer(false)}>
                <div className={styles.textWithIcon}>
                  Founder's Message
                </div>
              </Link>
            </ListItem>

            {/* NEXTGEN AI LAB - MAIN SECTION */}
            <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("NextGen AI Lab")}>
              <div className={styles.textWithIcon}>
                NextGen AI Lab <ArrowDropDownIcon />
              </div>
            </ListItem>

            {/* Collapse for NEXTGEN AI LAB */}
            <Collapse in={activeDropdown === "NextGen AI Lab"} timeout="auto" unmountOnExit>
              <div className={styles.mobileDropdown}>

                {/* CATEGORY: Data Science & AI */}
                <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Capabilities")}>
                  <div className={styles.dropdownTextWithIcon}>
                    Capabilities <ArrowDropDownIcon />
                  </div>
                </ListItem>
                <Collapse in={activeSubDropdown === "Capabilities"} timeout="auto" unmountOnExit>
                  <div className={styles.subLinks}>

                    <Link href="/generative-ai-services" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <PsychologyIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Generative-AI
                      </div>
                    </Link>
                    <Link href="/large-language-models-llms" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MenuBookIcon style={{ fontSize: 20, marginRight: 8 }} />
                        LLMs
                      </div>
                    </Link>
                    <Link href="/genai-agents-development" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <SmartToyIcon style={{ fontSize: 20, marginRight: 8 }} />
                        GenAI Agents
                      </div>
                    </Link>
                    <Link href="/computer-vision-services" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <VisibilityIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Computer Vision
                      </div>
                    </Link>
                    <Link href="/machine-deep-learning-services" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <BrainIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Machine Learning and Deep Learning
                      </div>
                    </Link>
                    <Link href="/cloud-solutions-aws-azure-gcp" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CloudIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Cloud-AWS, Azure, GCP
                      </div>
                    </Link>
                    <Link href="/data-analytics-services" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <BarChartIcon style={{ fontSize: 20, marginRight: 8 }} />
                       Data Analytics
                      </div>
                    </Link>
                    <Link href="/data-engineering-services" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <BuildIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Data Engineering
                      </div>
                    </Link>
                    <Link href="/operations-and-security" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <SettingsIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Operations and Security
                      </div>
                    </Link>



                  </div>
                </Collapse>

                {/* CATEGORY: Generative AI */}
                <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Solutions")}>
                  <div className={styles.textWithIcon}>
                    Solutions <ArrowDropDownIcon />
                  </div>
                </ListItem>
                <Collapse in={activeSubDropdown === "Solutions"} timeout="auto" unmountOnExit>
                  <div className={styles.subLinks}>
                    {/* <Link href="/conversational-ai-chatbot" onClick={toggleDrawer(false)}>Conversational AI Chatbot</Link> */}
                    <Link href="/conversational-ai-chatbot" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <QuickreplyIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Conversational AI Chatbot
                      </div>
                    </Link>
                    <Link href="/vehicle-quality-ai-solutions" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <LuDatabaseBackup style={{ fontSize: 20, marginRight: 8 }} />
                        Text to SQL
                      </div>
                    </Link>
                    <Link href="/vehicle-quality-ai-solutions" onClick={toggleDrawer(false)}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CarCrashIcon style={{ fontSize: 20, marginRight: 8 }} />
                        Vehicle Quality AI
                      </div>
                    </Link>
                    {/* <Link href="/text-to-sql" onClick={toggleDrawer(false)}>Text to SQL</Link> */}
                    {/* <Link href="/vehicle-quality-ai" onClick={toggleDrawer(false)}>Vehicle QUality AI</Link> */}
                  </div>
                </Collapse>

                {/* CATEGORY: Cloud Engineering */}


                {/* CATEGORY: Data Analytics */}

              </div>
            </Collapse>

            {/* OTHER SECTIONS (Businesses, Partners, Careers) */}
            <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Businesses")}>
              <div className={styles.textWithIcon}>Industries <ArrowDropDownIcon /></div>
            </ListItem>
            <Collapse in={activeDropdown === "Businesses"} timeout="auto" unmountOnExit>
              <div className={styles.mobileDropdown}>
                <div className={styles.subLinks}>

                  <Link href="/consumer-goods-retail" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <StoreIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Consumer Goods
                    </div>
                  </Link>
                  <Link href="/banking-and-finance" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <MonetizationOnIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Banking & Finance
                    </div>
                  </Link>
                  <Link href="/automotive-industry" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <DirectionsCarIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Automotive
                    </div>
                  </Link>
                  <Link href="/real-estate-infrastructure" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <BungalowIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Real Estate
                    </div>
                  </Link>
                  <Link href="/insurance-technology-industry" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PolicyIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Insurance
                    </div>
                  </Link>
                  <Link href="/risk-regulatory-compliance" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <GavelIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Risk and Regulatory Compliance
                    </div>
                  </Link>
                  <Link href="/manufacturing-ai-industry" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PrecisionManufacturingIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Manufacturing
                    </div>
                  </Link>
                  <Link href="/pharma-life-sciences" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <LocalHospitalIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Pharma and Life Sciences
                    </div>
                  </Link>
                  <Link href="/communication-media" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PermCameraMicIcon style={{ fontSize: 20, marginRight: 8 }} />
                      Communication and Media
                    </div>
                  </Link>
                 
                </div>

              </div>
            </Collapse>

            <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Partners")}>
              <div className={styles.textWithIcon}>Partners <ArrowDropDownIcon /></div>
            </ListItem>
            <Collapse in={activeDropdown === "Partners"} timeout="auto" unmountOnExit>
              <div className={styles.mobileDropdown}>
                <div className={styles.subLinks}>
                <Link href="/partners/microsoft-azure" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <VscAzure style={{ fontSize: 20, marginRight: 8 }} />
                      Azure
                    </div>
                  </Link>
                  <Link href="/partners/amazon-web-services" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FaAws style={{ fontSize: 20, marginRight: 8 }} />
                      AWS
                    </div>
                  </Link>
                  <Link href="/partners/databricks" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SiDatabricks style={{ fontSize: 20, marginRight: 8 }} />
                      Databricks
                    </div>
                  </Link>
                  <Link href="/partners/google-cloud-platform" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SiGooglecloud style={{ fontSize: 20, marginRight: 8 }} />
                      Google Cloud
                    </div>
                  </Link>
                  <Link href="/partners/dell-technologies" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SiDell style={{ fontSize: 20, marginRight: 8 }} />
                      Dell Technologies
                    </div>
                  </Link>
                  <Link href="/partners/cloudera" onClick={toggleDrawer(false)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SiCloudera style={{ fontSize: 20, marginRight: 8 }} />
                      Cloudera
                    </div>
                  </Link>
        
                </div>
              </div>
            </Collapse>

             <ListItem className={styles.mobileParentLink}>
              <Link href="/resources" onClick={toggleDrawer(false)}>
                <div className={styles.textWithIcon}>
                  Resources
                </div>
              </Link>
            </ListItem>

            <ListItem className={styles.mobileParentLink}>
              <Link href="/careers" onClick={toggleDrawer(false)}>
                <div className={styles.textWithIcon}>
                  Careers
                </div>
              </Link>
            </ListItem>

            <ListItem className={styles.mobileParentLink}>
              <Link href="/contact-us" onClick={toggleDrawer(false)}>
                <div className={styles.textWithIcon}>
                  Contact Us
                </div>
              </Link>
            </ListItem>
          </List>

          <div className={styles.mobileBlog}>
            <Image
              height={100} // Ensure these match or are proportional to the original image
              width={250}
              src="/Header/mobileBlog.png"
              alt="blog"
              layout="responsive" // Makes the image scale naturally
              quality={85} // Adjust quality (default is 75)
            />
            <h3>Overcome GenAI Fears: Get your Live GEN-AI Agent in days.</h3>
            <Link href="/documents/mas610casestudy.pdf">
              Learn More
            </Link>
          </div>
        </div>

      </Drawer>
    </div>
  );
};

export default Header1;
