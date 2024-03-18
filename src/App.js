import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={
              <LoginPage></LoginPage>
            }>   
          </Route>
          <Route exact path="/register" element={
              <RegisterPage></RegisterPage>
            }>   
          </Route>
          <Route exact path="/dashboard" element={
              <Dashboard></Dashboard>
            }>   
          </Route>
          <Route path="/" element={
              <Navigate to="/dashboard"></Navigate>
            }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
