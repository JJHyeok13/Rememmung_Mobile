import NoIcon from "@assets/diaryPage/noIcon.svg";
import ChuIcon from "@assets/diaryPage/chuIcon.svg";
import NormalIcon from "@assets/diaryPage/normalIcon.svg";
import AngryIcon from "@assets/diaryPage/angryIcon.svg";
import SadIcon from "@assets/diaryPage/sadIcon.svg";
import ExcitingIcon from "@assets/diaryPage/excitingIcon.svg";
import HappyIcon from "@assets/diaryPage/happyIcon.svg";

export const handleEmotionIcon = (emotion: string) => {
  switch (emotion) {
    case "chu":
      return ChuIcon;
    case "normal":
      return NormalIcon;
    case "angry":
      return AngryIcon;
    case "sad":
      return SadIcon;
    case "exciting":
      return ExcitingIcon;
    case "happy":
      return HappyIcon;
    default:
      return NoIcon;
  }
};
