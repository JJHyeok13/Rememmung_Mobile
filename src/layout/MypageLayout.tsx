import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import MyPageNavBar from "./myPageNavBar/myPageNavBar";

const MyPageContainer = styled.div`
  width: 84%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const MyPageLayout: React.FC = () => {
  return (
    <>
      <Header />
      <MyPageContainer>
        <MyPageNavBar />
        <Outlet />
      </MyPageContainer>
    </>
  );
};

export default MyPageLayout;
