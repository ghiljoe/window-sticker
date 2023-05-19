import React from "react";
import './App.css';

import Carfax from "./components/Carfax";
import CarfaxCallBack from "./components/CarfaxCallBack";
import WindowSticker from "./components/WindowSticker";
import ChromeExtension from "./components/chrome-extension/ChromeExtension";
import CarketaValuation from "./components/carketa-valuation/CarketaValuation";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Carfax />} />
      <Route path="carfax-auth/callback" element={<CarfaxCallBack />} />
      {/* <Route path="window-sticker" element={<WindowSticker />} /> */}
      <Route path="chrome-extension" element={<ChromeExtension />} />
      <Route path="valuation" element={<CarketaValuation />} />
    </Routes>
  );
}
  
export default App;
