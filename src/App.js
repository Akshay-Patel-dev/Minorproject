
import './App.css';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          <Route>
            <Routes></Routes>
          </Route>
        </BrowserRouter>
      </>
  );
}

export default App;
