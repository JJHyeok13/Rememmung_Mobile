import React, { useState } from "react";

import styles from "./styles";
import DeleteModal from "../deleteModal/deleteModal";

const DeleteDataComponent: React.FC = () => {
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
          <styles.Title>데이터 삭제 전 꼭 읽어주세요!</styles.Title>
          <styles.Text>데이터를 삭제하시면, 회원은 유지되지만</styles.Text>
          <styles.Text>
            브리와 나눴던 대화, 사진, 편지 등등 모든 데이터가 사라집니다...
          </styles.Text>
        </styles.Content>
        <styles.DeleteButton onClick={handleOpen}>삭제하기</styles.DeleteButton>
      </styles.Container>

      {selectModalOpen && <DeleteModal handleClose={handleClose} />}
    </>
  );
};

export default DeleteDataComponent;
