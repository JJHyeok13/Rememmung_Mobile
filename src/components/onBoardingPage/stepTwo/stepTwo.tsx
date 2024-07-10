import React, { useState } from "react";

interface StepTwoProps {
  selectedName: string;
  setName: (name: string) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  selectedName,
  setName,
  handlePrevStep,
  handleNextStep,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isInputComplete = selectedName !== "";

  const disableButtonClick = () => {
    alert("이름을 입력해주세요!");
  };

  return (
    <div className="flex flex-col px-5 mt-14">
      <div className="font-semibold text-lg text-[#51555C] w-fit mb-8">
        반려동물의 <br /> 이름을 입력해주세요!
      </div>

      <div
        className={`border-[1px] px-5 py-4 rounded-xl ${
          isFocused || isInputComplete ? "border-[#BFA185]" : "border-[#E6E6E6]"
        }`}
      >
        <div
          className={`${
            isFocused ? "text-brown-500" : "text-[#808997]"
          } font-semibold text-xs`}
        >
          이름
        </div>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={selectedName}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-sm font-medium text-[#6C6C77] border-0"
        />
      </div>

      <div
        className={`${
          isInputComplete ? "bg-[#946233]" : "bg-[#B9BBC2]"
        } text-white text-center p-4 w-[330px] rounded-xl cursor-pointer self-center`}
        onClick={isInputComplete ? handleNextStep : disableButtonClick}
      >
        다음
      </div>
    </div>
  );
};

export default StepTwo;
