"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/pages/Components/Careers/EmployeeTestimonials.module.css";

const testimonials = [
  {
    name: "Shallu Shukla",
    text: "Working as a digital marketer at Amlgo Labs has been incredible. The company fosters a dynamic, innovative environment where creativity meets data-driven strategies. I've worked on impactful AI-powered campaigns, driving engagement and growth, all while learning and collaborating with a supportive team. Amlgo Labs is about more than technology—it's about making a difference through smart marketing and innovation!",
    position: "Digital Marketer",
    image: "/employees/shallu.jpeg",
  },

  {
    name: "Karam Yadav",
    text: "Amlgo Labs is a dream organization to work with. The company's leadership is open to new ideas and feedback to implement new systems. Employees are appreciated and recognized for their dedication and hard work. It is a growing company, that is exploring all growth opportunities for the organization as well as it's employees. You always get to work on new tools and technology and there are a number of learning opportunities as well as new challenges every day.",
    position: "Senior Consultant",
    image: "/employees/karam.png",
  },

  {
    name: "Vikas Kumar",
    text: "As Delivery Head at Amlgo Labs, I'm proud of our team's dedication to delivering cutting-edge AI, machine learning, and data analytics solutions. Our culture of innovation and collaboration drives transformative outcomes and ensures customer satisfaction. It's a privilege to be part of an organization that values excellence and empowers its people to grow.",
    position: "Delivery Head - Technology",
    image: "/employees/vikas.jpeg",
  },

  {
    name: "Shivani Gupta",
    text: "I've had the opportunity to work with a talented team in a supportive and growth-driven environment. The company truly values its people, making every day both challenging and rewarding. I'm proud to be part of this amazing organization!",
    position: "HR Executive",
    image: "/employees/shivani.jpeg",
  },
  {
    name: "Tanishq Singh",
    text: "Working at Amlgo Labs has been an incredible experience. The company fosters a supportive and collaborative environment where I feel empowered to learn and grow. I've had the opportunity to work on challenging projects and contribute to meaningful solutions.",
    position: "Digital Marketer",
    image: "/employees/tanishq.jpeg",

  },

  {
    name: "Yogita Negi",
    text: "Amlgo Labs is one of the fastest-growing organizations, and I'm grateful to be part of this incredible team. It's more than a workplace — it's a family where everyone is valued and supported. Thank you to the leaders and my colleagues for being a vital part of my professional journey.",
    position: "HR Executive",
    image: "/employees/yogita.jpg",

  },

  {
    name: "Chirag Bang",
    text: "Amlgo Labs is a hub of innovation and growth. Working here means collaborating with brilliant minds on cutting-edge projects that challenge and inspire. The supportive culture and focus on learning make it the perfect place to grow professionally and make a real impact.",
    position: "Software Engineer",
    image: "/employees/chirag.jpeg",

  },

  {
    name: "Rohit Kainth",
    text: "It was an amazing experience in the tough times of Covid when I onboarded with Amlgo Labs virtually. It was smooth. The higher management is also awesome where they interacted with you and provided you with opportunities to grow. Recommended to every professional who wants to scale horizontally and vertically. Cheers and kudos.",
    position: "Technical Consultant",
    image: "/employees/rohit.jpg",

  },
];

const EmployeeTestimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.heading}>
        <h3>Meet the people who make us unique</h3>
        <h2>Hear from Our Team</h2>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={styles.testimonialCard}
        >
          <motion.img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className={styles.avatar}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <p className={styles.text}>"{testimonials[index].text}"</p>
          <h3 className={styles.name}>{testimonials[index].name}</h3>
          <span className={styles.position}>{testimonials[index].position}</span>
        </motion.div>
      </AnimatePresence>

      <div className={styles.dotsContainer}>
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTestimonials;
