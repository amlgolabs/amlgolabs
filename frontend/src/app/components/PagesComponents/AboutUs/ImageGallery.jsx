// import Image from "next/image";
// import styles from "../../../styles/pages/Components/AboutUs/ImageGallery.module.css";

// const ImageGallery = () => {
// //   const images = [
// //     "https://source.unsplash.com/random/300x400",
// //     "https://source.unsplash.com/random/300x500",
// //     "https://source.unsplash.com/random/300x350",
// //     "https://source.unsplash.com/random/300x450",
// //     "https://source.unsplash.com/random/300x550",
// //     "https://source.unsplash.com/random/300x375",
// //     "https://source.unsplash.com/random/300x425",
// //     "https://source.unsplash.com/random/300x480",
// //     "https://source.unsplash.com/random/300x520",
// //     "https://source.unsplash.com/random/300x400",
// //   ];

// const images = [
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
//     "/careersBanner.jpg",
// ]

//   return (
//     <div className={styles.masonryGrid}>
//       {images.map((src, index) => (
//         <div key={index} className={styles.masonryItem}>
//           <Image src={src} alt={`img-${index}`} width={300} height={400} layout="responsive" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;



import Image from "next/image";
import styles from "../../../styles/pages/Components/AboutUs/ImageGallery.module.css";
import Link from "next/link";

const ImageGallery = () => {
    const images = [
        "/imageGallery/5.webp",
        "/imageGallery/1.webp",
        "/imageGallery/6.webp",
        "/imageGallery/9.webp",
        "/imageGallery/10.webp",
        
        "/imageGallery/3.webp",
        "/imageGallery/2.webp",
        "/imageGallery/4.webp",
        "/imageGallery/7.webp",

        "/imageGallery/8.webp",


    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                <h2>Join Amlgo Labs</h2>
                <p>Become a part of dynamic community that:</p>
                <ul>
                    <li>Pushes the limits of AI innovation</li>
                    <li>Drives meaningful impact for global enterprises</li>
                    <li>Fosters personal and professional growth</li>
                    <li>Thrives in a supportive and forward-thinking team</li>
                </ul>
                <Link href="/careers">
                <button className="globalButton">Join Now</button>
                </Link>
            </div>
            {/* <div className={styles.masonryGrid}>
            {images.map((src, index) => (
                <div key={index} className={styles.masonryItem}>
                    <Image 
                        src={src} 
                        alt={`img-${index}`} 
                        width={300} 
                        height={400} 
                    />
                </div>
            ))}
        </div> */}
            <div className={styles.masonrygrid}>
                {images.map((src, index) => (
//                     <Image
//                         src={src}
//                         alt={`img-${index}`}
//                         width={300}
// height={200}
//                     />

<img key={index} src={src} alt="img"/>


                ))

                }

            </div>
        </div>

    );
};

export default ImageGallery;
