import React, { ChangeEvent, useEffect, useState } from "react";

import SelectLetterStyle from "@components/writeMailPage/selectLetterStyle/selectLetterStyle";

import styles from "./styles";
import { writeLetter } from "@server/content/api/letter";
import { useNavigate } from "react-router-dom";
import MailNavBar from "@components/writeMailPage/mailNavBar/mailNavBar";

interface LetterDataProps {
  title: string;
  content: string;
}

const WriteMailPage: React.FC = () => {
  const navigate = useNavigate();

  const [letterData, setLetterData] = useState<LetterDataProps>({
    title: "",
    content: "",
  });

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLetterData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleWrite = () => {
    writeLetter(letterData);
    navigate("/mailbox");
  };

  useEffect(() => {
    console.log(letterData);
  }, [letterData]);

  return (
    <div className="flex flex-col pt-[46px] px-5 pb-[42px] h-[100vh] justify-between">
      <div className="flex flex-col">
        <MailNavBar />
        <input
          type="text"
          placeholder="제목"
          className="px-4 py-3 mb-3 bg-black-100 text-black-700 rounded-xl"
          value={letterData.title}
          onChange={handleTitle}
        />
        <textarea
          placeholder="내용"
          className="px-4 py-3 resize-none bg-black-100 text-black-700 rounded-xl min-h-[313px] mb-4"
          value={letterData.content}
          onChange={handleContent}
        />
        <styles.LowerContainer>
          <SelectLetterStyle />
        </styles.LowerContainer>
      </div>
      <div>
        <styles.SendButton onClick={handleWrite}>보내기</styles.SendButton>
      </div>
    </div>
  );
};

export default WriteMailPage;
