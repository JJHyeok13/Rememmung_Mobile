import React, { useEffect, useState } from "react";
import { createYear, createMonth, createDay } from "utils/createTime";
import styles from "./styles";

interface UpdateComponentProps {
  petData: {
    species: string;
    name: string;
    personality: string[];
    gender: string;
    birthday: string;
    farewellday: string;
    favorites: string[];
    dislike: string[];
    skill: string[];
  };
  setGender: (gender: string) => void;
  setBirthday: (birthday: string) => void;
  setFarewellday: (farewellday: string) => void;
  setFavorites: (favorites: string[]) => void;
  setDislike: (dislike: string[]) => void;
  setSkill: (skill: string[]) => void;
}

const UpdateComponent: React.FC<UpdateComponentProps> = ({
  petData,
  setGender,
  setBirthday,
  setFarewellday,
  setFavorites,
  setDislike,
  setSkill,
}) => {
  const [birthdayYear, setBirthdayYear] = useState<string>("");
  const [birthdayMonth, setBirthdayMonth] = useState<string>("");
  const [birthdayDay, setBirthdayDay] = useState<string>("");

  const [farewellYear, setFarewellYear] = useState<string>("");
  const [farewellMonth, setFarewellMonth] = useState<string>("");
  const [farewellDay, setFarewellDay] = useState<string>("");

  const [selectedGender, setSelectedGender] = useState<string>(petData.gender);
  const [selectedFavorites, setSelectedFavorites] = useState<string[]>(
    petData.favorites
  );
  const [selectedDislike, setSelectedDislike] = useState<string[]>(
    petData.dislike
  );
  const [selectedSkill, setSelectedSkill] = useState<string[]>(petData.skill);

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value);
    setGender(e.target.value);
  };

  const handleChangeFavorites = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const favorites = e.target.value.split(", ").map((item) => item.trim());
    setSelectedFavorites(favorites);
    setFavorites(favorites);
  };

  const handleChangeDislike = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const dislike = e.target.value.split(", ").map((item) => item.trim());
    setSelectedDislike(dislike);
    setDislike(dislike);
  };

  const handleChangeSkill = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skill = e.target.value.split(", ").map((item) => item.trim());
    setSelectedSkill(skill);
    setSkill(skill);
  };

  useEffect(() => {
    if (birthdayYear && birthdayMonth && birthdayDay) {
      setBirthday(`${birthdayYear}-${birthdayMonth}-${birthdayDay}`);
    }
  }, [birthdayYear, birthdayMonth, birthdayDay, setBirthday]);

  useEffect(() => {
    if (farewellYear && farewellMonth && farewellDay) {
      setFarewellday(`${farewellYear}-${farewellMonth}-${farewellDay}`);
    }
  }, [farewellYear, farewellMonth, farewellDay, setFarewellday]);

  return (
    <styles.TotalInputContainer>
      <styles.InputContainer>
        <styles.InputTitle>성별</styles.InputTitle>
        <styles.Input>
          <styles.RadioInput
            type="radio"
            name="gender"
            value="MALE"
            checked={selectedGender === "MALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="MALE">남자</label>

          <styles.RadioInput
            type="radio"
            name="gender"
            value="FEMALE"
            checked={selectedGender === "FEMALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="FEMALE">여자</label>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>생일</styles.InputTitle>
        <styles.Input>
          <styles.SelectInput
            name="birthdayYear"
            value={birthdayYear}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBirthdayYear(e.target.value)
            }
          >
            <option value="" />
            {createYear()}
          </styles.SelectInput>
          <div>년</div>
          <styles.SelectInput
            name="birthdayMonth"
            value={birthdayMonth}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBirthdayMonth(e.target.value)
            }
          >
            <option value="" />
            {createMonth()}
          </styles.SelectInput>
          <div>월</div>
          <styles.SelectInput
            name="birthdayDay"
            value={birthdayDay}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBirthdayDay(e.target.value)
            }
          >
            <option value="" />
            {createDay()}
          </styles.SelectInput>
          <div>일</div>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>이별한 날짜</styles.InputTitle>
        <styles.Input>
          <styles.SelectInput
            name="farewellYear"
            value={farewellYear}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarewellYear(e.target.value)
            }
          >
            <option value="" />
            {createYear()}
          </styles.SelectInput>
          <div>년</div>
          <styles.SelectInput
            name="farewellMonth"
            value={farewellMonth}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarewellMonth(e.target.value)
            }
          >
            <option value="" />
            {createMonth()}
          </styles.SelectInput>
          <div>월</div>
          <styles.SelectInput
            name="farewellDay"
            value={farewellDay}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarewellDay(e.target.value)
            }
          >
            <option value="" />
            {createDay()}
          </styles.SelectInput>
          <div>일</div>
        </styles.Input>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>좋아하는 것</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="favorite"
          value={selectedFavorites.join(", ")}
          onChange={handleChangeFavorites}
        />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>싫어하는 것</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="hate"
          value={selectedDislike.join(", ")}
          onChange={handleChangeDislike}
        />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.InputTitle>개인기</styles.InputTitle>
        <styles.Textarea
          placeholder="내용을 입력해주세요"
          name="skill"
          value={selectedSkill.join(", ")}
          onChange={handleChangeSkill}
        />
      </styles.InputContainer>
    </styles.TotalInputContainer>
  );
};

export default UpdateComponent;
