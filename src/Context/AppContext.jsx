import React, { createContext } from 'react'   
import { MyContext } from '../App'

export const AppContext=createContext()
export default function AppProivder({children}) {
    const [Header,setHeader]=usestate(false)


        return (
<AppContext.Provider value={{Header,setHeader}}>
{children}
</AppContext.Provider>
        )
    }
    

