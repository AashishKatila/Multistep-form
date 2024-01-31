import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import { usePageContext } from "./context/PageContext";
import "./App.css";

const App = () => {
  const { page, setPage } = usePageContext();
  console.log(page);

  const renderAccToPage: any = () => {
    switch (page) {
      case 0:
        return <Name />;
      case 1:
        return <Email />;
      case 2:
        return <Password />;
    }
  };

  return (
    <div className="flex mt-4 ml-5">
      
      {/* Back Button  */}
      {page >0  && (
        <button
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg mr-4 text-white"
          onClick={() => setPage((pageNo) => pageNo - 1)}
        >
          Back
        </button>
        )} 

         {/* Page Contents */}

      {renderAccToPage()}

      {/* Next Button  */}
      {page >= 0 && page < 2 && (
        <button
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
          onClick={() => setPage((pageNo) => pageNo + 1)}
        >
          Next
        </button>
      )}


    </div>
  );
};

export default App;
