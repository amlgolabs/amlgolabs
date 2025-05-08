import styles from '../../styles/Components/ui/Separator.module.css';

export function Separator({ className = '', ...props }) {
  return (
    <hr className={`${styles.separator} ${className}`} {...props} />
  );
}