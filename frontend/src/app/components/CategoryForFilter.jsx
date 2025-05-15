import { Badge } from "./ui/Badge";
import styles from "../styles/Components/CategoryLinks.module.css";

// Define categories based on contentType
const contentTypeCategories = {
  "Case Study": [
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
  Blog: [
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
  "White Paper": [
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
};

export default function CategoryForFilter({
  className,
  contentType = "Blog",
  selectedCategory = "",
  onCategoryClick,
}) {
  const categories =
    contentTypeCategories[contentType] || contentTypeCategories["Blog"];

  return (
    <div className={`${styles.categoryList} ${className || ""}`}>
      {categories.length > 0 ? (
        categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.selectedCategory : ""
            }`}
          >
            <Badge variant="outline" className={styles.categoryBadge}>
              {category}
            </Badge>
          </button>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}
