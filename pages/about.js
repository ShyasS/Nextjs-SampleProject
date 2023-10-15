import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import List from '@mui/material/List';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/about.module.css';


export const getStaticProps = async () =>{
  const response = await fetch('https://fakestoreapi.com/products')
  const json = await response.json()
  
  return{
    props: {user:json}
  }

}

const About = ({user}) => {
 return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keyword" content = "About"/>
      </Head>
 {user && user.map((data)=>
   <Link style = {{textDecoration:'none',color:'black'}} href = {`nested/${data.id}`}  key={data.id}>
          <List>
             <ListItem disablePadding>
            <ListItemButton>
              <ListItemText className = {styles.List} primary={data.title} />
            </ListItemButton>
          </ListItem>
      </List>
      </Link>
      )}
    </>
  );
}

export default About;
