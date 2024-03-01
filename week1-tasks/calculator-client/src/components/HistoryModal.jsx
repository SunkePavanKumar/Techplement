import React, { useState } from "react";
import { MdOutlineHistory } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
function HistoryModal({ history, sethistory }) {
  return (
    <>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          history ? "flex z-50 bg-black bg-opacity-50 rounded-xl" : "hidden"
        } overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 justify-center items-center w-[300px] h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-md">
            {/* Modal header */}
            <div className="flex items-center justify-between  p-4 md:p-5 border-b rounded-t">
              <div className=" flex items-center justify-between gap-2">
                <MdOutlineHistory className=" text-xl" />
                <div>Recents</div>
              </div>

              <div className=" flex items-center justify-center">
                <h1 className=" text-gray-400 text-sm">Clear all</h1>
                <div className=" flex items-center justify-end">
                  <button
                    type="button"
                    className={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white`}
                    data-modal-hide="default-modal"
                    onClick={() => {
                      sethistory((prev) => !prev);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className=" text-black  pl-4 pr-4 flex items-center justify-between">
              <h1>100*10=1000 </h1>
              <div className=" mb-4">
                <RxCross2 />
              </div>
            </div>
            <div className=" text-black  pl-4 pr-4 flex items-center justify-between">
              <h1>100*10=1000 </h1>
              <div className=" mb-4">
                <RxCross2 />
              </div>
            </div>
            <div className=" text-black  pl-4 pr-4 flex items-center justify-between">
              <h1>100*10=1000 </h1>
              <div className=" mb-4">
                <RxCross2 />
              </div>
            </div>
            <div className=" text-black  pl-4 pr-4 flex items-center justify-between">
              <h1>100*10=1000 </h1>
              <div className=" mb-4">
                <RxCross2 />
              </div>
            </div>
            <div className=" text-black  pl-4 pr-4 flex items-center justify-between">
              <h1>100*10=1000 </h1>
              <div className=" mb-4">
                <RxCross2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryModal;
