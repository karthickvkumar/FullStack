import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from './pages/settings';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import "./css/style.css";
import PageNotFoundPage from './pages/page-not-found';
import LoginPage from './pages/login';
import "./css/contact.css";
import ContactShortCutPage from './pages/contact-shortcut';
import RegisterPage from './pages/register';
import InformationPage from './pages/information';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="main" element={<HomePage></HomePage>}></Route>
        <Route path="info" element={<SettingsPage></SettingsPage>}></Route>
        <Route path="reach-us" element={<ContactPage></ContactPage>}></Route>
        <Route path="" element={<LoginPage></LoginPage>}></Route>
        <Route path="contact" element={<ContactShortCutPage></ContactShortCutPage>}></Route>
        <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="api" element={<InformationPage></InformationPage>}></Route>
        
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
