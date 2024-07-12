import React from "react";

interface TextInputBoxProps {
  title: string;
  placeholder: string;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({ title, placeholder }) => {
  return (
    <div className="border-[1px] border-[#E6E6E6] bg-white px-5 py-4 rounded-xl mb-6">
      <div className="mb-[6px] text-xs font-semibold text-[#808997]">
        {title}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="text-sm font-normal text-[#6C6C77] w-full"
      />
    </div>
  );
};

export default TextInputBox;
