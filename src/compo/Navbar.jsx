import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes,NavLink } from 'react-router-dom'
import AllRepos from '../pages/allrepo'
import Cssrepo from '../pages/Css'
import Htmlrepo from '../pages/html'
import JavaScriptrepo from '../pages/javaScript'
import CardRepo from '../pages/card'
import { useState } from 'react'

const Navbar = () => {
    let [count,setCount]=useState(1)

   const handleChange=(c)=>{
        setCount(c)
    }
  return (
    <>
    <Box display="flex" justifyContent="space-between" p="0px 40px" h="70px" justifyItems="center" alignItems="center">
        <NavLink style={{color:count===1?"red":"black",borderBottom:count===1?"2px solid red":"none"}} onClick={()=>handleChange(1)} to="/">All</NavLink>
        <NavLink style={{color:count===2?"red":"black",borderBottom:count===2?"2px solid red":"none"}} onClick={()=>handleChange(2)} to="/html">Html</NavLink>
        <NavLink style={{color:count===3?"red":"black",borderBottom:count===3?"2px solid red":"none"}} onClick={()=>handleChange(3)} to="/css">Css</NavLink>
        <NavLink style={{color:count===4?"red":"black",borderBottom:count===4?"2px solid red":"none"}} onClick={()=>handleChange(4)} to="/javascript">Javascript</NavLink>
        </Box>
    <Routes>
        <Route path="/" element={<AllRepos/>} />
        <Route path="/html" element={<Htmlrepo/>} />
        <Route path="/css" element={<Cssrepo/>} />
        <Route path="/javascript" element={<JavaScriptrepo/>} />
        <Route path="/card/:type/:id" element={<CardRepo/>} />
    </Routes>

    </>
  )
}

export default Navbar