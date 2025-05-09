
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

            <div className={styles.masonrygrid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.masonryItem}>
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={300}
                            height={200}
                            style={{ objectFit: "cover", width: "100%", height: "auto" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
