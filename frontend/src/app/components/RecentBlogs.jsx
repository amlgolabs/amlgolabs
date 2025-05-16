import { Card, CardContent } from "@/app/components/ui/Card";
import { Clock } from "lucide-react";
import LongBlogCard from "./LongBlogCard";
import styles from "@/app/styles/components/RecentBlogs.module.css";
import { useState, useEffect } from "react";
import config from "@/app/config/config";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${config.blogEndpoint}/api/blogs`);

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.slice(0, 1));
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  const recentBlogs = blogs
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className={styles.recentBlogsContainer}>
      {/* <div className={styles.recentHeader}>
        <h2 className={styles.recentTitle}>Recent Resources</h2>
        <Clock className={styles.clockIcon} />
      </div> */}
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
  );
}
