import { createContext, useContext } from "react";


export const NoteContext = createContext({
    notes : [{
        id : '1',
        note : ' First Note',
        completed : false
    }],
    addNote : (note) => {},
    updateNote : (id, note) => {},
    removeNote : (id) => {},
    completeNote : (id) => {},
});

export const NoteProvider = NoteContext.Provider

export default function useNote() {
    return useContext(NoteContext)
}