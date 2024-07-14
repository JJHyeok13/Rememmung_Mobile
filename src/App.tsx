import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import StartPage from "./pages/startPage/startPage";

import KakaoLoginPage from "@pages/socialLoginPage/kakaoLoginPage";
// import OnBoardingPage from "./pages/onBoardingPage/onBoardingPage";

import OnboardingOnePage from "@pages/onBoardingPage/onBoardingOne";
import OnboardingTwoPage from "@pages/onBoardingPage/onBoardingTwo";
import OnboardingThreePage from "@pages/onBoardingPage/onBoardingThree";
import OnboardingFourPage from "@pages/onBoardingPage/onBoardingFour";
import OnboardingFivePage from "@pages/onBoardingPage/onBoardingFive";

import LoadingPage from "@pages/onBoardingPage/loadingPage";

import Layout from "@layout/layout";

import ChatPage from "@pages/chatPage/chatPage";

import PhotoPage from "@pages/photoPage/photoPage";

import WriteMailPage from "@pages/mailPage/writeMailPage";
import MailBoxPage from "@pages/mailPage/mailBoxPage";

import DiaryPage from "@pages/diaryPage/diaryPage";
import WriteDiaryPage from "@pages/diaryPage/writeDiaryPage";

import MyPage from "@pages/myPage/myPage";
// import MyMailPage from "@pages/myPage/myMailPage/myMailPage";
import UpdatePage from "@pages/myPage/updatePage/updatePage";
import DeleteDataPage from "@pages/myPage/deleteDataPage";
import DeleteMemberPage from "@pages/myPage/deleteMemberPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<StartPage />} />

        <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
        {/* <Route path="/onboarding" element={<OnBoardingPage />} /> */}

        <Route path="/onboard1" element={<OnboardingOnePage />} />
        <Route path="/onboard2" element={<OnboardingTwoPage />} />
        <Route path="/onboard3" element={<OnboardingThreePage />} />
        <Route path="/onboard4" element={<OnboardingFourPage />} />
        <Route path="/onboard5" element={<OnboardingFivePage />} />
        <Route path="/loading" element={<LoadingPage />} />

        <Route element={<Layout />}>
          {/* 채팅 페이지 */}
          <Route path="/chat" element={<ChatPage />} />

          {/* 사진 관련 페이지 */}
          <Route path="/photo" element={<PhotoPage />} />

          {/* 편지 관련 페이지 */}
          <Route path="/write" element={<WriteMailPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />

          {/* 일지 관련 페이지 */}
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/writediary" element={<WriteDiaryPage />} />

          {/* 마이 페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path="/mymail" element={<MyMailPage />} /> */}
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/deletedata" element={<DeleteDataPage />} />
          <Route path="/delete" element={<DeleteMemberPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
