import {  createContext, useContext } from "react";

export interface PageContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = createContext<PageContextProps | undefined>(
  undefined
);

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
