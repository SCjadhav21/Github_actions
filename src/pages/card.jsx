import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
const CardRepo = () => {
    const [newData,setNewData] = useState([])
    const [loading, setLoading]=useState(false)
    let param=useParams();
    const {type,id}=param;
    let getData=()=>{
        
        axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${type}`)
       
        .then(res=>{
            setNewData(res.data.items.filter((item)=>item.id==id));
            setLoading(false);
        })
        .catch(err=>{console.log(err);
            setLoading(false);})
       
    }
     
    useEffect(()=>{
        setLoading(true)
        getData()

    },[param]);
   



   if(loading){
    return <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
   }
  

   
  return (
    <>
    {
      newData.map((newData,index)=>{
        return<Box p="20px" color="#fff" bgColor="red" border="2px solid black" key={index}>
        <Box>Repository name: {newData.full_name}</Box>
        <Box>Language : {type.toUpperCase()}</Box>
         <Box>Forks count: {newData.forks_count}</Box>
         <Box>Stars count: {newData.stargazers_count}</Box>
         <Box>description : {newData.description}</Box>
        
     </Box> 
      })
    }</>
  )
}

export default CardRepo