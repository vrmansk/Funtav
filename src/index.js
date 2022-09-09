import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulir from './component/form/Formulir';
import BookingDetail from './component/booking/Booking-detail';
import TentangKami from './component/tentangkami/TentangKami';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form-travel" element={<Formulir />} />
      <Route path="/booking" element={<BookingDetail />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
