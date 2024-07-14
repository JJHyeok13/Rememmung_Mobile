import React, { useState } from "react";

interface ItemProps {
  id: number;
  value: string;
  name: string;
  grayIcon: string;
  whiteIcon: string;
}

interface CustomCheckBoxProps {
  items: ItemProps[];
  handleSetPetInfoSpecies: (type: string) => void;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  items,
  handleSetPetInfoSpecies,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("");

  const handleInputChange = (items: ItemProps) => {
    handleSetPetInfoSpecies(items.value);
    setSelectedItem(items.value);
  };

  return (
    <div className="flex flex-row justify-around px-5 py-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center px-[38px] py-4 rounded-xl cursor-pointer ${
            selectedItem === item.value
              ? "border-0 bg-brown-500"
              : "border-[1px] border-black-200 bg-white"
          } `}
          onClick={() => handleInputChange(item)}
        >
          <img
            src={selectedItem === item.value ? item.whiteIcon : item.grayIcon}
            className="mb-1"
          />
          <div
            className={`${
              selectedItem === item.value ? "text-white" : "text-black-300"
            } font-['YangJin'] text-[10px] font-normal `}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomCheckBox;
