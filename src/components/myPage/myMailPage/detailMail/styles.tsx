import styled from "styled-components";

import MailGreenBackground from "@assets/mailBoxPage/mailBackground_Green.png";

const styles = {
  Background: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    z-index: 1000;
  `,
  Container: styled.div``,
  Letter: styled.div`
    background-image: url(${MailGreenBackground});
    background-repeat: no-repeat;

    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 710px;
    height: 480px;
  `,
  Content: styled.div`
    font-family: "SBAggro";
    line-height: 220%;

    width: 534px;
    display: flex;
    flex-direction: column;
  `,
  Receiver: styled.div`
    margin-bottom: 35px;
  `,
  Sender: styled.div`
    margin-top: 67px;
    text-align: right;
  `,
  Button: styled.div`
    margin-left: auto;
    margin-top: 24px;

    width: fit-content;

    font-size: 14px;
    font-weight: 600;

    background-color: #ffffff;
    color: #232323;
    padding: 10px 16px;

    border-radius: 8px;

    cursor: pointer;
  `,
};

export default styles;
