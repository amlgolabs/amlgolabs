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

export default function FilterPage() {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

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
        <div
          className={`${styles.flexContainer} ${styles.flexColumn} ${styles.lgFlexRow} ${styles.gapLarge}`}
        >
          {/* Blog posts section */}
          <div className={styles.lgWidthThreeQuarters}>
            {blogs.length > 0 ? (
              <div className={styles.blogGrid}>
                {blogs.map((blog) => (
                  <LongBlogCard key={blog._id} blog={blog} variant="featured" />
                ))}
                <div className={styles.viewAll}>
                  <Link href="/all-blogs">
                    <Button variant="outline" size="sm" asChild>
                      View All
                      <ChevronRight className={styles.clockIcon} />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className={`${styles.textAlignCenter} ${styles.paddingVerticalExtraLarge} ${styles.borderSubtle} ${styles.borderRadiusLarge} ${styles.backgroundSubtle}`}
              >
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
                <h2
                  className={`${styles.textHeadingSmall} ${styles.fontSemibold} ${styles.marginBottomSmall}`}
                >
                  Filter by Category
                </h2>
                <CategoryForFilter
                  showAll={true}
                  selectedCategory={selectedCategory
                    .toLowerCase()
                    .replace(/\s+/g, "-")}
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
