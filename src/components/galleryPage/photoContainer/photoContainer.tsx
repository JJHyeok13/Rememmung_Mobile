import React, { useState } from "react";

import styles from "./styles";

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
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ photoData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <styles.Container>
      {photoData.map((photo, index) => (
        <styles.PhotoContainer
          key={photo.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index && (
            <styles.HoveredData>
              <styles.Title>{photo.attachment.createdAt}</styles.Title>
            </styles.HoveredData>
          )}
          <styles.Photo src={photo.attachment.url} />
        </styles.PhotoContainer>
      ))}
    </styles.Container>
  );
};

export default PhotoContainer;
