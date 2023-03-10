import React, { useLayoutEffect } from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
