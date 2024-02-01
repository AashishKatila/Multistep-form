import { IFormInput } from "../types/formTypes";
import { usePageContext } from "../context/PageContext";
import { useForm, SubmitHandler } from "react-hook-form";


const Password = () => {
  const { next, back } = usePageContext();

  const { register, handleSubmit, watch, formState } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("password",JSON.stringify(data))
    console.log(data);
    next();
    const allNames = localStorage.getItem("names")
    const emails = localStorage.getItem("email")
    const password = localStorage.getItem("password")

    const parsedNames = JSON.parse(allNames)
    const parsedEmail = JSON.parse(emails)
    const parsedPassword = JSON.parse(password)

    const mergedData = {
      ...parsedNames,...parsedEmail,...parsedPassword
    }
    console.log(mergedData)
  };

  const watchPassword = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg mr-4 text-white"
          onClick={back}
        >
          Back
        </button>
      <label htmlFor="Password" className="text-white mr-5">
        Password
      </label>
      <input
          type="password"
          className="py-1 rounded-lg pl-3"
          {...register("password", {
            required: "Password is required",
          })}
          value={watchPassword}
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}
        <button
          type="submit"
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
        >
          Submit
        </button>
    </form>
  );
};

export default Password;
