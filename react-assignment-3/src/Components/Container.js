import React, { useContext, useEffect } from "react";
import ApiContext from "../Context/ApiContext";
import Upper from "./Upper";
import Lower from "./Lower";

function Container() {
  const containerData = useContext(ApiContext);
  useEffect(() => {
    console.log(containerData);
  });

  // Defined with let first
  let backgroundStyle = {};
  let bgStyle = {};

  // And defined again after getting API Data
  if (containerData.data.weather) {
    bgStyle = containerData.data.weather[0].main;

    backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${process.env.PUBLIC_URL}/img/${bgStyle}.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    };
  }

  return (
    <div style={backgroundStyle}>
      <Upper />
      <Lower />
    </div>
  );
}

export default Container;
