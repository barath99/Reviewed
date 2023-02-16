import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider("2ef6fb0a1f51c780acfa1336144da41078ce443a") // required
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
    <App />
    </ProvideAuth>
  </React.StrictMode>
);
