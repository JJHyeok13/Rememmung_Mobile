import React from "react";
import { Link } from "react-router-dom";

import RightArrow from "@assets/myPage/rightArrow.svg";

const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col pb-[100px]">
      <div className="min-h-[450px] px-5 flex flex-col pt-[29px]">
        <div className="pl-2 mb-6 text-xl font-semibold text-black-700">
          마이페이지
        </div>

        <div className="p-4 border-[1px] border-[#F1F2F4] rounded-xl">
          <Link
            to="/mymail"
            className="flex justify-between pb-3 border-b-[1px] border-[#F1F2F4]"
          >
            <div className="text-[#51555c] font-medium text-sm">
              내가 쓴 편지
            </div>
            <img src={RightArrow} />
          </Link>

          <Link
            to="/update"
            className="flex justify-between py-3 border-b-[1px] border-[#F1F2F4]"
          >
            <div className="text-[#51555c] font-medium text-sm">
              반려동물 정보수정
            </div>
            <img src={RightArrow} />
          </Link>

          <Link
            to="/deletedata"
            className="flex justify-between py-3 border-b-[1px] border-[#F1F2F4]"
          >
            <div className="text-[#51555c] font-medium text-sm">
              데이터 삭제
            </div>
            <img src={RightArrow} />
          </Link>

          <Link to="/delete" className="flex justify-between pt-3">
            <div className="text-[#51555c] font-medium text-sm">회원탈퇴</div>
            <img src={RightArrow} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
