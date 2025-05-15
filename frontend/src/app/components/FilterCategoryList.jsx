import { Badge } from './ui/Badge';
import styles from '../styles/Components/FilterCategoryList.module.css';

// Define categories based on contentType
const contentTypeCategories = {
    'Case Study': [
        "AI Implementation",
        "Machine Learning",
        "Data Analytics",
        "Computer Vision",
        "Natural Language Processing",
        "Deep Learning",
        "Business Intelligence",
        "Cloud Solutions",
        "Digital Transformation"
    ],
    'Blog': [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Natural Language Processing",
        "Deep Learning",
        "AI Ethics",
        "Industry Trends",
        "Technology Insights",
        "Best Practices"
    ],
    'White Paper': [
        "AI Strategy",
        "Machine Learning",
        "Data Governance",
        "AI Implementation",
        "Industry Solutions",
        "Technology Research",
        "Future of AI",
        "Enterprise AI",
        "AI Security"
    ]
};

export function FilterCategoryList({ 
    className, 
    contentType = 'Blog',
    selectedCategory = '',
    onCategoryClick 
}) {
    const categories = contentTypeCategories[contentType] || contentTypeCategories['Blog'];

    return (
        <div className={`${styles.filterCategoryList} ${className || ''}`}>
            {categories.length > 0 ? (
                categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryClick(category)}
                        className={`${styles.filterCategoryButton} ${selectedCategory === category ? styles.selectedFilterCategory : ''}`}
                    >
                        <Badge
                            variant="outline"
                            className={styles.filterCategoryBadge}
                        >
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