import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // 3dea70fec57d4238923a389539a07e60
  // 516c836374c74048a852790903e6a2d1
  // 5016f365cffd445d9333fab0c22db657
  // 2cabf136f81041f59a9d6aefcb3ebee9
  // d5bae25fb02f441093a91758833e5389

  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = "in";
  const pageSize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key=""
                apiKey={apiKey}
                country={country}
                category="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/home"
            element={
              <News
                setProgress={setProgress}
                key="home"
                apiKey={apiKey}
                country={country}
                category="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                apiKey={apiKey}
                country={country}
                category="business"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                apiKey={apiKey}
                country={country}
                category="entertainment"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                apiKey={apiKey}
                country={country}
                category="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                apiKey={apiKey}
                country={country}
                category="health"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                apiKey={apiKey}
                country={country}
                category="science"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                apiKey={apiKey}
                country={country}
                category="sports"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                apiKey={apiKey}
                country={country}
                category="technology"
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
