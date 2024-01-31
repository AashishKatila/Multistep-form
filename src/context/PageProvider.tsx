import { useState, ReactNode } from "react";
import { PageContext } from "./PageContext";
interface PageContextProviderProps {
    children: ReactNode; // ReactNode represents any JSX content
}
const PageContextProvider = ({ children }: PageContextProviderProps) => {
    const [page, setPage] = useState(0)
    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
};
export default PageContextProvider;