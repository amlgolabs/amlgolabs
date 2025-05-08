"use client";
import styles from '../../styles/Components/ui/Badge.module.css';

export function Badge({ children, variant = 'default', className = '', ...props }) {
  return (
    <span
      className={`${styles.badge} ${variant === 'outline' ? styles.outline : ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}