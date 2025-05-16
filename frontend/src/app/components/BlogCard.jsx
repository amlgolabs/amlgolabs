'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { Card, CardContent, CardTitle } from '@/app/components/ui/Card';
import { extractPreviewImage, getBlogUrl, truncateText } from '@/app/utils/blog/blogUtils';
import styles from '../styles/components/BlogCard.module.css';
import { Clock, File } from 'lucide-react';

const CUSTOM_PLACEHOLDER_URL = 'https://via.placeholder.com/300x200';

export default function BlogCard({ blog, isLast }) {
  return (
    <Card className={`${styles.blogCard} ${isLast ? '' : styles.cardWithBorder}`}>
      <div className={styles.cardImageContainer}>
        <div
          className={styles.cardImage}
          style={{
            backgroundImage: `url(${extractPreviewImage(blog.content, CUSTOM_PLACEHOLDER_URL)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <CardContent className={styles.cardContent}>
        <div className={styles.cardTextWrapper}>
          <div>
            <CardTitle className={styles.cardTitle}>
              <Link href={getBlogUrl(blog)}>{blog.title}</Link>
            </CardTitle>
            <p className={styles.textMuted}>{truncateText(blog.content, 60)}</p>
          </div>

          <div className={styles.cardMeta}>
            <div className={styles.metaInfo}>
              <Clock className={styles.iconSmall} />
              <span>{new Date(blog.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className={styles.metaInfo} >
              <File className={styles.iconSmall} />
              <span>{blog.contentType}</span>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}