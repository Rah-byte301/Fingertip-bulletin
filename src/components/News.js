import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import "./News.css";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className="header">
        <h1 className="head_head text-center ">Fingertip Bulletin</h1>
        <h1 className="head__text text-center ">
          Get the latest bulletins about what is happening around the world.
        </h1>
      </div>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
