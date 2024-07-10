import React from "react";
import styles from "./styles";

interface StepThreeProps {
  selectedCharacter: string[];
  setPetCharacter: (personality: string[]) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  selectedCharacter,
  setPetCharacter,
  handleNextStep,
}) => {
  const characters = [
    { id: "energetic", name: "☺️활발해요" },
    { id: "playful", name: "☺️장난끼가 많아요" },
    { id: "timid", name: "☺️겁이 많아요" },
    { id: "lonely", name: "☺️외로움을 많이 타요" },
    { id: "shy", name: "☺️소심해요" },
    { id: "stroller", name: "☺️산책을 좋아해요" },
    { id: "foodie", name: "☺️먹는걸 좋아해요" },
    { id: "friendly", name: "☺️친구를 좋아해요" },
    { id: "solitary", name: "☺️혼자 있는걸 좋아해요" },
    { id: "swimmer", name: "☺️수영하는걸 좋아해요" },
  ];

  const isInputComplete = selectedCharacter.length > 0;

  const disableButtonClick = () => {
    alert("성격을 선택해주세요!");
  };

  const handleCharacterChange = (character: string) => {
    if (selectedCharacter.includes(character)) {
      setPetCharacter(selectedCharacter.filter((c) => c !== character));
    } else {
      setPetCharacter([...selectedCharacter, character]);
    }
  };

  return (
    <div className="flex flex-col px-5 mt-14">
      <div className="font-semibold text-lg text-[#51555C] w-fit mb-8">
        반려동물의 <br /> 성격을 선택해주세요!
      </div>

      <div className="flex flex-wrap">
        {characters.map((character) => (
          <React.Fragment key={character.id}>
            <styles.Option
              type="checkbox"
              id={character.id}
              name="petCharacter"
              value={character.id}
              checked={selectedCharacter.includes(character.id)}
              onChange={() => handleCharacterChange(character.id)}
            />
            <styles.Label htmlFor={character.id}>
              <span>{character.name}</span>
            </styles.Label>
          </React.Fragment>
        ))}
      </div>

      <div
        className={`${
          isInputComplete ? "bg-[#946233]" : "bg-[#B9BBC2]"
        } text-white text-center p-4 w-[330px] rounded-xl cursor-pointer self-center`}
        onClick={isInputComplete ? handleNextStep : disableButtonClick}
      >
        다음
      </div>
    </div>
  );
};

export default StepThree;
