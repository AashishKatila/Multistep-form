import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../types/formTypes";
import { usePageContext } from "../context/PageContext";

const Email = () => {

  const { next,back } = usePageContext();

  const { register, handleSubmit, watch, formState } =
    useForm<IFormInput>();


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    next()
    console.log(data);
  };

  const watchEmail = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex" >
      <button
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg mr-4 text-white"
          onClick={back}
        >
          Back
        </button>
      <div>
        <label htmlFor="Email" className="text-white mr-5">
          Email
        </label>

        <input
          type="email"
          className="py-1 rounded-lg pl-3"
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          value={watchEmail}
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Email;
