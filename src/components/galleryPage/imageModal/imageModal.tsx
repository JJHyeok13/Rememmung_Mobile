import React from "react";

import DownloadIcon from "@assets/galleryPage/downloadIcon.svg";

interface ImageModalProps {
  data: {
    url: string;
    createdAt: string;
  };
}

const ImageModal: React.FC<ImageModalProps> = ({ data }) => {
  return (
    <div className="px-4 pt-3 bg-white pb-7 rounded-xl">
      <img src={DownloadIcon} className="ml-auto" />
      <img src={data.url} />
      <div className="text-sm font-medium text-center text-black-500">
        {data.createdAt}
      </div>
    </div>
  );
};

export default ImageModal;
