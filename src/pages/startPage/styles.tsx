import styled from "styled-components";

import Background1280 from "@assets/startPage/background_1280.png";
import Background1440 from "@assets/startPage/background_1440.png";
import Background1680 from "@assets/startPage/background_1680.png";
import Background1920 from "@assets/startPage/background_1920.png";

const styles = {
  Background: styled.div`
    font-family: "Pretendard";

    @media screen and (max-width: 1280px) {
      background: url(${Background1280});
      background-repeat: no-repeat;
    }
    @media screen and (min-width: 1281px) and (max-width: 1440px) {
      background: url(${Background1440});
      background-repeat: no-repeat;
    }
    @media screen and (min-width: 1441px) and (max-width: 1680px) {
      background: url(${Background1680});
      background-repeat: no-repeat;
    }
    @media screen and (min-width: 1681px) and (max-width: 1920px) {
      background: url(${Background1920});
      background-repeat: no-repeat;
    }
    width: 100vw;
    height: 100vh;
  `,

  Gradation: styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.42)
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
    background-blend-mode: multiply;
    width: 100vw;
    height: 100vh;
  `,

  Container: styled.div`
    position: fixed;
    bottom: 200px;
    right: 100px;
    text-align: right;
    color: white;
  `,

  Title: styled.div`
    font-size: 28px;
    margin-bottom: 8px;
  `,

  Subtitle: styled.div`
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 32px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,

  Button: styled.img`
    display: flex;
    width: 184px;
    height: 45px;
    cursor: pointer;

    &:first-child {
      margin-bottom: 12px;
    }
  `,
};

export default styles;
