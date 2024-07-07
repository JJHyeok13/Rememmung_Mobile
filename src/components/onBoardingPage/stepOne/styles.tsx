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
    width: 759px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  `,
  Option: styled.input`
    display: none;
    &:checked + label {
      background-color: #946233;
      color: #ffffff;
    }
  `,
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 8px 12px;

    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 46px;
    background-color: #e8e8eb;
    color: #8a8e99;
  `,
  NextButton: styled.img`
    position: fixed;
    bottom: 200px;
    right: 200px;
    cursor: pointer;
  `,
  TestButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;

    background-color: black;
    color: white;
  `,
};

export default styles;
