import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import { usePageContext } from "./context/PageContext";
// import { useState,useEffect } from "react";
// import { FormDataProvider } from "./context/FormContext";
import "./App.css";


const App = () => {
  const { page } = usePageContext();
  // console.log(page);

  const renderAccToPage = (): any => {
    switch (page) {
      case 0:
        return <Name  />;
      case 1:
        return <Email  />;
      case 2:
        return <Password />;
    }
  };

  return (
      <div className="flex mt-4 ml-5">{renderAccToPage()}</div>
  );
};

export default App;
