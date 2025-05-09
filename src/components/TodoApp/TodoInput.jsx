import React, { useEffect, useState } from 'react'
import { addTodo, updateTodo } from '../../features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoInput = () => {
    const [updateId, setUpdateId] = useState("")
    const [todo, setTodo] = useState("")
    const edit = useSelector((state) => state.edit);
    const dispatch = useDispatch();

    useEffect(() => {
        setTodo(edit.text);      
        setUpdateId(edit.id);
    }, [edit]);

    const addUpdate = (e) => {
        e.preventDefault();
        if(!todo) return;
    
        if(updateId){
            dispatch(updateTodo({id: updateId, text: todo}));
        }else{
            dispatch(addTodo(todo));
        }
        setUpdateId("")
        setTodo(""); 
    }

  return (
    <form onSubmit={addUpdate} className='flex w-full justify-center items-center h-[300px] gap-2'>
        <input type="text" name="todo" id="todo" className='border px-2 py-3 rounded-2xl w-[30%]' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button
            type='submit'
            className='rounded-2xl bg-amber-100 text-gray px-2 py-3'
        >{updateId ? 'Update' : 'Add'} Todo</button>
    </form>
  )
}

export default TodoInput