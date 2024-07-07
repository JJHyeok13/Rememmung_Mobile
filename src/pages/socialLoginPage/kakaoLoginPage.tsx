import React, { useEffect, useState } from "react";
import { getKakaoToken, kakaoLogin } from "@server/user/api/oauth";
import { useNavigate } from "react-router-dom";

import styles from "./styles";

import { HashLoader } from "react-spinners";
import { useRecoilState } from "recoil";
import { loggedInState } from "recoil/recoil";

const KakaoLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [kakaoToken, setKakaoToken] = useState("");

  const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  const [, setIsLoggedIn] = useRecoilState(loggedInState);

  useEffect(() => {
    const fetchKakaoToken = async () => {
      try {
        if (code) {
          setLoading(true);
          const res = await getKakaoToken(client_id, redirect_uri, code);
          // 카카오 토큰 값 저장
          setKakaoToken(res.access_token);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchKakaoToken();
  }, [code, client_id, redirect_uri]);

  useEffect(() => {
    const getCookie = async () => {
      try {
        if (kakaoToken) {
          setLoading(true);
          const res = await kakaoLogin(kakaoToken);

          setIsLoggedIn(true);
          if (res.existed) {
            navigate(`/main`);
          } else {
            navigate(`/onboarding`);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCookie();
  }, [kakaoToken, navigate]);

  return (
    <styles.Container>
      <HashLoader size="120px" color="#0075ff" loading={loading} />
    </styles.Container>
  );
};

export default KakaoLoginPage;
