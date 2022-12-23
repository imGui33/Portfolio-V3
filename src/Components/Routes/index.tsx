import React from "react";
import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../../pages/Home";

// import { Container } from './styles';

const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
