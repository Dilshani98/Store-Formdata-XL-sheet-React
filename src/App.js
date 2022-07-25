import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import LoginUi from "./Login Ui/LoginUi";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginUi />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
