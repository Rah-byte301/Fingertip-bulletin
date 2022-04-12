import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./NewsArticle.css";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img
        className="thumbnail"
        src={data.urlToImage}
        alt="Image not available"
      />
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <br />
      <button className="news_url">
        <a href={`${data.url}`} className="news_expand">
          Click for full news
        </a>
      </button>
    </div>
  );
}

export default NewsArticle;
