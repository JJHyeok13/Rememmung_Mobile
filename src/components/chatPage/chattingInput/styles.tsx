import styled from "styled-components";

const styles = {
  Container: styled.div`
    width: 92%;
    display: flex;
    align-items: center;
    margin: 0 auto 22px;
  `,
  StyleInput: styled.input`
    font-size: 16px;
    width: 95%;
    height: 51px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 12px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.8);

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #898989;
    }
  `,
  SendButton: styled.img`
    margin-left: 4%;
    cursor: pointer;
  `,
};

export default styles;
