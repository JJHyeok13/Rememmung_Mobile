import React from "react";
import styles from "./styles";

const MyPageNavBar: React.FC = () => {
  return (
    <styles.Container>
      <styles.List to="/mypage/mymail">내가 쓴 편지</styles.List>
      <styles.List to="/mypage/update">온보딩 수정</styles.List>
      <styles.List to="/mypage/deletedata">데이터 삭제</styles.List>
      <styles.List to="/mypage/delete">회원탈퇴</styles.List>
    </styles.Container>
  );
};

export default MyPageNavBar;
