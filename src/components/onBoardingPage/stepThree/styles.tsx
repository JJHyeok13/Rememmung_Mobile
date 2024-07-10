import styled from "styled-components";

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
  OptionContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  `,
  Option: styled.input`
    display: none;
    &:checked + label {
      background-color: #d4c0ad;
      color: #946233;
      border: 1px solid #946233;
      font-weight: 600;
    }
  `,
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 8px 8px 0;

    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 14px;
    box-sizing: border-box;
    border-radius: 35px;

    border: 1px solid #e8e8eb;
    background-color: #ffffff;
    color: #acadb4;
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
