import styled from "styled-components";

const styles = {
  OptionContainer: styled.div`
    font-family: "YangJin";
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
      border: 0;
    }
  `,
  Label: styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 8px 12px;

    cursor: pointer;
    font-size: 16px;
    padding: 16px 32px;
    box-sizing: border-box;
    border-radius: 12px;
    color: #b9bbc2;
    border: 1px solid #d0d2d6;
  `,
};

export default styles;
