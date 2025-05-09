import { Provider } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { store } from './../../app/store'

const TodoApp = () => {
    return (
        <Provider store={store}>
        <div className="flex flex-col w-full h-screen bg-blue-100">
            <div>
                <TodoInput />
            </div>
            <div>
                <TodoList />
            </div>
        </div>
        </Provider>
    );
}


export default TodoApp