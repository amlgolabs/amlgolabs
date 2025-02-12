"use client";

import React from "react";
import Link from "next/link";
import styles from "../../../styles/pages/Components/Blogs/SingleBlog.module.css";
import Image from "next/image";

const SingleBlog = ({ title, description, imageSrc, blogLink, insightsLink }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogContainer}>
        <div className={styles.infoContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.buttonDiv}>
            <Link href={blogLink} passHref>
              <button className={styles.button1}>Read Blog</button>
            </Link>
            <Link href={insightsLink} passHref>
              <button className={styles.button2}>View Insights</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image height={500} width={500} src={imageSrc} alt="blog" />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
