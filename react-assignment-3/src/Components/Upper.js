import React, { useContext, useState } from "react";
import ApiContext from "../Context/ApiContext";

function Upper() {
  const { setCity } = useContext(ApiContext);
  const upperData = useContext(ApiContext);
  const [inputValue, setInputValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    clearTimeout(timeoutId);

    // Timeout For Input
    const newTimeoutId = setTimeout(() => {
      setCity(value);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  //!   Upper Part Starts
  return (
    <div className="p-10 pb-0 rounded-lg relative">
      {/* Input */}
      <input
        className="text-white h-12 bg-transparent font-semibold text-4xl focus:outline-none"
        type="text"
        placeholder="Enter City"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* City Name */}
      {upperData.data.main ? (
        <h1 className="text-gray-300 font-extralight text-xl">
          {upperData.data.name}
        </h1>
      ) : (
        <p> City Name </p>
      )}

      {/* Temperature */}
      {upperData.data.main ? (
        <div className="grid grid-cols-12">
          <h1 className="weather-temp mt-12 -ms-5 col-start-1 text-9xl font-bold col-span-11">
            {Math.floor(upperData.data.main.temp_min.toFixed())}
            <span className="text-8xl font-bold align-top">°</span>
          </h1>

          {/* Weather Main */}
          <p className="rotate-90 text-gray-400 text-3xl font-extralight mt-28 -me-10 mb-auto">
            {upperData.data.weather[0].main}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <p className="mt-20 text-8xl font-light col-span-11">-</p>

          {/* Weather Main */}
          <p className="rotate-90 text-4xl font-extralight mt-28 -me-10 mb-auto">
            --
          </p>
        </div>
      )}
    </div>
  );
}

export default Upper;
