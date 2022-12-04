


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Button, SimpleGrid, Spinner } from '@chakra-ui/react';
// import { json } from 'react-router-dom';
const JavaScriptrepo = () => {
    let [data,setData]=React.useState([]);
    let [page,setPage] = useState(1);
    const [loading, setLoading]=useState(false);
    function getData(){

        axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&per_page=10&page=${page}`)
       
        .then(res=>{setData(res.data.items);
            setLoading(false);
        })
        .catch(err=>{console.log(err)
            setLoading(false);
        })
       
    }
      const handelChange=(value)=>{
       
         setPage(page+value);
      }
      useEffect(()=>{
        setLoading(true)
        getData()
    },[page]);

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
  <>  <SimpleGrid columns={[1,2,4]} spacing={10}>
 { data.map((res,index)=>{
    return <Box p="20px" color="#fff" bgColor="red" border="2px solid black" key={index}>
       <Box>Repository name: {res.full_name}</Box>
       <Box>Language : JavaScript</Box>
        <Box>Forks count: {res.forks_count}</Box>
        <Box>Stars count: {res.stargazers_count}</Box>
        <Link to={`/card/${"javascript"}/${res.id}`}><Button color="red" bgColor="yellow" m="10px">View Details</Button></Link>
    </Box>
  })}
  
</SimpleGrid>
<Button disabled={page<=1} onClick={()=>handelChange(-1)}>Prev</Button>
<Button>{page}</Button>
<Button onClick={()=>handelChange(1)}>Next</Button>
</>

  )
}

export default JavaScriptrepo;