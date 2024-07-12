import React, { useState } from "react";
import { createDay, createMonth, createYear } from "utils/createTime";

interface RadioInputBoxProps {
  title: string;
  hasCheckBox: boolean;
  checkboxString?: string;
}

const SelectInputBox: React.FC<RadioInputBoxProps> = ({
  title,
  hasCheckBox,
  checkboxString,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const options = [
    { label: "년", values: createYear() },
    { label: "월", values: createMonth() },
    { label: "일", values: createDay() },
  ];

  return (
    <div className="border-[1px] border-[#E6E6E6] bg-white px-5 py-4 rounded-xl mb-6">
      <div className="mb-[6px] text-xs font-semibold text-[#808997]">
        {title}
      </div>
      {hasCheckBox && (
        <div className="flex flex-row items-center mb-2">
          <input
            type="checkbox"
            name="checkbox"
            className="mr-1 accent-[#6C6C77]"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="checkbox"
            className="text-sm font-medium text-[#ACADB4]"
          >
            {checkboxString}
          </label>
        </div>
      )}

      <div className="flex flex-row items-center">
        {options.map((option, index) => (
          <div key={index} className="flex flex-row items-center mr-4">
            <select
              className="rounded-[4px] bg-black-100 mr-1 text-xs text-black-700 p-2 pr-[6px]"
              disabled={isChecked}
            >
              <option value="" />
              {option.values}
            </select>
            <div className="text-sm font-medium text-[#ACADB4]">
              {option.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInputBox;
