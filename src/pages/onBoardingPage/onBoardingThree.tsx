import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomCheckBox from "@components/onBoardingPage/onBoardingThree/customCheckBox";
import { PetInfo } from "@recoil/recoil";
import { useRecoilState } from "recoil";

const OnboardingThreePage: React.FC = () => {
  const [petInfo, setPetInfo] = useRecoilState(PetInfo);

  const handleSetPetInfoPersonality = (type: string[]) => {
    setPetInfo((prev) => ({ ...prev, personality: type }));
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboard4");
  };

  const characterItem = [
    { id: 1, value: "energetic", name: "☺️ 활발해요" },
    { id: 2, value: "playful", name: "☺️ 장난끼가 많아요" },
    { id: 3, value: "timid", name: "☺️ 겁이 많아요" },
    { id: 4, value: "lonely", name: "☺️ 외로움을 많이 타요" },
    { id: 5, value: "shy", name: "☺️ 소심해요" },
    { id: 6, value: "stroller", name: "☺️ 산책을 좋아해요" },
    { id: 7, value: "foodie", name: "☺️ 먹는걸 좋아해요" },
    { id: 8, value: "friendly", name: "☺️ 친구를 좋아해요" },
    { id: 9, value: "solitary", name: "☺️ 혼자 있는걸 좋아해요" },
    { id: 10, value: "swimmer", name: "☺️ 수영하는걸 좋아해요" },
  ];

  useEffect(() => {
    console.log(petInfo);
  }, [petInfo]);

  return (
    <div className="flex flex-col px-5 pt-14 pb-[42px] h-screen justify-between">
      <div>
        <div className="pl-2 mb-8 text-lg font-semibold text-[#51555C]">
          반려동물의 <br /> 성격을 선택해주세요!
        </div>
        <CustomCheckBox
          items={characterItem}
          handleSetPetInfoPersonality={handleSetPetInfoPersonality}
        />
      </div>

      <div
        className={`${
          petInfo.personality.length > 0 ? "bg-brown-500" : "bg-black-300"
        } w-full px-8 py-3 text-center text-white rounded-xl mt-[23px] cursor-pointer`}
        onClick={petInfo.species ? handleNext : undefined}
      >
        다음
      </div>
    </div>
  );
};

export default OnboardingThreePage;
