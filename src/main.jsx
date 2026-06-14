import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"
import App from "./App";
import GlobalState from "./Context";
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "216863211385-an6n48bg5d1gasu6rdkgsb6mm0akcbbv.apps.googleusercontent.com"; // Replace with your actual Google Client ID

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <GlobalState>
      <App />
    </GlobalState>
  </GoogleOAuthProvider>
);