import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={APIKEY}`;

  useEffect(() => {
    if (city != "") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  }, [city]);

  const values = {
    data,
    setData,
    setCity,
  };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export default ApiContext;
