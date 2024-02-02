import { createContext, useContext, useState, ReactNode } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { IFormInput } from "../types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../types/zod";

export interface PageContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  next: (page: number) => void;
  back: () => void;
  form: UseFormReturn<IFormInput, any, undefined>;
}

export const PageContext = createContext<PageContextProps | undefined>(
  undefined
);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);
  const form = useForm<IFormInput>({ resolver: zodResolver(UserSchema) });

  const next = (page: number) => {
    switch (page) {
      case 0:
        form.trigger(["firstName", "lastName"]).then((resp) => {
          if (resp) {
            setPage((prevPage) => prevPage + 1);
          }
        });
        break;
      case 1:
        form.trigger("email").then((resp) => {
          if (resp) {
            setPage((prevPage) => prevPage + 1);
          }
        });
        break;
      case 2:
        form.trigger(["password"]).then((resp) => {
          if (resp) {
            setPage((prevPage) => prevPage + 1);
          }
        });
        break;
    }
  };

  const back = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <PageContext.Provider value={{ page, setPage, next, back, form }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
