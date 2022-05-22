import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export const useProtectedResource = (url, defaultValue) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const loadResources = async () => {
            const user = getAuth().currentUser;
            if(!user){
                setData(defaultValue);
                setIsLoading(false);
                return;
            }

            const response = await fetch(url, {
                headers: {
                    Authtoken: await user.getIdToken(),
                }
            });

            const data = await response.json();
            setData(data);
            setIsLoading(false);
        }

        loadResources();
        
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return { isLoading, data, setData }
}