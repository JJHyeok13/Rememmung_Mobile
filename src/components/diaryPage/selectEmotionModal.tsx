import React from "react";

import ChuIcon from "@assets/diaryPage/chuIcon.svg";
import NormalIcon from "@assets/diaryPage/normalIcon.svg";
import AngryIcon from "@assets/diaryPage/angryIcon.svg";
import SadIcon from "@assets/diaryPage/sadIcon.svg";
import ExcitingIcon from "@assets/diaryPage/excitingIcon.svg";
import HappyIcon from "@assets/diaryPage/happyIcon.svg";

interface SelectEmotionModalProps {
  onSelectEmotion: (emotion: string) => void;
}

const SelectEmotionModal: React.FC<SelectEmotionModalProps> = ({
  onSelectEmotion,
}) => {
  const emotionItems = [
    { id: 1, value: "chu", icon: ChuIcon },
    { id: 2, value: "normal", icon: NormalIcon },
    { id: 3, value: "angry", icon: AngryIcon },
    { id: 4, value: "sad", icon: SadIcon },
    { id: 5, value: "exciting", icon: ExcitingIcon },
    { id: 6, value: "happy", icon: HappyIcon },
  ];

  return (
    <div className="px-4 py-6 bg-white rounded-xl">
      <div className="mb-2 text-sm font-semibold text-center text-black-700">
        오늘 하루를 나타내는 <br /> 감정 이모지를 선택해주세요!
      </div>
      <div className="grid grid-cols-3 gap-1">
        {emotionItems.map((emotion) => (
          <div key={emotion.id} onClick={() => onSelectEmotion(emotion.value)}>
            <img src={emotion.icon} className="w-24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectEmotionModal;
