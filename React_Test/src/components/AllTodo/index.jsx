import {  Button, TextField } from "@mui/material";
import TodoCard from "../TodoCard";
import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../../context/apiContext";

export default function AllTodo({TodoCardComponent = TodoCard}){
    // di(TodoCard)

    const {getData,todoList}= useContext(apiContext)
    
    async function getTodo(){
        await getData()        
    }

    useEffect(() => {
        getTodo()
    },[])

    return(<div className="w-full mt-3">
        <div className="w-full flex items-center">
            <TextField  placeholder="Search" className="w-full " />
        </div>
        <div className="flex flex-col items-center mt-3 ">
            <p>asd</p>
            {
                todoList.length > 0 && todoList?.map((item) => <TodoCardComponent key={item._id} {...item}  />)
            }
        </div>
    </div>)
}