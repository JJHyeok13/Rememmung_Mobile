import styled from "styled-components";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;

    padding-bottom: 96px;
  `,
  ElementBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 580px;
    border-radius: 12px;
    background-color: #f6f6f8;
    overflow: hidden;

    margin: 0 auto;
  `,
  LowerContainer: styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
  `,
  SendButton: styled.div`
    cursor: pointer;
    padding: 12px 32px;
    background-color: #946233;
    color: #ffffff;
    border-radius: 12px;
  `,
};

export default styles;
