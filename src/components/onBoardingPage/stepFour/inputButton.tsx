import React from "react";
import styled from "styled-components";

import { FaCirclePlus } from "react-icons/fa6";

interface InputButtonProps {
  description: string;
  imageUrl?: string;
}

const Container = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #e8e8eb;
  font-size: 14px;
  color: #8a8e99;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoDisplayInput = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  text-align: center;
`;

const StyleIcon = styled(FaCirclePlus)`
  margin-top: 8px;
`;

const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const InputButton: React.FC<InputButtonProps> = ({ description, imageUrl }) => {
  return (
    <Container>
      {imageUrl && <ImagePreview src={imageUrl} alt="Uploaded" />}
      <NoDisplayInput type="file" id="upload" />
      <Label htmlFor="upload">
        {description} <br /> <StyleIcon size={32} />
      </Label>
    </Container>
  );
};

export default InputButton;
