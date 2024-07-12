import React from "react";
import { useNavigate } from "react-router-dom";

import RadioInputBox from "@components/onBoardingPage/onBoardingFive/radioInputBox";
import SelectInputBox from "@components/onBoardingPage/onBoardingFive/selectInputBox";
import TextareaBox from "@components/onBoardingPage/onBoardingFive/textareaBox";

const OnboardingFivePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loading");
  };

  const genderItem = [
    { id: 1, name: "남자", value: "MALE" },
    { id: 2, name: "여자", value: "FEMALE" },
  ];

  return (
    <div className="px-5 pt-14 pb-[42px]">
      <div className="pl-2 mb-[6px] text-lg font-semibold text-[#51555C]">
        반려동물의 <br /> 추가정보를 입력해주세요!
      </div>
      <div className="pl-2 mb-8 text-xs font-normal text-black-400">
        선택사항이지만, 대답해주신다면 <br /> 더 정확한 브리를 만날 수 있어요..
      </div>

      <RadioInputBox title="성별" items={genderItem} />

      <SelectInputBox title="생일" hasCheckBox={false} />

      <SelectInputBox
        title="이별한 날짜"
        hasCheckBox={true}
        checkboxString="아직 이별하지 않았어요"
      />

      <TextareaBox
        title="좋아하는 것"
        placeholder="ex. 분홍색 애착 토끼 인형"
      />

      <TextareaBox title="싫어하는 것" placeholder="ex. 차 소리" />

      <TextareaBox title="개인기" placeholder="ex. 코" />

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

export default OnboardingFivePage;
