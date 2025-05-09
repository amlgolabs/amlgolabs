"use client";

import React from 'react';
import { User, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/app/components/ui/Badge';
import { BlogRenderer } from './PagesComponents/Blogs/BlogRendrer';
import RelatedBlogs from './RelatedBlogs';
import styles from '../styles/Components/SingleBlog.module.css';

export default function SingleBlog({ blog }) {
  if (!blog || blog.message) {
    return <div>{blog?.message || 'Error loading blog'}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        {/* Main Blog Content */}
        <article className={styles.proseArticle}>
          <h2 className={styles.title}>{blog.title}</h2>
          {blog.subtitle && <p className={styles.subtitle}>{blog.subtitle}</p>}

          <div className={styles.metaInfo}>
            {blog.author && (
              <span className={styles.metaItem}>
                <User className={styles.iconSmall} />
                By {blog.author}
              </span>
            )}
            <span className={styles.metaItem}>
              <Calendar className={styles.iconSmall} />
              Published on {new Date(blog.updatedAt).toLocaleDateString()}
            </span>
          </div>

          {blog.categories && blog.categories.length > 0 && (
            <div className={styles.categoryContainer}>
              {blog.categories.map((category) => (
                <Link
                  key={category}
                  href={`/resources/blog/category/${encodeURIComponent(category.split(' ').join('-').toLowerCase())}`}
                  className={styles.badgeLink}
                >
                  <Badge variant="outline" >
                    <Tag className={styles.iconTiny} />
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          <BlogRenderer content={blog.content} />
        </article>

        {/* Related Blogs Section */}
        {/* <RelatedBlogs categories={blog.categories} currentBlogId={blog._id} /> */}
      </div>
    </div>
  );
}