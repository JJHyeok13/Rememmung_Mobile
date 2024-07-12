import React, { useState } from "react";

import PhotoContainer from "@components/photoPage/photoContainer/photoContainer";

import { PhotoDataProps } from "type/photoPage/photoPage";

import PhotoIcon from "@assets/photoPage/photoIcon.svg";

import { dummyData } from "./dummyData";
import ImageModal from "@components/photoPage/imageModal/imageModal";

interface Attachment {
  id: number;
  type: string;
  url: string;
  createdAt: string;
}

interface PhotoNode {
  id: number;
  petId: number;
  attachment: Attachment;
}

const PhotoPage: React.FC = () => {
  // @ts-ignore
  const [photoData, setPhotoData] = useState<PhotoDataProps>(dummyData);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = (photo: PhotoNode) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // useEffect(() => {
  //   getPetFile(currentPage, pageSize).then((res) => setPhotoData(res));
  // }, [photoData, currentPage]);

  return (
    <div className="flex flex-col pb-[100px] pt-[35px]">
      <div className="min-h-[450px] px-5 flex flex-col justify-center">
        <div className="pl-2 mb-6 text-xl font-semibold text-black-700">
          사진첩
        </div>
        {photoData && photoData.nodes.length > 0 ? (
          <PhotoContainer
            photoData={photoData.nodes}
            onPhotoClick={handlePhotoClick}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={PhotoIcon} className="w-16 mb-3" />
            <div className="text-sm font-medium text-black-300">
              아직 사진첩이 비어있어요, <br /> 채팅, 편지쓰기를 통해서 사진을
              얻어봐요!
            </div>
          </div>
        )}
      </div>

      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-modalBack"
          onClick={handleCloseModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <ImageModal data={selectedPhoto.attachment} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;