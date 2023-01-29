import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExampleProvider from './contexts/ExampleContext';
import AuthProvider from "contexts/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* The Providers for every context will wrap our application */}
    <ExampleProvider>
      <AuthProvider>
        {/* Router to create our routes in React */}
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ExampleProvider>
  </React.StrictMode>
);
