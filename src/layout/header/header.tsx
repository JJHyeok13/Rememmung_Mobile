import React from "react";

import LogoImage from "@assets/header/Logo.svg";
import ProfileImage from "@assets/header/profile.svg";

import styles from "./styles";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const toMyPage = () => {
    navigate(`/mypage/mymail`);
  };

  return (
    <styles.Container>
      <styles.StyledLink to="/main">
        <styles.LeftContainer className="headerFont">
          <styles.LogoImage src={LogoImage} alt="Logo Image" />
          <div>리멤멍</div>
        </styles.LeftContainer>
      </styles.StyledLink>
      <styles.RightContainer>
        <img src={ProfileImage} onClick={toMyPage} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default Header;
