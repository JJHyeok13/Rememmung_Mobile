import styled from "styled-components";

const styles = {
  TotalInputContainer: styled.div`
    display: flex;
    flex-direction: column;

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
      padding-bottom: 160px;
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
};

export default styles;
