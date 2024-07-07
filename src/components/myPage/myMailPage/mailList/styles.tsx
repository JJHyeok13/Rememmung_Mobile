import styled from "styled-components";

const styles = {
  Table: styled.table`
    width: 100%;
    height: 100%;
    margin-bottom: 64px;
  `,
  TableHeader: styled.th`
    color: #464646;
    padding-bottom: 32px;
  `,
  TitleData: styled.td`
    width: 65%;
    color: #444444;
  `,
  StyleInput: styled.input<{ isDeleteMode: boolean }>`
    display: ${(props) => (props.isDeleteMode ? "flex" : "none")};
    align-items: center;
    width: 20px;
    height: 20px;

    accent-color: #946233;
  `,
  CheckBox: styled.td`
    width: 3%;
  `,
  Title: styled.div`
    width: fit-content;
    cursor: pointer;
  `,
  OtherData: styled.td`
    color: #939393;
    text-align: center;
    width: 15%;
  `,
};

export default styles;
