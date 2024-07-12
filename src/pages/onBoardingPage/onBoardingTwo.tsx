import React from "react";
import { useNavigate } from "react-router-dom";

import TextInputBox from "@components/onBoardingPage/onBoardingTwo/textInputBox";

const OnboardingTwoPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboard3");
  };

  return (
    <div className="flex flex-col px-5 pt-14 pb-[42px] h-screen justify-between">
      <div>
        <div className="pl-2 mb-8 text-lg font-semibold text-[#51555C]">
          반려동물의 <br /> 이름을 입력해주세요!
        </div>
        <TextInputBox title="이름" placeholder="이름을 입력해주세요" />
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

export default OnboardingTwoPage;
