import { usePageContext } from "../context/PageContext";

const Email = () => {
  const { form } = usePageContext();

  return (
    <>
      <div>
        <label htmlFor="Email" className="text-white mr-5">
          Email
        </label>

        <input
          type="email"
          className="py-1 rounded-lg pl-3"
          {...form.register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          value={form.watch("email")}
        />
        {form.formState.errors.email && (
          <p className="text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
    </>
  );
};

export default Email;
