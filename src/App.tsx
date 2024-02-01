import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import { usePageContext } from "./context/PageContext";
import "./App.css";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "./types/formTypes";
import handleRegister from "./customHook/handleRegister";

const App = () => {
  const { page, setPage, next, back, form } = usePageContext();

  // Not working

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    console.log(data);
    // handleRegister(data);
    try {
      const response = await fetch(
        "https://rest-api-bjno.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Handle the response from the server
      if (response.ok) {
        console.log("Signup successful!");
        setPage(0);
        localStorage.removeItem("names");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      } else {
        console.error("Signup failed.");
      }
    } catch (error) {
      console.error("Error sending signup request:", error);
    }
  };

  const Steps: React.ReactNode[] = [<Name />, <Email />, <Password />];
  console.log("Steps", Steps.length - 1);

  return (
    <div className="flex mt-4 ml-5">
      {/* {console.log("Page no =", page)} */}
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
      {/* <form
        onSubmit={
          page < Steps.length - 1 ? () => next() : form.handleSubmit(onSubmit)
        }
      > */}

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        {Steps[page]}
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
      </form>

      {/* {page === Steps.length - 1 && <h2>Last Page</h2>} */}

      {/* Next or Submit button  */}
      {/* {page === Steps.length - 1 ? (
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
      )} */}
    </div>
  );
};

export default App;
