import React, { useState } from "react";

import styles from "./styles";
import DetailMail from "../detailMail/detailMail";

interface MailListProps {
  isDeleteMode: boolean;
  mailData: {
    id: number;
    title: string;
    writer: string;
    createdAt: string;
  }[];
}

const MailList: React.FC<MailListProps> = ({ isDeleteMode, mailData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // @ts-ignore
  const [detailData, setDetailData] = useState({
    title: "요즘엔 어떤 노래 들어어~?",
    writer: "브리",
    content: [
      "눈나 잘 지내?",
      "여기는 요즘 엄청 날씨가 좋아!!",
      "눈나 있는 곳은 어때? 거기도 날씨가 좋았으면 좋겠다아...",
      "꽃도 많이 보고 나비도 꼭 봐아! 난 요즘 나비를 따라다니고 있어!",
      "나비를 따라가면 세상 어디든 다 갈 수 있는 거 같아~!!!",
    ],
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <styles.Table>
        <thead>
          <tr>
            <styles.TableHeader></styles.TableHeader>
            <styles.TableHeader>제목</styles.TableHeader>
            <styles.TableHeader>보낸이</styles.TableHeader>
            <styles.TableHeader>날짜</styles.TableHeader>
          </tr>
        </thead>

        {mailData.map((mail) => (
          <tbody key={mail.id}>
            <tr>
              <styles.CheckBox>
                <styles.StyleInput
                  type="checkbox"
                  isDeleteMode={isDeleteMode}
                />
              </styles.CheckBox>
              <styles.TitleData>
                <styles.Title onClick={handleClick}>{mail.title}</styles.Title>
              </styles.TitleData>
              <styles.OtherData>{mail.writer}</styles.OtherData>
              <styles.OtherData>{mail.createdAt}</styles.OtherData>
            </tr>
          </tbody>
        ))}
      </styles.Table>

      {isOpen && (
        <DetailMail detailData={detailData} handleClose={handleClose} />
      )}
    </>
  );
};

export default MailList;
