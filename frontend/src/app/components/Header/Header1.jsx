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
  { name: 'Generative AI', icon: <PsychologyIcon />, description: 'AI that can generate text, images, and more.', link: "/generative-ai" },
  { name: 'LLMs', icon: <MenuBookIcon />, description: 'Large Language Models for natural language processing.', link: "/llms" },
  { name: 'GenAI Agents', icon: <SmartToyIcon />, description: 'Intelligent agents powered by generative AI.', link: "/genai-agents" },
  { name: 'Computer Vision', icon: <VisibilityIcon />, description: 'Enabling machines to interpret visual data.', link: "/computer-vision" },
  { name: 'Machine Learning and Deep Learning', icon: <BrainIcon />, description: 'Techniques for data-driven predictions.', link: "/ml-dl" },
  { name: 'Cloud-AWS, Azure, GCP', icon: <CloudIcon />, description: 'Cloud platforms for scalable solutions.', link: "/cloud-services" },
  { name: 'Data Analytics', icon: <BarChartIcon />, description: 'Analyzing data to extract insights.', link: "/data-analytics" },
  { name: 'Data Engineering', icon: <BuildIcon />, description: 'Building systems for data collection and processing.', link: "/data-engineering" },
  { name: 'DataOps, DevOps, MLOps', icon: <SettingsIcon />, description: 'Practices for efficient data and model management.', link: "/devops-dataops-mlops" }
];



const solutions = [
  { name: "Conversational AI Chatbot", icon: <QuickreplyIcon/>, description: 'AI-driven chatbots for customer interaction.' , link: "/conversational-ai-chatbot" },
  { name: "Text to SQL", icon: <LuDatabaseBackup/>, description: 'Converting natural language to SQL queries.', link: "/text-to-sql" },
  { name: "Vehicle Quality AI", icon: <CarCrashIcon/>, description: 'AI solutions for assessing vehicle quality.', link: "/vehicle-quality-ai" }
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
                    <Link href="/about-us" onClick={closeDropdown}>
                      <Button variant="contained">Learn More</Button>
                    </Link>
                  </div>
                  <div className={styles.headerBlogLink}>
                    <h3>Featured Resource</h3>
                    <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
                    <h4>Partnering with Leaders empowering success.</h4>
                    <Link href="/partners">Read More</Link>
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
                    {solutions.map(({ name, icon, link }) => (
                      <Link href={link} key={name} onClick={closeDropdown}>
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
                      </Link>
                    ))}
                  </div>
                  {selectedSolution && (
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
                    width={434} 
                    height={278} 
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
      )}
    </div>


{/* 
    <div 
  className={styles.dropdown} 
  onMouseEnter={() => { handleMouseEnter(); setActiveTab('Overview'); }} 
  onMouseLeave={handleMouseLeave}
> 
  <div onClick={toggleDropdown} className={styles.navLink}>
    NextGen AI Lab <ArrowDropDownIcon className={styles.arrowIcon} />
  </div>

  {isOpen && (
    // <div 
    //   className={styles.dropdownContent} 
    //   onMouseEnter={handleMouseEnter} // Keeps dropdown open
    //   onMouseLeave={handleMouseLeave} // Closes only when leaving the entire dropdown area
    // >
    //   <div className={styles.subMenuArea}>
    //     <div className={styles.sidebar}>
    //       {TABS.map((tab) => (
    //         <div
    //           key={tab}
    //           className={activeTab === tab ? styles.activeTab : styles.tab}
    //           onClick={() => setActiveTab(tab)}
    //         >
    //           <p className={styles.tabText}>{tab}</p>
    //           <ArrowRightIcon className={styles.arrowIcon} />
    //         </div>
    //       ))}
    //     </div>
    //     <div className={styles.contentArea}>
    //       {activeTab === "Overview" && (
    //         <div className={styles.overview}>
    //           <div className={styles.overViewContent}>
    //             <h2>Amlgo Labs is dedicated to making a positive impact through technological innovation.</h2>
    //             <p>For over seven years, Amlgo Labs has pioneered innovative solutions, helping businesses across diverse sectors achieve greater success.</p>
    //             <Link href="/about-us" onClick={closeDropdown}>
    //               <Button variant="contained">Learn More</Button>
    //             </Link>
    //           </div>
    //           <div className={styles.headerBlogLink}>
    //             <h3>Featured Resource</h3>
    //             <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
    //             <h4>Partnering with Leaders empowering success.</h4>
    //             <Link href="/partners">Read More</Link>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className={styles.dropdownContent}  onMouseEnter={handleMouseEnter} 
       onMouseLeave={handleMouseLeave} >
          <div className={styles.subMenuArea}>
            <div className={styles.sidebar}>
              {TABS.map((tab) => (
                <div
                  key={tab}
                  className={activeTab === tab ? styles.activeTab : styles.tab}
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
                    <Link href="/about-us" onClick={closeDropdown}>
                      <Button variant="contained">Learn More</Button>
                    </Link>
                  </div>
                  <div className={styles.headerBlogLink}>
                    <h3>Featured Resource</h3>
                    <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
                    <h4>Partnering with Leaders empowering success.</h4>
                    <Link href="/partners">Read More</Link>
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
                    {solutions.map(({ name, icon, link }) => (
                      <Link href={link} key={name} onClick={closeDropdown}>
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
                      </Link>
                    ))}
                  </div>
                  {selectedSolution && (
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
                    width={434} 
                    height={278} 
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
  )}
</div> */}

          
           <div 
      className={styles.dropdown} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    > 
      <div onClick={toggleDropdown} className={styles.navLink}>
        Businesses <ArrowDropDownIcon className={styles.arrowIcon} />
      </div>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.subMenuArea}>
            {/* Submenu Links */}
            <div className={styles.subMenuAreaLinks}>
              <Link href="/consumer-goods" className={styles.linkWrapper} onClick={closeDropdown}>
                <div className={styles.iconWrapper}>
                  <StoreIcon className={styles.icon} />
                </div>
                <div className={styles.textWrapper}>
                  <span className={styles.title}>Consumer Goods and Retail</span>
                  <p className={styles.description}>Elevate retail experiences with smart, connected solutions and insights.</p>
                </div>
              </Link>
              <Link href="/real-estate" className={styles.linkWrapper} onClick={closeDropdown}>
                <div className={styles.iconWrapper}>
                  <BungalowIcon className={styles.icon} />
                </div>
                <div className={styles.textWrapper}>
                  <span className={styles.title}>Real Estate and Infrastructure</span>
                  <p className={styles.description}>Building the future with smart, sustainable infrastructure solutions.</p>
                </div>
              </Link>
              <Link href="/manufacturing" className={styles.linkWrapper} onClick={closeDropdown}>
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

