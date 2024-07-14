import React from "react";
import { useNavigate } from "react-router-dom";

import InputButton from "@components/onBoardingPage/stepFour/inputButton";

const OnboardingFourPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboard5");
  };

  return (
    <div className="flex flex-col px-5 pt-14 pb-[42px] h-screen justify-between">
      <div>
        <div className="pl-2 mb-[6px] text-lg font-semibold text-[#51555C]">
          반려동물의 <br /> 사진을 올려주세요!
        </div>
        <div className="pl-2 mb-8 text-xs font-normal text-black-400">
          해당하는 사진이 없다면 원하는 사진을 넣어주세요
        </div>
        <div>
          <div>필수</div>
          <InputButton description="기본 사진" />
        </div>

        <div>
          <div>선택</div>
          <div className="grid grid-cols-2">
            <InputButton description="앉아있는 사진" />
            <InputButton description="누워있는 사진" />
            <InputButton description="걷고있는 사진" />
            <InputButton description="뛰고있는 사진" />
          </div>
        </div>
      </div>

      <div
        className={`${
          true ? "bg-brown-500" : "bg-black-300"
        } w-full px-8 py-3 text-center text-white rounded-xl mt-[23px] cursor-pointer`}
        onClick={handleNext}
      >
        다음
      </div>
    </div>
  );
};

export default OnboardingFourPage;
