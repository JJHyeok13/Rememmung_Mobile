import styled from "styled-components";
import { NavLink } from "react-router-dom";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    align-items: center;
    border-radius: 12px;

    margin-bottom: 16px;
  `,
  List: styled(NavLink)`
    border: 1px solid #afafaf;
    margin-right: 8px;

    padding: 4px 8px;
    border-radius: 12px;

    text-decoration: none;
    color: #afafaf;
    font-size: 10px;
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
      border: 1px solid #946233;
    }
  `,
};

export default styles;
