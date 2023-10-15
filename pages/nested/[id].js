import { Box } from '@mui/material';
import React, {useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/id.module.css'

const Detail = ({params}) => {
const router = useRouter()
const {id} = router.query
const [productDetail,setProdDetail]=useState({})

const getProduct= async (id)=>{
try{ 
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const json = await response.json()
    console.log('Output-->',json)
    setProdDetail(json)
    return{
    json
    }
  }
catch(e){
    console.log('Error--->',e)
  }
}
useEffect(()=>{
 getProduct(id)
  },[])

 return (
  <>
 <h1 className = {styles.List}> User:{id} {productDetail.title}</h1>
 <h1>{productDetail.description}</h1>
</>
  );
}
export default Detail;
