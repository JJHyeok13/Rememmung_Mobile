import styled from "styled-components";

import Background from "@assets/chatPage/back.png";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;

    border-radius: 12px;
  `,

  WhiteBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 400px;
    border-radius: 12px;
    margin: 0 auto;

    background-image: url(${Background});
    background-repeat: no-repeat;
  `,
};

export default styles;
