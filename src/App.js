import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Users from './components/users';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
    </Routes>
  );
}

export default App;