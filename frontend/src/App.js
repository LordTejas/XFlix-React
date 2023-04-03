import React, { useLayoutEffect } from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import VideoPage from "./components/VideoPage";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" >
          <Route index element={<Home />} />
        </Route>

        <Route path="/video/:videoId" >
          <Route index element={<VideoPage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
