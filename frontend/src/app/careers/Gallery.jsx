import React from "react";
import Image from "next/image";
import styles from "../styles/pages/Components/Careers/Gallery.module.css";

const Gallery = () => {
  const images = [
    "/imageGallery/1.webp",
    "/imageGallery/6.webp",
    "/imageGallery/9.webp",
    "/imageGallery/12.webp",
    "/imageGallery/17.webp",
    "/imageGallery/10.webp",
    "/imageGallery/2.webp",
    "/imageGallery/11.webp",
    "/imageGallery/15.webp",
    "/imageGallery/5.webp",
    "/imageGallery/4.webp",
    "/imageGallery/7.webp",
    "/imageGallery/3.webp",
    "/imageGallery/16.webp",
    "/imageGallery/8.webp",
  ];

  return (
    <div className={styles.mainContainer} >
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>Choose a team that puts you first</h2>
        <div className={styles.masonryGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.masonryItem}>
              <Image src={src} alt={`Gallery Image ${index}`} width={300} height={200} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
