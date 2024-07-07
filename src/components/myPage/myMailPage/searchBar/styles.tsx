import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: flex;
    margin-top: 16px;

    > * {
      margin-right: 16px;
    }
  `,
  SelectBox: styled.select`
    background-color: #f6f6f8;
    color: #a2a2a2;
    padding: 10px 16px;
    border: 0;
    border-radius: 8px;
  `,
  InputContainer: styled.div`
    display: flex;
  `,
  Input: styled.input`
    background-color: #f6f6f8;
    padding: 10px 16px;

    border: 0;
    border-radius: 8px 0 0 8px;
  `,
  SearchButton: styled.div`
    cursor: pointer;
    background-color: #aaaaaa;
    color: #f6f6f8;
    padding: 10px 16px;
    border-radius: 0 8px 8px 0;
  `,
};

export default styles;
