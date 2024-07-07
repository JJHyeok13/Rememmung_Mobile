import styled from "styled-components";
import { NavLink } from "react-router-dom";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 149px;
    height: 368px;
    background-color: #f6f6f8;
    border-radius: 12px;

    padding: 48px 32px;
    box-sizing: border-box;
  `,
  List: styled(NavLink)`
    text-decoration: none;
    color: #afafaf;
    font-size: 18px;
    font-weight: 400;

    line-height: 180%;
    letter-spacing: -0.02em;

    cursor: pointer;

    &:hover {
      color: #946233;
      font-weight: 600;
    }

    &.active {
      color: #946233;
      font-weight: 600;
    }
  `,
};

export default styles;
