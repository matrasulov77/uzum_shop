import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Layout from '../Layout/Layout'

const Routers = () => {
  return (
   <Routes>
    <Route element={<Layout/>}>
        <Route path='/' element={<App/>}/>
    </Route>
   </Routes>
  )
}

export default Routers