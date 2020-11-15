import React, { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN,
      onCommand({ command, articles }) {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
