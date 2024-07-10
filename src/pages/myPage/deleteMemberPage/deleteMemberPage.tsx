import React, { useState } from "react";

import DeleteModal from "@components/myPage/deleteModal/deleteModal";

import NotSelectedRadio from "@assets/myPage/notSelectedRadio.svg";
import SelectedRadio from "@assets/myPage/selectedRadio.svg";

const DeleteMemberPage: React.FC = () => {
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
      <div className="flex-1 flex flex-col pt-[46px] px-5">
        <div className="text-[#E72F2F] font-semibold text-base mb-2">
          탈퇴 전 꼭 확인해주세요!
        </div>
        <div className="text-[#444444] font-normal text-sm">
          탈퇴하시게 된다면, 모든 데이터가 사라져요! <br />
          브리와 나눴던 대화, 사진, 편지 등등 모든 데이터가 사라집니다.
        </div>

        <div className="flex items-center w-[330px] self-center">
          <img
            src={!isChecked ? NotSelectedRadio : SelectedRadio}
            onClick={handleCheck}
          />
          <div className="text-sm font-medium text-black-700">
            회원탈퇴시, 발생하는 내용을 숙지했어요!
          </div>
        </div>

        <div
          className={`${
            isChecked ? "bg-brown-500" : "bg-black-300"
          } text-white font-semibold text-center p-4 w-[330px] rounded-xl cursor-pointer self-center`}
          onClick={isChecked ? handleModalOpen : undefined}
        >
          탈퇴하기
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          title="정말 탈퇴하시나요?"
          subtitle="탈퇴하면, 모든 데이터가 사라져요"
          handleClose={handleModalClose}
        />
      )}
    </>
  );
};

export default DeleteMemberPage;
