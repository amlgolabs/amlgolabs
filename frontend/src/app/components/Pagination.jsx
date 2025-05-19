'use client'; 

import * as React from 'react';
import { Pagination as MUITextPagination } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/Components/Pagination.module.css';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div className={styles.pagination}>
      <MUITextPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </div>
  );
}

