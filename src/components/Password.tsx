import { usePageContext } from "../context/PageContext";

const Password = () => {
  const { form } = usePageContext();
  const { isTouched } = form.getFieldState("password", form.formState);

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
      {form.formState.errors.password && isTouched && (
        <p className="text-red-500">{form.formState.errors.password.message}</p>
      )}
    </>
  );
};

export default Password;
