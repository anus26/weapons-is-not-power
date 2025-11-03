import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Authentication/Login'
import Layouts from './Compnents/Layouts'
import Home from './Pages/Home'




const App = () => {
  return (

<BrowserRouter>

  <Routes>
    <Route path='/' element={<Layouts/>}>
    <Route index element={<Home />} /> 
    </Route>
    <Route path ='login' element={<Login/>}/>
  </Routes>

</BrowserRouter>


  )
}

export default App