"use client";
import React, { useState } from "react";
import styles from "../../styles/Components/Header/Header1.module.css";
import Image from "next/image";
import logo from "../../../../public/newlogo7.png";
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







const Header1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [desktopdrawerOpen, setdesktopDrawerOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = React.useState(false);
  
  const TABS = ["Overview", "Capabilities", "Solutions", "Research and Innovation"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedSolution, setSelectedSolution] = useState("Conversational AI Chatbot");

const capabilities = [
        { name: 'Generative AI', icon: <PsychologyIcon />, description: 'AI that can generate text, images, and more.' },
      { name: 'LLMs', icon: <MenuBookIcon />, description: 'Large Language Models for natural language processing.' },
      { name: 'GenAI Agents', icon: <SmartToyIcon />, description: 'Intelligent agents powered by generative AI.' },
      { name: 'Computer Vision', icon: <VisibilityIcon />, description: 'Enabling machines to interpret visual data.' },
      { name: 'Machine Learning and Deep Learning', icon: <BrainIcon />, description: 'Techniques for data-driven predictions.' },
      { name: 'Cloud-AWS, Azure, GCP', icon: <CloudIcon />, description: 'Cloud platforms for scalable solutions.' },
      { name: 'Data Analytics', icon: <BarChartIcon />, description: 'Analyzing data to extract insights.' },
      { name: 'Data Engineering', icon: <BuildIcon />, description: 'Building systems for data collection and processing.' },
      { name: 'DataOps, DevOps, MLOps', icon: <SettingsIcon />, description: 'Practices for efficient data and model management.' }
];



const solutions = [
  { name: "Conversational AI Chatbot", icon: <QuickreplyIcon/>, description: 'AI-driven chatbots for customer interaction.' },
  { name: "Text to SQL", icon: <LuDatabaseBackup/>, description: 'Converting natural language to SQL queries.' },
  { name: "Vehicle Quality AI", icon: <CarCrashIcon/>, description: 'AI solutions for assessing vehicle quality.' }
];



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
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>

        <div className={styles.desktopLinks}>
         <div className={styles.dropdown}>
    <Link href="/" className={styles.navLink}>
        NextGen AI Lab <ArrowDropDownIcon className={styles.arrowIcon} />
    </Link>
    <div className={styles.dropdownContent}>
        {/* <div className={styles.subMenuArea}>
            <div className={styles.firstRow}>
                {Object.keys(categories).map((category) => (
                    <div
                        key={category}
                        onMouseEnter={() => setActiveCategory(category)}
                        className={styles.category}
                    >
                        {category}
                        <ArrowRightIcon />
                    </div>
                ))}
            </div>
            <div className={styles.secondRow}>
    {activeCategory === 'Overview' ? (
        <div className={styles.overviewContent}>
            <h3>Amlgo Labs Is here to make a difference through Data and Gen AI.</h3>
            <p>Amlgo Labs Is here to make a difference through Data and Gen AI. Amlgo Labs Is here to make a difference through Data and Gen AI. Amlgo Labs Is here to make a difference through Data and Gen AI.</p>
            <Link href="/overview" className={styles.overViewButton}>
                Learn More
            </Link>
        </div>
    ) : activeCategory === 'Research And Innovation' ? (
      <div className={styles.overviewContent}>
      <h3>Amlgo Labs Is here to make a difference through Data and Gen AI.</h3>
      <p>Amlgo Labs Is here to make a difference through Data and Gen AI. Amlgo Labs Is here to make a difference through Data and Gen AI. Amlgo Labs Is here to make a difference through Data and Gen AI.</p>
      <Link href="/overview" className={styles.overViewButton}>
          Learn More
      </Link>
  </div>
    ) : (
        <div className={styles.subTopicGrid}>
            {categories[activeCategory].map((subTopic, index) => (
                <div key={index} className={styles.subTopicContainer}>
                  
                  <Link href="/" className={styles.linkWrapper}>
                    
                    <div className={styles.iconWrapper}>
  {subTopic.icon && <span className={styles.icon}>{subTopic.icon}</span>}
</div>
                  

<div className={styles.textWrapper}>
                      <span className={styles.title}>{subTopic.name}</span>
                      <p className={styles.description}>{subTopic.description}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )}
</div>


{activeCategory !== 'Capabilities' && 

activeCategory !== 'Solutions' && (
                <div className={styles.thirdRow}>
                    <div className={styles.headerBlogLink}>
                        <h3>Featured Resource</h3>
                        <Image height={200} width={350} src={blogContent[activeCategory].image} alt="casestudy" />
                        <h4>{blogContent[activeCategory].title}</h4>
                        <Link href="/">Read More</Link>
                    </div>
                </div>
            )}
        </div> */}
         <div className={styles.subMenuArea}>
         <div className={styles.sidebar}>
      {TABS.map((tab) => (
        <div
          key={tab}
          className={activeTab === tab ? styles.activeTab : styles.tab} // Set active class
          onClick={() => setActiveTab(tab)}
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
              <p>For over seven years, Amlgo Labs has pioneered innovative solutions, helping businesses across diverse sectors achieve greater success.</p>
              <Button variant="contained">Learn More</Button>
            </div>
            {/* <div className={styles.blogItem}>
              <Image height={300} width={300} src="/partner1.png" alt="Blog" />
              <h3>AI in Modern Business</h3>
              <Button variant="outlined">Read More</Button>
            </div> */}
            <div className={styles.headerBlogLink}>
                  <h3>Featured Resource</h3>
                  <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
                  <h4>Partnering with Leaders empowering success.</h4>
                  <Link href="/">Read More</Link>
                </div>
          </div>
        )}

{activeTab === "Capabilities" && (
  <div className={styles.capabilitiesGrid}>
    {capabilities.map(({ name, icon, description }) => (
      <Link href="/consumer-goods" className={styles.linkWrapper} key={name}>
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
              {solutions.map(({ name, icon }) => (
                // <li
                //   key={name}
                //   className={selectedSolution === name ? styles.activeSolution : ""}
                //   onClick={() => setSelectedSolution(name)}
                // >
                //   {icon} {name}
                // </li>

                <div 
  key={name} 
  className={`${styles.linkWrapper} ${selectedSolution === name ? styles.activeSolution : ""}`} 
  onClick={() => setSelectedSolution(name)}
>
  <div className={styles.iconWrapper}>
    {icon && React.cloneElement(icon, { className: styles.icon })}
  </div>
  <div className={styles.textWrapper}>
    <span className={styles.title}>{name}</span>
    <p className={styles.description}>
      Elevate retail experiences with smart, connected solutions and insights.
    </p>
  </div>
</div>
              ))}
            </div>
            {selectedSolution && (
              // <div className={styles.blogItem}>
              //   <h3>{selectedSolution} - Blog Post</h3>
              //   <p>Insights on {selectedSolution} in AI industry.</p>
              //   <Button variant="outlined">Read More</Button>
              // </div>
              <div className={styles.headerBlogLink}>
                  <h3>Featured Resource</h3>
                  <Image height={200} width={350} src="/RoboticProcess.png" alt="casestudy" />
                  <h4>{selectedSolution} - Blog Post</h4>
                  <Link href="/">Read More</Link>
                </div>
            )}
          </div>
        )}

        {activeTab === "Research and Innovation" && (
          <div className={styles.research}>
            <Image 
  src="/research.png"
  width={434} // Adjust based on how large you want it to appear
  height={278} // Keep the aspect ratio
  alt="Your Image"
/>
<div className={styles.researchContent}>

  <h2>Overcome GenAI Fears: Get your Live GEN-AI Agent in days.</h2>
  <p>Harnessing the creative potential of Generative AI brings both transformative opportunities and operational challenges. Organizations often struggle with scalability, data quality, and integration issues.
  This white paper delves into how advanced Generative AI solutions empower businesses to automate content generation, drive innovation, and enhance decision-making. Discover practical insights to streamline processes and overcome common challenges, positioning your organization for success in a rapidly evolving AI landscape.</p>
            <button variant="contained">Explore More</button>
</div>
          </div>
        )}
      </div>
    </div>
    </div>
</div>
          <div className={styles.dropdown}>
            <Link href="/" className={styles.navLink}>
              Businesses <ArrowDropDownIcon className={styles.arrowIcon} />
            </Link>
            <div className={styles.dropdownContent}>
              <div className={styles.subMenuArea}>


                <div className={styles.subMenuAreaLinks}>
                  <Link href="/consumer-goods" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <StoreIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Consumer Goods and Retail</span>
                      <p className={styles.description}>Elevate retail experiences with smart, connected solutions and insights.</p>
                    </div>
                  </Link>
                  <Link href="/real-estate" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <BungalowIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Real Estate and Infrastructure</span>
                      <p className={styles.description}>Building the future with smart, sustainable infrastructure solutions. </p>
                    </div>
                  </Link>
                  <Link href="/manufacturing" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <PrecisionManufacturingIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Manufacturing and Industries</span>
                      <p className={styles.description}>Transforming manufacturing with intelligent, connected industrial solutions.</p>
                    </div>
                  </Link>
                </div>





                <div className={styles.subMenuAreaLinks}>

                  <Link href="/banking-finance" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <MonetizationOnIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Banking & Finance</span>
                      <p className={styles.description}>Secure, agile, and customer-centric financial technology solutions.</p>
                    </div>
                  </Link>


                  <Link href="/insurance" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <PolicyIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Insurance</span>
                      <p className={styles.description}>Protecting the future with innovative, data-driven insurance solutions.</p>
                    </div>
                  </Link>
                  <Link href="/pharma-life-sciences" className={styles.linkWrapper}>
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
                  <Link href="/automotive" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <DirectionsCarIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Automotive</span>
                      <p className={styles.description}>Driving automotive innovation with intelligent, connected solutions.</p>
                    </div>
                  </Link>
                  <Link href="/renewable-energy" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <SolarPowerIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Renewable Energy and Environmental Science</span>
                      <p className={styles.description}>Powering a sustainable future with clean energy technology.</p>
                    </div>
                  </Link>
                  <Link href="/communication-media" className={styles.linkWrapper}>
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
          </div>

          <Link href="/" className={styles.navLink}>
            Case Studies
          </Link>

          <div className={styles.dropdown}>
            <Link href="/partners" className={styles.navLink}>
              Partners <ArrowDropDownIcon className={styles.arrowIcon} />
            </Link>
            <div className={styles.dropdownContent}>
              <div className={styles.subMenuArea}>
                <div className={styles.subMenuAreaLinks}>
                  <Link href="#" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <VscAzure className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Azure</span>
                      <p className={styles.description}>Streamline reviews, track market trends, boost performance, and transform customer experience.</p>
                    </div>
                  </Link>
                  <Link href="#" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <SiGooglecloud className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Google Cloud</span>
                      <p className={styles.description}>Stand out in technology space with our guidance, you can excel in breaking the conventional boundaries.</p>
                    </div>
                  </Link>
                  <Link href="#" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <FaAws className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>AWS</span>
                      <p className={styles.description}>Automating your production, forecasting the growth, managing demand we enable all with our cloud solutions.</p>
                    </div>
                  </Link>
                </div>
                <div className={styles.subMenuAreaLinks}>
                  <Link href="#" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <SiDell className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Dell</span>
                      <p className={styles.description}>Streamline reviews, track market trends, boost performance, and transform customer experience.</p>
                    </div>
                  </Link>
                  <Link href="#" className={styles.linkWrapper}>
                    <div className={styles.iconWrapper}>
                      <SiDatabricks className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Databricks</span>
                      <p className={styles.description}>Stand out in technology space with our guidance, you can excel in breaking the conventional boundaries.</p>
                    </div>
                  </Link>
                 
                </div>
                <div className={styles.headerBlogLink}>
                  <h3>Featured Resource</h3>
                  <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
                  <h4>Partnering with Leaders empowering success.</h4>
                  <Link href="/">Read More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.dropdown}>
            <Link href="/" className={styles.navLink}>
              Careers <ArrowDropDownIcon className={styles.arrowIcon} />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Work with Us</Link>
              <Link href="#">Hear from Team</Link>
              <Link href="#">Explore Jobs</Link>
            </div>
          </div>

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
            <Collapse style={{ paddingInline: "10px" }} in={aboutOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={styles.desktopSubListItem}>
                  <Link href="/about" className={styles.desktopLink}>
                    Overview
                  </Link>
                </ListItem>
                <ListItem className={styles.desktopSubListItem}>
                <Link href="/about#values" className={styles.desktopLink}>
  Our Values
</Link>
                </ListItem>
                <ListItem className={styles.desktopSubListItem}>
                  <Link href="/founder-message" className={styles.desktopLink}>
                    Founder Message
                  </Link>
                </ListItem>
              </List>
            </Collapse>

            {/* Blogs Section */}
            <ListItem className={styles.desktopListItem}>
              <Link href="/blogs" className={styles.desktopLink}>
                Blogs
              </Link>
            </ListItem>

            {/* Contact Section */}
            <ListItem className={styles.desktopListItem}>
              <Link href="/contact" className={styles.desktopLink}>
                Contact
              </Link>
            </ListItem>

            {/* Get in Touch Button */}
            <ListItem className={styles.desktopButtonWrapper}>
              <Link href="/contact">
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.desktopGetInTouchButton}
                >
                  Get in Touch
                </Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>

        {/* Hamburger Menu */}
        <IconButton
        
          className={styles.mobileMenuIcon}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div className={styles.headerUnderLine}></div>

















      {/* Mobile Drawer */}
      {/* <Drawer
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
        <List>
          <ListItem
            className={styles.mobileParentLink}
            button
            onClick={() => handleDropdownToggle("NextGen AI Lab")}
          >
            <div className={styles.textWithIcon}>
              NextGen AI Lab
              <ArrowDropDownIcon />
            </div>
          </ListItem>
          <Collapse
            in={activeDropdown === "NextGen AI Lab"}
            timeout="auto"
            unmountOnExit
          >
            <div className={styles.mobileDropdown}>
              <Link href="#">Data Science & AI</Link>
              <Link href="#">Generative AI</Link>
              <Link href="#">Cloud Engineering</Link>
              <Link href="#">Data Analytics</Link>
              <Link href="#">Risk and Regulatory</Link>
              <Link href="#">Data Pipelining</Link>
              <Link href="#">Cloud & Data OPS</Link>
            </div>
          </Collapse>

          <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Businesses")}>
            <div className={styles.textWithIcon}>
              Businesses
              <ArrowDropDownIcon />
            </div>
          </ListItem>
          <Collapse
            in={activeDropdown === "Businesses"}
            timeout="auto"
            unmountOnExit
          >
            <div className={styles.mobileDropdown}>
              <Link href="#">Consumer Goods</Link>
              <Link href="#">Technology</Link>
              <Link href="#">Manufacturing</Link>
              <Link href="#">Insurance</Link>
              <Link href="#">Healthcare</Link>
              <Link href="#">Banking & Finance</Link>
              <Link href="#">Automotive</Link>
              <Link href="#">Education</Link>
              <Link href="#">Travel</Link>
            </div>
          </Collapse>

          <ListItem button className={styles.mobileParentLink}>

            <div className={styles.textWithIcon}>
              <Link href="/">
                Blogs
              </Link>
            </div>
          </ListItem>

          <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Partners")}>
            <div className={styles.textWithIcon}>
              Partners
              <ArrowDropDownIcon />
            </div>
          </ListItem>
          <Collapse
            in={activeDropdown === "Partners"}
            timeout="auto"
            unmountOnExit
          >
            <div className={styles.mobileDropdown}>
              <Link href="#">Azure</Link>
              <Link href="#">AWS</Link>
              <Link href="#">Databricks</Link>
              <Link href="#">Power BI</Link>
              <Link href="#">Google Cloud</Link>
            </div>
          </Collapse>

          <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Careers")}>
            <div className={styles.textWithIcon}>
              Careers
              <ArrowDropDownIcon />
            </div>
          </ListItem>
          <Collapse
            in={activeDropdown === "Careers"}
            timeout="auto"
            unmountOnExit
          >
            <div className={styles.mobileDropdown}>
              <Link href="#">Work with Us</Link>
              <Link href="#">Hear from Team</Link>
              <Link href="#">Explore Jobs</Link>
            </div>
          </Collapse>


        </List>
      </Drawer> */}
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

      <List>
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
            <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Data Science & AI")}>
              <div className={styles.textWithIcon}>
                Data Science & AI <ArrowDropDownIcon />
              </div>
            </ListItem>
            <Collapse in={activeSubDropdown === "Data Science & AI"} timeout="auto" unmountOnExit>
              <div className={styles.subLinks}>
                <Link href="#">Machine Learning</Link>
                <Link href="#">Deep Learning</Link>
                <Link href="#">NLP</Link>
              </div>
            </Collapse>

            {/* CATEGORY: Generative AI */}
            <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Generative AI")}>
              <div className={styles.textWithIcon}>
                Generative AI <ArrowDropDownIcon />
              </div>
            </ListItem>
            <Collapse in={activeSubDropdown === "Generative AI"} timeout="auto" unmountOnExit>
              <div className={styles.subLinks}>
                <Link href="#">LLMs</Link>
                <Link href="#">Text Generation</Link>
                <Link href="#">AI Art</Link>
              </div>
            </Collapse>

            {/* CATEGORY: Cloud Engineering */}
            <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Cloud Engineering")}>
              <div className={styles.textWithIcon}>
                Cloud Engineering <ArrowDropDownIcon />
              </div>
            </ListItem>
            <Collapse in={activeSubDropdown === "Cloud Engineering"} timeout="auto" unmountOnExit>
              <div className={styles.subLinks}>
                <Link href="#">AWS</Link>
                <Link href="#">Azure</Link>
                <Link href="#">Google Cloud</Link>
              </div>
            </Collapse>

            {/* CATEGORY: Data Analytics */}
            <ListItem button className={styles.subCategory} onClick={() => handleSubDropdownToggle("Data Analytics")}>
              <div className={styles.textWithIcon}>
                Data Analytics <ArrowDropDownIcon />
              </div>
            </ListItem>
            <Collapse in={activeSubDropdown === "Data Analytics"} timeout="auto" unmountOnExit>
              <div className={styles.subLinks}>
                <Link href="#">Power BI</Link>
                <Link href="#">Tableau</Link>
                <Link href="#">Big Data</Link>
              </div>
            </Collapse>
          </div>
        </Collapse>

        {/* OTHER SECTIONS (Businesses, Partners, Careers) */}
        <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Businesses")}>
          <div className={styles.textWithIcon}>Businesses <ArrowDropDownIcon /></div>
        </ListItem>
        <Collapse in={activeDropdown === "Businesses"} timeout="auto" unmountOnExit>
          <div className={styles.mobileDropdown}>
            <Link href="#">Consumer Goods</Link>
            <Link href="#">Technology</Link>
            <Link href="#">Manufacturing</Link>
          </div>
        </Collapse>

        <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Partners")}>
          <div className={styles.textWithIcon}>Partners <ArrowDropDownIcon /></div>
        </ListItem>
        <Collapse in={activeDropdown === "Partners"} timeout="auto" unmountOnExit>
          <div className={styles.mobileDropdown}>
            <Link href="#">Azure</Link>
            <Link href="#">AWS</Link>
            <Link href="#">Databricks</Link>
          </div>
        </Collapse>

        <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Careers")}>
          <div className={styles.textWithIcon}>Careers <ArrowDropDownIcon /></div>
        </ListItem>
        <Collapse in={activeDropdown === "Careers"} timeout="auto" unmountOnExit>
          <div className={styles.mobileDropdown}>
            <Link href="#">Work with Us</Link>
            <Link href="#">Explore Jobs</Link>
          </div>
        </Collapse>
      </List>
    </Drawer>
    </div>
  );
};

export default Header1;
