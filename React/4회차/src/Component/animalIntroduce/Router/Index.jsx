import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../mainPage";
import Test from "../page/Test";

const Index = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
