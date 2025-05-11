import Link from 'next/link';
import { Badge } from './ui/Badge';
import styles from '../styles/Components/CategoryLinks.module.css';

export function CategoryListForCategoriesPage({ className, categories = [
  "Artificial Intelligence",
  "Case-Study",
  "Computer Vision",
  "Data Analytics",
  "Data Engineering",
  "Data Visualization",
  "Deep Learning",
  "Featured",
  "Generative AI",
  "Identity and Access Management (IAM)",
  "Language Processing",
  "Machine Learning",
  "Regulatory Reporting",
  "Uncategorized",
] }) {

  console.log('Categories:', categories); // Debugging line to check categories
  return (
    <div className={styles.categoryList}>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link
            key={category}
            href={`${encodeURIComponent(category.split(' ').join('-').toLowerCase())}`}
            className={styles.categoryLink}
          >
            <Badge
              variant="outline"
              className={styles.categoryBadge}
            >
              {category}
            </Badge>
          </Link>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}
