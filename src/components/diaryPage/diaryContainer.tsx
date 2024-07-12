import React from "react";
import { handleEmotionIcon } from "utils/returnEmotion";

interface DiaryContainerProps {
  diaryData: {
    id: number;
    emotion: string;
    content: string;
    createdAt: string;
  }[];
}

const DiaryContainer: React.FC<DiaryContainerProps> = ({ diaryData }) => {
  return (
    <div className="grid grid-cols-2 gap-12">
      {diaryData.map((diary) => (
        <div
          key={diary.id}
          className="flex flex-col justify-center items-center font-['YangJin'] text-[10px] font-normal text-black-500"
        >
          <div className="mb-[10px]">{diary.createdAt}</div>
          <img src={handleEmotionIcon(diary.emotion)} />
        </div>
      ))}
    </div>
  );
};

export default DiaryContainer;
