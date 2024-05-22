import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Admin from './components/Admin';
import Tester from './components/Tester'; 
import Developer from './components/Developer';
import Submit from './components/Submit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tester" element={<Tester />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
