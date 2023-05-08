import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, displayName) => {
        setError(null);
        // Starting request to sign user up, so start loading
        setIsPending(true);

        try {
            // Signup user
            // Use await since this is within an async function
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);

            // Throw error if bad response is given
            if (!res) {
                throw new Error('Could not complete the signup');
            }

            // Update user's display name if there is no error
            await res.user.updateProfile({ displayName });

            // Done with request, so stop loading and clear any errors
            setIsPending(false);
            setError(null);
            
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            // Done with request, so stop loading, just has an error
            setIsPending(false);
        }
    }

    return { error, isPending, signup }
}