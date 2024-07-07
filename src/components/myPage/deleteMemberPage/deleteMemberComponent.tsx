import React, { useState } from "react";

import styles from "./styles";
import DeleteModal from "../deleteModal/deleteModal";

const DeleteMemberComponent: React.FC = () => {
  const [selectModalOpen, setSelectModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setSelectModalOpen(true);
  };

  const handleClose = () => {
    setSelectModalOpen(false);
  };

  return (
    <>
      <styles.Container>
        <styles.Content>
          <styles.Title>탈퇴 전 꼭 확인해주세요!</styles.Title>
          <styles.Text>탈퇴하시게 된다면, 모든 데이터가 사라져요!</styles.Text>
          <styles.Text>브리와 나눴던 대화, 사진, 편지 등등</styles.Text>
          <styles.Text>모든 데이터가 사라집니다...</styles.Text>
        </styles.Content>
        <styles.DeleteButton onClick={handleOpen}>삭제하기</styles.DeleteButton>
      </styles.Container>

      {selectModalOpen && <DeleteModal handleClose={handleClose} />}
    </>
  );
};

export default DeleteMemberComponent;
