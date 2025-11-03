import React, { createContext, useState } from 'react'   

export const AppContext=createContext()
export default function AppProvider({children}) {
    const [header,setHeader]=useState(true)
    const [open , setOpen]=useState(true)


        return (
<AppContext.Provider value={{header,setHeader,open,setOpen}}>
{children}
</AppContext.Provider>
        )
    }
    

