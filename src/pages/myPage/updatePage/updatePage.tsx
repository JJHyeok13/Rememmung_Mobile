import React, { useEffect, useState } from "react";

interface PetInfoProps {
  species: string;
  name: string;
  personality: string[];
  gender: string;
  birthday: string;
  farewellday: string;
  favorites: string[];
  dislike: string[];
  skill: string[];
}

import styles from "./styles";
import UpdateComponent from "@components/myPage/updatePage/updateComponent";
import { getPetInfo } from "@server/user/api/user";

const UpdatePage: React.FC = () => {
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

  useEffect(() => {
    getPetInfo().then((res) => {
      setPetData(res.data);
      console.log(res);
    });
  }, [petData]);

  // const setType = (species: string) => {
  //   setPetData((prev) => ({ ...prev, species }));
  // };

  // const setName = (name: string) => {
  //   setPetData((prev) => ({ ...prev, name }));
  // };

  // const setPetCharacter = (personality: string[]) => {
  //   setPetData((prev) => ({ ...prev, personality }));
  // };

  const setGender = (gender: string) => {
    setPetData((prev) => ({ ...prev, gender }));
  };

  const setBirthday = (birthday: string) => {
    setPetData((prev) => ({ ...prev, birthday }));
  };

  const setFarewellday = (farewellday: string) => {
    setPetData((prev) => ({ ...prev, farewellday }));
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

  return (
    <styles.Container>
      <UpdateComponent
        petData={petData}
        setGender={setGender}
        setBirthday={setBirthday}
        setFarewellday={setFarewellday}
        setFavorites={setFavorites}
        setDislike={setDislike}
        setSkill={setSkill}
      />
    </styles.Container>
  );
};
export default UpdatePage;
