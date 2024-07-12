import React, { useState } from "react";

import StepComponent from "@components/onBoardingPage/stepComponent/stepComponent";

// import LoadingComponent from "@components/onBoardingPage/loadingComponent/loadingComponent";
import CompleteComponent from "@components/onBoardingPage/completeComponent/completeComponent";
import { PetInfoProps } from "type/onboardingPage/onboardingPage";
import { savePetInfo } from "@server/user/api/user";

const OnBoardingPage: React.FC = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const [petData, setPetData] = useState<PetInfoProps>({
    species: "",
    name: "",
    personality: [],
    gender: "",
    birthday: "",
    farewellday: "",
    favorites: [],
    dislike: [],
    skill: [],
  });

  const setType = (species: string) => {
    setPetData((prev) => ({ ...prev, species }));
  };

  const setName = (name: string) => {
    setPetData((prev) => ({ ...prev, name }));
  };

  const setPetCharacter = (personality: string[]) => {
    setPetData((prev) => ({ ...prev, personality }));
  };

  const setGender = (gender: string) => {
    setPetData((prev) => ({ ...prev, gender }));
  };

  const setBirthday = (birthday: string) => {
    setPetData((prev) => ({ ...prev, birthday: birthday }));
  };

  const setFarewellday = (farewellday: string) => {
    setPetData((prev) => ({ ...prev, farewellday: farewellday }));
  };

  const setFavorites = (favorites: string[]) => {
    setPetData((prev) => ({ ...prev, favorites }));
  };

  const setDislike = (dislike: string[]) => {
    setPetData((prev) => ({ ...prev, dislike }));
  };

  const setSkill = (skill: string[]) => {
    setPetData((prev) => ({ ...prev, skill }));
  };

  const submitData = async () => {
    //setIsLoading(true);

    await savePetInfo(petData);
    setIsComplete(true);
  };

  return (
    <div className="">
      {!isComplete && (
        <StepComponent
          petData={petData}
          setType={setType}
          setName={setName}
          setPetCharacter={setPetCharacter}
          setGender={setGender}
          setBirthday={setBirthday}
          setFarewellday={setFarewellday}
          setFavorites={setFavorites}
          setDislike={setDislike}
          setSkill={setSkill}
          submitData={submitData}
        />
      )}

      {/* {isLoading && <LoadingComponent />} */}

      {isComplete && <CompleteComponent petData={petData} />}
    </div>
  );
};

export default OnBoardingPage;
