"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/app/components/Pagination";
import { CategoryList } from "@/app/components/CategoryList";
import { fetchBlogs, fetchBlogsCount } from "@/app/lib/api";
import BlogCard from "@/app/components/BlogCard";
import styles from "../styles/pages/AllBlogs.module.css";
import { Tag } from "lucide-react";
import Loader from "@/app/components/Loader";
import BlogBanner from "../components/BlogBanner";

const BLOGS_PER_PAGE = 6;

function AllResourcesContent() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const blogsData = await fetchBlogs({ page, limit: BLOGS_PER_PAGE });
      setBlogs(blogsData);

      const totalBlogsCount = await fetchBlogsCount();
      setTotalBlogs(totalBlogsCount);

      setTotalPages(Math.ceil(totalBlogsCount / BLOGS_PER_PAGE));
    }

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage);
    window.history.pushState(null, "", "?" + params.toString());
  };

  return (
    <div>
      <BlogBanner />
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          <div className={styles.featuredSection}>
            <div className={styles.categoriesSection}>
              <div className={styles.categoriesHeader}>
                <h2 className={styles.categoriesTitle}>Categories</h2>
                <Tag className={styles.tagIcon} />
              </div>
              <CategoryList />
            </div>

            <div className={styles.blogGrid}>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <BlogCard
                    key={blog._id}
                    blog={blog}
                    isLast={index === blogs.length - 1}
                  />
                ))
              ) : (
                <div className={styles.noBlogs}>
                  <Loader size="medium" />
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loader size="large" />}>
      <AllResourcesContent />
    </Suspense>
  );
}
