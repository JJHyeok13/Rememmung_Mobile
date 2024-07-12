import React, { useState } from "react";

import MailList from "@components/mailBoxPage/mailList/mailList";

import styles from "./styles";
import MailNavBar from "@components/writeMailPage/mailNavBar/mailNavBar";
import { dummyData } from "./dummyData";

// import { getLetterList, updateLetter } from "@server/content/api/letter";

interface MailDataProps {
  totalCount: number;
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

interface ConfigProps {
  params: {
    page?: number;
    pageSize?: number;
    letterFilter: string;
    titleQuery?: string;
    contentQuery?: string;
    startData?: string;
    endDate?: string;
  };
}

const MailBoxPage: React.FC = () => {
  // @ts-ignore
  const [mailData, setMailData] = useState<MailDataProps>(dummyData);
  // @ts-ignore
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7;

  // @ts-ignore
  const [totalPage, setTotalPage] = useState<number>(10);

  // @ts-ignore
  const [config, setConfig] = useState<ConfigProps>({
    params: {
      page: currentPage,
      pageSize: pageSize,
      letterFilter: "ALL",
      titleQuery: "",
      contentQuery: "",
      startData: "",
      endDate: "",
    },
  });

  // useEffect(() => {
  //   getLetterList(config).then((res) => setMailData(res));
  // }, [config, currentPage]);

  // const handlePage = (num: number) => {
  //   setCurrentPage(num);
  // };

  // 편지 상세 뷰 관리 변수
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // @ts-ignore
  const handleOpen = (letterId: number) => {
    //updateLetter(letterId, { isRead: true });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col pt-[46px] px-5 pb-[42px] h-[100vh]">
      <MailNavBar />
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
          <styles.NoData>데이터가 존재하지 않습니다.</styles.NoData>
        )}
      </div>
    </div>
  );
};

export default MailBoxPage;
