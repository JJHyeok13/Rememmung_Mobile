import React from "react";
import { Link, useLocation } from "react-router-dom";

import BrownChattingIcon from "@assets/navBar/brownChattingIcon.svg";
import GrayChattingIcon from "@assets/navBar/grayChattingIcon.svg";

import BrownGalleryIcon from "@assets/navBar/brownGalleryIcon.svg";
import GrayGalleryIcon from "@assets/navBar/grayGalleryIcon.svg";

import BrownLetterIcon from "@assets/navBar/brownLetterIcon.svg";
import GrayLetterIcon from "@assets/navBar/grayLetterIcon.svg";

import BrownDiaryIcon from "@assets/navBar/brownDiaryIcon.svg";
import GrayDiaryIcon from "@assets/navBar/grayDiaryIcon.svg";

import BrownProfileIcon from "@assets/navBar/brownProfileIcon.svg";
import GrayProfileIcon from "@assets/navBar/grayProfileIcon.svg";

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

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
      label: "사진첩",
    },
    {
      path: "/write",
      icon: BrownLetterIcon,
      grayIcon: GrayLetterIcon,
      label: "편지쓰기",
    },
    {
      path: "/diary",
      icon: BrownDiaryIcon,
      grayIcon: GrayDiaryIcon,
      label: "멍일기",
    },
    {
      path: "/mypage",
      icon: BrownProfileIcon,
      grayIcon: GrayProfileIcon,
      label: "마이페이지",
    },
  ];

  return (
    <div className="bg-white fixed bottom-0 flex flex-row justify-between items-center w-[400px] px-4 pt-2 pb-8 shadow-navBarBack rounded-t-[20px] z-50">
      {navItems.map(({ path, icon, grayIcon, label }) => (
        <Link
          key={path}
          to={path}
          className="flex flex-col items-center px-[13px]"
        >
          <img src={isActive(path) ? icon : grayIcon} />
          <div
            className={`${
              isActive(path) ? "text-brown-500" : "text-black-300"
            }  text-[10px]`}
          >
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
