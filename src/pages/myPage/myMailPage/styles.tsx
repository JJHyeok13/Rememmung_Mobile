import styled from "styled-components";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
  `,
  ElementBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #f6f6f8;

    min-height: 480px;
  `,
  LowerContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ButtonContainer: styled.div`
    display: flex;
    margin-top: 16px;

    > * {
      margin-left: 12px;
    }
  `,
  WriteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #946233;
    color: #ffffff;
    border-radius: 8px;
  `,
  DeleteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #8a8e99;
    color: #ffffff;
    border-radius: 8px;
  `,
  NoData: styled.div`
    color: #939393;
    text-align: center;
  `,
};

export default styles;
