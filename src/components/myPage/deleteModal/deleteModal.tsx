import React, { useEffect } from "react";

import styles from "./styles";

interface DeleteModalProps {
  title: string;
  subtitle: string;
  handleClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  title,
  subtitle,
  handleClose,
}) => {
  useEffect(() => {
    // 모달이 열리면 뒤쪽의 스크롤을 막음
    document.body.style.overflow = "hidden";
    // 컴포넌트가 언마운트될 때 스타일 제거하여 스크롤이 다시 활성화되도록 함
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-modalBack">
      <div className="w-[304px] bg-white flex flex-col items-center px-10 py-8 rounded-xl">
        <div className="flex flex-col mb-5">
          <div className="text-base font-semibold text-[#51555C] text-center mb-1">
            {title}
          </div>
          <div className="text-xs font-medium text-[#808997] text-center">
            {subtitle}
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div
            className="text-sm font-semibold text-[#ACADB4] bg-[#E6E6E6] px-10 py-[14px] rounded-lg"
            onClick={handleClose}
          >
            취소
          </div>
          <div
            className="text-sm font-semibold text-white bg-brown-500 px-10 py-[14px] rounded-lg"
            onClick={handleClose}
          >
            삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
