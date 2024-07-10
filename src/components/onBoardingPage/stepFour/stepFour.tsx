import React from "react";

import styles from "./styles";
import InputButton from "./inputButton";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

interface StepFourProps {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const ImageUpload: React.FC<StepFourProps> = ({
  handlePrevStep,
  handleNextStep,
}) => {
  const disableButtonClick = () => {
    alert("기본사진을 첨부해주세요!");
  };

  const isInputComplete = true;

  return (
    <div className="flex flex-col px-5 mt-14">
      <div className="font-semibold text-lg text-[#51555C] w-fit">
        반려동물의 <br /> 사진을 올려주세요!
      </div>
      <div className="text-sm text-black-400 mb-[42px]">
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

      <div
        className={`${
          isInputComplete ? "bg-brown-500" : "bg-black-300"
        } text-white text-center p-4 w-[330px] rounded-xl cursor-pointer self-center`}
        onClick={isInputComplete ? handleNextStep : disableButtonClick}
      >
        다음
      </div>
    </div>
  );
};

export default ImageUpload;
