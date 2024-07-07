import React from "react";

import { SyncLoader } from "react-spinners";

import styles from "./styles";

const LoadingComponent: React.FC = () => {
  const name = "브리";

  return (
    <styles.Container>
      <styles.Title>{name}가 리멤멍으로 날아오고 있어요!</styles.Title>
      <styles.SubTitle>
        {name}가 열심히 날아오고 있으니까 조금만 기다려주세요...
      </styles.SubTitle>

      <SyncLoader size={26} color="rgba(148, 98, 51, 0.7)" margin={30} />
    </styles.Container>
  );
};

export default LoadingComponent;
