import Link from "next/link";
import { Badge } from "./ui/Badge";
import { usePathname } from "next/navigation";
import styles from "../styles/Components/CategoryLinks.module.css";

export function CategoryListForCategoriesPage({
  className,
  selectedCategory,
  categories = [
    "Artificial Intelligence",
    // "Case-Study",
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
  ],
}) {
  const pathname = usePathname();
  const isBlogCategoryPath = pathname.split('/').slice(-3, -1).join('/') === 'blog/category';

  // Normalize category for comparison
  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/\s+/g, "-");
  };

  // Get the current category from the URL
  const currentCategory = pathname.split('/').pop();
  const normalizedCurrentCategory = decodeURIComponent(currentCategory);

  return (
    <div className={styles.categoryList}>
      {categories.length > 0 ? (
        categories.map((category) => {
          const categoryPath = encodeURIComponent(category.split(" ").join("-").toLowerCase());
          const href = isBlogCategoryPath 
            ? `/resources/blog/category/${categoryPath}`
            : `/${categoryPath}`;
          
          const isSelected = normalizeCategory(category) === normalizedCurrentCategory;
            
          return (
            <Link 
              key={category} 
              href={href}
              className={`${styles.categoryLink} ${isSelected ? styles.selectedCategory : ''}`}
            >
              <Badge variant="outline" className={styles.categoryBadge}>
                {category}
              </Badge>
            </Link>
          );
        })
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}
