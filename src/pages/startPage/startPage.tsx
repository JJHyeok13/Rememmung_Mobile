import React from "react";
import KakaoLoginImage from "@assets/startPage/kakaoButton.svg";

const StartPage: React.FC = () => {
  const handleKakaoLogin = (kakaoLoginURL: string) => {
    window.location.href = kakaoLoginURL;
  };

  const kakao_client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const kakao_redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_client_id}&redirect_uri=${kakao_redirect_uri}`;

  return (
    <div className="flex flex-col h-screen bg-startPage">
      <div className="flex flex-col items-center justify-center h-screen bg-dimmed">
        <div className="flex flex-col text-center pb-[100px]">
          <div className="text-2xl font-bold text-white">
            당신의 소중한 기억들을 <br /> 리멤멍이 함께할게요!
          </div>
          <div className="text-[#C3C3C3] font-normal text-sm">
            리멤멍은 생성형 AI를 활용한 <br /> 반려동물 추억 기록 서비스입니다.
          </div>
        </div>

        <img
          src={KakaoLoginImage}
          onClick={() => handleKakaoLogin(kakaoLoginURL)}
        />
      </div>
    </div>
  );
};

export default StartPage;
