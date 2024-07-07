import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MailList from "@components/mailBoxPage/mailList/mailList";
import Pagination from "@components/common/pagination/pagination";
import SearchBar from "@components/mailBoxPage/searchBar/searchBar";

import styles from "./styles";

import { getLetterList, updateLetter } from "@server/content/api/letter";

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
  const navigate = useNavigate();

  // @ts-ignore
  const [mailData, setMailData] = useState<MailDataProps>({
    totalCount: 0,
    nodes: [],
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7;

  // @ts-ignore
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(mailData.totalCount / pageSize)
  );

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

  useEffect(() => {
    getLetterList(config).then((res) => setMailData(res));
  }, [config, currentPage]);

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const ToWritePage = () => {
    navigate("/write");
  };

  const OnDeleteMode = () => {
    setIsDeleteMode(true);
  };

  const OffDeleteMode = () => {
    setIsDeleteMode(false);
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
    <styles.Container>
      <styles.ElementBox>
        {mailData && mailData.nodes.length > 0 ? (
          <>
            <MailList
              mailData={mailData.nodes}
              isDeleteMode={isDeleteMode}
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <Pagination
              currentPage={currentPage}
              handlePage={handlePage}
              totalPage={totalPage}
            />
          </>
        ) : (
          <styles.NoData>데이터가 존재하지 않습니다.</styles.NoData>
        )}
      </styles.ElementBox>
      <styles.LowerContainer>
        <SearchBar />
        <styles.ButtonContainer>
          {!isDeleteMode ? (
            <>
              <styles.WriteButton onClick={ToWritePage}>
                편지쓰기
              </styles.WriteButton>
              <styles.DeleteButton onClick={OnDeleteMode}>
                삭제
              </styles.DeleteButton>
            </>
          ) : (
            <>
              <styles.WriteButton onClick={OffDeleteMode}>
                취소
              </styles.WriteButton>
              <styles.DeleteButton>삭제</styles.DeleteButton>
            </>
          )}
        </styles.ButtonContainer>
      </styles.LowerContainer>
    </styles.Container>
  );
};

export default MailBoxPage;
