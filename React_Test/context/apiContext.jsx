import { createContext, useState } from "react";


export const apiContext = createContext()

export function ContextProvider({children}){
    const [todoList,setTodoList] = useState([])

    async function getData(){
        const responseData = await fetch(import.meta.env.VITE_APP_BASE_URL+"todo/getTodo/",{
            method:"GET",
        }).then((res) => res.json())
        setTodoList(responseData.data)
    }

    async function addData(data){
        const res = await fetch(import.meta.env.VITE_APP_BASE_URL+"todo/addTodo/",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(data),
        })
        await getData()
    }

    async function updateData(_id,data){
        console.log(data);
        
        const res = await fetch(import.meta.env.VITE_APP_BASE_URL+"todo/updateTodo/"+_id,{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(data),
        })
        await getData()
    }

    async function deleteData(_id){
        const res = await fetch(import.meta.env.VITE_APP_BASE_URL+"todo/deleteTodo/"+_id,{
            method:"DELETE",
            headers: {'Content-Type':'application/json'},
        })
        await getData()
    }

    return (<apiContext.Provider value={{name:"EU",addData,getData,deleteData,updateData,todoList}} >
        {children}
    </apiContext.Provider>)
}