import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/GuestLandingPage/LandingPage';
import ReclamationForm from './pages/ReclamationPage/ReclamationForm';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import HistoryPage from './pages/AdminDashboard/HistoryPage';
import SettingsPage from './pages/AdminDashboard/SettingsPage';
import RequestPage from './pages/AdminDashboard/RequestPage';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ReclamationForm" element={<ReclamationForm />} />
        <Route path="/admin/home" element={<AdminDashboard />} />
        <Route path='/admin/history' element={<HistoryPage />} />
        <Route path='/admin/setting' element={<SettingsPage />} />
        <Route path='/admin/request' element={<RequestPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </Router>
  );
}

export default App;