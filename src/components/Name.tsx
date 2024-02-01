import { usePageContext } from "../context/PageContext";

const Name = () => {
  const { form } = usePageContext();

  return (
    <div className="flex items-center ">
      <label htmlFor="name" className="text-white mr-5">
        First Name
      </label>

      <input
        type="firstname"
        className="py-1 rounded-lg pl-3"
        {...form.register("firstName", {
          required: "First name is required",
        })}
        value={form.watch("firstName")}
      />

      {form.formState.errors.firstName && (
        <p className="text-red-500">
          {form.formState.errors.firstName.message}
        </p>
      )}

      <br />

      <label htmlFor="name" className="text-white mr-5">
        Last Name
      </label>

      <input
        type="lastName"
        className="py-1 rounded-lg pl-3"
        {...form.register("lastName", {
          required: "Last name is required",
        })}
        value={form.watch("lastName")}
      />

      {form.formState.errors.lastName && (
        <p className="text-red-500">{form.formState.errors.lastName.message}</p>
      )}
    </div>
  );
};

export default Name;
