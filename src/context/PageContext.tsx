import { createContext, useContext, useState, ReactNode } from "react";

export interface PageContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  next: () => void;
  back: () => void;
}

export const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);

  const next = () =>{
    setPage((pageNo) => pageNo +1)
  }

  const back = () =>{
    setPage((pageNo) => pageNo - 1)
  }

  return (
    <PageContext.Provider value={{ page, setPage,next,back }}>
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