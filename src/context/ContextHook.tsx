import { FC, ReactNode, createContext, useState } from "react";

interface PageContextProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  prev: () => void;
  next: () => void;
}

export const PageContext = createContext<PageContextProps | undefined>(
  undefined
);

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(0);

  const next = () => setPage((prevPage) => prevPage + 1);
  const prev = () => setPage((prevPage) => prevPage - 1);

  return (
    <PageContext.Provider value={{ page, setPage, prev, next }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;