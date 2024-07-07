import React from "react";
import KakaoLoginImage from "@assets/startPage/kakaoButton.svg";

import styles from "./styles";
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/main`);
  };

  // const kakao_client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  // const kakao_redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_client_id}&redirect_uri=${kakao_redirect_uri}`;

  return (
    <styles.Background>
      <styles.Title>당신의 소중한 기억들을</styles.Title>
      <b>
        <styles.Title>리멤멍이 함께할게요!</styles.Title>
      </b>
      <styles.Subtitle>리멤멍은 생성형 AI를 활용한</styles.Subtitle>
      <styles.Subtitle>반려동물 추억 기록 서비스입니다.</styles.Subtitle>

      <styles.ButtonContainer>
        {/* <a href={kakaoLoginURL}> */}
        <styles.Button src={KakaoLoginImage} onClick={handleNext} />
        {/* </a> */}
      </styles.ButtonContainer>
    </styles.Background>
  );
};

export default StartPage;
