import React, { ChangeEvent, useState } from "react";

import SelectEmotionModal from "@components/diaryPage/selectEmotionModal";
import { handleEmotionIcon } from "utils/returnEmotion";

interface DiaryDataProps {
  emotion: string;
  content: string;
}

const WriteDiaryPage: React.FC = () => {
  const [diaryData, setDiaryData] = useState<DiaryDataProps>({
    emotion: "",
    content: "",
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isActive = diaryData.content !== "" && diaryData.emotion !== "";

  const handleEmotionSelect = (emotion: string) => {
    setDiaryData((prev) => ({ ...prev, emotion }));
    handleCloseModal();
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryData((prev) => ({ ...prev, content: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center justify-between w-full px-5 pt-12 h-calc-100vh-100px">
      <div className="flex flex-col items-center w-full">
        <img
          src={handleEmotionIcon(diaryData.emotion)}
          className="w-[120px] mb-[61px]"
          onClick={handleOpenModal}
        />

        <textarea
          placeholder="오늘 하루에 대해 얘기해주세요!"
          value={diaryData.content}
          onChange={handleContent}
          className="px-4 py-3 resize-none bg-black-100 text-sm text-black-700 rounded-xl h-[313px] mb-4 w-full"
        />
      </div>
      <div
        className={`${
          isActive ? "bg-brown-500" : "bg-black-300"
        } w-full px-8 py-3 text-center text-white rounded-xl`}
      >
        일지쓰기
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-modalBack"
          onClick={handleCloseModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <SelectEmotionModal onSelectEmotion={handleEmotionSelect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteDiaryPage;
