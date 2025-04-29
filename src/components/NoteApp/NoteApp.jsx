import React, { useEffect, useState } from 'react'
import NoteInput from './NoteInput'
import Notes from './Notes'
import { NoteProvider } from '../../contexts/NoteApp'

const NoteApp = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([{id: Date.now(), ...note} , ...notes])
    }

    const updateNote = (id, note) => {
        setNotes((prev) => prev.map((prevNote) => prevNote.id === id ? note : prevNote))
    }

    const removeNote = (id) => {
        setNotes((prev) => prev.filter((prevNote) => prevNote.id !== id))
    }

    const completeNote = (id) => {
        setNotes((prev) => prev.map((prevNote) => prevNote.id === id ? {...prevNote, completed : !prevNote.completed} : prevNote))
    }

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("notesData"))
        if(localStorageData && localStorageData.length > 0){
            setNotes(localStorageData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("notesData", JSON.stringify(notes))
    },[notes])

    return (
        <NoteProvider value={{notes, addNote, updateNote, removeNote, completeNote}}>
            <div className='flex flex-col w-full h-screen bg-amber-200'>
                <div>
                    <NoteInput />
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-3 grid-rows-3 gap-5 justify-center'>
                    {notes.map((note) => (
                    <div key={note.id} className="w-full">
                        <Notes note={note}/>
                    </div>
                    )) }
                    </div>
                </div>
            </div>

        </NoteProvider>
    )
}

export default NoteApp