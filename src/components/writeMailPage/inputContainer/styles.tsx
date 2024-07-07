import styled from "styled-components";

const styles = {
  Container: styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  `,
  TitleInput: styled.input`
    margin-top: 28px;
    width: 100%;
    height: 43px;
    border: 0;
    border-radius: 12px;
    padding: 12px 16px;
    box-sizing: border-box;
    font-size: 16px;
  `,
  ContentInput: styled.textarea`
    margin-top: 21px;
    width: 100%;
    height: 361px;
    border: 0;
    border-radius: 12px;
    padding: 12px 16px;
    box-sizing: border-box;
    font-size: 16px;
    resize: none;
  `,
};

export default styles;
