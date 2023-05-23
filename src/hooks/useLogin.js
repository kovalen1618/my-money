import { useEffect, useState } from 'react';

import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        // Sign user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);

            // Dispatch Login action
            dispatch({ type: 'LOGIN', payload: res.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        // Cleanup function once the component is unmounted
        return () => setIsCancelled(true);
    }, [])

    return { login, error, isPending }

}