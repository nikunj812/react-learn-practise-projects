import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { GrStatusDisabled } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import { useNote } from '../../contexts/NoteApp'
import { FcTodoList } from 'react-icons/fc'
import { IoIosSave } from 'react-icons/io'

const Notes = ({note}) => {
    const [editText, setEditText] = useState(note.note)
    const [isEditable, setIsEditable] = useState(false)
    const {updateNote, removeNote, completeNote} = useNote();

    const editTodo = () => {
        updateNote(note.id, {...note, note : editText})
        setIsEditable(false)
    }

    const toggleCompleted = () => {
        completeNote(note.id)
    }

    const deleteNote = (id) => {
        removeNote(id)
    }

    return (
        <>
            <div className={`rounded-2xl  h-[100px] w-[150px] ${note.completed ? 'bg-red text-white' : 'text-[#4a1a00]'} border-2`}>
                <div className="flex justify-center gap-2">
                    <button className='text-xl border rounded bg-amber-300 cursor-pointer'
                    onClick={() => {
                        if (note.completed) return;
    
                        if (isEditable) {
                            editTodo();
                        } else setIsEditable((prev) => !prev);
                    }}
                    >{isEditable ? <IoIosSave /> : <CiEdit />}  </button>
                    <button className='text-xl border rounded bg-amber-300 cursor-pointer' onClick={() => deleteNote(note.id)}><MdDelete /></button>
                    <button className='text-xl border rounded bg-amber-300 cursor-pointer' onClick={toggleCompleted}><GrStatusDisabled /></button>
                </div>
                
                <div className="flex h-full text-center justify-center items-center">

                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                        isEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${note.completed ? "line-through" : ""}`}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    readOnly={!isEditable}
                />
                
                </div>
            </div>
        </>
        
    )
}

export default Notes