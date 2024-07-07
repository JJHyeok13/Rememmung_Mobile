import styled from "styled-components";

interface NameInputProps {
  $borderColor: string;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h3`
    font-size: 24px;
    margin-bottom: 40px;
    color: #53555c;
    letter-spacing: -1px;
  `,
  Input: styled.input<NameInputProps>`
    width: 427px;
    font-size: 18px;
    padding: 20px 24px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 83px;
    border: 2px solid ${(props) => props.$borderColor};
    caret-color: transparent;
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
