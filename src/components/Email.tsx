import React, { useState } from "react";
import { IFormInput } from "../types/formTypes";

const Email = () => {
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
      <label htmlFor="Email" className="text-white mr-5">
        Email
      </label>
      <input
        type="email"
        className="py-1 rounded-lg pl-3"
        name="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default Email;
