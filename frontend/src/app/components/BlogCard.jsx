// #blogcard
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Card, CardContent, CardTitle } from '@/app/components/ui/Card';
import { extractPreviewImage, getBlogUrl, truncateText } from '@/app/utils/blog/blogUtils';
import styles from '../styles/Components/BlogCard.module.css';
import { Clock, File } from 'lucide-react';
import { useState } from 'react';
import config from '@/app/config/config';

const CUSTOM_PLACEHOLDER_URL = 'https://via.placeholder.com/300x200';

export default function BlogCard({ blog, isLast }) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = extractPreviewImage(blog.content, CUSTOM_PLACEHOLDER_URL);

  // Function to handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  // Get the final image URL
  const getImageUrl = () => {
    if (imageError) return CUSTOM_PLACEHOLDER_URL;
    if (imageUrl.startsWith('/uploads/')) {
      return `${config.blogEndpoint}${imageUrl}`;
    }
    return imageUrl;
  };

  return (
    <Card className={`${styles.blogCard} ${isLast ? '' : styles.cardWithBorder}`}>
      <div className={styles.cardImageContainer}>
        <Image
          src={getImageUrl()}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.cardImage}
          onError={handleImageError}
          quality={85}
        />
      </div>
      <CardContent className={styles.cardContent}>
        <div className={styles.cardTextWrapper}>
          <div>
            <CardTitle className={styles.cardTitle}>
              <Link href={getBlogUrl(blog)}>{truncateText(blog.title,50)}</Link>
            </CardTitle>
            <p className={styles.textMuted}>{truncateText(blog.content, 60)}</p>
          </div>

          <div className={styles.cardMeta}>
            <div className={styles.metaInfo}>
              <Clock className={styles.iconSmall} />
              <span>{new Date(blog.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className={styles.metaInfo}>
              <File className={styles.iconSmall} />
              <span>{blog.contentType}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}