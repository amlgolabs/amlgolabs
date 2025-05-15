"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LongBlogCard from './LongBlogCard';
import { Card, CardContent } from '@/app/components/ui/Card';
import styles from '../styles/Components/RelatedBlogs.module.css';
import config from '../config/config';

export default function RelatedBlogs({ categories, currentBlogId, limitBlogs = 1 }) {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    async function fetchRelatedBlogs() {
      if (categories?.length > 0) {
        try {
          const category = categories[0]; // Use the first category
          const response = await axios.get(`${config.blogEndpoint}/api/blogs/category/${encodeURIComponent(category)}`);
          const filteredBlogs = response.data
            .filter((relatedBlog) => relatedBlog._id !== currentBlogId)
            .slice(0, limitBlogs);
          setRelatedBlogs(filteredBlogs);
        } catch (error) {
          console.error('Error fetching related blogs:', error);
          setRelatedBlogs([]);
        }
      }
    }
    fetchRelatedBlogs();
  }, [categories, currentBlogId]);
  console.log('Related Blogs:', relatedBlogs); // Debugging line to check related blogs

  return (
    <aside className={styles.relatedBlogs}>
      <h3 className={styles.relatedTitle}>Related Resources</h3>
      <div className={styles.recentList}>
        {relatedBlogs.length > 0 ? (
          relatedBlogs.map((blog) => (
            <LongBlogCard key={blog._id} blog={blog} variant="recent" />
          ))
        ) : (
          <Card className={styles.noRecentCard}>
            <CardContent>
              <p>Loading...</p>
            </CardContent>
          </Card>
        )}
      </div>
    </aside>
  );
}