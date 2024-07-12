import React, { useState } from "react";
import { dummyData } from "./dummyData";
import DiaryContainer from "@components/diaryPage/diaryContainer";
import { useNavigate } from "react-router-dom";

const DiaryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleWritePage = () => {
    navigate(`/writediary`);
  };

  // @ts-ignore
  const [diaryData, setDiaryData] = useState(dummyData);

  return (
    <div className="flex flex-col items-center justify-between px-5 pt-10 h-calc-100vh-100px">
      {diaryData && diaryData.nodes.length > 0 ? (
        <DiaryContainer diaryData={diaryData.nodes} />
      ) : (
        <div>
          등록된 일기가 없어요! <br /> 같이 작성하러 가볼까요?
        </div>
      )}
      <div
        className="font-semibold text-sm bg-brown-500 text-white px-10 py-[14px] rounded-[39px]"
        onClick={handleWritePage}
      >
        일기쓰기
      </div>
    </div>
  );
};

export default DiaryPage;
