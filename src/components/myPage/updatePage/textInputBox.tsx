import React from "react";

interface TextInputBoxProps {
  title: string;
  placeholder: string;
  handleSetPetInfoName: (type: string) => void;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({
  title,
  placeholder,
  handleSetPetInfoName,
}) => {
  return (
    <div className="border-[1px] border-[#E6E6E6] bg-white px-5 py-4 rounded-xl mb-6">
      <div className="mb-[6px] text-xs font-semibold text-[#808997]">
        {title}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="text-sm font-normal text-[#6C6C77] w-full"
        onChange={(e) => handleSetPetInfoName(e.target.value)}
      />
    </div>
  );
};

export default TextInputBox;
