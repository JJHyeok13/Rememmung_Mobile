import React from "react";
import styles from "./styles";

import PrevButtonImage from "@assets/onBoardingPage/prevButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

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
  const isInputComplete = selectedName !== "";

  const disableButtonClick = () => {
    alert("이름을 입력해주세요!");
  };

  return (
    <styles.Container>
      <styles.Title>반려동물의 이름을 입력해주세요</styles.Title>
      <styles.Input
        type="text"
        placeholder="이름을 입력해주세요"
        value={selectedName}
        onChange={(e) => setName(e.target.value)}
        $borderColor={selectedName ? "#100f0e" : "#b9bbc2"}
      />

      <styles.PrevButton src={PrevButtonImage} onClick={handlePrevStep} />

      {!isInputComplete ? (
        <styles.NextButton
          src={DisableNextButtonImage}
          onClick={disableButtonClick}
        />
      ) : (
        <styles.NextButton src={AbleNextButtonImage} onClick={handleNextStep} />
      )}
    </styles.Container>
  );
};

export default StepTwo;
