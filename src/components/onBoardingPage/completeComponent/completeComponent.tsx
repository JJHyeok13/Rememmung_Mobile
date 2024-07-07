import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles";

import DogImage from "@assets/Dog.svg";
import GoodIcon from "@assets/onBoardingPage/goodButton.svg";
import ResetIcon from "@assets/onBoardingPage/resetButton.svg";
import DisableNextButtonImage from "@assets/onBoardingPage/disableNextButton.svg";
import AbleNextButtonImage from "@assets/onBoardingPage/ableNextButton.svg";

interface CompleteComponentProps {
  petData?: any;
}

const CompleteComponent: React.FC<CompleteComponentProps> = (
  {
    //petData,
  }
) => {
  const navigate = useNavigate();

  const types = [
    {
      id: "good",
      icon: `${GoodIcon}`,
      message: "마음에 들어요! 브리를 만나러 갈래요!",
    },
    {
      id: "bad",
      icon: `${ResetIcon}`,
      message: "마음에 안 들어요! 다시 불러올래요!",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");
  const name = "브리";

  const disableButtonClick = () => {
    alert("옵션을 선택해주세요!");
  };

  const handleComplete = () => {
    navigate("/main");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <styles.Container>
      <styles.Title>{name}가 등장했어요!</styles.Title>
      <styles.SubTitle>
        등장한 {name}의 모습이 마음에 들지 않는다면, [다시 불러오기] 버튼을
        눌러주세요...
      </styles.SubTitle>

      <styles.PetImage src={DogImage} />

      {types.map((type) => (
        <React.Fragment key={type.id}>
          <styles.Option
            type="radio"
            id={type.id}
            name="options"
            value={type.id}
            checked={selectedOption === type.id}
            onChange={handleChange}
          />
          <styles.Label htmlFor={type.id}>
            <styles.ButtonIcon src={type.icon} />
            {type.message}
          </styles.Label>
        </React.Fragment>
      ))}

      {selectedOption === "" ? (
        <styles.NextButton
          src={DisableNextButtonImage}
          onClick={disableButtonClick}
        />
      ) : selectedOption === "good" ? (
        <styles.NextButton src={AbleNextButtonImage} onClick={handleComplete} />
      ) : (
        <styles.NextButton src={AbleNextButtonImage} />
      )}
    </styles.Container>
  );
};

export default CompleteComponent;
