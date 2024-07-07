import styled from "styled-components";

const styles = {
  Background: styled.div`
    font-family: "Pretendard";
  `,

  Title: styled.div`
    font-size: 28px;
    margin-bottom: 8px;
  `,

  Subtitle: styled.div`
    font-size: 18px;
    margin-top: 4px;
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
