import html2canvas from "html2canvas";

export const onCapture = () => {
  // html2canvas에서 html에서 캡처를 할 tag를 매개변수로 넣어주면 canvas를 담아 Promise 객체를 반환
  // 캔버스를 이미지 형태로 리턴하여 id가 imageWrapper인 tag를 감싸게 된다.
  html2canvas(document.getElementById("imageWrapper") as HTMLElement).then(
    (canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "karina.png");
    }
  );
};

// a 태그를 돔에 삽입하고 매개변수인 uri에 canvas를 집어넣어 canvas 자체를 다운로드(캡처)받는다.
const onSaveAs = (uri: string, filename: string) => {
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = uri;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
};
