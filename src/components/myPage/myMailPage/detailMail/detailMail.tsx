import React, { KeyboardEvent, useEffect } from "react";

import styles from "./styles";

interface DetailMailProps {
  detailData: {
    title: string;
    writer: string;
    content: string[];
  };
  handleClose: () => void;
}

const DetailMail: React.FC<DetailMailProps> = ({ detailData, handleClose }) => {
  useEffect(() => {
    const handleESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleKeyDown = (e: Event) =>
      handleESC(e as unknown as KeyboardEvent);

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <>
      <styles.Background>
        <styles.Container>
          <styles.Letter>
            <styles.Content>
              <styles.Receiver>눈나에게</styles.Receiver>
              <div>
                {detailData.content.map((message, index) => (
                  <div key={index}>{message}</div>
                ))}
              </div>
              <styles.Sender>{detailData.writer}가</styles.Sender>
            </styles.Content>
          </styles.Letter>
          <styles.Button onClick={handleClose}>닫기</styles.Button>
        </styles.Container>
      </styles.Background>
    </>
  );
};

export default DetailMail;
