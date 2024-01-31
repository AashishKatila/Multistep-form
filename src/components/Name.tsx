import { IFormInput } from "../types/formTypes";
import { usePageContext } from "../context/PageContext";
import { useForm, SubmitHandler } from "react-hook-form";

const Name = () => {


  const { next } = usePageContext();

  const { register, handleSubmit, watch, formState } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    next();
    console.log(data);
  };

  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center ">
        <label htmlFor="name" className="text-white mr-5">
          First Name
        </label>
        <input
          type="firstname"
          className="py-1 rounded-lg pl-3"
          {...register("firstName", {
            required: "First name is required",
          })}
          value={watchFirstName}
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}

        <br />

        <label htmlFor="name" className="text-white mr-5">
          Last Name
        </label>
        <input
          type="lastName"
          className="py-1 rounded-lg pl-3"
          {...register("lastName", {
            required: "Last name is required",
          })}
          value={watchLastName}
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}

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

export default Name;
