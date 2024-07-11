import React, { ChangeEvent, useState } from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import Background from "@assets/chatPage/back.svg";
import Profile from "@assets/chatPage/profile.svg";

import ChatIcon from "@assets/chatPage/chatIcon.svg";

import { ChattingDataProps } from "type/chattingPage/chattingPage";
import { dummyData } from "./dummyData";

const ChatPage: React.FC = () => {
  // @ts-ignore
  const [chattingData, setChattingData] =
    useState<ChattingDataProps>(dummyData);

  // 채팅 입력용 state 변수
  const [content, setContent] = useState<string>("");

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div
      className={` ${
        chattingData === null && "h-calc-100vh-100px"
      } "flex flex-col pb-[100px] justify-between"`}
    >
      <div className="bg-[#C4AE99] w-full h-[238px] rounded-b-[40px] relative flex items-center justify-center">
        <img src={Background} className="absolute" />
        <img src={Profile} />
      </div>

      <div className="flex justify-center w-full px-5">
        {chattingData && chattingData.nodes.length > 0 ? (
          <ChatComponent chattingData={chattingData} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={ChatIcon} className="w-16 mb-3" />
            <div className="text-sm font-medium text-black-300">
              브리와 역사적인 대화를 시작해보세요!
            </div>
          </div>
        )}
      </div>

      <ChattingInput content={content} handleContent={handleContent} />
    </div>
  );
};

export default ChatPage;
