import { createContext } from "react";


export const apiContext = createContext()

export function ContextProvider({children}){

    async function getData(){

    }

    async function addData(data){

    }

    async function updateData(data,id){

    }

    return (<apiContext.Provider value={{name:"EU"}} >
        {children}
    </apiContext.Provider>)
}