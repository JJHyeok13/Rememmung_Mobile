import React, { useState } from "react";

import DetailMail from "../detailMail/detailMail";

import styles from "./styles";

interface MailListProps {
  isDeleteMode: boolean;
  mailData: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
  isOpen: boolean;
  handleOpen: (letterId: number) => void;
  handleClose: () => void;
}

const MailList: React.FC<MailListProps> = ({
  isDeleteMode,
  mailData,
  isOpen,
  handleOpen,
  handleClose,
}) => {
  const [selectedMail, setSelectedMail] = useState(null);

  const handleMailClick = (mail: any) => {
    setSelectedMail(mail);
    handleOpen(mail.id);
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

        <tbody>
          {mailData.map((mail) => (
            <tr key={mail.id}>
              <styles.CheckBox>
                <styles.StyleInput
                  type="checkbox"
                  $isDeleteMode={isDeleteMode}
                />
              </styles.CheckBox>
              <styles.TitleData>
                <styles.Title onClick={() => handleMailClick(mail)}>
                  {mail.title}
                </styles.Title>
              </styles.TitleData>
              <styles.OtherData>{mail.from}</styles.OtherData>
              <styles.OtherData>{mail.createdAt}</styles.OtherData>
            </tr>
          ))}
        </tbody>
      </styles.Table>
      {isOpen && selectedMail && (
        <DetailMail detailData={selectedMail} handleClose={handleClose} />
      )}
    </>
  );
};

export default MailList;
