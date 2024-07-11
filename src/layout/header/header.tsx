import React from "react";

import LogoImage from "@assets/header/Logo.svg";

import styles from "./styles";

const Header: React.FC = () => {
  return (
    <styles.Container>
      <styles.StyledLink to="/chat">
        <styles.LeftContainer className="headerFont">
          <styles.LogoImage src={LogoImage} alt="Logo Image" />
          <div>리멤멍</div>
        </styles.LeftContainer>
      </styles.StyledLink>
    </styles.Container>
  );
};

export default Header;
