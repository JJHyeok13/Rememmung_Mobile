import React, { useState } from "react";

const DiaryPage: React.FC = () => {
  const [diaryData, setDiaryData] = useState();

  return (
    <div>
      {diaryData ? (
        <div></div>
      ) : (
        <div>
          등록된 일기가 없어요! <br /> 같이 작성하러 가볼까요?
        </div>
      )}
    </div>
  );
};

export default DiaryPage;
