import React from "react";
import { useNavigate } from "react-router-dom";

import CustomCheckBox from "@components/onBoardingPage/onBoardingOne/customCheckBox";

import GrayDogIcon from "@assets/onBoardingPage/grayDogIcon.svg";
import WhiteDogIcon from "@assets/onBoardingPage/whiteDogIcon.svg";

import GrayCatIcon from "@assets/onBoardingPage/grayCatIcon.svg";
import WhiteCatIcon from "@assets/onBoardingPage/whiteCatIcon.svg";

const OnboardingOnePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboard2");
  };

  const petItem = [
    {
      id: 1,
      name: "강아지",
      value: "dog",
      grayIcon: GrayDogIcon,
      whiteIcon: WhiteDogIcon,
    },
    {
      id: 2,
      name: "고양이",
      value: "cat",
      grayIcon: GrayCatIcon,
      whiteIcon: WhiteCatIcon,
    },
  ];

  return (
    <div className="flex flex-col px-5 pt-14 pb-[42px] h-screen justify-between">
      <div>
        <div className="pl-2 mb-8 text-lg font-semibold text-[#51555C]">
          반려동물의 <br /> 종을 선택해주세요!
        </div>
        <CustomCheckBox items={petItem} />
      </div>

      <div
        className={`${
          true ? "bg-brown-500" : "bg-black-300"
        } w-full px-8 py-3 text-center text-white rounded-xl mt-[23px]`}
        onClick={handleNext}
      >
        다음
      </div>
    </div>
  );
};

export default OnboardingOnePage;
