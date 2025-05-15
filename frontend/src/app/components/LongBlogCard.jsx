// components/LongBlogCard.jsx  
import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/app/components/ui/Card';
import { Clock, File } from 'lucide-react';
import { extractPreviewImage, truncateText, getBlogUrl } from '@/app/utils/blog/blogUtils';
import styles from '@/app/styles/Components/LongBlogCard.module.css';

const LongBlogCard = ({
    blog,
    variant = 'recent',
    customPlaceholderUrl = 'https://via.placeholder.com/300x200',
}) => {
    const isFeatured = variant === 'featured';
    const isRecent = variant === 'recent';
    const isPopular = variant === 'popular';

    return (
        <Card
            className={`${styles.card}`}
        >
            <Link href={getBlogUrl(blog)} className="no-underline">
                <div className={`${styles.cardLayout} ${isRecent ? styles.recentCardLayout : ''}`}>
                    {/* Image Section */}
                    {(isFeatured || isPopular) && (
                        <div
                            className={`${isFeatured ? styles.cardImage : styles.popularImage}`}
                            style={{
                                backgroundImage: `url(${extractPreviewImage(blog.content, customPlaceholderUrl)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    )}

                    {/* Content Section */}
                    <div className={`${isFeatured ? styles.cardContent : isRecent ? styles.recentCardContent : styles.popularContent}`}>
                        <CardContent>
                            {/* Meta Information */}
                            {/* Title */}
                            <h3
                                className={`${isFeatured ? styles.cardTitle : isRecent ? styles.recentCardTitle : styles.popularCardTitle}`}
                            >
                                {blog.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`${isFeatured ? styles.cardText : isRecent ? styles.recentCardText : styles.popularCardText}`}
                            >
                                {truncateText(blog.content, isFeatured ? 150 : 110)}
                            </p>

                            <div className={styles.metaInfo}>
                                {/* Date with Clock Icon */}
                                <div className={styles.recentCardDate}>
                                    <Clock className={styles.iconSmall} />
                                    <span>{new Date(blog.updatedAt).toLocaleDateString()}</span>
                                </div>

                                {/* Content Type with File Icon on the right side */}
                                <div className={styles.contentTypeIconRecentBlog}>
                                    <File className={styles.iconSmall} />
                                    <span>{blog.contentType}</span>
                                </div>
                            </div>

                        </CardContent>

                        {/* Footer (Read More Button) */}
                        {isPopular && (
                            <CardFooter className={styles.popularFooter}>
                                <Button variant="outline" size="sm">
                                    Read More
                                </Button>
                            </CardFooter>
                        )}
                    </div>
                </div>
            </Link>
        </Card>
    );
};

export default LongBlogCard;