import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Authentication/Login'

export const MyContext=createContext()
const App = () => {
  return (
<>
<BrowserRouter>
<MyContext.Provider>
  <Routes>
    <Route path='/' element={<Login/>}/>
  </Routes>
</MyContext.Provider>
</BrowserRouter>
</>
  )
}

export default App