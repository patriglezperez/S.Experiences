import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroSOMOS from "./components/IntroSOMOS/IntroSOMOS";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Home from "./components/Home/Home";
import ElegantEvent from "./components/Events/ElegantEvents";
import SpectacularEvents from "./components/Events/SpectacularEvents";
import CorporateEvent from "./components/Events/CorporateEvents";
import Proyects from "./components/Events/Proyects/Proyects";
import BottomArrow from "./components/BottomArrow/BottomArrow";
import InnovationSolutions from "./components/InnovationSolutions/InnovationSolutions";

import "./styles.scss";

function App() {
  return (
    <main>
      <BrowserRouter>
        <HeaderMenu />
        <BottomArrow />
        <Proyects />
        <Routes>
          <Route path="/" element={<IntroSOMOS />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Events/Spectacular" element={<SpectacularEvents />} />
          <Route path="/Events/Corporate" element={<CorporateEvent />} />
          <Route path="/Events/Elegant" element={<ElegantEvent />} />
          <Route path="/Events/Solutions" element={<InnovationSolutions />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
