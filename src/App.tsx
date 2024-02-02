import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";
import { usePageContext } from "./context/PageContext";
import "./App.css";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "./types/formTypes";
import { useMutation } from "@tanstack/react-query";
import { DevTool } from "@hookform/devtools";

const App = () => {
  const { page, setPage, next, back, form } = usePageContext();

  console.log(form.formState.errors);

  const mutation = useMutation({
    mutationFn: async (data) => {
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

      if (!response.ok) {
        throw new Error(`HTTP error... Status ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setPage(0);
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    console.log("hello");
    //@ts-ignore
    await mutation.mutate(data);
  };

  const Steps: React.ReactNode[] = [<Name />, <Email />, <Password />];
  // console.log("Steps", Steps.length - 1);

  // console.log(page);

  return (
    <div className="flex mt-4 ml-5">
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
            onClick={() => next(page)}
            className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
          >
            Next
          </button>
        )}
      </form>
      <DevTool control={form.control} />
    </div>
  );
};

export default App;
