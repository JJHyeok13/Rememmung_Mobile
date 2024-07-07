import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./styles";

import BrownHomeIcon from "@assets/navBar/brownHomeIcon.svg";
import GrayHomeIcon from "@assets/navBar/grayHomeIcon.svg";

import BrownChattingIcon from "@assets/navBar/brownChattingIcon.svg";
import GrayChattingIcon from "@assets/navBar/grayChattingIcon.svg";

import BrownGalleryIcon from "@assets/navBar/brownGalleryIcon.svg";
import GrayGalleryIcon from "@assets/navBar/grayGalleryIcon.svg";

import BrownLetterIcon from "@assets/navBar/brownLetterIcon.svg";
import GrayLetterIcon from "@assets/navBar/grayLetterIcon.svg";

import BrownMailBoxIcon from "@assets/navBar/brownMailBoxIcon.svg";
import GrayMailBoxIcon from "@assets/navBar/grayMailBoxIcon.svg";

const NavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/main", icon: BrownHomeIcon, grayIcon: GrayHomeIcon, label: "홈" },
    {
      path: "/chat",
      icon: BrownChattingIcon,
      grayIcon: GrayChattingIcon,
      label: "채팅",
    },
    {
      path: "/gallery",
      icon: BrownGalleryIcon,
      grayIcon: GrayGalleryIcon,
      label: "갤러리",
    },
    {
      path: "/write",
      icon: BrownLetterIcon,
      grayIcon: GrayLetterIcon,
      label: "편지쓰기",
    },
    {
      path: "/mailbox",
      icon: BrownMailBoxIcon,
      grayIcon: GrayMailBoxIcon,
      label: "우편함",
    },
  ];

  return (
    <styles.Container>
      {navItems.map(({ path, icon, grayIcon, label }) => {
        const isActive = location.pathname === path;
        return (
          <styles.StyleLink key={path} to={path} $active={isActive}>
            {isActive && <styles.Dot />}
            <img src={isActive ? icon : grayIcon} />
            <styles.Location $active={isActive}>{label}</styles.Location>
          </styles.StyleLink>
        );
      })}
    </styles.Container>
  );
};

export default NavBar;
