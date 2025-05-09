"use client";
import SingleBlog from '@/app/components/SingleBlog';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '@/app/config/config';
// import ContactForm from '@/app/components/ContactForm';
import ContactForm from '@/app/contact-us/ContactUsForm';
import RelatedBlogs from '@/app/components/RelatedBlogs';
import styles from '../../../styles/pages/Blog/URLSingleBlog.module.css';

export default function BlogPage({ params }) {
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const unwrappedParams = await params;

            try {
                const res = await axios.get(`${config.blogEndpoint}/api/blogs/single-blog/${unwrappedParams.url}`);
                setBlog(res.data);
            } catch (error) {
                setError('Error fetching blog');
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
        <div className={styles.mainContent}>
            <div className={styles.blogSection}>
                <SingleBlog blog={blog} />
            </div>
            <div className={styles.relatedSection}>
                <RelatedBlogs categories={blog.categories} currentBlogId={blog._id} />
            </div>
        </div>
        <div className={styles.contactSection}>
            <ContactForm />
        </div>
    </div>
    );
}
