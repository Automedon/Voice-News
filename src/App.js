import React, { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
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
      <div className={classes.logoContainer}>
        <img
          className={classes.alanLogo}
          src="https://alan.app/voice/images/previews/preview.jpg"
          alt="Alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
