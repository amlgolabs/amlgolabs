"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogBanner from "@/app/components/BlogBanner";
import LongBlogCard from "@/app/components/LongBlogCard";
import config from "@/app/config/config";
import styles from "../../styles/pages/Blog/FilterPage.module.css";
import CategoryForFilter from "@/app/components/CategoryForFilter";
import { Button } from "@/app/components/ui/Button";
import RecentBlogs from "@/app/components/RecentBlogs";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Loader from "@/app/components/Loader";
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FilterPage() {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const contentType = searchParams.get("contentType") || "Blog";

  useEffect(() => {
    const fetchFilteredBlogs = async () => {
      try {
        setLoading(true);
        let url = `${
          config.blogEndpoint
        }/api/blogs/filter?contentType=${encodeURIComponent(contentType)}`;

        if (selectedCategory) {
          url += `&categories=${encodeURIComponent(selectedCategory)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredBlogs();
  }, [contentType, selectedCategory]);

  const handleCategoryClick = (category) => {
    // Simply use the category as is, since it's already in display format
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <BlogBanner
          title={`${contentType} Resources`}
          selectedContentType={contentType}
        />
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div>
      <BlogBanner
        title={`${contentType} Resources`}
        selectedContentType={contentType}
      />
      <div className={styles.container}>
        <div className={`${styles.flexContainer} ${styles.flexColumn} ${styles.lgFlexRow} ${styles.gapLarge}`}>
          {/* Blog posts section */}
          <div className={styles.lgWidthThreeQuarters}>
            {blogs.length > 0 ? (
              <>
                <div className={styles.blogGrid}>
                  {currentBlogs.map((blog) => (
                    <LongBlogCard key={blog._id} blog={blog} variant="featured" />
                  ))}
                </div>

                {/* MUI Text Pagination */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={(event, value) => handlePageChange(value)}
                      color="primary"
                      size="large"
                      showFirstButton
                      showLastButton
                      renderItem={(item) => (
                        <PaginationItem
                          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                          {...item}
                        />
                      )}
                      sx={{
                        '& .MuiPaginationItem-root': {
                          fontSize: '1rem',
                          fontWeight: 500,
                        },
                        '& .Mui-selected': {
                          backgroundColor: 'var(--primary) !important',
                          color: 'white !important',
                        },
                        '& .MuiPaginationItem-root:hover': {
                          backgroundColor: 'var(--primary-hover)',
                        },
                      }}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className={`${styles.textAlignCenter} ${styles.paddingVerticalExtraLarge} ${styles.borderSubtle} ${styles.borderRadiusLarge} ${styles.backgroundSubtle}`}>
                <p className={styles.textMuted}>
                  {selectedCategory
                    ? `No ${contentType.toLowerCase()} posts found in ${selectedCategory}.`
                    : `No ${contentType.toLowerCase()} posts found.`}
                </p>
              </div>
            )}
          </div>

          {/* Categories section */}
          <div className={styles.lgWidthOneQuarter}>
            <div className={styles.stickySidebar}>
              <div className={styles.categoriesMobile}>
                <h2 className={`${styles.textHeadingSmall} ${styles.fontSemibold} ${styles.marginBottomSmall}`}>
                  Filter by Category
                </h2>
                <CategoryForFilter
                  showAll={true}
                  selectedCategory={selectedCategory.toLowerCase().replace(/\s+/g, "-")}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
              <div className={styles.relatedResources}>
                <h2 className={styles.textHeadingSmall}>Related Resources</h2>
                <RecentBlogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}