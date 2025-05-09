import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = ({
    todos: [{'id' : 1, 'text' : "First Todo"}],
    edit: {
        id: '',
        text: ''
    }
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {id: nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? action.payload : todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        setEdit: (state, action) => {
            state.edit = action.payload;
        },
        clearEdit: (state) => {
            state.edit = { id: '', text: '' };
        }
    }
})

export const {addTodo, updateTodo, removeTodo, setEdit, clearEdit} = todoSlice.actions

export default todoSlice.reducer