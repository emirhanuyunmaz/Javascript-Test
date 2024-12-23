import {  TextField } from "@mui/material";
import TodoCard from "../TodoCard";
// import SelectButton from "../SelectButton";
import SplitButton from "../SelectButton";


export default function AllTodo(){
    return(<div className="w-full mt-3">
        <div className="w-full flex items-center">
            <TextField  placeholder="Search" className="w-full " />
            <SplitButton/>
        </div>
        <div className="flex flex-col items-center mt-3 ">
            <TodoCard/>
            
        </div>
    </div>)
}