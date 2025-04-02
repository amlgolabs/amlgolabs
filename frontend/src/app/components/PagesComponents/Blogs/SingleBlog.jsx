"use client";

import React from "react";
import Link from "next/link";
import styles from "../../../styles/pages/Components/Blogs/SingleBlog.module.css";
import Image from "next/image";

const SingleBlog = ({ title, description, imageSrc, button1Link, button2Link, button1Text, button2Text }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogContainer}>
        <div className={styles.infoContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.buttonDiv}>
            {button1Link && (
              <Link href={button1Link} passHref target="_blank">
                <button className={styles.button1}>{button1Text}</button>
              </Link>
            )}
            {button2Link && (
              <Link href={button2Link} passHref>
                <button className={styles.button2}>{button2Text}</button>
              </Link>
            )}
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
