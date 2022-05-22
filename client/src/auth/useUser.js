import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';

export const useUser = () => {
    const [userInfo, setUserInfo] = useState(() => {
        const user = getAuth().currentUser;
        const isLoading = !user;

        return {isLoading, user };
    });

    useEffect(() => {        
        const unsubscribe = getAuth().onAuthStateChanged(user => {
            setUserInfo({isLoading: false, user});
        })
        
        unsubscribe();
    }, []);

    return userInfo;
}