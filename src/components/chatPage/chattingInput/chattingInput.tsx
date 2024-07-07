import React, { ChangeEvent } from "react";

import SendButtonImage from "../../../assets/chatPage/sendButton.svg";

import styles from "./styles";

interface ChattingInputProps {
  content: string;
  handleContent: (e: ChangeEvent<HTMLInputElement>) => void;
  sendContent: () => void;
}

const ChattingInput: React.FC<ChattingInputProps> = ({
  content,
  handleContent,
  sendContent,
}) => {
  return (
    <styles.Container>
      <styles.StyleInput
        type="text"
        placeholder="브리에게 말을 걸어봐요!"
        value={content}
        onChange={handleContent}
      />
      <styles.SendButton
        src={SendButtonImage}
        alt="전송 버튼"
        onClick={sendContent}
      />
    </styles.Container>
  );
};

export default ChattingInput;
