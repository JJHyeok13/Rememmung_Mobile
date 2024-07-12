import React, { ChangeEvent } from "react";

import SendButtonImage from "@assets/chatPage/sendButton.svg";

interface ChattingInputProps {
  content: string;
  handleContent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChattingInput: React.FC<ChattingInputProps> = ({
  content,
  handleContent,
}) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="브리에게 말을 걸어봐요!"
        value={content}
        onChange={handleContent}
        className="w-[290px] px-4 py-3 text-sm font-medium text-black-700 bg-[#F1F1F1] rounded-lg mr-1"
      />
      <img src={SendButtonImage} alt="전송 버튼" className="p-2" />
    </div>
  );
};

export default ChattingInput;
