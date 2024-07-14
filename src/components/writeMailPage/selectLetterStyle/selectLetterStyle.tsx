import React from "react";

import PinkLetterIcon from "@assets/writeMailPage/pinkLetterIcon.svg";
import GreenLetterIcon from "@assets/writeMailPage/greenLetterIcon.svg";
import SkyLetterIcon from "@assets/writeMailPage/skyLetterIcon.svg";
import PurpleLetterIcon from "@assets/writeMailPage/purpleLetterIcon.svg";

interface SelectLetterStyleProps {
  letterStyle: string;
  handleLetterStyle: (type: string) => void;
}

const SelectLetterStyle: React.FC<SelectLetterStyleProps> = ({
  letterStyle,
  handleLetterStyle,
}) => {
  return (
    <div className="flex flex-row pl-1 [&_img]:mr-2">
      <img
        src={PinkLetterIcon}
        className={`${
          letterStyle === "pink" ? "border-[1px] border-brown-500" : "border-0"
        } cursor-pointer rounded-full`}
        onClick={() => handleLetterStyle("pink")}
      />
      <img
        src={GreenLetterIcon}
        className={`${
          letterStyle === "green" ? "border-[1px] border-brown-500" : "border-0"
        } cursor-pointer rounded-full`}
        onClick={() => handleLetterStyle("green")}
      />
      <img
        src={SkyLetterIcon}
        className={`${
          letterStyle === "sky" ? "border-[1px] border-brown-500" : "border-0"
        } cursor-pointer rounded-full`}
        onClick={() => handleLetterStyle("sky")}
      />
      <img
        src={PurpleLetterIcon}
        className={`${
          letterStyle === "purple"
            ? "border-[1px] border-brown-500"
            : "border-0"
        } cursor-pointer rounded-full`}
        onClick={() => handleLetterStyle("purple")}
      />
    </div>
  );
};

export default SelectLetterStyle;
