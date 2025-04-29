import React, { useState } from 'react'
import { useNote } from '../../contexts/NoteApp';

const NoteInput = () => {
    const [note, setNote] = useState("");
    const {addNote} = useNote()

    const handleFormSubmit = () => {
        if(!note) return
        addNote({note, competed : false})
        setNote("");
    }
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit()
            }}
            className='w-full'>
                <div className='flex w-full justify-center items-center h-[300px] gap-2'>
                    <input 
                        type="text" name="note" id="note"
                        className='border px-2 py-3 rounded-2xl w-[30%]'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button 
                    className="rounded-2xl bg-amber-950 text-white px-5 py-3" type="submit">Add</button>
                </div>
        </form>
    )
}

export default NoteInput