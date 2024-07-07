import React, { useEffect } from "react";

import styles from "./styles";

interface DeleteModalProps {
  handleClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ handleClose }) => {
  useEffect(() => {
    // 모달이 열리면 뒤쪽의 스크롤을 막음
    document.body.style.overflow = "hidden";
    // 컴포넌트가 언마운트될 때 스타일 제거하여 스크롤이 다시 활성화되도록 함
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <styles.Background>
      <styles.Modal>
        <styles.TitleContainer>
          <styles.Title>정말 탈퇴하시겠습니까?</styles.Title>
          <styles.SubTitle>탈퇴한다면 다시 되돌릴 수 없어요.</styles.SubTitle>
        </styles.TitleContainer>
        <styles.ButtonContainer>
          <styles.CancelButton onClick={handleClose}>취소</styles.CancelButton>
          <styles.DeleteButton>탈퇴</styles.DeleteButton>
        </styles.ButtonContainer>
      </styles.Modal>
    </styles.Background>
  );
};

export default DeleteModal;
