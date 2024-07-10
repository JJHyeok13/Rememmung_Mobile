import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyleLinkProps {
  $active: boolean;
}

interface NavLabelProps {
  $active: boolean;
}

const styles = {
  Container: styled.div`
    background-color: #cdc6bf;

    position: fixed;
    bottom: 0;
    font-family: "Pretendard";
    width: 400px;
    height: 80px;

    box-sizing: border-box;
    padding: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    z-index: 999;
  `,
  StyleLink: styled(Link)<StyleLinkProps>`
    width: 50px;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    position: relative;
  `,
  Location: styled.div<NavLabelProps>`
    color: ${({ $active }) => ($active ? "#946233" : "#FFFFFF")};
  `,
};

export default styles;
