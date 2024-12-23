import { Button, Checkbox } from "@mui/material";
import { useState } from "react";


export default function TodoCard(){
    const [checked,setChecked] = useState(false)

    return(<div className="flex items-center gap-3 border-b-2 border-gray-500 py-2 px-2 ">
        {/* <input type="checkbox" /> */}
        <Checkbox value={checked} onChange={(e) => setChecked(e.target.checked)} />
        <p className={`${checked && 'line-through'}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eum?</p>
        <Button  variant="outlined" color="error">Delete</Button>
    </div>)
}