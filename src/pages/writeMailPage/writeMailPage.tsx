import React, { useState } from "react";

import InputContainer from "@components/writeMailPage/inputContainer/inputContainer";
import SelectLetterStyle from "@components/writeMailPage/selectLetterStyle/selectLetterStyle";

import styles from "./styles";
import { writeLetter } from "@server/content/api/letter";
import { useNavigate } from "react-router-dom";

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

  const handleTitle = (title: string) => {
    setLetterData((prev) => ({ ...prev, title }));
  };

  const handleContent = (content: string) => {
    setLetterData((prev) => ({ ...prev, content }));
  };

  const handleWrite = () => {
    writeLetter(letterData);
    navigate("/mailbox");
  };

  return (
    <styles.Container>
      <styles.ElementBox>
        <InputContainer
          letterData={letterData}
          handleTitle={handleTitle}
          handleContent={handleContent}
        />
        <styles.LowerContainer>
          <SelectLetterStyle />
        </styles.LowerContainer>
        <styles.SendButton onClick={handleWrite}>보내기</styles.SendButton>
      </styles.ElementBox>
    </styles.Container>
  );
};

export default WriteMailPage;
