import React, { ChangeEvent, useState } from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import styles from "./styles";
import { ChattingDataProps } from "type/chattingPage/chattingPage";
import { dummyData } from "./dummyData";

const ChatPage: React.FC = () => {
  const [chattingData, setChattingData] =
    useState<ChattingDataProps>(dummyData);

  // 채팅 입력용 state 변수
  const [content, setContent] = useState<string>("");

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <styles.Container>
      <styles.WhiteBox>
        {chattingData && chattingData.nodes.length > 0 ? (
          <ChatComponent chattingData={chattingData} />
        ) : null}

        <ChattingInput content={content} handleContent={handleContent} />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default ChatPage;
