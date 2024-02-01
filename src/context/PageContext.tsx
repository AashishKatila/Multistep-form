import { createContext, useContext, useState, ReactNode } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { IFormInput } from "../types/formTypes";

export interface PageContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  next: () => void;
  back: () => void;
  form: UseFormReturn<IFormInput, any, undefined>;
}

export const PageContext = createContext<PageContextProps | undefined>(
  undefined
);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);
  const form = useForm<IFormInput>();

  const next = () => {
    setPage((prev) => prev + 1);
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
