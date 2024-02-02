import { usePageContext } from "../context/PageContext";

const Password = () => {
  const { form } = usePageContext();

  return (
    <>
      <label htmlFor="Password" className="text-white mr-5">
        Password
      </label>
      <input
        type="password"
        className="py-1 rounded-lg pl-3"
        {...form.register("password")}
      />
      {form.formState.errors.email && (
        <p className="text-red-500">{form.formState.errors.email.message}</p>
      )}
    </>
  );
};

export default Password;
