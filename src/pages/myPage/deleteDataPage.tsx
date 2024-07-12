import React, { useState } from "react";

import DeleteModal from "@components/myPage/deleteModal/deleteModal";

import NotSelectedRadio from "@assets/myPage/notSelectedRadio.svg";
import SelectedRadio from "@assets/myPage/selectedRadio.svg";

const DeleteDataPage: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col pt-[46px] px-5 pb-[100px] h-[100vh] justify-between">
        <div>
          <div className="text-[#E72F2F] font-semibold text-base mb-2">
            데이터 삭제 전 꼭 읽어주세요!
          </div>
          <div className="text-[#444444] font-normal text-sm">
            데이터를 삭제하시면, 회원은 유지되지만 <br />
            브리와 나눴던 대화, 사진, 편지 등등 모든 데이터가 사라집니다.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center w-[330px] self-center">
            <img
              src={!isChecked ? NotSelectedRadio : SelectedRadio}
              onClick={handleCheck}
            />
            <div className="text-sm font-medium text-black-700">
              데이터 삭제시, 발생하는 내용을 숙지했어요!
            </div>
          </div>
          <div
            className={`${
              isChecked ? "bg-brown-500" : "bg-black-300"
            } text-white font-semibold text-center p-4 w-[330px] rounded-xl cursor-pointer self-center`}
            onClick={isChecked ? handleModalOpen : undefined}
          >
            데이터 삭제하기
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          title="데이터를 삭제하시겠습니까?"
          subtitle="삭제된 데이터는 복구할 수 없어요"
          handleClose={handleModalClose}
        />
      )}
    </>
  );
};

export default DeleteDataPage;
