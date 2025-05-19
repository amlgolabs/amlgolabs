"use client";

import React from "react";
import Link from "next/link";
import styles from "../../../styles/pages/Components/Blogs/SingleBlog.module.css";
import Image from "next/image";
import { usePopup } from "@/app/context/PopupContext";

const SingleBlog = ({
  category,
  title,
  description,
  imageSrc,
  button1Link,
  button2Link,
  button1Text,
  button2Text,
  usePopupForButton1 = false, 
  pdfName, 
}) => {
  const { openPopup } = usePopup();

  const handleButton1Click = () => {
    if (usePopupForButton1 && pdfName) {
      openPopup(pdfName); // Trigger popup with the specified PDF
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogContainer}>
        <div className={styles.infoContainer}>
          <h4>{category}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.buttonDiv}>
            {button1Link && (
              <>
                {usePopupForButton1 ? (
                  <button className="globalButton" onClick={handleButton1Click}>
                    {button1Text}
                  </button>
                ) : (
                  <Link href={button1Link} passHref target="_blank">
                    <button className="globalButton">{button1Text}</button>
                  </Link>
                )}
              </>
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
