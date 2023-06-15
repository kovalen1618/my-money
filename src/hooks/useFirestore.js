// A hook for adding or removing documents from a Firestore collection

import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

// When creating reducers, you must always accept the state and action
const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            // Use spread operator on the state to keep everything else the same, and then change some part of it
            // return { ...state, isPending: true, success: false, error: null }
            return {success: false, isPending: true, error: null, document: null}
        case 'ADDED_DOCUMENT':
            // Don't need spread operator on state here since all properties are being changed
            return {success: true, isPending: false, error: null, document: action.payload}
        case 'DELETED_DOCUMENT':
            return {success: true, isPending: false, error: null, document: null}
        case 'ERROR':
            return {success: false, isPending: false, error: action.payload, document: null}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    // Represents the resonse received from Firestore when adding or removing documents
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // Collection ref
    const ref = projectFirestore.collection(collection)

    // Only dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }

    // Adds document to Firestore database
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })

        try {
            // Passes in current date/time into this const for use in Firestore
            const createdAt = timestamp.fromDate(new Date())
            // Place into a const so that we can send it as a dispatch
            const addedDocument = await ref.add({ ...doc, createdAt })
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        } catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
        }
    }

    // Delete document
    const deleteDocument = async (id) => {
        dispatch({ type: 'IS_PENDING' });

        try {
            await ref.doc(id).delete();
            dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
        } catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: 'Could not delete' })
        }
    }

    // Cleanup function
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}