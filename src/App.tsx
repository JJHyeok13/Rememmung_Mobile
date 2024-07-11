import BasicLayout from "./layout/BasicLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
// import "./App.css";

//import useBodyOverflowHidden from "@hooks/useBodyOverflowHidden";

import StartPage from "./pages/startPage/startPage";
import KakaoLoginPage from "@pages/socialLoginPage/kakaoLoginPage";
import OnBoardingPage from "./pages/onBoardingPage/onBoardingPage";

import ChatPage from "./pages/chatPage/chatPage";
import GalleryPage from "./pages/galleryPage/galleryPage";
import WriteMailPage from "./pages/writeMailPage/writeMailPage";
import MailBoxPage from "./pages/mailBoxPage/mailBoxPage";

import MyMailPage from "@pages/myPage/myMailPage/myMailPage";
import UpdatePage from "@pages/myPage/updatePage/updatePage";
import DeleteDataPage from "@pages/myPage/deleteDataPage/deleteDataPage";
import DeleteMemberPage from "@pages/myPage/deleteMemberPage/deleteMemberPage";
import MyPage from "@pages/myPage/myPage";
import Layout from "@layout/layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<StartPage />} />

        <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />

        <Route element={<Layout />}>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/write" element={<WriteMailPage />} />
          <Route path="/mailbox" element={<MailBoxPage />} />
        </Route>

        <Route element={<BasicLayout />}>
          <Route path="/gallery" element={<GalleryPage />} />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mymail" element={<MyMailPage />} />
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
