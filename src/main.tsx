import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {PageContextProvider}  from "./context/PageContext.tsx";
import { FormDataProvider } from "./context/FormContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContextProvider>
      <FormDataProvider>
      <App />
      </FormDataProvider>
    </PageContextProvider>
  </React.StrictMode>
);
