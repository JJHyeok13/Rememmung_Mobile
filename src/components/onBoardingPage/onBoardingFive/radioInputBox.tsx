import React from "react";

interface RadioInputBoxProps {
  title: string;
  items: {
    id: number;
    value: string;
    name: string;
  }[];
}

const RadioInputBox: React.FC<RadioInputBoxProps> = ({ title, items }) => {
  return (
    <div className="border-[1px] border-[#E6E6E6] bg-white px-5 py-4 rounded-xl mb-6">
      <div className="mb-[6px] text-xs font-semibold text-[#808997]">
        {title}
      </div>

      <div className="flex flex-row">
        {items.map((item) => (
          <div key={item.id} className="flex flex-row items-center mr-2">
            <input
              type="radio"
              name={item.name}
              className="mr-1 accent-[#6C6C77]"
            />
            <label
              htmlFor={item.name}
              className="text-sm font-normal text-[#ACADB4]"
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInputBox;