<Link href="/banking-finance" className={styles.linkWrapper} onClick={closeDropdown}>
  <div className={styles.iconWrapper}>
    <MonetizationOnIcon className={styles.icon} />
  </div>
  <div className={styles.textWrapper}>
    <span className={styles.title}>Banking & Finance</span>
    <p className={styles.description}>Secure, agile, and customer-centric financial technology solutions.</p>
  </div>
</Link>


<Link href="/insurance" className={styles.linkWrapper} onClick={closeDropdown}>
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
                  <Link href="/automotive" className={styles.linkWrapper} onClick={closeDropdown}>
                    <div className={styles.iconWrapper}>
                      <DirectionsCarIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Automotive</span>
                      <p className={styles.description}>Driving automotive innovation with intelligent, connected solutions.</p>
                    </div>
                  </Link>
                  <Link href="/renewable-energy" className={styles.linkWrapper} onClick={closeDropdown}>
                    <div className={styles.iconWrapper}>
                      <SolarPowerIcon className={styles.icon} />
                    </div>
                    <div className={styles.textWrapper}>
                      <span className={styles.title}>Renewable Energy and Environmental Science</span>
                      <p className={styles.description}>Powering a sustainable future with clean energy technology.</p>
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
              <Link href="/partners/azure" className={styles.linkWrapper} onClick={closeDropdown}>
                <div className={styles.iconWrapper}><VscAzure className={styles.icon} /></div>
                <div className={styles.textWrapper}>
                  <span className={styles.title}>Azure</span>
                  <p className={styles.description}>Harness comprehensive capabilities to develop tailored solutions that integrate seamlessly with existing systems.</p>
                </div>
              </Link>
              <Link href="/partners/google-cloud" className={styles.linkWrapper} onClick={closeDropdown}>
                <div className={styles.iconWrapper}><SiGooglecloud className={styles.icon} /></div>
                <div className={styles.textWrapper}>
                  <span className={styles.title}>Google Cloud</span>
                  <p className={styles.description}>Leveraging the immense power of Google Cloud, a comprehensive suite of cloud computing.</p>
                </div>
              </Link>
              <Link href="/partners/aws" className={styles.linkWrapper} onClick={closeDropdown}>
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
              <Image height={200} width={350} src="/HeaderPartner.jpeg" alt="casestudy" />
              <h4>Partnering with Leaders empowering success.</h4>
              <Link href="/">Read More</Link>
            </div>
          </div>
        </div>
      )}
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
                  <Link href="/about-us" className={styles.desktopLink}>
                    Overview
                  </Link>
                </ListItem>
                <ListItem className={styles.desktopSubListItem}>
                <Link href="/about-us#values" className={styles.desktopLink}>
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
              <Link href="/contact-us" className={styles.desktopLink}>
                Contact
              </Link>
            </ListItem>

            <ListItem className={styles.desktopListItem}>
              <Link href="/careers" className={styles.desktopLink}>
                Careers
              </Link>
            </ListItem>

            {/* Get in Touch Button */}
            <ListItem className={styles.desktopButtonWrapper}>
              <Link href="/contact-us">
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

      <List>
      <ListItem className={styles.mobileParentLink}>
        <Link href="/about-us" onClick={toggleDrawer(false)}>
          <div className={styles.textWithIcon}>
           About Us
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
              <div className={styles.textWithIcon}>
                Capabilities <ArrowDropDownIcon />
              </div>
            </ListItem>
            <Collapse in={activeSubDropdown === "Capabilities"} timeout="auto" unmountOnExit>
              <div className={styles.subLinks}>
                <Link href="/generative-ai" onClick={toggleDrawer(false)}>Generative-AI</Link>
                <Link href="/llms" onClick={toggleDrawer(false)}>LLMs</Link>
                <Link href="/genai-agents" onClick={toggleDrawer(false)}>GenAI Agents</Link>
                <Link href="/computer-vision" onClick={toggleDrawer(false)}>Computer Vision</Link>
                <Link href="/ml-dl" onClick={toggleDrawer(false)}>Machine Learning and Deep Learning</Link>
                <Link href="/cloud-services" onClick={toggleDrawer(false)}>Cloud-AWS, Azure, GCP</Link>
                <Link href="/data-analytics" onClick={toggleDrawer(false)}>Data Analytics</Link>
                <Link href="/data-engineering"onClick={toggleDrawer(false)}>Data Engineering</Link>
                <Link href="/devops-dataops-mlops" onClick={toggleDrawer(false)}>DataOps, DevOps, MLOps</Link>
                
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
                <Link href="/conversational-ai-chatbot" onClick={toggleDrawer(false)}>Conversational AI Chatbot</Link>
                <Link href="/text-to-sql" onClick={toggleDrawer(false)}>Text to SQL</Link>
                <Link href="/vehicle-quality-ai" onClick={toggleDrawer(false)}>Vehicle QUality AI</Link>
              </div>
            </Collapse>

            {/* CATEGORY: Cloud Engineering */}
          

            {/* CATEGORY: Data Analytics */}
            
          </div>
        </Collapse>

        {/* OTHER SECTIONS (Businesses, Partners, Careers) */}
        <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Businesses")}>
          <div className={styles.textWithIcon}>Businesses <ArrowDropDownIcon /></div>
        </ListItem>
        <Collapse in={activeDropdown === "Businesses"} timeout="auto" unmountOnExit>
          <div className={styles.mobileDropdown}>
          <Link  href="/consumer-goods">Consumer Goods</Link>
              <Link  href="/banking-finance" onClick={toggleDrawer(false)}>Banking & Finance</Link>
              <Link  href="/automotive" onClick={toggleDrawer(false)}>Automotive</Link>
              <Link  href="/real-estate" onClick={toggleDrawer(false)}>Real Estate</Link>
              <Link  href="/insurance" onClick={toggleDrawer(false)}>Insurance</Link>
              <Link  href="/renewable-energy" onClick={toggleDrawer(false)}>Renewable Energy</Link>
              <Link  href="/manufacturing" onClick={toggleDrawer(false)}>Manufacturing</Link>
              <Link  href="/pharma-life-sciences" onClick={toggleDrawer(false)}>Pharma and Life Sciences</Link>
              <Link  href="/communication-media" onClick={toggleDrawer(false)}>Communication and Media</Link>
          </div>
        </Collapse>

        <ListItem className={styles.mobileParentLink} button onClick={() => handleDropdownToggle("Partners")}>
          <div className={styles.textWithIcon}>Partners <ArrowDropDownIcon /></div>
        </ListItem>
        <Collapse in={activeDropdown === "Partners"} timeout="auto" unmountOnExit>
          <div className={styles.mobileDropdown}>
            <Link href="/partners/azure" onClick={toggleDrawer(false)}>Azure</Link>
            <Link href="/partners/aws" onClick={toggleDrawer(false)}>AWS</Link>
            <Link href="/partners/databricks" onClick={toggleDrawer(false)}>Databricks</Link>
            <Link href="/partners/google-cloud" onClick={toggleDrawer(false)}>Google Cloud</Link>
            <Link href="/partners/dell-technologies" onClick={toggleDrawer(false)}>Dell Technologies</Link>
            <Link href="/partners/cloudera" onClick={toggleDrawer(false)}>Cloudera</Link>
          </div>
        </Collapse>

        <ListItem className={styles.mobileParentLink}>
        <Link href="/career" onClick={toggleDrawer(false)}>
          <div className={styles.textWithIcon}>
           Careers
          </div>
        </Link>
        </ListItem>
      </List>
    </Drawer>
    </div>
  );
};

export default Header1;
