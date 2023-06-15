import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../firebase/config";


export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // Placing query within a useRef stops an infinite loop from occuring due to the ref type of the query array 
    // (its array type changes every time a new doc is added - adding new docs reevaluates everything which will loop forever with useEffect)
    const query = useRef(_query).current;
    const orderBy = useRef(_orderBy).current;

    // When collection changes, setup a new subscription to that collection
    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        // Query database for user-specific data
        if (query) {
            ref = ref.where(...query);
        }

        if (orderBy) {
            ref = ref.orderBy(...orderBy);
        }

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

    }, [collection, query, orderBy])

    return { documents, error }
}