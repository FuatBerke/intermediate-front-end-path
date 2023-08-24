import React, { useContext } from "react";
import ApiContext from "../Context/ApiContext";

function Lower() {
  const lowerData = useContext(ApiContext);
  return (
    <>
      {lowerData.data.main ? (
        <div
          className="
      h-96
      p-7
      rounded-t-3xl
      backdrop-blur-md
      bg-opacity-25
      bg-blur-50
      shadow-2xl
      absolute
      container
      bottom-0
      bg-black"
        >
          <div className="flex-none me-auto">
            <p className="text-2xl font-semibold">Weather Details</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5">
            <div className="bg-white rounded-lg grid grid-cols-5 bg-opacity-10 pt-[32px]  h-32">
              <p className="text-gray-400 h-5 col-start-5 rotate-90 whitespace-nowrap ">
                Min Temp
              </p>
              <p className="text-3xl font-bold h-10 col-span-3 text-center col-start-2 whitespace-nowrap -mt-12 pt-1">
                {lowerData.data.main.temp_min}
                <span className="font-light whitespace-nowrap col-span-1">
                  °
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg grid grid-cols-5 bg-opacity-10 pt-[32px]  h-32">
              <p className="text-gray-400 h-5 col-start-5 rotate-90 whitespace-nowrap ">
                Max Temp
              </p>
              <p className="text-3xl font-bold h-10 col-span-3 text-center col-start-2 whitespace-nowrap -mt-12 pt-1">
                {lowerData.data.main.temp_max}
                <span className="font-light whitespace-nowrap col-span-1">
                  °
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg grid grid-cols-5 bg-opacity-10 pt-[25px]  h-32">
              <p className="text-gray-400 h-5 col-start-5 rotate-90 whitespace-nowrap ">
                Wind Speed
              </p>
              <p className="text-3xl font-bold h-10 col-span-3 text-center col-start-1 ms-8 whitespace-nowrap -mt-12 pt-2">
                {lowerData.data.wind.speed}
                <span className="text-sm font-light col-span-1 whitespace-nowrap">
                  MPH
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg grid grid-cols-5 bg-opacity-10 pt-[40px]  h-32">
              <p className="text-gray-400 h-5 col-start-5 rotate-90 whitespace-nowrap ">
                Humidity
              </p>
              <p className="text-3xl font-bold h-10 ms-5 text-center col-span-2 col-start-2 whitespace-nowrap -mt-12 pt-1">
                {lowerData.data.main.humidity}
                <span className="text-sm font-light col-span-1 whitespace-nowrap">
                  %
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="
  h-96
  p-5
  rounded-t-3xl
  backdrop-blur-md
  bg-opacity-25
  bg-blur-75
  relative
  translate-y-52
bg-black"
        >
          <p>Weather Details</p>
        </div>
      )}
    </>
  );
}

export default Lower;
