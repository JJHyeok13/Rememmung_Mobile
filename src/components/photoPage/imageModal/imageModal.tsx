import React from "react";

import DownloadIcon from "@assets/photoPage/downloadIcon.svg";

interface ImageModalProps {
  data: {
    url: string;
    createdAt: string;
  };
}

const ImageModal: React.FC<ImageModalProps> = ({ data }) => {
  return (
    <div className="px-6 pt-3 bg-white pb-7 rounded-xl">
      <img src={DownloadIcon} className="ml-auto mr-[-16px]" />
      <div className="px-4">
        <img src={data.url} />
        <div className="text-sm font-medium text-center text-black-500 tracking-[-1px]">
          {data.createdAt}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
