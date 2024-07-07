import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h3`
    font-size: 24px;
    color: #53555c;
    letter-spacing: -1px;
    margin-bottom: 4px;
  `,
  SubTitle: styled.div`
    font-size: 14px;
    color: #a1a5ad;
    letter-spacing: -1px;
    margin-bottom: 40px;
  `,
  InputContainer: styled.div`
    width: 680px;
    display: flex;
    justify-content: space-between;
  `,
  PrevButton: styled.img`
    position: fixed;
    bottom: 200px;
    left: 200px;
    cursor: pointer;
  `,
  NextButton: styled.img`
    position: fixed;
    bottom: 200px;
    right: 200px;
    cursor: pointer;
  `,
};

export default styles;
