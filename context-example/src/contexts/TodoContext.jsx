import { useEffect } from "react";
import { createContext, useState } from "react";
import { getAll } from './../services/crudService';

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        (async ()=>{
            const data = await getAll("todos")
            setTodos(data)
        })()
    },[])


    return <TodoContext.Provider value={{todos, setTodos}}>{children}</TodoContext.Provider>
}

export default TodoProvider