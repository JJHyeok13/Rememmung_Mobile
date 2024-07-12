import React, { useEffect } from "react";

import FlyDog from "@assets/onBoardingPage/flyDog.svg";
import { useNavigate } from "react-router-dom";

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/chat");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col pl-5 pt-14">
      <div className="pl-2 mb-20 text-lg font-semibold text-[#51555C]">
        브리가
        <br />
        리멤멍으로 날아오고 있어요!
      </div>
      <img src={FlyDog} />
    </div>
  );
};

export default LoadingPage;
