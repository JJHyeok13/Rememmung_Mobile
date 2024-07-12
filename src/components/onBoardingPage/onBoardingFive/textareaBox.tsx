import React from "react";

interface TextareaBoxProps {
  title: string;
  placeholder: string;
}

const TextareaBox: React.FC<TextareaBoxProps> = ({ title, placeholder }) => {
  return (
    <div className="border-[1px] border-[#E6E6E6] bg-white px-5 py-4 rounded-xl mb-6">
      <div className="mb-[6px] text-xs font-semibold text-[#808997]">
        {title}
      </div>

      <textarea
        placeholder={placeholder}
        className="text-sm font-normal text-[#ACADB4] resize-none w-full"
      />
    </div>
  );
};

export default TextareaBox;
