import React, { useState } from "react";

import styles from "./styles";

const SearchBar: React.FC = () => {
  // @ts-ignore
  const [period, setPeriod] = useState();
  // @ts-ignore
  const [searchType, setSearchType] = useState<string>();
  // @ts-ignore
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <styles.Container>
      {/* <styles.SelectBox>
        <option>전체기간</option>
      </styles.SelectBox>
      <styles.SelectBox>
        <option>게시글 + 댓글</option>
        <option>제목</option>
        <option>내용</option>
        <option>댓글</option>
      </styles.SelectBox> */}
      <styles.InputContainer>
        <styles.Input type="text" placeholder="검색어를 입력해주세요" />
        <styles.SearchButton>검색</styles.SearchButton>
      </styles.InputContainer>
    </styles.Container>
  );
};

export default SearchBar;
