import React, { useState } from "react";

interface ItemProps {
  id: number;
  value: string;
  name: string;
}

interface RadioInputBoxProps {
  title: string;
  items: ItemProps[];
  handleSetPetInfoGender: (type: string) => void;
}

const RadioInputBox: React.FC<RadioInputBoxProps> = ({
  title,
  items,
  handleSetPetInfoGender,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("");

  const handleInputChange = (items: ItemProps) => {
    handleSetPetInfoGender(items.value);
    setSelectedItem(items.value);
  };

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
              id={`radio_${item.id}`}
              name="radio_group"
              className="mr-1 accent-[#6C6C77]"
              checked={selectedItem === item.value}
              onChange={() => handleInputChange(item)}
            />
            <label
              htmlFor={`radio_${item.id}`}
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
