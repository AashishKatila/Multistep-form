import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import { usePageContext } from "./context/PageContext";
import "./App.css";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "./types/formTypes";
import handleRegister from "./customHook/handleRegister";

const App = () => {
  const { page, next, back, form } = usePageContext();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    console.log(data);
    // handleRegister(data);
  };

  const Steps: React.ReactNode[] = [<Name />, <Email />, <Password />];
  console.log("Steps", Steps.length - 1);

  return (
    <div className="flex mt-4 ml-5">
      {console.log("PAge no =", page)}
      {/* Back button  */}
      {page > 0 && (
        <button
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg mr-4 text-white"
          onClick={() => back()}
        >
          Back
        </button>
      )}

      {/* Form  */}
      <form
        onSubmit={
          page < Steps.length - 1 ? () => next() : form.handleSubmit(onSubmit)
        }
      >
        {Steps[page]}
      </form>

      {/* {page === Steps.length - 1 && <h2>Last Page</h2>} */}

      {/* Next or Submit button  */}
      {page === Steps.length - 1 ? (
        <button
          type="submit"
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() => next()}
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default App;
