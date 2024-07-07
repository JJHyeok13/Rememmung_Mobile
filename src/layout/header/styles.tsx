import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  Container: styled.div`
    width: 84%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px 0;
  `,
  StyledLink: styled(Link)`
    text-decoration: none;
  `,
  LeftContainer: styled.div`
    display: flex;
    font-family: "SebangGothic";
    color: #946233;
    align-items: center;
    font-size: 24px;
  `,
  LogoImage: styled.img`
    margin-right: 10px;
  `,
  RightContainer: styled.div`
    font-family: "Pretendard";

    display: flex;
    align-items: center;

    > * {
      margin-left: 8px;
    }
  `,
  Greeting: styled.div`
    font-weight: 500;
  `,
  Nickname: styled.span`
    color: #946233;
    font-weight: 600;
  `,
  Button: styled.div`
    cursor: pointer;
    font-size: 12px;
    background-color: #d0d2d6;
    color: #838383;
    padding: 8px 16px;
    border-radius: 60px;

    &:hover {
      background-color: #946233;
      color: #ffffff;
    }
  `,
};

export default styles;
