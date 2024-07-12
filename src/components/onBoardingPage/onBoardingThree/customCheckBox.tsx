import React, { useState } from "react";

interface ItemProps {
  id: number;
  value: string;
  name: string;
}

interface CustomCheckBoxProps {
  items: ItemProps[];
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleInputChange = (item: ItemProps) => {
    if (selectedItems.includes(item.value)) {
      setSelectedItems(selectedItems.filter((value) => value !== item.value));
    } else {
      setSelectedItems([...selectedItems, item.value]);
    }
  };

  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex items-center px-[14px] py-2 rounded-[35px] mr-2 mb-2 border-[1px] ${
            selectedItems.includes(item.value)
              ? "border-brown-500 bg-brown-200"
              : "border-black-200 bg-white"
          } `}
          onClick={() => handleInputChange(item)}
        >
          <div
            className={`${
              selectedItems.includes(item.value)
                ? "text-brown-500"
                : " text-[#ACADB4]"
            }  text-sm font-medium `}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomCheckBox;
