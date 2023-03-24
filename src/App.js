import React from "react";
import './App.css';

import Home from "./components/Home";
import Carfax from "./components/Carfax";
import WindowSticker from "./components/WindowSticker";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="carfax-auth/callback" element={<Carfax />} />
      <Route path="window-sticker" element={<WindowSticker />} />
    </Routes>
  );
}
  
export default App;
