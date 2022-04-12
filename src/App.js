import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
      <span className="material-icons ">copyright</span>
      <span style={{ fontSize: "20px" }}>Rahul Ganguly</span>
    </NewsContextProvider>
  );
}

export default App;
