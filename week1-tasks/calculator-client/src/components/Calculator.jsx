import React from "react";

import { MdOutlineHistory } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
function Calculator() {
  let buttons = [
    "C",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "+/-",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="flex items-center justify-center mt-6">
      <div className=" h-[500px] w-[300px]  border-2 border-gray-200 rounded-lg bg-[#ffff] shadow-xl">
        <div className=" grid grid-row-12 h-full">
          <div className=" row-span-2"></div>
          <div className=" row-span-2"></div>
          <div className=" row-span-2 flex items-center justify-between">
            <div className=" text-2xl ml-3">
              <MdOutlineHistory />
            </div>
            <div className=" text-2xl mr-3">
              <IoMdArrowBack />
            </div>
          </div>
          <div className=" row-span-6 flex flex-wrap ml-4 mr-3 gap-4 mb-3">
            {buttons.map((symbol) => (
              <div
                key={symbol}
                className={`${
                  symbol === "=" ? "bg-blue-400" : ""
                } w-[55px] border-2 border-gray-300 flex items-center justify-center rounded-2xl`}
                style={{ boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.2)" }}
              >
                <button
                  className={`text-lg font-sans font-semibold h-full w-full`}
                >
                  {symbol}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
