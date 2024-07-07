import React from "react";

import styles from "./styles";

interface InputConatinerProps {
  letterData: {
    title: string;
    content: string;
  };
  handleTitle: (title: string) => void;
  handleContent: (content: string) => void;
}

const InputContainer: React.FC<InputConatinerProps> = ({
  letterData,
  handleTitle,
  handleContent,
}) => {
  return (
    <styles.Container>
      <styles.TitleInput
        type="text"
        placeholder="제목"
        value={letterData.title}
        onChange={(e) => handleTitle(e.target.value)}
      />
      <styles.ContentInput
        placeholder="내용"
        value={letterData.content}
        onChange={(e) => handleContent(e.target.value)}
      />
    </styles.Container>
  );
};

export default InputContainer;
