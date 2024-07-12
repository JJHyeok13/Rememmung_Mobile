import React, { useState } from "react";

import StepOne from "@components/onBoardingPage/stepOne/stepOne";
import StepTwo from "@components/onBoardingPage/stepTwo/stepTwo";
import StepThree from "@components/onBoardingPage/stepThree/stepThree";
import StepFour from "@components/onBoardingPage/stepFour/stepFour";
import StepFive from "@components/onBoardingPage/stepFive/stepFive";

import styles from "./styles";
import { PetInfoProps } from "type/onboardingPage/onboardingPage";

interface StepComponentProps {
  petData: PetInfoProps;
  setType: (species: string) => void;
  setName: (name: string) => void;
  setPetCharacter: (personality: string[]) => void;
  setGender: (gender: string) => void;
  setBirthday: (birthday: string) => void;
  setFarewellday: (farewellday: string) => void;
  setFavorites: (favorites: string[]) => void;
  setDislike: (dislike: string[]) => void;
  setSkill: (skill: string[]) => void;

  submitData: () => void;
}

const StepComponent: React.FC<StepComponentProps> = ({
  petData,
  setType,
  setName,
  setPetCharacter,
  setGender,
  setBirthday,
  setFarewellday,
  setFavorites,
  setDislike,
  setSkill,
  submitData,
}) => {
  const [step, setStep] = useState(1);

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      console.log(step);
      console.log(petData);
    }
  };

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      console.log(step);
      console.log(petData);
    }
  };

  return (
    <styles.Container>
      {step === 1 && (
        <StepOne
          selectedType={petData.species}
          setType={setType}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          selectedName={petData.name}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 3 && (
        <StepThree
          selectedCharacter={petData.personality}
          setPetCharacter={setPetCharacter}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 4 && (
        <StepFour
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 5 && (
        <StepFive
          selectedGender={petData.gender}
          selectedBirthday={petData.birthday}
          selectedFarewellday={petData.farewellday}
          selectedFavorites={petData.favorites}
          selectedDislike={petData.dislike}
          selectedSkill={petData.skill}
          setGender={setGender}
          setBirthday={setBirthday}
          setFarewellday={setFarewellday}
          setFavorites={setFavorites}
          setDislike={setDislike}
          setSkill={setSkill}
          handlePrevStep={handlePrevStep}
          handleSubmit={submitData}
        />
      )}
    </styles.Container>
  );
};

export default StepComponent;
