import React, { useState } from "react";
import { IFormInput } from "../types/formTypes";

const Password = () => {
  const [formData, setFormData] = useState<IFormInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <label htmlFor="Password" className="text-white mr-5">
        Password
      </label>
      <input
        type="password"
        className="py-1 rounded-lg pl-3"
        name="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default Password;
