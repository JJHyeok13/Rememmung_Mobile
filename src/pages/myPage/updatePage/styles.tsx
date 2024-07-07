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
    border-radius: 12px;

    background-color: #f4f4f4;
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
};

export default styles;
