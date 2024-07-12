import React from "react";
import { Link, useLocation } from "react-router-dom";

import BrownChattingIcon from "@assets/navBar/brownChattingIcon.svg";
import GrayChattingIcon from "@assets/navBar/grayChattingIcon.svg";

import BrownPhotoIcon from "@assets/navBar/brownPhotoIcon.svg";
import GrayPhotoIcon from "@assets/navBar/grayPhotoIcon.svg";

import BrownLetterIcon from "@assets/navBar/brownLetterIcon.svg";
import GrayLetterIcon from "@assets/navBar/grayLetterIcon.svg";

import BrownDiaryIcon from "@assets/navBar/brownDiaryIcon.svg";
import GrayDiaryIcon from "@assets/navBar/grayDiaryIcon.svg";

import BrownProfileIcon from "@assets/navBar/brownProfileIcon.svg";
import GrayProfileIcon from "@assets/navBar/grayProfileIcon.svg";

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const isActive = (paths: string[]) => {
    return paths.includes(location.pathname);
  };

  const navItems = [
    {
      paths: ["/chat"],
      icon: BrownChattingIcon,
      grayIcon: GrayChattingIcon,
      label: "채팅",
    },
    {
      paths: ["/photo"],
      icon: BrownPhotoIcon,
      grayIcon: GrayPhotoIcon,
      label: "사진첩",
    },
    {
      paths: ["/write", "/mailbox"],
      icon: BrownLetterIcon,
      grayIcon: GrayLetterIcon,
      label: "편지쓰기",
    },
    {
      paths: ["/diary"],
      icon: BrownDiaryIcon,
      grayIcon: GrayDiaryIcon,
      label: "멍일기",
    },
    {
      paths: ["/mypage", "/mymail", "/update", "/deletedata", "/delete"],
      icon: BrownProfileIcon,
      grayIcon: GrayProfileIcon,
      label: "마이페이지",
    },
  ];

  return (
    <div className="bg-white fixed bottom-0 flex flex-row justify-between items-center w-[400px] px-4 pt-2 pb-8 shadow-navBarBack rounded-t-[20px] z-40">
      {navItems.map(({ paths, icon, grayIcon, label }) => (
        <Link
          key={paths[0]}
          to={paths[0]}
          className="flex flex-col items-center px-[13px]"
        >
          <img src={isActive(paths) ? icon : grayIcon} />
          <div
            className={`${
              isActive(paths) ? "text-brown-500" : "text-black-300"
            }  text-[8px] font-['YangJin']`}
          >
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
