import React, { useState } from "react";

import MailList from "@components/mailBoxPage/mailList";

import styles from "./styles";

import { updateLetter } from "@server/content/api/letter";

import MailIcon from "@assets/mailBoxPage/mailIcon.svg";

interface MailDataProps {
  totalCount: number;
  totalPage: number;
  nodes: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
}

const MyMailPage: React.FC = () => {
  // @ts-ignore
  const [mailData, setMailData] = useState<MailDataProps>({
    totalCount: 0,
    totalPage: 0,
    nodes: [],
  });

  // @ts-ignore
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7;

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  // 편지 상세 뷰 관리 변수
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (letterId: number) => {
    updateLetter(letterId, { isRead: true });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col pt-[46px] px-5 pb-[42px] h-screen">
      <div>
        {mailData && mailData.nodes.length > 0 ? (
          <>
            <MailList
              mailData={mailData.nodes}
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={MailIcon} className="w-16 mb-3" />
            <div className="text-sm font-medium text-black-300">
              아직 사진첩이 비어있어요, <br /> 채팅, 편지쓰기를 통해서 사진을
              얻어봐요!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMailPage;
