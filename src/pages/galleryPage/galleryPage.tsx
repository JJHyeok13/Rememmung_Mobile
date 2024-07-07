import React, { useEffect, useState } from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";
import Pagination from "@components/common/pagination/pagination";

import styles from "./styles";
import { getPetFile } from "@server/content/api/pet_attachment";
import { PhotoDataProps } from "type/galleryPage/galleryPage";

const GalleryPage: React.FC = () => {
  // @ts-ignore
  const [photoData, setPhotoData] = useState<PhotoDataProps>({
    totalCount: 0,
    nodes: [],
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // @ts-ignore
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(photoData.totalCount / pageSize)
  );

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    getPetFile(currentPage, pageSize).then((res) => setPhotoData(res));
  }, [photoData, currentPage]);

  return (
    <styles.Container>
      <styles.WhiteBox>
        {photoData && photoData.nodes.length > 0 ? (
          <>
            <PhotoContainer photoData={photoData.nodes} />
            <Pagination
              currentPage={currentPage}
              handlePage={handlePage}
              totalPage={totalPage}
            />
          </>
        ) : (
          <styles.NoData>데이터가 존재하지 않습니다.</styles.NoData>
        )}
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default GalleryPage;
