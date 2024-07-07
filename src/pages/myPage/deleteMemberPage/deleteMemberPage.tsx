import React from "react";

import styles from "./styles";

import DeleteMemberComponent from "@components/myPage/deleteMemberPage/deleteMemberComponent";

const DeleteMemberPage: React.FC = () => {
  return (
    <styles.Container>
      <DeleteMemberComponent />
    </styles.Container>
  );
};

export default DeleteMemberPage;
