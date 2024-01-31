import React, { useState } from "react";
import { IFormInput } from "../types/formTypes";

const Name = () => {
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
    <div className="flex items-center ">
      <label htmlFor="name" className="text-white mr-5">
        First Name
      </label>
      <input
        type="text"
        className="py-1 rounded-lg pl-3 mr-4"
        name="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <br />

      <label htmlFor="name" className="text-white mr-5">
        Last Name
      </label>
      <input
        type="text"
        className="py-1 rounded-lg pl-3"
        name="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default Name;
