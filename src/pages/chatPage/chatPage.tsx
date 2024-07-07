import React, { ChangeEvent, useEffect, useState } from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import styles from "./styles";
import { getChatting, sendChat } from "@server/content/api/chats";
import { ChattingDataProps } from "type/chattingPage/chattingPage";

interface ConfigProps {
  params: {
    page?: number;
    pageSize?: number;
  };
}

const ChatPage: React.FC = () => {
  const [chattingData, setChattingData] = useState<ChattingDataProps>();

  // @ts-ignore
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7;

  // @ts-ignore
  const [config, setConfig] = useState<ConfigProps>({
    params: {
      page: currentPage,
      pageSize: pageSize,
    },
  });

  useEffect(() => {
    getChatting(config).then((res) => setChattingData(res));
  }, [chattingData]);

  // 채팅 입력용 state 변수
  const [content, setContent] = useState<string>("");

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const sendContent = () => {
    const data = {
      content: content,
    };
    sendChat(data);
  };

  return (
    <styles.Container>
      <styles.WhiteBox>
        {chattingData && chattingData.nodes.length > 0 ? (
          <ChatComponent chattingData={chattingData} />
        ) : null}

        <ChattingInput
          content={content}
          handleContent={handleContent}
          sendContent={sendContent}
        />
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default ChatPage;
