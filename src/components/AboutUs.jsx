import React from 'react'
import {useState, useEffect } from 'react'
import "./About.css"

function AboutUs() {
    // const [data,setData]=useState(null);
    const[userData,setUserData]=useState();
    useEffect(()=>{
      const fetchUserData= async ()=>{
        try{
        const response = await fetch('https://api.github.com/users/aneesRiazChaudhary')
        const data = await response .json();
        setUserData (data);

      } catch (error){
        console.error(error);}
    }
    // const githubApi=async()=>{ 
      //  await  fetch('https://api.github.com/users/aneesRiazChaudhary')
    // .then(res=>res.json())
    // .then(json=>console.log(json))}

// useEffect(()=>{
    // fetch('https://fakestoreapi.com/products')
    // fetch('https://api.github.com/users/AneesRiaz')
            // .then(res=>res.json())
            // .then(json=>console.log(json))
            // setData(githubApi())
            fetchUserData();
}, [])
// console.log(data)

  return (
    <div className ='d-flex justify-content-between'>
    <h1>
      {userData?.login}</h1>
      <img src={userData?.avatar_url} className='img' />
    
    </div>
  )
}

export default AboutUs
