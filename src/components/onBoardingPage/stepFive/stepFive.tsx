import React, { useState, useEffect } from "react";
import styles from "./styles";

import { createYear, createMonth, createDay } from "utils/createTime";

interface StepFiveProps {
  selectedGender: string;
  selectedBirthday: string;
  selectedFarewellday: string;
  selectedFavorites: string[];
  selectedDislike: string[];
  selectedSkill: string[];

  setGender: (gender: string) => void;
  setBirthday: (birthday: string) => void;
  setFarewellday: (farewellday: string) => void;
  setFavorites: (favorites: string[]) => void;
  setDislike: (dislike: string[]) => void;
  setSkill: (skill: string[]) => void;

  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const StepFive: React.FC<StepFiveProps> = ({
  selectedGender,
  selectedBirthday,
  selectedFarewellday,
  selectedFavorites,
  selectedDislike,
  selectedSkill,
  setGender,
  setBirthday,
  setFarewellday,
  setFavorites,
  setDislike,
  setSkill,
  handlePrevStep,
  handleSubmit,
}) => {
  const [birthdayYear, setBirthdayYear] = useState<string>("");
  const [birthdayMonth, setBirthdayMonth] = useState<string>("");
  const [birthdayDay, setBirthdayDay] = useState<string>("");

  const [farewellYear, setFarewellYear] = useState<string>("");
  const [farewellMonth, setFarewellMonth] = useState<string>("");
  const [farewellDay, setFarewellDay] = useState<string>("");
  const [noFarewell, setNoFarewell] = useState<boolean>(false);

  useEffect(() => {
    if (selectedBirthday) {
      const [year, month, day] = selectedBirthday.split("T")[0].split("-");
      setBirthdayYear(year);
      setBirthdayMonth(month);
      setBirthdayDay(day);
    }
    if (selectedFarewellday) {
      const [year, month, day] = selectedFarewellday.split("T")[0].split("-");
      setFarewellYear(year);
      setFarewellMonth(month);
      setFarewellDay(day);
    }
  }, [selectedBirthday, selectedFarewellday]);

  // 입력 내용 초기화 함수
  const handleReset = () => {
    setBirthdayYear("");
    setBirthdayMonth("");
    setBirthdayDay("");
    setFarewellYear("");
    setFarewellMonth("");
    setFarewellDay("");
    setNoFarewell(false);
    setGender("");
    setFavorites([]);
    setDislike([]);
    setSkill([]);
  };

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleChangeFavorites = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFavorites(e.target.value.split(", ").map((item) => item.trim()));
  };

  const handleChangeDislike = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDislike(e.target.value.split(", ").map((item) => item.trim()));
  };

  const handleChangeSkill = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkill(e.target.value.split(", ").map((item) => item.trim()));
  };

  const handleNoFarewellChange = () => {
    setNoFarewell(!noFarewell);
    if (!noFarewell) {
      setFarewellYear("");
      setFarewellMonth("");
      setFarewellDay("");
    }
  };

  useEffect(() => {
    if (birthdayYear && birthdayMonth && birthdayDay) {
      setBirthday(`${birthdayYear}-${birthdayMonth}-${birthdayDay}T00:00:00`);
    }
  }, [birthdayYear, birthdayMonth, birthdayDay]);

  useEffect(() => {
    if (farewellYear && farewellMonth && farewellDay) {
      setFarewellday(
        `${farewellYear}-${farewellMonth}-${farewellDay}T00:00:00`
      );
    }
  }, [farewellYear, farewellMonth, farewellDay]);

  return (
    <div className="flex flex-col px-5 mt-14">
      <div className="font-semibold text-lg text-[#51555C] w-fit">
        반려동물의 <br /> 추가정보를 입력해주세요!
      </div>
      <div className="text-sm text-black-400 mb-[42px]">
        선택사항이지만, 대답해주신다면 <br /> 더 정확한 ‘OO’을 만날 수 있어요..
      </div>

      <styles.TotalInputContainer>
        <div
          className={`border-[1px] px-5 py-4 rounded-xl border-[#BFA185]
        `}
        >
          <div className={`text-[#808997] font-semibold text-xs`}>이름</div>
          <input
            type="radio"
            name="gender"
            value="MALE"
            checked={selectedGender === "MALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="male">남자</label>

          <input
            type="radio"
            name="gender"
            value="FEMALE"
            checked={selectedGender === "FEMALE"}
            onChange={handleChangeGender}
          />
          <label htmlFor="female">여자</label>
        </div>

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
          <styles.Wrapper>
            <styles.RadioInput
              type="checkbox"
              name="noFarewell"
              checked={noFarewell}
              onChange={handleNoFarewellChange}
            />
            <styles.LabelText htmlFor="noFarewell">
              아직 이별하지 않았어요
            </styles.LabelText>
          </styles.Wrapper>
          <styles.Input>
            <styles.SelectInput
              name="farewellYear"
              value={farewellYear}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFarewellYear(e.target.value)
              }
              disabled={noFarewell}
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
              disabled={noFarewell}
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
              disabled={noFarewell}
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
    </div>
  );
};

export default StepFive;
