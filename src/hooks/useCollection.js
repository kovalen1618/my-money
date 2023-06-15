import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config";


export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // When collection changes, setup a new subscription to that collection
    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        // Use a realtime listener with onSnaphshot
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                // .data() retrieves all data from a document
                // id is the id of the docuement, not the uid
                results.push({ ...doc.data(), id: doc.id })
            })

            // Update state
            setDocuments(results);
            setError(null);
        }, (error) => {
            console.log(error);
            setError('Could not fetch the data');
        })

        // Unsubscribe on unmount
        return () => unsubscribe();

    }, [collection])

    return { documents, error }
}