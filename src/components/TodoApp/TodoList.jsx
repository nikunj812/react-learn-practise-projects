import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setEdit } from '../../features/todo/todoSlice'

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col w-full justify-center items-center'>
            {todos.map((todo, index) => (
                <div className="border rounded bg-white flex justify-between pl-3 w-[50%] py-4" key={index}>
                    <p className='w-[80%]'>{todo.text}</p>
                    <div className=''>
                        <button className='text-3xl px-2 py-2' onClick={() => dispatch(setEdit(todo))}>
                            <CiEdit />
                        </button>
                        <button className='text-3xl  px-2 py-2' onClick={() => dispatch(removeTodo(todo.id))}>
                            <MdDelete />
                        </button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default TodoList