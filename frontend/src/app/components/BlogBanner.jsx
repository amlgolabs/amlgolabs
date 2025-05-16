import React from "react";
import styles from "../styles/pages/Components/BlogBanner.module.css";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BlogBanner = ({
  title = "Explore Resources",
  subtitle = "Have a question, need support, or curious about how we can elevate your business? Our team is here to collaborate with you.",
  containerClass = "",
  titleClass = "",
  subtitleClass = "",
  selectedContentType = "",
}) => {
  const router = useRouter();

  const handleContentTypeClick = (contentType) => {
    router.push(
      `/resources/filter?contentType=${encodeURIComponent(contentType)}`
    );
  };

  const isActive = (contentType) => {
    return selectedContentType === contentType ? styles.activeButton : "";
  };

  return (
    <section className={`${styles.bannerContainer}`}>
      <div className={styles.contentWrapper}>
        <h5 className={`${styles.title} ${titleClass}`}>
          <Link href="/resources">Resources</Link>
        </h5>
        <div className={styles.buttonGroup}>
          <button
            className={`globalButton ${isActive("Case Study")}`}
            onClick={() => handleContentTypeClick("Case Study")}
          >
            Case Study
          </button>
          <button
            className={`globalButton ${isActive("Blog")}`}
            onClick={() => handleContentTypeClick("Blog")}
          >
            Blog
          </button>
          <button
            className={`globalButton ${isActive("White Paper")}`}
            onClick={() => handleContentTypeClick("White Paper")}
          >
            White Paper
          </button>
        </div>
      </div>
    </section>
  );
};

BlogBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
  selectedContentType: PropTypes.string,
};

export default BlogBanner;
