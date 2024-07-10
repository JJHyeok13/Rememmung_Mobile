import React from "react";

interface PhotoContainerProps {
  photoData: {
    id: number;
    petId: number;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
  }[];
  onPhotoClick: (photo: {
    id: number;
    petId: number;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
  }) => void;
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({
  photoData,
  onPhotoClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {photoData.map((photo) => (
        <div
          key={photo.id}
          className="w-40 shadow-imageBack rounded-xl"
          onClick={() => onPhotoClick(photo)}
        >
          <img src={photo.attachment.url} className="w-40" />
        </div>
      ))}
    </div>
  );
};

export default PhotoContainer;
