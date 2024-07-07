import React from "react";

import styles from "./styles";

const MainPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.WhiteBox>
        <div>반가워요!</div>
        <div>리멤멍은 반려동물과의 이별을 하게된</div>
        <div>사람들을 위해 과거의 추억 회상을 통해</div>
        <div>이별을 준비하고 도와주는 것을 목표로</div>
        <div>제작된 서비스에요..</div>
        <div>당신의 반려동물과 건강한 이별을</div>
        <div>리멤멍이 도와줄게요!</div>
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default MainPage;
