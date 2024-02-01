// FormDataContext.tsx
import React, { createContext, useState ,ReactNode} from "react";
import { IFormInput } from "../types/formTypes";

interface FormDataContextProps {
  allData: IFormInput; 
  setAllData: React.Dispatch<React.SetStateAction<IFormInput>>;
}

export const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<IFormInput>({
    firstName: "",
    lastName: "",
    email: "" ,
    password: ""
  });

  return (
    <FormDataContext.Provider value={{ allData: formData, setAllData: setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
