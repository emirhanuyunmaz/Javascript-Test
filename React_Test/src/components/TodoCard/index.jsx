import { Button, Checkbox } from "@mui/material";
import { Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import { apiContext } from "../../../context/apiContext";


export default function TodoCard({done,text,_id}){
    // console.log(done);
    const {deleteData,updateData} = useContext(apiContext)

    return(<div className="flex items-center justify-between gap-3 border-b-2 border-gray-500 py-2 px-2 w-full">
        {/* <input type="checkbox" /> */}
        <div className="flex items-center">
            <Checkbox checked={done} onChange={(e) => updateData(_id,{done:e.target.checked})} />
            <p className={`${done && 'line-through'}`} >{text}</p>
        </div>
        <Button onClick={() => deleteData(_id)} variant="outlined" color="error"><Trash2 /></Button>
    </div>)
}