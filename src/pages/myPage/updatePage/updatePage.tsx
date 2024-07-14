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

// import styles from "./styles";
// import UpdateComponent from "@components/myPage/updatePage/updateComponent";
import { getPetInfo } from "@server/user/api/user";
import BackNav from "@layout/backNav/backNav";
// import RadioInputBox from "@components/myPage/updatePage/radioInputBox";
// import TextInputBox from "@components/myPage/updatePage/textInputBox";
// import SelectInputBox from "@components/myPage/updatePage/selectInputBox";
import TextareaBox from "@components/myPage/updatePage/textareaBox";

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

  // const typeItem = [
  //   { id: 1, name: "강아지", value: "dog" },
  //   { id: 2, name: "고양이", value: "cat" },
  // ];

  // const genderItem = [
  //   { id: 1, name: "남자", value: "MALE" },
  //   { id: 2, name: "여자", value: "FEMALE" },
  // ];

  return (
    <div className="flex flex-col pt-2 px-[30px] pb-[100px] justify-between">
      <div>
        <BackNav title="반려동물 정보수정" />

        <div>
          <div>필수정보</div>
          {/* <RadioInputBox
            title="성별"
            items={typeItem}
            handleSetPetInfoGender={handleSetPetInfoGender}
          />

          <TextInputBox
            title="이름"
            placeholder="이름을 입력해주세요"
            handleSetPetInfoName={handleSetPetInfoName}
          /> */}
        </div>

        <div>
          <div>선택정보</div>
          {/* <RadioInputBox
            title="성별"
            items={genderItem}
            handleSetPetInfoGender={handleSetPetInfoGender}
          />

          <SelectInputBox
            title="생일"
            hasCheckBox={false}
            onDateChange={handleSetPetInfoBirthday}
          />

          <SelectInputBox
            title="이별한 날짜"
            hasCheckBox={true}
            checkboxString="아직 이별하지 않았어요"
            onDateChange={handleSetPetInfoFarewellDay}
          /> */}

          <TextareaBox
            title="좋아하는 것"
            placeholder="ex. 분홍색 애착 토끼 인형"
          />

          <TextareaBox title="싫어하는 것" placeholder="ex. 차 소리" />

          <TextareaBox title="개인기" placeholder="ex. 코" />
        </div>
      </div>
    </div>
  );
};
export default UpdatePage;
