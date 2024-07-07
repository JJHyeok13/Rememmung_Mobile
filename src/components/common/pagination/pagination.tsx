import React from "react";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import styles from "./styles";

interface PaginationProps {
  currentPage: number;
  handlePage: (num: number) => void;
  totalPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePage,
  totalPage,
}) => {
  const pageNumbers = [];

  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(i + 1);
  }

  const handlePageClick = (page: number) => {
    handlePage(page - 1);
  };

  const handlePrevPage = () => {
    handlePage(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePage(currentPage + 1);
  };

  return (
    <styles.Container>
      <MdNavigateBefore
        size={24}
        fill="#767676"
        onClick={handlePrevPage}
        style={{ cursor: "pointer" }}
      />
      <styles.PageContainer>
        {pageNumbers.map((page, index) => (
          <styles.PaginationItem
            key={index}
            $isActive={currentPage + 1 === page}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </styles.PaginationItem>
        ))}
      </styles.PageContainer>
      <MdNavigateNext
        size={24}
        fill="#767676"
        onClick={handleNextPage}
        style={{ cursor: "pointer" }}
      />
    </styles.Container>
  );
};

export default Pagination;
