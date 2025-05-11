"use client";

import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';
import { Separator } from '@/app/components/ui/Separator';
import { CategoryList } from '@/app/components/CategoryList';
import { fetchBlogs } from '@/app/lib/api';
import styles from '@/app/styles/pages/Blog.module.css';
import { Clock, Tag, TrendingUp, ChevronRight, Search } from 'lucide-react';
import LongBlogCard from '../components/LongBlogCard';
import BlogCard from '../components/BlogCard';
import { useState, useEffect } from 'react';
import BlogBanner from '../components/BlogBanner';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      setIsLoading(true);
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const filteredBlogs = blogs
    .filter((blog) =>
      searchTerm
        ? blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const featuredBlogs = filteredBlogs;
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);
  const popularBlogs = blogs
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div>
      <BlogBanner className={styles.banner} />
      <div className={styles.container}>
        {/* Categories and Search Section - Moved above mainLayout for mobile */}
        <div className={styles.categoriesSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search blogs..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.categoriesHeader}>
            <h2 className={styles.categoriesTitle}>Categories</h2>
            <Tag className={styles.tagIcon} />
          </div>
          <CategoryList className={styles.categoriesList} />
        </div>

        <div className={styles.mainLayout}>
          {/* Featured Blogs */}
          <div className={styles.featuredSection}>
            <div className={styles.blogGrid}>
              {isLoading ? (
                <div className={styles.noBlogs}>
                  <p>Loading...</p>
                </div>
              ) : featuredBlogs.length > 0 ? (
                featuredBlogs.map((blog) => (
                  <LongBlogCard key={blog._id} blog={blog} variant="featured" />
                ))
              ) : (
                <div className={styles.noBlogs}>
                  <p>No blogs found.</p>
                </div>
              )}
            </div>

            <div className={styles.viewAll}>
              <Link href="/all-blogs">
                <Button variant="outline" size="sm" asChild>
                  View All
                  <ChevronRight className={styles.clockIcon} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar - Recent Blogs only on mobile, includes Categories on desktop */}
          <div className={styles.sidebar}>
            <div className={styles.sticky}>
              {/* Categories Section for desktop */}
              <div className={styles.categoriesSectionDesktop}>
                <div className={styles.searchContainer}>
                  <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} />
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      className={styles.searchInput}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.categoriesHeader}>
                  <h2 className={styles.categoriesTitle}>Categories</h2>
                  <Tag className={styles.tagIcon} />
                </div>
                <CategoryList className={styles.categoriesList} />
              </div>

              <div className={styles.recentHeader}>
                <h2 className={styles.recentTitle}>Recent Blogs</h2>
                <Clock className={styles.clockIcon} />
              </div>
              <div className={styles.recentList}>
                {isLoading ? (
                  <Card className={styles.noRecentCard}>
                    <CardContent>
                      <p>Loading...</p>
                    </CardContent>
                  </Card>
                ) : recentBlogs.length > 0 ? (
                  recentBlogs.map((blog) => (
                    <LongBlogCard key={blog._id} blog={blog} variant="recent" />
                  ))
                ) : (
                  <Card className={styles.noRecentCard}>
                    <CardContent>
                      <p>No recent blogs available.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* More Blogs */}
        <div className={styles.popularSection}>
          <div className={styles.popularHeader}>
            <h2 className={styles.popularTitle}>More Blogs</h2>
            <TrendingUp className={styles.trendingIcon} />
            <Separator className={styles.popularSeparator} />
          </div>

          <div className={styles.popularGrid}>
            {isLoading ? (
              <div className={styles.noBlogsFull}>
                <p>Loading...</p>
              </div>
            ) : popularBlogs.length > 0 ? (
              popularBlogs.map((blog, index) => (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                  isLast={index === popularBlogs.length - 1}
                />
              ))
            ) : (
              <div className={styles.noBlogsFull}>
                <p>No blogs available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}