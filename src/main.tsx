import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {PageContextProvider}  from "./context/PageContext.tsx";
import { FormDataProvider } from "./context/FormContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <PageContextProvider>
      <FormDataProvider>
      <App />
      </FormDataProvider>
    </PageContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
