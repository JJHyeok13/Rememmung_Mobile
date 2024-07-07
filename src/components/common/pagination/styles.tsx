import styled from "styled-components";

interface PaginationItemProps {
  $isActive: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      margin: 0 20px;
    }
  `,
  PageContainer: styled.div`
    display: flex;
    align-items: center;

    > * {
      margin: 0 20px;
    }
  `,
  PaginationItem: styled.div<PaginationItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    color: ${(props) => (props.$isActive ? "#946233" : "#767676")};
    border-radius: 50%;
    background-color: ${(props) => (props.$isActive ? "#eae0d6" : "")};
    cursor: pointer;

    font-size: 14px;
    font-weight: ${(props) => (props.$isActive ? 600 : 500)};
  `,
};

export default styles;
