import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d48279a7fedb4671ba52fd97cd781cf5";

  useEffect(() => {
    axios
      .get(
        `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
