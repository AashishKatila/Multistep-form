import { usePageContext } from "../context/PageContext";

const Name = () => {
  const { form } = usePageContext();

  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div>
        <label htmlFor="name" className="text-white mr-5">
          First Name
        </label>

        <input
          type="firstname"
          className="py-1 rounded-lg pl-3"
          {...form.register("firstName")}
        />

        {form.formState.errors.firstName && (
          <p className="text-red-500 mt-4">
            {form.formState.errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="text-white mr-5">
          Last Name
        </label>

        <input
          type="lastName"
          className="py-1 rounded-lg pl-3"
          {...form.register("lastName")}
          // value={form.watch("lastName")}
        />

        {form.formState.errors.lastName && (
          <p className="text-red-500 mt-4">
            {form.formState.errors.lastName.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Name;
