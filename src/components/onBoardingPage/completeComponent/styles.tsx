import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 198px;
  `,
  Title: styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 180%;
    color: #53555c;
    letter-spacing: -1px;
  `,
  SubTitle: styled.div`
    font-size: 14px;
    color: #a1a5ad;
    letter-spacing: -1px;
    margin-bottom: 80px;
  `,
  PetImage: styled.img`
    width: 248px;
    height: 248px;
    border-radius: 50%;

    margin-bottom: 42px;
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

    margin-bottom: 12px;

    cursor: pointer;

    font-size: 14px;
    font-weight: 600;

    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 23px;
    background-color: #969696;
    color: #ffffff;
  `,
  ButtonIcon: styled.img`
    margin-right: 8px;
    width: 24px;
    height: 24px;
  `,
  NextButton: styled.img`
    position: fixed;
    bottom: 200px;
    right: 200px;
    cursor: pointer;
  `,
};

export default styles;
