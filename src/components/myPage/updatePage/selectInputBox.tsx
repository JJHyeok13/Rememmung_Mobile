import React, { useState, useEffect } from "react";
import { createDay, createMonth, createYear } from "utils/createTime";

interface SelectInputBoxProps {
  title: string;
  hasCheckBox: boolean;
  checkboxString?: string;
  onDateChange: (date: string) => void;
}

const SelectInputBox: React.FC<SelectInputBoxProps> = ({
  title,
  hasCheckBox,
  checkboxString,
  onDateChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (isChecked) {
      onDateChange("");
    } else if (year && month && day) {
      onDateChange(`${year}-${month}-${day}T00:00:00`);
    }
  }, [isChecked, year, month, day, onDateChange]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };

  const yearOptions = createYear();
  const monthOptions = createMonth();
  const dayOptions = createDay();

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
        <div className="flex flex-row items-center mr-4">
          <select
            className="rounded-[4px] bg-black-100 mr-1 text-xs text-black-700 p-2 pr-[6px]"
            disabled={isChecked}
            onChange={handleYearChange}
            value={year}
          >
            <option value="" />
            {yearOptions.map((option) => option)}
          </select>
          <div className="text-sm font-medium text-[#ACADB4]">년</div>
        </div>
        <div className="flex flex-row items-center mr-4">
          <select
            className="rounded-[4px] bg-black-100 mr-1 text-xs text-black-700 p-2 pr-[6px]"
            disabled={isChecked}
            onChange={handleMonthChange}
            value={month}
          >
            <option value="" />
            {monthOptions.map((option) => option)}
          </select>
          <div className="text-sm font-medium text-[#ACADB4]">월</div>
        </div>
        <div className="flex flex-row items-center">
          <select
            className="rounded-[4px] bg-black-100 mr-1 text-xs text-black-700 p-2 pr-[6px]"
            disabled={isChecked}
            onChange={handleDayChange}
            value={day}
          >
            <option value="" />
            {dayOptions.map((option) => option)}
          </select>
          <div className="text-sm font-medium text-[#ACADB4]">일</div>
        </div>
      </div>
    </div>
  );
};

export default SelectInputBox;
