import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

interface PageLoaderProps {
    children: ReactNode;
}

const PageLoader = ({ children }: PageLoaderProps) => {
    const location = useLocation();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // smooth transition

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
};

export default PageLoader;