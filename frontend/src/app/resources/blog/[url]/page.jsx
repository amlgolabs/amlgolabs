"use client";
import SingleBlog from "@/app/components/SingleBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/app/config/config";
import ContactForm from "@/app/contact-us/ContactUsForm";
import RecentBlogs from "@/app/components/RecentBlogs";
import styles from "../../../styles/pages/Blog/URLSingleBlog.module.css";
import Head from "next/head";
import { Tag } from "lucide-react";
import { CategoryForSingleBlog } from "@/app/components/CategoryForSingleBlog";

export default function BlogPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const unwrappedParams = await params;

      try {
        const res = await axios.get(
          `${config.blogEndpoint}/api/blogs/single-blog/${unwrappedParams.url}`
        );
        setBlog(res.data);
      } catch (error) {
        setError("Error fetching blog");
      }
    };
    fetchBlog();
  }, [params]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.metaDescription} />
      </Head>
      <div className={styles.mainContent}>
        <div className={styles.blogSection}>
          <SingleBlog blog={blog} />
        </div>
        <div className={styles.relatedSection}>
          <div className={styles.categoriesSection}>
            <div className={styles.categoriesHeader}>
              <h2 className={styles.categoriesTitle}>Categories</h2>
              <Tag className={styles.tagIcon} />
            </div>
            <CategoryForSingleBlog showAll={true} />
          <RecentBlogs />
          </div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <ContactForm />
      </div>
    </div>
  );
}
