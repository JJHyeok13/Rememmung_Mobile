import React from "react";
import styles from "./styles";

import GrayDogIcon from "@assets/onBoardingPage/grayDogIcon.svg";
import WhiteDogIcon from "@assets/onBoardingPage/whiteDogIcon.svg";

import GrayCatIcon from "@assets/onBoardingPage/grayCatIcon.svg";
import WhiteCatIcon from "@assets/onBoardingPage/whiteCatIcon.svg";

interface StepOneProps {
  selectedType: string;
  setType: (species: string) => void;
  handleNextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  selectedType,
  setType,
  handleNextStep,
}) => {
  const types = [
    {
      id: "dog",
      name: "강아지",
      notSelectedIcon: GrayDogIcon,
      selectedIcon: WhiteDogIcon,
    },
    {
      id: "cat",
      name: "고양이",
      notSelectedIcon: GrayCatIcon,
      selectedIcon: WhiteCatIcon,
    },
  ];

  const isInputComplete = selectedType !== "";

  const disableButtonClick = () => {
    alert("반려동물의 종을 선택해주세요!");
  };

  return (
    <div className="flex flex-col px-5">
      <div className="font-semibold text-lg text-[#51555C] w-fit mb-8">
        반려동물의 종을 <br /> 선택해주세요!
      </div>

      <div className="flex">
        {types.map((type) => (
          <React.Fragment key={type.id}>
            <styles.Option
              type="radio"
              id={type.id}
              name="petType"
              value={type.id}
              checked={selectedType === type.id}
              onChange={() => setType(type.id)}
            />
            <styles.Label htmlFor={type.id}>
              <img
                src={
                  type.id === selectedType
                    ? type.selectedIcon
                    : type.notSelectedIcon
                }
              />
              <span>{type.name}</span>
            </styles.Label>
          </React.Fragment>
        ))}
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

export default StepOne;
