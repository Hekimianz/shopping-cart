import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";

export default function RouteSwitch() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="/shop" Component={<Shop />} />
      </Routes>
    </HashRouter>
  );
}
