import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"
import App from "./App";
import GlobalState from "./Context";
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "993408333636-a6j5pa2ron46tjlpmigio012859rg7i7.apps.googleusercontent.com"; // Replace with your actual Google Client ID

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <GlobalState>
      <App />
    </GlobalState>
  </GoogleOAuthProvider>
);
