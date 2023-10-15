import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const PageNotFound = () => {
   const router = useRouter()
useEffect(()=>{
   const id = setTimeout(()=>{
    router.push('/')
},3000)
   return() =>clearTimeout(id) 
},[])
  return (
    <div>
        <Head>
            <title>404 Error-Found</title>
        </Head>
      <Box sx ={{margin:20}}>
        <Typography variant='h3'>Whoops! Page Not Found!!</Typography>
        <Link sx = {{margin:10}} href="/"><Button variant="contained">Go to Home</Button></Link>
      </Box>
    </div>
  );
}

export default PageNotFound;
