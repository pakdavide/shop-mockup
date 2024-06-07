import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sunglasses } from "./pages/SunglassesPage";
import { AppRoutes } from "./Routes.const";
import { Eyeglassses } from "./pages/EyeglassesPage";
import { Lenses } from "./pages/LensesPage";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.Sunglasses.home} element={<Sunglasses />} />
            <Route path={AppRoutes.Eyeglasses.home} element={<Eyeglassses />} />
            <Route path={AppRoutes.Lenses.home} element={<Lenses />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default App;
