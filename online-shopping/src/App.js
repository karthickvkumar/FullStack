import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from './pages/settings';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="main" element={<HomePage></HomePage>}></Route>
        <Route path="info" element={<SettingsPage></SettingsPage>}></Route>
        <Route path="reach-us" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
