import styled from "styled-components";

const styles = {
  Container: styled.div`
    width: 96%;
    max-height: 100%;
    overflow-y: auto;

    margin: 16px 16px 32px 12px;

    border-radius: 12px;
    z-index: 2;
  `,
  ChattingContainer: styled.div<{ $isMe: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.$isMe ? "flex-end" : "flex-start")};
    margin: 10px 0;
  `,
  PetProfile: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  `,
  PetImage: styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
  `,
  PetName: styled.div`
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
  `,
  Message: styled.div<{ $isMe: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.$isMe ? "row-reverse" : "row")};
    align-items: flex-end;
    padding: 0 16px;
  `,
  MessageBubble: styled.div<{ $isMe: boolean }>`
    display: flex;
    padding: 12px 16px;

    // true: 사용자 / false: 애완동물
    background-color: ${(props) => (props.$isMe ? "#946233" : "#D3D3D3")};
    color: ${(props) => (props.$isMe ? "#FFFFFF" : "#3E3E3E")};
    border-radius: ${(props) =>
      props.$isMe ? "16px 0 16px 16px;" : "0 16px 16px 16px;"};
    max-width: fit-content;
    margin: ${(props) => (props.$isMe ? "0 0 0 4px" : "0 4px 0 0")};

    font-size: 14px;
    font-weight: 500;
  `,
  Timestamp: styled.div`
    font-size: 10px;
    font-weight: 400;
    color: #e0e0e0;
  `,
  VideoFile: styled.video`
    width: 100px;
    height: auto;
    border-radius: 5px;
  `,
};

export default styles;
