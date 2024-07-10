import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 8px;
  `,
  ResetButton: styled.div`
    display: flex;
    align-items: center;

    padding: 4px 16px;
    margin-bottom: 40px;

    border-radius: 23px;

    background-color: #969696;
    color: #ffffff;
    cursor: pointer;
  `,
  ResetIcon: styled.img`
    margin-right: 8px;
  `,
  TotalInputContainer: styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    > * {
      margin-bottom: 48px;
    }
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  InputTitle: styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  `,
  Input: styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: #8a8e99;

    > * {
      margin-right: 16px;
    }
  `,
  RadioInput: styled.input`
    margin-right: 6px;
    color: #8a8e99;

    &[type="radio"] {
      accent-color: #53555c;
    }
    &[type="checkbox"] {
      accent-color: #946233;
    }
  `,
  SelectInput: styled.select`
    font-size: 12px;
    margin-right: 4px;
    background-color: #e8e8eb;
    color: #53555c;

    box-sizing: border-box;
    border: 0;
    border-radius: 4px;
    padding: 6px 12px 6px 14px;
  `,
  Textarea: styled.textarea`
    width: 90%;
    height: 118px;
    resize: none;
    margin-top: 8px;
    border: 0;
    border-radius: 8px;
    background-color: #e8e8eb;
    color: #8a8e99;
    padding: 12px 12px 12px 14px;
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
  LabelText: styled.label`
    color: #8a8e99;
    font-weight: 400;
    margin-left: 6px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default styles;
