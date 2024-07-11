import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Magnifier from "@assets/mailNavBar/magnifier.svg";

const MailNavBar: React.FC = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  const navItems = [
    {
      id: 1,
      path: "/write",
      label: "편지쓰기",
    },
    {
      id: 2,
      path: "/mailbox",
      label: "우편함",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-between mb-[21px]">
      <div className="flex flex-row">
        {navItems.map((item) => (
          <div
            className={`${
              isActive(item.path)
                ? "border-brown-500 text-brown-500 font-semibold bg-brown-200"
                : "border-black-100 text-[#ACADB4] font-medium bg-white"
            } border-[1px] text-sm px-[14px] py-2 rounded-[35px] mr-2`}
            key={item.id}
            onClick={() => handleNavigate(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {location.pathname === "/mailbox" && <img src={Magnifier} />}
    </div>
  );
};

export default MailNavBar;
