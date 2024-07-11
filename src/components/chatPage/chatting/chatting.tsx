import React, { useRef, useEffect } from "react";
import styles from "./styles";
import PetProfileImage from "@assets/chatPage/little.svg";

interface ChatComponentProps {
  chattingData: {
    totalCount: number;
    nodes: {
      id: number;
      chatRoomId: number;
      userId: string | null;
      content: string;
      attachment: {
        id: number;
        type: string;
        url: string;
        createdAt: string;
      };
      createdAt: string;
    }[];
  };
}

const ChatComponent: React.FC<ChatComponentProps> = ({ chattingData }) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // 함수 컴포넌트 내부에서 마운트나 업데이트 시 스크롤을 제일 하단으로 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  const renderMessageContent = (chat: any) => {
    const { type, url } = chat.attachment;

    switch (type) {
      case "text":
        return <div>{chat.content}</div>;
      case "image":
        return <img src={url} alt="Chat Image" />;
      case "video":
        return (
          <styles.VideoFile controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </styles.VideoFile>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full" ref={chatContainerRef}>
      {chattingData.nodes.map((chat) => (
        <div
          key={chat.id}
          className={`flex flex-col my-[10px] ${
            !!chat.userId ? "items-end" : "items-start"
          }`}
        >
          {/* 애완동물 프로필사진 및 이름 */}
          {chat.userId === null && (
            <div className="flex items-center mb-[6px]">
              <img src={PetProfileImage} className="w-6 mr-2 rounded-full" />
              <div className="text-sm font-medium text-black-600">
                {chat.userId ? "" : `브리`}
              </div>
            </div>
          )}

          {/* 채팅 메시지 및 시간 */}
          <div
            className={`flex items-end ${
              !!chat.userId ? "flex-row-reverse" : "flex-row px-4"
            }`}
          >
            <div
              className={`flex px-4 py-3 max-w-fit text-sm font-medium ${
                !!chat.userId
                  ? "bg-brown-500 text-white rounded-2xl rounded-tr-none ml-1"
                  : "bg-[#D3D3D3] text-black-700 rounded-2xl rounded-tl-none mr-1"
              }`}
            >
              {renderMessageContent(chat)}
            </div>

            <div className="text-[10px] text-black-300 font-normal">
              {chat.createdAt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
