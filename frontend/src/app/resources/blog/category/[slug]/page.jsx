"use client"

import { use } from "react"
import { Badge } from "@/app/components/ui/Badge"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/app/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Clock, ArrowLeft, Tag, EyeOff } from "lucide-react"
import { CategoryListForCategoriesPage } from "@/app/components/CategoryListForCategoriesPage"
import config from "@/app/config/config"
import styles from "../../../../styles/pages/Blog/Category/CategoryPage.module.css"
import LongBlogCard from "@/app/components/LongBlogCard"
import BlogBanner from "@/app/components/BlogBanner"
import RecentBlogs from "@/app/components/RecentBlogs"
import Loader from "@/app/components/Loader"
import { Pagination, PaginationItem } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function CategoryPage({ params }) {
    const router = useRouter()
    const { slug } = use(params)
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 5
    const categorySlug = slug

    // Format category name for display
    const formatCategoryName = (slug) => {
        const slugParts = slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        if (slugParts === "Uncategorized") {
            return "Resources"
        }
        return "Resources / " + slugParts;
    }

    const categoryName = formatCategoryName(categorySlug)

    useEffect(() => {
        async function fetchBlogsByCategory() {
            try {
                setLoading(true)
                const url = `${config.blogEndpoint}/api/blogs/category/${categorySlug}`
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts")
                }
                const data = await response.json()
                setBlogs(data)
            } catch (error) {
                console.error("Error fetching blog posts:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogsByCategory()
    }, [categorySlug])

    // Calculate pagination
    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
    const totalPages = Math.ceil(blogs.length / blogsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Function to get the URL for a blog post
    const getBlogUrl = (blog) => {
        if (blog.slug && blog.blogIdUID) {
            return `/blog/${blog.slug}-${blog.blogIdUID}`
        }
    }

    // Function to truncate text for summaries
    const truncateText = (text, maxLength) => {
        const cleanText = text.replace(/<[^>]*>/g, "")
        if (cleanText.length <= maxLength) return cleanText
        return cleanText.substring(0, maxLength) + "..."
    }

    if (loading) {
        return (
            <div className={`${styles.container} ${styles.paddingVerticalExtraLarge}`}>
                <Loader size="large" />
            </div>
        )
    }

    return (
        <div>
            <BlogBanner title={categoryName} />
            <div className={`${styles.container} ${styles.paddingVerticalLarge}`}>
                <div className={`${styles.flexContainer} ${styles.alignItemsCenter} ${styles.marginBottomMedium}`}>
                    {/* <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className={`${styles.buttonGhost} ${styles.marginRightMedium}`}
                >
                    <ArrowLeft className={`${styles.marginRightSmall} ${styles.iconMedium}`} /> Back
                </Button> */}
                    {/* <h1 className={`${styles.textHeadingLarge} ${styles.fontBold} ${styles.flexContainer} ${styles.alignItemsCenter}`}>
                        <Tag className={`${styles.marginRightSmall} ${styles.iconLarge}`} />
                        {categoryName}
                    </h1> */}
                </div>

                <div className={`${styles.flexContainer} ${styles.flexColumn} ${styles.lgFlexRow} ${styles.gapLarge}`}>
                    {/* Categories section - will appear first on mobile/tablet, right side on desktop */}
                    <div className={styles.lgWidthOneQuarter}>
                        <div className={`${styles.stickySidebar} ${styles.categoriesMobile}`}>
                            <div className={styles.marginBottomMedium}>
                                <h2 className={`${styles.textHeadingSmall} ${styles.fontSemibold} ${styles.marginBottomSmall}`}>
                                    All Categories
                                </h2>
                                <CategoryListForCategoriesPage showAll={true} selectedCategory={categorySlug} />
                            </div>
                            <div className={styles.relatedResources}>
                                <h2 className={styles.textHeadingSmall}>Recent Resource</h2>
                                <RecentBlogs />
                            </div>
                        </div>
                    </div>

                    {/* Blog posts section - will appear second on mobile/tablet, left side on desktop */}
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
                            <div
                                className={`${styles.textAlignCenter} ${styles.paddingVerticalExtraLarge} ${styles.borderSubtle} ${styles.borderRadiusLarge} ${styles.backgroundSubtle}`}
                            >
                                <p className={styles.textMuted}>No blog posts found in this category.</p>
                                <Button
                                    variant="outline"
                                    className="globalButton"
                                    onClick={() => router.push("/resources")}
                                >
                                    Explore All Resources
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}