import React from "react";
import { useLocation } from "react-router-dom";

import BrownChattingIcon from "@assets/navBar/brownChattingIcon.svg";
import GrayChattingIcon from "@assets/navBar/grayChattingIcon.svg";

import BrownGalleryIcon from "@assets/navBar/brownGalleryIcon.svg";
import GrayGalleryIcon from "@assets/navBar/grayGalleryIcon.svg";

import BrownLetterIcon from "@assets/navBar/brownLetterIcon.svg";
import GrayLetterIcon from "@assets/navBar/grayLetterIcon.svg";

import BrownMailBoxIcon from "@assets/navBar/brownMailBoxIcon.svg";
import GrayMailBoxIcon from "@assets/navBar/grayMailBoxIcon.svg";

import BrownDiaryIcon from "@assets/navBar/brownDiaryIcon.svg";
import GrayDiaryIcon from "@assets/navBar/grayDiaryIcon.svg";

import styles from "./styles";

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
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
    {
      path: "/diary",
      icon: BrownDiaryIcon,
      grayIcon: GrayDiaryIcon,
      label: "멍일기",
    },
  ];

  return (
    <styles.Container>
      {navItems.map(({ path, icon, grayIcon, label }) => {
        const isActive = location.pathname === path;
        return (
          <styles.StyleLink key={path} to={path} $active={isActive}>
            <img src={isActive ? icon : grayIcon} />
            <styles.Location $active={isActive}>{label}</styles.Location>
          </styles.StyleLink>
        );
      })}
    </styles.Container>
  );
};

export default BottomNavBar;
