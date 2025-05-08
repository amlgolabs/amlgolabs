import React from 'react';
import styles from '../styles/pages/Components/BlogBanner.module.css';
import PropTypes from 'prop-types';

const BlogBanner = ({
  title = 'Explore Resources',
  subtitle = 'Have a question, need support, or curious about how we can elevate your business? Our team is here to collaborate with you.',
  containerClass = '',
  titleClass = '',
  subtitleClass = '',
}) => {
  return (
    <section className={`${styles.bannerContainer} ${containerClass}`}>
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.title} ${titleClass}`}>
          {title}
        </h1>
        {/* <p className={`${styles.subtitle} ${subtitleClass}`}>
          {subtitle}
        </p> */}
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
};

export default BlogBanner;