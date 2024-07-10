import React, { useState } from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";

import { PhotoDataProps } from "type/galleryPage/galleryPage";

import GalleryIcon from "@assets/galleryPage/galleryIcon.svg";

import { dummyData } from "./dummyData";
import ImageModal from "@components/galleryPage/imageModal/imageModal";

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

const GalleryPage: React.FC = () => {
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
    <div className="flex flex-col pb-[100px]">
      <div className="min-h-[450px] px-5 flex flex-col justify-center">
        <div className="mb-6 text-xl font-semibold text-black-700">사진첩</div>
        {photoData && photoData.nodes.length > 0 ? (
          <PhotoContainer
            photoData={photoData.nodes}
            onPhotoClick={handlePhotoClick}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={GalleryIcon} className="w-16 mb-3" />
            <div className="text-sm font-medium text-black-300">
              아직 사진첩이 비어있어요, <br /> 채팅, 편지쓰기를 통해서 사진을
              얻어봐요!
            </div>
          </div>
        )}
      </div>

      {isModalOpen && selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <ImageModal data={selectedPhoto.attachment} />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
