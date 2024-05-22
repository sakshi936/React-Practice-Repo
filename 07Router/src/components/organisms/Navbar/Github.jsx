import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData();

    // const [data,setData] = useState([])
    // useEffect(
    //     ()=>{
    //        fetch('https://api.github.com/users/sakshi936')
    //        .then(response=> response.json())
    //        .then(data=> {
    //         setData(data)
    //        })

    //     },
    //     []
    // )
  return (
    <div className=' bg-gray-700 text-white text-center py-4'>
       <p>Name: {data.name} </p> 
       <p> Followers: {data.followers}</p> 
      
    
    </div>
  )
}

export default Github


export const GithubInfoLoader = async ()=>{
    const response = await  fetch('https://api.github.com/users/sakshi936');
    return response.json();
}