import { usePageContext } from "../context/PageContext";

const Email = () => {
  const { form } = usePageContext();
  const { isTouched } = form.getFieldState("email", form.formState);

  return (
    <>
      <div>
        <label htmlFor="Email" className="text-white mr-5">
          Email
        </label>

        <input
          type="text"
          className="py-1 rounded-lg pl-3"
          {...form.register("email")}
          // value={form.watch("email")}
        />
        {form.formState.errors.email && isTouched && (
          <p className="text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
    </>
  );
};

export default Email;
