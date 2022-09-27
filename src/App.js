import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import ProfilePage from "./components/ProfilePage";
import Details from "./components/DetailPage/Details";

export default function App() {
  const navRoutes = [
    { title: "MARD", path: "/", element: <Home />, isNav: true },
    {
      title: "Más valorado",
      path: "toprated",
      element: <TopRated />,
      isNav: true,
    },
    { title: "Populares", path: "popular", element: <Popular /> },
    { title: "Perfiles", path: "profile", element: <ProfilePage /> },
    { title: "Detalle", path: "detail/:movieId", element: <Details /> },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {navRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    </>
  );
}
