import Link from "next/link";
import { Badge } from "./ui/Badge";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/Components/CategoryLinks.module.css";

export function CategoryListForCategoriesPage({
  className,
  selectedCategory,
  onCategoryClick,
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
  const router = useRouter();
  const isBlogCategoryPath = pathname.split('/').slice(-3, -1).join('/') === 'blog/category';

  // Normalize category for comparison
  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/\s+/g, "-");
  };

  // Get the current category from the URL
  const currentCategory = pathname.split('/').pop();
  const normalizedCurrentCategory = decodeURIComponent(currentCategory);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    const categoryPath = normalizeCategory(category);
    
    if (categoryPath === normalizedCurrentCategory) {
      router.push('/resources');
    } else {
      router.push(`/resources/blog/category/${categoryPath}`);
    }
  };

  return (
    <div className={styles.categoryList}>
      {categories.length > 0 ? (
        categories.map((category) => {
          const categoryPath = normalizeCategory(category);
          const isSelected = categoryPath === normalizedCurrentCategory;
            
          return (
            <Link 
              key={category} 
              href={`/resources/blog/category/${categoryPath}`}
              onClick={(e) => handleCategoryClick(e, category)}
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
